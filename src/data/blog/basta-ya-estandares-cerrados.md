---
title: "Basta ya de estándares cerrados (que se hacen llamar «abiertos»)"
description: ""
publishedAt: 2025-12-21
tags: []
---

En el mundo del software y la tecnología, es especialmente necesario contar con estándares abiertos para garantizar la interoperabilidad, la innovación y la libertad de elección. Sin embargo, nos encontramos constantemente con estándares que se dicen "abiertos" pero que en la práctica tienen restricciones de acceso y difusión, así como una serie de empresas que son las que publican y "certifican" el cumplimiento de esos estándares mediantes caras auditorías.

Hablo concretamente de entidades como ISO (International Standards Organisation), IEC (International Electrotechnical Commission), UNE (Asociación Estándar de Normalización) y otras del estilo, que trabajan en conjunto.

Estas entidades no gubernamentales, muchas veces legalmente sin ánimo de lucro (aunque ¿cómo pueden llamarse "sin ánimo de lucro" cobrando cifras exageradas por documentos?) publican estándares "abiertos" (por una definición muy laxa, considerando "abierto" a cualquiera que no sea confidencial o interno a una empresa) pero que en la práctica tienen limitaciones:

- Son de pago, teniendo que pagar entre 150-250 francos suizos (160-270 euros al cambio actual) por cada documento. Sin contar que hay estándares que constan de varias "partes", cada una pagada por separado.
- Tienen restricciones de uso, como la prohibición de compartir el documento con terceros, lo que limita su difusión y acceso.
- Requieren certificaciones costosas para demostrar el cumplimiento del estándar, lo que puede ser una barrera para pequeñas empresas y desarrolladores independientes.
- Están controlados por comités dominados por grandes corporaciones, pactados en despachos a puerta cerrada, en lugar de ser desarrollados de manera colaborativa y transparente.

Por poner un ejemplo sencillo, que es el que me hizo investigar más sobre este tema, los estándares sobre datos de movilidad. Existe un estándar verdaderamente abierto para compartir datos de transporte público: GTFS (General Transit Feed Specification), creados en 2006 por Google y TriMet (transporte metropolitano de Portland, Oregón, Estados Unidos). En 2019 se constituyó una entidad sin ánimo de lucro llamada MobilityData, que mantiene la web [gtfs.org](https://gtfs.org) y herramientas adicionales.

Por otro lado, tenemos NeTEx (Network Timetable Exchange), un estándar desarrollado por la organización CEN (Comité Europeo de Normalización) y que es un estándar UNE-CEN (concretamente, `UNE-CEN/TS 16614`). Este estándar consiste en **seis** documentos PDF comercializados en España por AENOR Conocimiento SLU (¡anda, menos mal que son estándares abiertos y no vendidos con fines mercantiles!), con el tomo más barato (parte 4) a 183€ + IVA, y los tres más caros (partes 1, 5 y 6) a 387€ más IVA cada uno. En total, el precio por 6 PDFs (probablemente infumables, como tampoco lo he podido saber...) es de 1751€, más otros 367,71€ de IVA si no eres empresa o profesional autónomo.

Al otro lado tenemos GTFS, donde basta con entrar en [gtfs.org](https://gtfs.org) y visualizar el estándar técnico completo sin pagar ni un duro: te explican que es un conjunto de archivos CSV dentro de un ZIP, similar a una exportación de una base de datos relacional con tablas y relaciones. Te explican cada campo lo que es, y te enlazan a ejemplos y herramientas de validación gratuitas. Cualquiera que quiera puede implementarlo, usarlo y compartirlo libremente.

Por otra parte, GTFS no se estandariza a puerta cerrada, sino que puedes enviar propuestas de mejora en el repositorio de GitHub [google/transit](https://github.com/google/transit/issues) y se debaten públicamente, hasta que se aceptan o rechazan y se vuelven parte del estándar. Cualquiera puede proponer mejoras, o comentar propuestas de otros, y es público y transparente.

Sin embargo, las administraciones se empeñan en obligar a usar estos estándares de pago y cerrados, sin animar a que se hagan abiertos (aunque sea costeando su desarrollo mediante otros mecanismos de financiación). Esto limita la innovación, la competencia, la interoperabilidad, el acceso a la información y en general la libertad, al depender de entidades mercantiles privadas los estándares que rigen el funcionamiento de buena parte de la sociedad.

Además, es completamente anacrónico en la era digital, donde la difusión del conocimiento y la participación pública son más sencillas, rápidas y económicas que nunca. ¿Cómo se puede concebir pagar a 26€/MB un PDF de un estándar técnico? ¿Cómo sería internet si en vez de tener acceso gratis a los documentos del IETF (los famosos RFCs) o los estándares W3C, o los documentos de IANA/ICANN, o de IEEE, o de Unicode; hubiera que pagar cifras similares para cada uno, y encima con restricciones, en fascículos y "versiones" que volver a pagar a precio completo?
