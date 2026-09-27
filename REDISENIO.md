# Web personal — rediseño

Sitio estático sin build: HTML + CSS + un JS vanilla. Se sirve tal cual desde
GitHub Pages (rama `master`, raíz del repo). No hay paso de compilación, no hay
dependencias de terceros en runtime — ni jQuery, ni FontAwesome, ni Google Fonts:
las tipografías están self-hosted en `assets/fonts/`.

Única excepción: el embed de Cal.com para agendar llamadas. `site.js` lo carga
recién cuando la sección de contacto se acerca al viewport, y el botón abre la
agenda como modal. Si el script no carga, el botón sigue siendo un link normal
a `config.booking` en otra pestaña.

## Estructura

```
index.html                     una sola página, HTML semántico, copy ES inline
assets/css/site.css            sistema visual (tokens) + todos los componentes
assets/css/fonts.css           @font-face de las tipografías self-hosted
assets/fonts/*.woff2           Archivo (titulares) + Public Sans (cuerpo)
assets/js/config.js            ← TODAS las URLs y datos externos viven acá
assets/js/translations.js      ← TODO el copy ES/EN vive acá
assets/js/site.js              i18n, links, logos, menú mobile
images/og.png                  imagen Open Graph
images/placeholders/           placeholders de foto y captura
```

Orden de secciones: Nav → Hero → Empresas → Servicios → Casos → Cómo trabajo →
Trayectoria → Contacto/Footer.

## Cómo cambiar cosas

**Un link, un teléfono, un email, una foto:** `assets/js/config.js`. Nada de eso
está escrito en el HTML.

**Un texto, en cualquiera de los dos idiomas:** `assets/js/translations.js`. El
HTML trae el texto en español inline solo para que la página se vea bien si el JS
todavía no cargó; la fuente de verdad son las traducciones.

**Un color o una tipografía:** el bloque `:root` al inicio de
`assets/css/site.css`. Todas las reglas de abajo usan esos tokens, así que
cambiar un hex ahí lo cambia en todo el sitio.

> Si cambiás un color de texto o de fondo, verificá que el par siga en AA
> (4.5:1 para cuerpo, 3:1 para texto grande). La paleta actual está verificada:
> el par más bajo en uso es el microcopy sobre el bloque de acento, 5.98:1.

## Placeholders pendientes

Todo lo de abajo está marcado con `PENDIENTE` en `assets/js/config.js`. Mientras
lo esté, el sitio muestra el elemento en estado placeholder visible (el botón
queda con borde punteado y el texto "(link pendiente de configurar)"), así que no
se puede publicar algo roto sin darse cuenta.

| Qué falta | Dónde se completa |
|---|---|
| Logo de Telmex (Bistrosoft queda en texto: su isotipo solo no se reconoce) | `config.companies[].logo` — ver abajo |
| Logos en SVG oficial (los PNG actuales salen de avatares de LinkedIn de 100 px) | `images/empresas/` |
| CV actualizado ES y EN | reemplazar los dos PDF de la raíz (los nombres están en `config.cv`) |

### Logos de empresas

Hoy los seis salen como nombre en texto, con el mismo tratamiento visual. En
cuanto haya un logo, se pone la ruta en `logo` y el sitio lo usa en lugar del
texto, sin tocar nada más.

Dos condiciones:

1. **Verificar el contrato** antes de usar los logos de los clientes atendidos
   vía consultora (Grimoldi, Telmex, Monex).
2. El archivo tiene que ser **SVG o PNG con fondo transparente**. El CSS los
   aplana a un gris uniforme con `grayscale(1) contrast(0) brightness(.62)`, que
   conserva la forma por el canal alfa; un logo con fondo opaco se vería como un
   rectángulo gris.

### Imagen Open Graph

`images/og.png` (1200×630) se generó con la paleta y las tipografías del sistema,
con la foto del hero a la derecha. Si cambia la foto o el copy, conviene regenerarla.

## Idiomas

Español por defecto. El switch ES/EN cambia el copy, los metadatos
(`title`, `description`, Open Graph, Twitter), el `lang` del `<html>`, el CV que
se descarga y el mensaje precargado de WhatsApp. La elección se guarda en
`localStorage` (y si está bloqueado, el sitio igual funciona en la visita actual).

## Accesibilidad y motion

- Foco visible propio en todo elemento interactivo, con el anillo aclarado dentro
  de los bloques oscuros y del bloque de acento (ahí el azul no llega a 3:1).
- Targets táctiles de 44 px mínimo.
- Un solo momento de animación: la entrada del hero. Está dentro de
  `@media (prefers-reduced-motion: no-preference)`, así que con movimiento
  reducido el contenido aparece directo en su posición final, sin nada que anular.
  El scroll suave también se apaga con `prefers-reduced-motion`.

## Verificación

Medido con Lighthouse 12.8.2 (mobile, Chromium headless) sobre el sitio servido
localmente:

| Categoría | Con los placeholders | Con la config completa |
|---|---|---|
| Performance | 99 | 99 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 92 | **100** |

Los 8 puntos de SEO que faltan hoy son una sola auditoría, `crawlable-anchors`:
los tres CTA que están en `PENDIENTE` se renderizan sin `href` (es justamente lo
que los hace visibles como placeholders). En cuanto se completan las URLs en
`config.js`, SEO llega a 100 — está verificado corriendo Lighthouse contra una
copia con la config llena.

Para repetir la medición:

```bash
python3 -m http.server 8000          # desde la raíz del repo
npx lighthouse http://localhost:8000 --view
```

También se verificó en Chromium real, a 360 / 390 / 768 / 1280 / 1440 px:

- sin scroll horizontal ni elementos desbordados en ningún ancho;
- servicios y casos a una columna en mobile, 2 columnas en desktop; "cómo
  trabajo" a 4 columnas; empresas 2 → 3 → 6;
- todos los targets interactivos de 44 px o más de alto;
- 15 elementos alcanzables por Tab, todos con anillo de foco de 2 px (aclarado
  dentro de los bloques oscuros);
- con `prefers-reduced-motion: reduce` el hero no anima y el scroll suave se
  apaga;
- sin errores de consola.

Y funcionalmente (jsdom): el switch ES/EN cambia copy, metadatos, `lang`, CV y
mensaje de WhatsApp; la elección persiste; el menú mobile abre, cierra con
Escape y devuelve el foco al botón; los links pendientes quedan en estado
placeholder; los logos de empresas caen a texto cuando no hay archivo.
