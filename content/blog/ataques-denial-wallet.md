---
title: "Cuidado con los ataques Denial of Wallet"
date: 2024-05-01
---

Cada vez más estamos viendo una nueva modalidad de ataques a la que algunos (entre los que me incluyo) han bautizado como "Denial of Wallet" o "denegación de cartera". Estos ataques consisten en atacar los servicios cloud de un individuo o empresa con el objetivo de encarecer la factura de servicios cloud, hasta el punto de que la víctima no pueda pagarla y tenga que echar el cierre.

Lo vimos hace dos meses con un [cliente de Netlify](https://www.reddit.com/r/webdev/comments/1b14bty/netlify_just_sent_me_a_104k_bill_for_a_simple/) que recibió una factura de 104.000 dólares por un simple web estático. Algún "gracioso" hizo miles de peticiones a archivos pesados del sitio, y Netlify en vez de bloquearlo, las sirvió, cobrando el ancho de banda a la víctima (a precio de oro, por cierto).

También lo vimos estos días con un [cliente de AWS](https://scribe.rip/@maciej.pocwierz/how-an-empty-s3-bucket-can-make-your-aws-bill-explode-934a383cb8b1) casi paga 1300 dólares por un bucket de S3 con un nombre lo suficientemente común para que miles de bots estuvieran intentando (por error) subir archivos. Las peticiones PUT en S3 cuestan 0,005 dólares por 1000 peticiones, y Amazon las cobra aunque no tenga éxito (en este caso, por no tener permisos).

En ambos casos, la víctima no podía hacer nada para evitarlo, ya que en el caso de Netlify, no hay un límite de ancho de banda (solo de peticiones) ni se puede poner un WAF propio que bloquee peticiones maliciosas. En el caso de AWS, aunque los buckets sean privados (sin permisos salvo que te autentiques), las peticiones podían hacerse desde internet, y Amazon las cobra aunque no tengan éxito, no pudiendo tú hacer (casi) nada para evitarlo.

## ¿Cómo evito un ataque como el de S3?

Usando AWS, hay varias formas a implementar, que no deberían ser demaisado complicadas:

1. Activar el modo "requester pays", que hace que se bloquee el acceso anónimo a los buckets, y que el coste de las peticiones PUT lo pague el que las hace, no el dueño del bucket. Si eres tú quien sube contenido a tu bucket, te costará lo mismo que antes, pero si es algún graciosillo, tendrá que autenticarse y pagar él.

2. Añade un sufijo a tu bucket con caracteres aleatorios. Por ejemplo, en vez de llamarle `miempresa-aplicacion`, llámale `miempresa-aplicacion-3f4a2b1` y usa un servicio como CloudFront para servir el contenido del bucket y así evitar exponer el nombre del bucket. Así, aunque el bucket sea `miempresa-aplicacion-3f4a2b1`, la URL que se use para lectura será `d123456789.cloudfront.net` o `cdn.miempresa.com`.

## Plus: cómo evitarlo en Azure

Siendo usuario certificado de Azure y prefiriendo esta plataforma frente a AWS, me gustaría añadir cómo evitar un ataque similar en Azure Storage (que es más fácil, dicho sea de paso):

1. En Azure puedes limitar quién puede acceder a la cuenta de almacenamiento, ya sea por rangos de IP y/o VNets. Si tu aplicación está en una VNet, puedes limitar el acceso a la cuenta de almacenamiento solo a esa VNet, evitando que alguien desde fuera pueda acceder a la cuenta de almacenamiento. Esto funciona con [Service endpoints](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-service-endpoints-overview) y [Firewall y reglas de acceso](https://learn.microsoft.com/en-us/azure/storage/common/storage-network-security).

2. También puedes usar un Private Endpoint para lograr lo anterior de forma más segura, ya que el tráfico entre la VNet y la cuenta de almacenamiento no saldrá de la red de Azure, evitando que alguien desde fuera pueda acceder a la cuenta de almacenamiento. Esto funciona con [Private Link](https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview), y crea una IP privada en tu VNet que se conecta a la cuenta de almacenamiento (con un coste adicional, eso sí).

3. Por último, puedes usar [Azure CDN](https://learn.microsoft.com/en-us/azure/cdn/cdn-overview) para servir el contenido de la cuenta de almacenamiento, evitando exponer la URL de la cuenta de almacenamiento. Así, aunque la cuenta de almacenamiento sea `miempresa-aplicacion`, la URL que se use para lectura será `d123456789.azureedge.net` o `cdn.miempresa.com`.