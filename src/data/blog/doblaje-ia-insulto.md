---
title: "El doblaje forzoso con IA de YouTube me parece un insulto"
description: "Reflexiones sobre el doblaje automático con inteligencia artificial que YouTube ha implementado recientemente, y por qué me parece una mala idea."
publishedAt: 2025-12-13
tags: ["opinión", "ia", "youtube", "doblaje"]
---

Desde hace unos meses, YouTube (el servicio de vídeo y música que uso y pago) ha empezado a implementar el doblaje automático con inteligencia artificial en vídeos, podcasts (contenido que no suelo escuchar, todo sea dicho) y _shorts_ (vídeos cortos estilo TikTok, más sobre esto luego).

El doblaje automático consiste en que, al reproducir un vídeo producido en otro idioma, YouTube genera con inteligencia artificial un doblaje en el idioma del usuario (o una versión parecida), de forma que el usuario pueda entender el contenido sin necesidad de leer subtítulos o conocer el idioma original.

El primero es que en castellano **fuerza el doblaje _Español - Estados Unidos_**, un doblaje que suena muy raro, con voces robóticas y sin emoción. No es ni mucho menos el español de España o el que uno puede estar acostumbrado a escuchar como "latino" (que también es relativamente neutro, pero al menos suena natural y humano). ¿Por qué no ofrecer la opción de doblaje en español de España o español latino o al menos uno de esos dos?

Por otra parte, yo me pregunto ¿por qué no se puede desactivar o indicar "no me interesa el doblaje de vídeos en inglés"? ¿De veras una empresa valorada en 3,74 billones de dólares (en inglés "trillion") no es capaz de implementar una opción tan sencilla como "no me interesa el doblaje automático nunca"?

¿De veras el equipo (probablemente estadounidense) que ha implementado esta funcionalidad es tan obtuso que no concibe que una persona pueda hablar varios idiomas con fluidez, o mismo que quiera escuchar el contenido en su idioma original para aprenderlo? En ese sentido, me parece un insulto a la inteligencia. "Como en nuestro país no es habitual que alguien hable dos, tres o incluso más idiomas, pues vamos a imponer el doblaje automático sin opción a desactivarlo".

Aún encima, es que este doblaje **es MALO**, pero malo con ganas. Hay formas de hacer doblajes relativamente buenos con inteligencia artificial, probablemente con un coste un poco más alto (aunque si se hace, será porque genera ingresos, se supone): puedes extraer el audio con `whisper-large` (un modelo de audio a texto realmente bueno y libre) sumado a un sistema _diarize_ que detecta los distintos interlocutores de un vídeo, traducir con un modelo de traducción basado en LLM, que suelen entender mejor las sutilezas del lenguaje, expresiones coloquiales, etc., y luego usar el sintetizador de voz para generar doblajes con voces más naturales; como por cierto ofrece Google con Gemini.

No obstante, YouTube ha optado por la solución más cutre, probablemente usando su sistema de transcripción existente (que no es malo, pero tiene sus limitaciones), un sistema de traducción automática básico (peor que el de Google Translate hace años) y un sintetizador robótico que se queda muy atrás incluso del ya difunto asistente de Google.

Por último, sobre los _shorts_, que son vídeos estilo TikTok, pero en YouTube. No solo son generalmente resubidos, es que tampoco hay un sistema de recomendaciones que funcione bien, y eso que YouTube hace unos años tenía un sistema de recomendaciones realmente bueno, que te mostraba contenido nuevo relacionado con tus intereses, incluyendo vídeos que igual no sabías que podían interesarte y te abrían la mente a nuevos temas. Pero ya no es solo que sea malo, es que encima está forzando el doblaje, y ahí ni siquiera se guarda durante la sesión la preferncia de "escuchar en idioma original", a veces ni siquiera funciona el cambio manual de idioma en la propia interfaz.

Para más inri, los _shorts_ se abren automáticamente al abrir la aplicación de YouTube en móvil. Durante una temporada me quedé loco cuando abría la app y me saltaba un short, pensando que le había dado sin querer a abrir ese apartado, o que lo había dejado así la última vez. Hasta que viendo los parches de ReVanced, vi uno que desactivaba los _shorts_ al abrir la app, y entonces entendí que YouTube te intenta forzar esa soberana basura en cuanto abres la aplicación.

Qué triste que el estado de YouTube, una empresa que fue pionera en el vídeo online, con un sistema de recomendaciones excelente, una app de música que ofrece la variedad más grande de canciones (sin depender de que el artista publique directamente o mediante una discográfica), se haya convertido en una plataforma mediocre que fuerza doblajes automáticos malos, tiene un sistema de recomendaciones del tres al cuarto, intenta colarte basura estilo TikTok (pero mal) y aún así no tiene funcionalidades como escuchar música en calidad lossless como sí tienen otros servicios de música en streaming.
