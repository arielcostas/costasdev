---
title: "Montando un router casero con una Raspberry Pi"
date: 2024-04-30
---

El otro día recordé que tengo una Raspberry 4B por casa, y que no le estoy dando ningún uso. Así que, con fines experimentales, decidí montar un router casero con ella, añadiendo de paso un servidor DNS y HTTP.

## Materiales

- Raspberry Pi 4B
- Tarjeta microSD flashada con Raspberry Pi OS (versión Lite sin entorno gráfico)
- Netplan (de canonical) para configurar las interfaces de red de forma fácil y reproducible
- Cable Ethernet al router principal
- Editor de texto (yo uso Vim)

## Funcionamiento

Vamos a configurar la Raspberry Pi para que actúe como router, y que actúe como NAT para los dispositivos que se conecten a ella. La raspberry tiene dos interfaces: `eth0` por Ethernet, que voy a conectar al router de mi casa, y `wlan0` que voy a configurar como punto de acceso para que se conecten los dispositivos.

En este caso, mi red de casa es `192.168.1.0/24`, y la Raspberry tiene la IP `192.168.1.14`. Para la nueva red, voy a usar `172.16.69.0/24`, y la Raspberry (el "router") tendrá la IP `172.16.69.1`. Los dispositivos que se conecten a la red de la Raspberry obtendrán una IP en este rango.

## Activar forwarding de paquetes

Comenzamos editando el archivo `/etc/sysctl.conf` y descomentando la línea `net.ipv4.ip_forward=1`. Aplicamos los cambios con `sysctl -p`.

## Configuración de netplan

Instalamos netplan con `sudo apt install netplan.io`. Creamos un archivo de configuración en `/etc/netplan/01-router.yaml` con el siguiente contenido:

```yaml
network:
  renderer: NetworkManager
  ethernets:
    eth0:
      addresses:
        - 192.168.1.14/24
      routes:
        - to: default
          via: 192.168.1.1
      nameservers:
        addresses:
          - 1.1.1.1
          - 8.8.8.8
  wifis:
    wlan0:
      addresses:
        - 172.16.69.1/24
      access-points:
        RASPI_ACG:
          mode: ap
          auth:
            key-management: psk
            password: "ClaveSuperSegura"
      routes:
        - to: default
          via: 192.168.1.1
          table: 102
      routing-policy:
        - from: 172.16.69.0/24
          table: 102
```

Esta configuración hace lo siguiente:

1. Configura `eth0` con IP4 fija y DNSs de Cloudflare y Google. También añade una ruta por defecto a través del router de casa, para que la Raspberry pueda salir a internet.

2. Configura `wlan0` como punto de acceso con una clave WPA2-PSK y una IP fija

3. En `wlan0` le añado una ruta por defecto a través del router de casa (`192.168.1.1`) y una política de enrutamiento para que el tráfico de la WLAN se reenvíe a través de esta ruta

Aplicamos los cambios con `sudo netplan apply`.

## Problemas

La configuración funciona, y los dispositivos se pueden conectar a la red de la Raspberry y salir a internet. Sin embargo, hay un problema: no puedes ejecutar por tu cuenta un servidor DHCP (como Kea) y un servidor DNS (como Bind9) en la Raspberry, ya que NetworkManager lanza su propio servidor con `dnsmasq` como esclavo.

Desactivando NetworkManager implicaría no poder usar `netplan`, ya que no se puede activar el modo AP de la Raspberry usando otro renderer (como `networkd`). Por tanto, he decidido no usar un servidor DHCP y DNS en la Raspberry, y confiar en los que gestiona el propio `NetworkManager`. Se puede modificar la configuración de este, ojo, pero prefería usar `bind9` porque me resulta más familiar.

Por otra parte, mi móvil Android indica que la red no es segura, probablemente porque usa WPA2-PSK y no WPA3. No sé si mi Raspberry soporta configurar WPA3 (y menos con `netplan`), pero es algo a tener en cuenta.