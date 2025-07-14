---
title: "Alojar aplicación PHP en servidor IIS"
description: "Un breve tutorial de cómo alojar una aplicación PHP en un servidor IIS para desarrollo"
publishedAt: 2024-08-21
tags: ["desarrollo web", "php"]
---

En este tutorial, aprenderás a alojar una aplicación PHP en un servidor IIS. IIS es un servidor web desarrollado por Microsoft que viene instalado con Windows y es usable tanto en Windows Server como en escritorios Windows 10/11 Pro y Enterprise.

Si no tienes PHP instalado, puedes descargarlo desde [php.net](https://www.php.net/downloads) y seguir las instrucciones de instalación. También debes tener IIS activado como característica de Windows (en escritorio) o como rol de servidor (en Windows Server).

Para este tutorial, suponemos que estamos usando lo siguiente:

- Ruta de la aplicación: `C:\users\user\app\public` (usamos `public` al alojar una aplicación Symfony, pero debe ser donde estén los archivos PHP públicos)
- Dominio de la aplicación: `app.internal` (`.internal` está reservado para uso interno)
- PHP instalado en `C:\php`
- IIS habilitado y funcionando (en `localhost:80` deberías ver la página de inicio de IIS)
- [MKCert](https://github.com/FiloSottile/mkcert) instalado para generar certificados TLS autofirmados

## Crear un certificado TLS autofirmado

Para poder acceder a tu servidor de forma segura, necesitas un certificado TLS. Puedes usar un certificado autofirmado para propósitos de desarrollo. Para crear un certificado autofirmado, ejecuta los siguientes comandos en PowerShell:

```powershell
mkcert -install
mkcert -p12 app.internal
```

Esto generará un certificado `app.internal.p12` en el directorio actual. Posteriormente, hay que ir a IIS e importar el certificado a nivel servidor (en Seguridad -> Certificados de servidor -> Importar y seleccionando "todos los archivos" para encontrar el archivo `.p12`).

## Creación del site

En la barra izquierda, en Sitios hacemos clic derecho y seleccionamos Agregar sitio. En el cuadro de diálogo, rellenamos los campos de la siguiente manera:

- Nombre del sitio: `app` (o el nombre que prefieras)
- Ruta de acceso física: `C:\users\user\app\public`
- Enlace:
    - Tipo: `https`
    - Dirección IP: `Todas las direcciones no asignadas`
    - Puerto: `443`
    - Nombre del host: `app.internal`
    - Requerir indicación del nombre del servidor: `Sí`
    - Deshabilitar [...] `No`
    - Certificado: `app.internal`
- Iniciar sitio web inmediatamente: `Sí`

Hacemos clic en Aceptar y el sitio se creará. Pero aún hay que configurar PHP y la reescritura de URL (si el enrutamiento se hace por el propio framework, como en Symfony).

Antes de eso, hay que pulsar en la parte derecha en "Configuración básica" y cerciorarse de que el grupo de aplicaciones es `DefaultAppPool`. Si no lo es, hay que cambiarlo para que el sitio funcione correctamente.

## Configuración de PHP

Dentro del Sitio, ir a "Componentes del servidor -> Asignaciones de controlador -> Agregar asignación de módulo" y rellenar los campos de la siguiente manera:
- Ruta de acceso de solicitudes: `*.php`
- Módulo: `FastCgiModule`
- Ejecutable: `C:\php\php-cgi.exe`
- Nombre: `PHP` (o el nombre que prefieras)

Hacemos clic en Aceptar y el módulo se añadirá. Ahora, hay que configurar la reescritura de URL.

## Configuración de la reescritura de URL

Primero, hay que autorizar variables de servidor. Dentro del Sitio, ir a "Caracterísitcas de HTTP -> Reglas de reescritura" y hacer clic en la barra derecha en "Ver variables de servidor". Añadir las siguientes variables:

- `HTTP_X_FORWARDED_SCHEMA`
- `HTTP_X_FORWARDED_PROTO`
- `HTTP_X_FORWARDED_HOST`
- `HTTP_X_FORWARDED_FOR`

Hacer clic en Aceptar y volver a la pantalla de reglas de reescritura. Hacer clic en "Agregar reglas" y seleccionar "Regla de blanco" dentro de "Reglas de entrada". Rellenar los campos de la siguiente manera:

- Nombre: `Symfony`
- Coincidir dirección URL:
    - Dirección URL solicitada: `Coincide con el patrón`
    - Usando: `Expresiones regulares`
    - Patrón: `^(.*)$`
    - Omitir mayúsculas y minúsculas: `Desmarcado`
- Condiciones:
    - Agrupación lógica: `Coincide con todas`
    - Añadir condición:
        - Entrada: `{REQUEST_FILENAME}`
        - Comprobar si la cadena de entrada: `No es un archivo`
    - Seguir los grupos de captura a través de condiciones: `Desmarcado`
- Variables de servidor:
    - Agregar...:
        - Nombre: `HTTP_X_FORWARDED_PROTO`
        - Valor: `https`
        - Remplazar el valor existente: `Marcado`
    - Agregar...:
        - Nombre: `HTTP_X_FORWARDED_SCHEMA`
        - Valor: `https`
        - Remplazar el valor existente: `Marcado`
    - Agregar...:
        - Nombre: `HTTP_X_FORWARDED_HOST`
        - Valor: `{HTTP_HOST}`
        - Remplazar el valor existente: `Marcado`
    - Agregar...:
        - Nombre: `HTTP_X_FORWARDED_FOR`
        - Valor: `{REMOTE_ADDR}`
        - Remplazar el valor existente: `Marcado`
- Acción:
    - Tipo de acción: `Reescribir`
    - Reescribir dirección URL: `/index.php`
    - Anexar cadena de consulta: `Marcado`
    - Dirección URL reescrita de registro: `Desmarcado`
- Detener procesamiento de reglas: `Desmarcado`

Hacer clic en Aceptar y la regla se añadirá. Ahora, la aplicación PHP debería estar alojada en el servidor IIS y accesible en `https://app.internal`.

## Conclusión

En este tutorial, aprendiste a alojar una aplicación PHP en un servidor IIS. Aprendiste a crear un certificado TLS autofirmado, a configurar PHP y a configurar la reescritura de URL para que la aplicación funcione correctamente. Ahora puedes alojar aplicaciones PHP en un servidor IIS y acceder a ellas de forma segura.
