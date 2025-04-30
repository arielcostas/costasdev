---
title: "El espectáculo que está montando WordPress (o mejor dicho, Matt Mullenweg)"
description: "Hablemos de la polémica que ha surgido en torno a WordPress y su fundador, Matt Mullenweg, contra WPEngine y todo lo que ha desencadenado."
publishedAt: 2024-10-13
tags: ["desarrollo web", "open source"]
---

Hace unas semanas que Matt Mullenweg comenzó una batalla contra WPEngine, uno de los mayores proveedores de hosting de WordPress. Pero para entender esta historia, primero hay que aclarar quien es quien:

- **Matt Mullenweg**: Fundador del software WordPress, fundador y CEO de Automattic, y presidente de la WordPress Foundation.
- **WPEngine**: Proveedor de hosting especializado en WordPress, fundado en 2010, y que ha crecido hasta ser uno de los mayores proveedores de hosting de WordPress. Es propiedad de un grupo de inversión llamado Silver Lake.
- **WordPress.org (en adelante, WPO)**: Un sitio web propiedad de Mullenweg (y nadie más), donde se aloja el software WordPress, así como documentación, foros de soporte y EL directorio de plugins y temas de WordPress (no hay otro, y crearlo implicaría tener que cambiar el software WordPress para usar este otro directorio).
- **WordPress Foundation (en adelante, WPF)**: Una organización sin ánimo de lucro creada por Mullenweg para proteger la marca WordPress y promover el software WordPress, así como la comunidad que lo rodea. Es la propietaria de las marcas WordPress (que no WP), WooCommerce y Woo.
- **Automattic**: La empresa comercial de Mullenweg, que ofrece servicios como WordPress.com, Jetpack, WooCommerce y otros. Automattic es la propietaria de la marca Jetpack, y tiene un acuerdo exclusivo con WPF para usar la marca WordPress de forma comercial.
- **WordPress.com (en adelante, WPC)**: Un servicio de alojamiento de blogs y sitios web propiedad de Automattic, que ofrece alojamiento de WordPress de manera comercial. Es un competidor directo de WPEngine.

Con esto en mente, vamos a la historia.

## El origen de la polémica

WPEngine lleva existiendo desde 2010, y ha crecido hasta ser uno de los mayores proveedores de hosting de WordPress. Sin embargo, en 2024, Mullenweg decidió comenzar una batalla contra WPEngine, porque según él, WPEngine estaba aprovechando el software libre WordPress para su beneficio comercial, sin dar nada a cambio a la comunidad de WordPress.

Además, se supo que Mullenweg exigía una "compensación" a WPEngine por valor de varios millones de dólares (sobre el 8% de ingresos de WPE) para parar esta campaña de desprestigio. WPEngine, por supuesto, se negó a pagar esta cantidad, y Mullenweg decidió seguir adelante con su campaña de desprestigio, hablando mal de WPEngine en la edición de este año de WordCamp US.

WPEngine decidió _contraatacar_ enviando a Mullenweg una carta de "cese y desista" (en inglés, _cease and desist_), en la que le pedían que dejara de difamar a WPEngine y que se retractara de sus declaraciones. Mullenweg, en lugar de retractarse, decidió seguir adelante con su campaña contra WPEngine y contra todo lo que representaba.

Por ello, WPEngine decidió demandar a Automattic y Mullenweg por varios cargos:

- Interferencia intencionada en relaciones comerciales.
- Interferencia intencionada en posibles relaciones económicas
- Fraude y abuso informático
- Intento de extorsión
- Competencia desleal
- Difamación (verbal y escrita)

Pero la historia no acaba aquí. Mullenweg decidió contraatacar, primero prohibiendo a WPEngine el acceso a WordPress.org (que todo el mundo creía que era un sitio web de la WPF, pero que en realidad es propiedad de Mullenweg a título personal, aunque se aloja en infraestructura de Automattic), por lo que WPEngine no podía acceder a los servidores para descargar actualizaciones del software WordPress, ni tampoco podía acceder al directorio de plugins y temas de WordPress. Esto no solo afecta a la empresa, también a todos los clientes de WPEngine, que no pueden actualizar sus sitios web de WordPress.

Además, hace unos días añadió una casilla en el login de WordPress.org que todo el mundo debe marcar para iniciar sesión, donde debes afirmar que no tienes ningún tipo de relación con WPEngine, impidiendo el acceso a WordPress.org si no marcas la casilla.

Y para culminar, el día de ayer (sábado 12 de octubre), se supo que Mullenweg había modificado el plugin Advanced Custom Fields (ACF), mantenido por WPEngine cambiándole el nombre pero manteniendo el "listing" del plugin en WPO, cambiando también el código fuente. De tal forma, el señor Mullenweg estaba tomando "control" de un plugin de un tercero sin avisar a los usuarios ni al maintainer.

