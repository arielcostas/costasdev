---
title: "Mi experiencia con un servidor ARM64"
date: 2024-03-22
---

Hace unas semanas arranqué un servidor VPS con arquitectura `arm64`, en concreto el `CAX11` de [Hetzner](https://www.hetzner.com/cloud) con dos núcleos de procesador Ampere y 4 GB de RAM. El motivo de esta elección fue reducir costes (por un servidor de similares características en x86_64 estoy pagando 12€/mes a un proveedor español, y este sale por menos de 5€), y probar algo nuevo.

La experiencia por el momento ha sido buena, utilizando Ubuntu Server 22.04. El rendimiento es igual o incluso servidor que el servidor x86_64, siendo los tiempos de compilación de un par de aplicaciones notablemente más rápidos.

Una pega que he encontrado es que [Percona](https://www.percona.com/) no ofrece paquetes para ARM64, por lo que he tenido que usar los paquetes de MySQL ofrecidos por Canonical. No es un problema, pero es algo a tener en cuenta si, como yo, usas software de Percona por las funcionalidades extra que ofrece frente a las distribuciones oficiales (especialmente en MonogDB) o el sistema de copias de seguridad.

En general, estoy contento con el cambio, y si no necesitas software específico que no esté disponible para ARM64, es una buena opción para reducir costes, mejorar ligeramente el rendimiento y tener una infraestructura algo más moderna.