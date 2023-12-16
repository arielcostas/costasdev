---
title: "Vuelvo a Hugo, adios WordPress"
date: 2023-12-17
---

Hace unas semanas, decidí migrar mi blog de WordPress a Hugo. La razón principal fue que quería hacer mi propio tema personalizado, y WordPress no me daba la facilidad que otros generadores me dan. Otra razón importante es que WordPress funcione de forma dinámica, ya que las páginas se generan de cada vez, y por tanto necesitan un servidor que ejecuta código.

De esta forma, en cambio, es código estático que se sirve desde Azure Static Web Apps a partir de lo que genera Hugo en GitHub Actions. No solo es la web más rápida de cargar y más ligera, sino que además es más segura, ya que no hay código que ejecutar en un servidor propio.

También el hecho de la base de datos, ya que WordPress necesita una base de datos MySQL para funcionar, y eso supone un coste adicional, no económico, sino de mantenimiento (si se quiere hacer bien). Hay que mantenerla actualizada, hacer copias de seguridad, etc. Con Hugo, no hay base de datos, y por tanto no hay que preocuparse de nada de eso.

## ¿Por qué Hugo?

Porque es el que más me gusta. Es rápido, relativamente sencillo y tiene una comunidad muy activa. Hay otros generadores como Jekyll (Ruby, no gracias), Gatsby (React, no gracias) o uno de los muchos que hay. En su día también probé sistemas como Ghost o Grav, pero no me convencieron.

Entonces, creé un sitio con Hugo, creé mi propio "tema", que realmente son plantillas y estilos totalmente ad-hoc para mi blog, y lo subí a un repositorio de GitHub. Configuré Azure Static Web Apps para que se actualizara automáticamente cuando se subiera algo a la rama `main`, y listo. Y le configuré mi subdominio personalizado www.costas.dev para que apuntara a la web.

No utilicé el dominio principal, para poder seguir teniendo ahí mi servidor, que utilizo para otras cosas. Aparte, no quería que el blog estuviera en la raíz del dominio, sino en un subdominio, para poder tener otras cosas en el dominio principal si algún día me apetece.
