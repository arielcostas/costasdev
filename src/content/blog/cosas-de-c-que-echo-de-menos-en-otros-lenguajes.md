---
title: "Cosas de C# que echo de menos en otros lenguajes"
metaDescription: "C# tiene ciertas características que echo de menos en otros lenguajes, y hoy quiero hablar de ellas."
publishedAt: 2023-09-28
---

Desde comienzos de este año he estado trabajando con .NET y C#, con una experiencia genial en casi todos los aspectos del ecosistema (con excepciones como MAUI). Sin embargo, también he tenido que trabajar (generalmente por obligación) con otros lenguajes como Java, Python o (recientemente) PHP. Estos lenguajes no son necesariamente malos, aunque tengan sus… digamos… _peculiaridades_. Sin embargo, siempre echo de menos ciertas cosas que en C# doy por asumidas.

## nameof

La expresión `nameof` de C# devuelve el nombre de un símbolo (variable, clase, propiedad, método…) que tiene en el código, como una string. Así, por ejemplo, podemos hacer referencia al nombre de una propiedad «en código», en lugar de ir _hard-coded_ como una cadena de texto directamente. Por ejemplo:

```csharp
private static int _dia = 2;
	
public static void Main()
{
	Console.WriteLine(nameof(_dia));
}
```

Este código imprimirá por consola _\_dia_ tal cual. No el valor, sino el nombre. Ahora bien ¿qué utilidad tiene esto? Para refactor, por ejemplo, es muy útil. Cuando vas a cambiar el nombre a una variable o una propiedad, se actualizará también en el _parámetro_ del nameof, de forma que no tendrás que buscar manualmente dónde se hace referencia a ese campo, útil cuando llamas a código que usa _reflection_, por ejemplo. Además, el IDE y el compilador sabrán a qué estás haciendo referencia, con lo que si un día te cargas la propiedad accidentalmente, el compilador te avisará de que estás pidiendo el nombre de una propiedad inexistente; evitando que ese fallo ocurra en tiempo de ejecución.

## get; set;

Salvo que uses los `record` en Java (solo disponibles desde Java 14) o algo similar, escribir clases para guardar datos es una tarea repetitiva: crear la clase, crear todas las propiedades como `private` y generar los getters y setters, quedándote con una clase de más de 100 líneas de código autogenerado, con el IDE quejándose de un montón de métodos no usados, y de código que tendrás que modificar si cambias una propiedad.

Ahora bien, en C# no ocurre tal desgracia, ya que existen las [propiedades auto-implementadas](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/auto-implemented-properties): puedo declarar una cadena de texto como `public string Nombre { get; set; }`, lo cual hará que sea accesible públicamente, aunque por detrás esté generando el campo donde realmente se almacena, de modo que hay encapsulamiento. Si hace falta que una propiedad nunca cambie, puedes hacer que solo tenga un getter. Si quieres hacer que solo pueda ser modificada desde la propia clase, puedes usar `private set`.

Evitas generar decenas de líneas de código _plantilla_ que luego tendrás que modificar si las propiedades cambian, y que suponen cientos de líneas en un proyecto porque sí. Java dispone de Lombok, sí, pero es una biblioteca más que toca añadir. PHP no tiene tal cosa ni siquiera, siguen chapados a la antigua.

## Todo en uno 

Esta cuestión ya es un tanto más «filosófica», pero me gusta que .NET sea un ecosistema completo: casi todo lo que puedes necesitar está desarrollado y se actualiza cada año. El SDK base de .NET trae herramientas más que de sobra para crear aplicaciones de consola. Y con paquetes como `Microsoft.Extensions.Configuration` o `Microsoft.Extensions.Hosting` puedes evitar reinventar la rueda, en estos casos en el procesado de configuraciones y la creación de procesos de fondo.

Si necesitas crear una aplicación web, puedes utilizar ASP.NET Core con tan solo instalar el SDK de .NET, pudiendo añadirle Entity Framework Core para conectarte a la base de datos, y paquetes como Identity para gestionar **TODO** lo relacionado con la identidad de usuarios, permisos, autenticación con redes sociales, MFA…

Comparo esto con Symfony, que incluye su sistema de identidad también, pero no permite de serie la gestión dinámica de los roles (se declaran en tiempo de desarrollo, y no de ejecución), aparte de no permitir de serie la autenticación con proveedores externos (como Entra ID, Google Workspace o similares) ni tampoco la autenticación por factor doble con TOTP. Para esto último, hay que utilizar un paquete de terceros (scheb/2fa) que no compatible con la versión 6 del framework.

La ventaja de tener «todo en uno» es que la aplicación se actualiza casi siempre al completo: pasar de .NET 7 a .NET 8 será cambiar las versiones de ciertos paquetes en el `.csproj` e instalar el SDK nuevo en tu máquina. Como mucho, ajustar el IDE, pero sin más. No tendrás que preocuparte de cosas como «es que Django no es compatible con la 3.11» o «es que Symfony rompe con la 8.2», o tener que saltar de Java 8 a 11, u 11 a 17 de golpe.
