<xsl:stylesheet version="1.0"
                xmlns=""
                xmlns:atom="http://www.w3.org/2005/Atom"
                xmlns:cdrss="urn:costas.dev#rss"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="html" encoding="UTF-8" indent="yes"/>

<xsl:template match="/">
  <html>
    <head>
      <title><xsl:value-of select="//channel/title"/></title>
      <style>
        body {
          font-family: sans-serif;
          line-height: 1.6;
          max-width: min(69ch, 90vw);
          margin: auto;

          font-size: 1.2rem;
          padding-block: 2rem;
        }
        h1 { font-size: 3.55rem; }
        h2 { font-size: 2.75rem; }
        .entry { border-bottom: 1px solid #eee; padding-bottom: 1rem; margin-bottom: 1rem; }
        .entry h3 { margin-bottom: 0.25rem; }
        .meta { font-size: 0.9em; color: #666; }
        a { color: #084191; text-decoration: none; box-shadow: 0 1px #066ed0; }
        a:hover { text-decoration: none; box-shadow: 0 2px #066ed0; }
        a:focus { color: #084191; outline: none; background-color: #fc0; box-shadow: 0 4px #0b0c0c; }
        code { background-color: #f8f9fa; padding: 2px 4px; border-radius: 4px; font-size: 1rem; }
      </style>
    </head>
    <body>
      <h1><xsl:value-of select="//channel/title"/></h1>
      <p><xsl:value-of select="//chanel/description"/></p>

      <h2>¿Qué es este feed?</h2>
      <p>
        Este es un feed RSS que contiene las últimas entradas de mi blog. La página está estilizada con
        XSLT para que puedas leerla directamente en tu navegador web. Los feeds RSS son una forma de
        distribuir contenido actualizado frecuentemente, como noticias o entradas de blogs, de manera que
        los lectores puedan suscribirse y recibir actualizaciones automáticamente en su lector favorito.
        ¡Como las newsletters pero sin correo electrónico!
      </p>

      <h2>¿Cómo me suscribo?</h2>
      <p>Para suscribirte a este feed, puedes usar un lector de feeds RSS o Atom. Los hay disponibles gratuitamente y de pago, y de escritorio o online. Aquí tienes los que recomendamos:</p>
      <ul>
          <li><a href="https://www.feedly.com/" target="_blank">Feedly</a></li>
          <li><a href="https://www.inoreader.com/" target="_blank">Inoreader</a></li>

          <li><a href="https://thunderbird.net/" target="_blank">Thunderbird</a></li>
          <li><a href="https://www.rssowl.org/" target="_blank">RSSOwl</a></li>
          <li><a href="https://www.rssreader.com/" target="_blank">RSS Reader</a></li>
      </ul>
      <p>Una vez instalado o registrado, basta con copiar y pegar la URL de este feed en el lector de feeds. La URL es:</p>
      <p><code><xsl:value-of select="//link[@rel='self']/@href"/></code></p>

      <h2>Últimas entradas</h2>
      <xsl:apply-templates select="//channel/item"/>
    </body>
  </html>
</xsl:template>

<xsl:template match="item">
  <div class="entry">
    <h3>
      <a target="_blank">
        <xsl:attribute name="href">
          <xsl:value-of select="link"/>
        </xsl:attribute>
        <xsl:value-of select="title"/>
      </a>
    </h3>
    <div class="meta">
      Publicado el
      <time datetime="{pubDate}">
        <xsl:value-of select="cdrss:spanishPubDate"/>
      </time>
    </div>
    <xsl:if test="description">
       <p><xsl:value-of select="description" disable-output-escaping="yes"/></p>
    </xsl:if>
  </div>
</xsl:template>

</xsl:stylesheet>
