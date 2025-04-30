---
title: "Crear un mapa de manera fácil con Protomaps"
description: "Una guía rápida para crear un mapa de manera fácil con Protomaps, sin servidor ni historias complicadas"
publishedAt: 2025-01-03
tags: ["desarrollo web", "GIS"]
---

Durante las últimas semanas, he estado explorando tecnologías de mapas para integrar en proyectos que voy a llevar a cabo en el futuro.

Inicialmente, pensé usar la CDN de OpenStreetMap con Leaflet, una opción sencilla que ya conocía. Sin embargo, al estar recomendada solo para cargas ligeras y con pocas opciones de personalización, decidí buscar alternativas. Consideré Google Maps, Mapbox y Maptiler, pero sus modelos de negocio requieren servidores y tarjetas bancarias, lo que implica un riesgo de costes inesperados.

Exploré [OpenMapTiles](https://openmaptiles.org/), una solución de código abierto para mapas vectoriales basada en OpenStreetMap. Sin embargo, su documentación limitada y la necesidad de un servidor adicional complicaron el proceso, haciéndolo poco práctico.

Hasta que descubrí [Protomaps](https://protomaps.com/), una solución que me ha sorprendido por su sencillez y facilidad de uso. Protomaps ofrece mapas vectoriales personalizables como OpenMapTiles, pero con una ventaja clave: en lugar de depender de un archivo `mbtiles` y un servidor específico, utiliza un archivo `pmtiles` binario que puedes alojar en cualquier servidor web estático.

Es decir, con Protomaps tienes un binario de unos cuantos megabytes que sirves como un archivo estático desde tu NGINX, o desde cualquier servicio, como Azure Static Web Apps, Vercel, AWS Amplify, o mismo un bucket de S3. Con tal de que el servidor soporte servir rangos de bytes del archivo, puedes servir un mapa vectorial personalizado sin tener que preocuparte de configurar un servidor de mapas ni costes adicionales, ni los dolores de cabeza que conlleva.

## Crear un mapa con Protomaps

Para empezar, hay que instalar la CLI de Protomaps, descargable desde [sus releases de GitHub](https://github.com/protomaps/go-pmtiles/releases/latest). A diferencia de OMT, que había que clonar con Docker y generaba un montón de porquería, esto es solo un binario que puedes poner en tu PATH y usar desde cualquier terminal.

En Windows, descargué la versión `Windows_x86_64.zip`, descomprimí el archivo y coloqué el binario `protomaps.exe` en una carpeta de mi PATH (`C:\Users\<miusuario>\bin`). Luego, verifiqué su funcionamiento desde PowerShell.

```powershell
PS> pmtiles version
pmtiles 1.22.3, commit 6383732020c2cd938181acff24febc003b15639c, built at 2024-12-09T02:16:01Z
```

Con esto, ya tenemos la CLI de Protomaps instalada y lista para usar. Ahora, vamos a crear un mapa vectorial personalizado. Para ello, haremos un "extract" de su mapa base, que está generado desde OpenStreetMap y se actualiza a diario. No va a hacer falta que descarguemos un extracto de OSM por nuestra cuenta (por ejemplo de Geofabrik o BBBike), ya que nos basaremos directamente en el mapa base de Protomaps.

En este caso, generaremos un mapa de Barcelona a partir de su bounding box, con la coordenada suroeste en `41.263970142291704, 2.0428702462744956` y la noreste en `41.48757944350839, 2.243836537167097`. Puedes sacar la bounding box con cualquier herramienta como [bboxfinder](https://bboxfinder.com/) o el mismo Google Maps sacando las coordenadas de las esquinas.

Obtén la URL de la build correspondiente a la fecha actual (reemplaza 20250102 por YYYYMMDD) y usa el siguiente comando, recordando que las coordenadas deben ingresarse en formato longitud-latitud:

```powershell
PS> pmtiles extract "https://build.protomaps.com/20250102.pmtiles" barcelona.pmtiles --bbox="2.0428702462744956,41.263970142291704,2.243836537167097,41.48757944350839"
```

Hecho esto, tendremos un archivo `barcelona.pmtiles` que podemos servir desde cualquier servidor web estático.

## Servir el mapa con MapLibre GL JS

Mi biblioteca de mapas preferida es [MapLibre GL JS](https://docs.mapbox.com/mapbox-gl-js/api/), que es un fork de Mapbox GL JS cuando todavía era de código abierto. Para servir el mapa, solo necesitamos un archivo HTML con un contenedor, y un script que inicialice MapLibre y la compatibilidad con Protomaps.

Si estás usando tecnologías JavaScript (ya sea Vite con algún framework, o Astro, o similares) puedes instalar los paquetes `pmtiles-protocol` y `maplibre-gl` desde npm. Si no, puedes descargarlos mismamente desde jsDelivr en ZIP ([`pmtiles-protocol`](https://www.jsdelivr.com/package/npm/pmtiles-protocol) y [`maplibre-gl`](https://www.jsdelivr.com/package/npm/maplibre-gl)) y poner los archivos en tu servidor.

```html
<!DOCTYPE html>
<html lang="es">
 <head>
  <!-- ... -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/maplibre-gl@5.0.0/dist/maplibre-gl.min.css" />
  <style>
   #map {
    height: 100vh;
    width: 100vw;
   }
  </style>
 </head>

 <body>
  <div id="map"></div>

  <script src="https://cdn.jsdelivr.net/npm/maplibre-gl@5.0.0/dist/maplibre-gl.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/pmtiles-protocol@1.0.4/index.min.js"></script>
  <script>
   /*
   * Si estás usando paquetes de npm o un importmap o similar, puedes importar los módulos así:
   * import maplibregl from "maplibre-gl";
   * import * as pmtiles from "pmtiles";
   */

   // Añadir el protocolo de pmtiles a MapLibre
   let protocol = new pmtiles.Protocol();
   maplibregl.addProtocol('pmtiles', protocol.tile);

   // Crear el mapa
   const map = new maplibregl.Map({
    container: 'map',
    style: '/miestilo.json',
    bounds: [
     [2.0428702462744956, 41.263970142291704],
     [2.243836537167097, 41.48757944350839]
    ]
   });
  </script>
 </body>
</html>

Y luego el archivo `miestilo.json` puedes descargarlo de [maps.protomaps.com](https://maps.protomaps.com/#map=0.89/0/0&theme=light&lang=en&tiles=https://demo-bucket.protomaps.com/v4.pmtiles&local_sprites=true) clicando en "Get style JSON" y guardándolo en tu servidor. Cambias la ruta a tu pmtiles y ya. Y puedes usar cualquier otro estilo para MapLibre, como los de [OpenMapTiles](https://openmaptiles.org/styles/) mismamente, o hacer uno propio con algo como [Maputnik](https://maputnik.github.io/editor/).

Y con esto, ya tienes un mapa vectorial personalizado de Barcelona, servido desde tu servidor estático, sin tener que preocuparte de configurar un servidor de mapas ni costes adicionales. Y puedes personalizarlo todo lo que quieras, desde los colores hasta los datos que se muestran. Sin cargar pesados SDKs desde CDNs, sin depender de terceros, y sin el riesgo de una factura deorbitada porque te pasaste de peticiones.
