---
title: "Hola, Astro"
metaDescription: "De mi migración a Astro, y por qué me gusta tanto"
publishedAt: 2024-05-04
---

He estado probando [Astro](https://astro.build) durante las últimas semanas, y me ha gustado mucho, hasta el punto de que he decidido migrar este blog a Astro. 

## ¿Qué es Astro?

Astro es un generador de sitios web estáticos implementado en JavaScript. Es similar a [Next.js](https://nextjs.org) o [Gatsby](https://www.gatsbyjs.com), pero con la diferencia de que Astro genera sitios estáticos sin JavaScript en el cliente (por defecto). De forma similar a Hugo, Hexo, Jekyll y otros generadores, a través de un sistema de plantillas, Astro genera HTML estático que se sirve al cliente.

## ¿Por qué Astro?

Astro me ha gustado por varias razones:

1. **Sintaixs más cómoda**: Astro usa una sintaxis muy similar a HTML puro, pero con algunas mejoras. Por ejemplo, hay un "frontmatter" donde puedes definir JavaScript en tiempo de compilación, y tiene un sistema de componentes como el de React, Vue y otros frameworks modernos.

2. **Soporte en el editor**: Astro tiene una extensión para Visual Studio Code que añade soporte para la sintaxis de Astro, y para el "frontmatter". Esto hace que sea más fácil trabajar con Astro en Visual Studio Code. Hugo usa el sistema de plantillas de Go, y no tiene soporte en Visual Studio Code, lo que hace que trabajar con Hugo sea más incómodo.

3. **TypeScript**: Astro está escrito en TypeScript, y tiene soporte para TypeScript en los archivos de plantillas. Esto me gusta mucho, porque me permite usar TypeScript en los archivos de plantillas, y tener autocompletado y validación de tipos. En Hugo, por ejemplo, no puedo hacer esto, y dependo de compilar para enterarme de posibles errores.

4. **SASS y estilos 'scoped'**: Astro tiene soporte para SASS, y para estilos "scoped" (es decir, estilos que solo afectan al componente donde se definen). Esto me gusta mucho, porque me permite tener estilos más organizados y reutilizables, y no tener que dar nombres de clases y montones de selectores.

## ¿Qué he tenido que hacer para migrar?

La migración ha sido relativamente sencilla, al poder aprovechar buena parte de los estilos y componentes que ya tenía en Hugo. He reimplementado las vistas HTML, aprovechando para arreglar "chapuzas" del pasado, y he usado algunos componentes para separar, por ejemplo, la cabecera y el pie de página.

Además, he aprovechado para hacer otras mejoras, como añadir meta-descripciones a todas las páginas, y añadir un favicon. Añadí archivos al repositorio que me faltaban (como las licencias), y pulí un poco más los estilos.

## ¿Qué me queda por hacer?

Me queda por hacer algunas cosas, como añadir un sistema de comentarios (que crearé en Azure con Functions y CosmosDB), y potencialmente añadir un sistema de búsqueda (como Algolia). También me gustaría añadir un sistema de "dark mode" en algún momento, pero no es una prioridad.