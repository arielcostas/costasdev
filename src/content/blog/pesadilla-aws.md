---
title: "La pesadilla de AWS"
metaDescription: "Trabajar con AWS es una locura, y aquí explico por qué."
publishedAt: 2024-03-26
---

Llevo unas semanas trabajando con AWS, y la verdad es que no me está gustando nada. No es que sean malos servicios (que funcionan bien), pero la cantidad de opciones, configuraciones, precios, cosas que están pasando por debajo... es una locura, y desde luego no compensa el tiempo que tienes que dedicar a entenderlo todo salvo que tengas un proyecto considerablemente grande.

Por ejemplo, desplegar una aplicación sencilla en PHP (Symfony) y MySQL administrado en EC2 y RDS es relativamente sencillo usando la red VPC por defecto. Sin embargo, crear esto desde cero es una aventura: crear VPC y dos subredes, configurar un internet gateway, una tabla de rutas, un grupo de seguridad para limitar acceso desde internet, la instancia y la base de datos, configurar la base de datos para que acepte conexiones desde la instancia, configurar la instancia para que se conecte a la base de datos... y todo esto sin contar con cosas como balanceadores de carga, certificados TLS, etc.

Esto nos dejaría con solo una base de datos en RDS y una instancia de EC2. Pero si queremos usar AWS como algo más que un "DigitalOcean caro", hay que pensar en un balanceador de carga y certificado, el WAF y tener varias instancias de EC2 con autoescalado. Para el autoescalado, hace falta crear una imagen de la instancia (instalar todo y prepararla, luego generar la AMI) y luego configurar el auto-scalign group, con su launch config, sus reglas y demás.

Luego, como tenemos que tener algo escalable e independiente del sistema, tenemos que subir los archivos "de usuario" a S3, configurando las instancias para que tengan un rol de IAM que les permita acceder al bucket desde la instancia, y luego dar de alta CloudFront para que apunte a ese bucket, con otro certificado y cambios al DNS.

Una vez hecho todo esto, tienes una infraestructura que se escala automáticamente, pero que te ha llevado mucho tiempo configurar, y que si no tienes un proyecto grande, estará infrautilizada. Además, para actualizar la aplicación, tendrás que crear otra AMI, y luego tendrás que hacer "apaños" para que la aplicación use credenciales compartidas (con Secrets Manager) y añadir monitorización con CloudWatch.

Ah, todo esto sin contar que cuando quieras hacer un experimento luego tendrás que borrar los recursos uno a uno, porque a nadie en AWS se le ocurrió de primeras un sistema de "Resource Groups" como en Azure, o de "Projects" como en Google Cloud. Y sin contar fallos con la línea de comandos, como un 400 cada vez que quieres hacer `docker push` a un repositorio de ECR.

Y luego la gracia de cambiarse de proveedor a largo plazo, porque todas estas configuraciones sirven solo para AWS, y tendrás que aprender como funcionan otros proveedores, o usar un sistema "neutral" como Kubernetes para el autoescalado y la gestión de recursos (que a su vez es otro mundo).

Finalmente, cuando te quieras ir, AWS te cobrará una "penalización" por "salida a internet" y pagarás una cantidad considerable por mover tus datos a otro proveedor. O así era hasta hace poco, cuando [tuvieron que hacerlo gratuito](https://aws.amazon.com/es/blogs/aws/free-data-transfer-out-to-internet-when-moving-out-of-aws/) por culpa de la malvadísima Unión Europea que aprobó la European Data Act obligándoles a hacerlo.