Es decir, si utilizabas ACF, recibiste una actualización no genuina que cambia el nombre del plugin, y pasa a ser mantenida por no-se-sabe-quién, en lugar de ser la versión oficial mantenida por WPEngine.

## Mi opinión

Siempre he sido defensor del Open Source, siempre lo he usado y he contribuido más de una vez a estos proyectos, así como mantener los míos propios. Es por ello que me parece una vergüenza lo que está haciendo Mullenweg, y que está manchando el buen nombre de WordPress y de la comunidad que lo rodea.

WPEngine está en su derecho de usar un software libre como WordPress para su beneficio comercial, siempre y cuando cumpla con la licencia GPL (y hasta donde yo sé, la cumple). Lo que no se puede hacer es sacar un software bajo una licencia y luego esperar que los usuarios comerciales contribuyan de vuelta "obligados" bajo amenaza de una campaña de acoso y derribo.

Si lo que no se quiere es que empresas como WPEngine se beneficien de WordPress, entonces que se cambie la licencia del software, como hicieron en el pasado empresas como Redis (de Apache2 a SSPL), y acabó con la [Linux Foundation creando un fork llamado Valkey](https://valkey.io/), MongoDB (de AGPL a SSPL) o Elastic Search, que cambió su licencia porque querían ganar dinero ofreciendo hosting pero AWS les estaba comiendo el pastel. Esto acabó, por cierto, con la creación de [OpenSearch](https://opensearch.org/), un fork de Elastic Search.

El problema que tiene Mullenweg es que no puede hacer este "tirón de alfombra" porque la licencia de WordPress es GPL y no tiene el control total del software, ya que hay mucha gente que ha contribuído a él a lo largo de los años sin cederle los derechos a WPF, con lo que no puede cambiar la licencia sin el consentimiento de todos los contribuyentes. Y aún si lo hiciera "por sus narices", siempre habría un fork que seguiría con la licencia GPL y ganaría en popularidad.

En cuanto al sistema de plugins, es un sistema que ha funcionado bien durante años pero que se ha demostrado que no es seguro, ya que un tercero puede tomar control de un plugin sin avisar a los usuarios ni al maintainer, o puede cortar acceso a millones de personas "por sus narices". Sería buen momento ahora para crear un "registry" de plugins realmente abierto, o un sistema descentralizado donde cualquiera pueda montar su repositorio de plugins y los usuarios puedan añadirlo a su WordPress.

## El caso de Linux

Linux es un sistema operativo enormemente conocido, y que ha sido usado por millones de personas en todo el mundo. Sin embargo, Linux es un software libre, y cualquiera puede usarlo para su beneficio comercial. Si no, que le pregunten a las miles de empresas que ofrecen "hosting Linux" o "servidores Linux" y que ganan dinero con ello sin donar dinero o recursos a la Linux Foundation, o a distribuciones libres como Debian.

Sin hablar de que existen grandes empresas como Canonical y Red Hat (de IBM) que ofrecen servicios de soporte sobre Linux, y que ganan dinero con ello. ¿Vería alguien bien que un día la Linux Foundation decida montar su propia distro comercial, y prohibir a Canonical y Red Hat acceder a kernel.org para descargar actualizaciones salvo que paguen un 8% **de los ingresos** a la Linux Foundation?

O por poner otro ejemplo, ¿vería bien alguien que la Apache Software Foundation decidiera montar su propio servicio de hosting, y prohibir a sus competidores acceder a apache.org para descargar actualizaciones del HTTPD, o al repositorio de Maven, o a actualizaciones de Tomcat, Kafka, etc.?

## Conclusión

El tarado de Mullenweg decidió empezar una guerra "nuclear" contra WPEngine porque es el principal competidor de Automattic en el mercado de hosting de WordPress, y porque no le gusta que WPEngine gane dinero con WordPress sin dar nada a cambio a la comunidad de WordPress. Sin embargo, lo que ha hecho Mullenweg es manchar el buen nombre de WordPress y de la comunidad que lo rodea, y ha demostrado que no le importa nada más que su propio beneficio.

Y desde luego, demuestra que es un peligro que exista tal absolutismo en un proyecto, donde tanto el brazo comercial como el de la comunidad están en manos de una sola persona, que puede hacer lo que le dé la gana, sin importarle las consecuencias.

Si no fuera porque a mí WordPress generalmente ni me va ni me viene, lo uso únicamente cuando me lo piden, haría un fork de WordPress realmente libre, implementaría el sistema de plugins abierto o descentralizado, y garantizaría que no se repitieran estos abusos en el futuro. Pero como no es mi problema, solo voy a quedarme al margen, agarrar palomitas 🍿 y disfrutar del show.
