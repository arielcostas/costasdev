---
title: "IPv4 debe morir, ya va siendo hora"
date: 2024-03-23
---

Desde hace años se viene hablando de la necesidad de migrar a IPv6, pero la realidad es que la mayoría de los servicios siguen funcionando en IPv4. La transición es lenta, y muchos administradores de red y desarrolladores no parecen tener prisa (o están directamente en contra) de hacer el cambio. Pero la realidad es que IPv4 debe morir, y ya va siendo hora de que lo haga.

Si algo añade mucha complejidad a los sistemas de internet es IPv4, por cómo la limitación de direcciones ha llevado a tener que usar NAT para conectar redes enteras a internet, o llegando incluso al punto de inventar CG-NAT para poder seguir añadiendo dispositivos a internet. La realidad es que IPv4 no es sostenible, y la única solución es migrar a IPv6.

¿Alguna vez has tenido que "abrir puertos" en tu router para poder acceder a un servicio que tienes en casa? ¿O usar algún sistema como Hamachi para poder jugar a videojuegos en red con tus amigos? O usar un túnel como [ngrok](https://ngrok.com/) para poder compartir un servicio que tienes en tu ordenador con alguien que está en otra red. Todo esto es debido a la falta de direcciones IPv4, y es algo que no debería existir en 2024.

Con IPv4, cada "red" doméstica o de empresa tiene asignada una "IP pública" y luego tiene una red interna con direcciones privadas siguiendo la [RFC 1918](https://tools.ietf.org/html/rfc1918), usando los rangos `10.0.0.0/8`, `172.16.0.0/12` y `192.168.0.0/16` para estas redes, y luego creando subredes si es necesario. Pero esto añade complejidad, ya que si quieres acceder desde internet a este sistema, tienes que configurar NAT en el router y apuntar puertos a dispositivos concretos.

Con IPv6, cada dispositivo puede tener su propia dirección pública, y no es necesario usar NAT para conectar dispositivos a internet. Esto simplifica mucho la configuración de redes, y hace que sea mucho más fácil compartir servicios con otras personas. Además, IPv6 añade seguridad, ya que cada dispositivo tiene su propia dirección, y no es necesario abrir puertos en el router para acceder a servicios.

Además, al estar tan limitada la disponibilidad de direcciones IPv4, y por tanto tener precios muy elevados y dificultad para conseguirlas, los principales proveedores de Cloud ya están cobrando por las direcciones IPv4, con lo que el coste de tener IP públicas también aumenta.

También, a nivel firewall para servicios cloud, complica las cosas. Por ejemplo, si mi servicio tiene que conectarse a tu servicio pero no quieres tenerlo expuesto a cualquiera, tendrías que añadir mi IP a tu firewall, y yo tendría que usar NAT para que mis múltiples servidores "salgan" con la misma IP. Con IPv6, cada servidor tendría su IP, que incluso podría ir rotando, y autorizas un rango sabiendo que todo ese rango lo controlo yo.

En resumen, IPv4 debe morir, y ya va siendo hora de que lo haga. La transición a IPv6 es necesaria, y es algo que deberíamos hacer cuanto antes. Parte de la complejidad de _la nube_ y de las redes actuales se debe a todos los apaños que se han tenido que hacer para seguir usando IPv4, y la única solución es migrar a IPv6.