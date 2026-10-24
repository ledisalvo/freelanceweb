# Web personal — rediseño

Sitio estático sin build: HTML + CSS + un JS vanilla. Se sirve tal cual desde
GitHub Pages (rama `master`, raíz del repo). No hay paso de compilación, no hay
dependencias de terceros en runtime — ni jQuery, ni FontAwesome, ni Google Fonts:
la tipografía está self-hosted en `assets/fonts/`.

Única excepción: el embed de Cal.com para agendar llamadas. `site.js` lo carga
recién cuando la sección de contacto se acerca al viewport, y los botones de
"Agendá una videollamada" abren la agenda como modal. Si el script no carga,
siguen siendo links normales a `config.booking` en otra pestaña.

## Dominio

`https://leodisalvo.dev` (registrado en Cloudflare). El archivo `CNAME` de la
raíz le indica a GitHub Pages el dominio; `ledisalvo.github.io/freelanceweb`
redirige ahí. DNS en Cloudflare, todos en modo **DNS only** (nube gris) para
que GitHub pueda emitir el certificado HTTPS:

| Tipo | Nombre | Valor |
|---|---|---|
| A | `@` | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` |
| CNAME | `www` | `ledisalvo.github.io` |

Si cambia el dominio: actualizar `CNAME`, `siteUrl` y `ogImage` en
`assets/js/config.js`, y el canonical y los metadatos Open Graph/Twitter de
`index.html`.

## Público y tono

Dueños de comercios, pymes y emprendedores (restaurantes, locales,
consultorios), no recruiters ni gente de sistemas. El copy habla de problemas y
resultados del negocio — más clientes, menos tareas repetitivas, menos costos —
sin jerga técnica (legacy, SaaS, stack, deploy…). El CTA principal es WhatsApp;
la videollamada por Cal.com es la opción secundaria. Los PDF del CV siguen en la
raíz pero la página no los enlaza.

## Estructura

```
index.html                     la home, HTML semántico, copy ES inline
casos/ambar/index.html         página del caso Ámbar (leodisalvo.dev/casos/ambar/)
casos/festivy/index.html       página del caso Festivy (leodisalvo.dev/casos/festivy/)
assets/css/site.css            sistema visual (tokens en :root) + componentes
assets/css/fonts.css           @font-face de Manrope (self-hosted)
assets/fonts/manrope-*.woff2   Manrope variable, subsets latin y latin-ext
assets/fonts/fraunces-*.woff2  Fraunces cursiva 300 (solo los remates dorados)
assets/js/config.js            ← TODAS las URLs y datos externos viven acá
assets/js/translations.js      ← TODO el copy ES/EN vive acá
assets/js/site.js              i18n, links, logos, menú, agenda Cal.com
images/leo-bn.webp             retrato del hero (recorte B/N, fondo transparente)
images/casos/festivy/          tarjeta (portada), invitación en celular, capturas del panel
images/casos/ambar/            tarjeta (antes | después), comparador, identidad,
                               colección y capturas de la tienda
images/og-v4.png               imagen Open Graph
```

Orden de secciones: Nav → Hero → Experiencia (una línea de texto) → Qué hago →
Lanzá tu marca → Ideas por rubro → Trabajos (Ámbar, Festivy) → Cómo trabajamos →
Sobre mí → Contacto → Footer.

En Trabajos, Ámbar y Festivy son dos tarjetas con el mismo formato (badges,
título, texto, imagen) y los mismos dos botones: **Ver el caso completo**
(lima, lleva a su página) y el link al sitio real ("Ver la tienda" /
"Ver Festivy"). El detalle vive en las páginas de caso, que comparten nav,
footer, CSS y JS con la home:

- **Ámbar**: portada con datos del proyecto → comparador antes/después →
  resultados → paso a paso → piezas de la marca → colección → tienda →
  contacto → link a Festivy.
- **Festivy**: portada con captura en computadora y celular → el problema →
  qué hace (6 funciones) → capturas del panel (datos de ejemplo) → números →
  cómo lo hice → para tu negocio → contacto → link a Ámbar.

Las páginas de caso viven en subcarpetas: `<html data-base="../../">` hace que
las rutas de `config.js` funcionen igual y `<html data-meta="meta.ambar">`
elige su título y descripción en `translations.js`. Todo dato de Festivy sale
del producto real (repo y festivy.app); las capturas del panel son las de
la vista previa del plan PRO, con datos de ejemplo.

Sin logos de empresas ni casos de clientes de cuando trabajaba en relación de
dependencia: la experiencia se cuenta en una frase ("bancos, salud y
comercio"). Sin testimonios: solo se publican resultados reales y propios
(los de Ámbar).

## Sistema visual

Inspirado en la plantilla Rayo: fondo casi negro (`#141414`), tarjetas
`#1E1E1E` muy redondeadas, botones en píldora, un único acento **lima**
(`#DDF26B`) y un violeta (`#B3A6FF`) reservado para badges. Manrope en todo el
sitio: titulares en peso 500 con interletrado negativo, cuerpo en 400.

**Regla de la marca de un cliente:** la interfaz del sitio (botones, badges,
checks, tarjetas de planes) es siempre lima, con un solo tipo de botón
principal. Los colores y la tipografía de un cliente aparecen **solo dentro de
su caso**: en Ámbar, el **dorado** (`#E3BE82`) del comparador y su subtítulo en
**Fraunces cursiva 300** (`.serif-accent`, entre comillas: es la voz de esa
marca). Si se suma otro caso de marca, se usan sus colores, no el dorado.

Gestos propios del sistema:

- **`.hl`**: resaltado en píldora lima dentro del titular del hero.
- **`.spark`**: estrellita de 4 puntas dibujada con `mask-image` (toma el color
  del texto; `.spark--accent` la pinta de lima). Se usa en etiquetas de sección,
  titulares y el cierre. Puede ir dentro de las traducciones.
- **`.marquee`**: titular gigante en gris ("Experiencia ✦") que corre en bucle.
  Son cuatro repeticiones idénticas y la animación desplaza exactamente un 25 %.
- **`.pill-panel`**: bloque claro con forma de píldora (ideas por rubro).
- **Menú**: botón redondo que abre un panel en cualquier ancho; adentro van los
  links de sección y el switch ES/EN.

**Un color o una medida:** el bloque `:root` al inicio de `assets/css/site.css`.

> Si cambiás un color de texto o de fondo, verificá que el par siga en AA
> (4.5:1 para cuerpo, 3:1 para texto grande). Pares actuales: secundario
> `#A3A3A3` sobre `#1E1E1E` 6.6:1; el gris `.muted` `#7A7A7A` solo se usa en
> texto de 26 px o más (4.3:1); texto oscuro sobre lima y violeta, más de 12:1.

## Cómo cambiar cosas

**Un link, un teléfono, un email, una foto:** `assets/js/config.js`. Nada de eso
está escrito en el HTML.

**Un texto, en cualquiera de los dos idiomas:** `assets/js/translations.js`. El
HTML trae el texto en español inline solo para que la página se vea bien si el JS
todavía no cargó; la fuente de verdad son las traducciones. Algunos valores
llevan HTML a propósito (`.hl`, `.spark`, `.muted`).

### Precios de "Lanzá tu marca"

En `config.pricing` (`brand`, `campaign`, `store` y `storeMonthly`), como
texto tal cual se muestra. Hoy: Marca lista **$390.000**, Marca + campaña
**$650.000**, Marca + tienda **$1.450.000** más **$60.000** por mes de
mantenimiento. Los planes 2 y 3 muestran además "o 3 cuotas sin interés"
(`brand.installments` en las traducciones). Si un precio vuelve a
`PENDIENTE`, su tarjeta dice **"A consultar"** y esconde el "Desde", las cuotas
y el mantenimiento.

Los botones de cada plan y los CTA de las páginas de caso abren
WhatsApp con su propio mensaje: el atributo `data-wa-msg` nombra la clave de
traducción del texto precargado.

### Comparador antes/después (Ámbar)

Las dos fotos se superponen y la del después se recorta con
`clip-path: inset(0 0 0 var(--pos))`. El control es un `<input type="range">`
real con `<label>`: funciona con mouse, dedo y teclado (flechas), y `site.js`
actualiza `--pos` y el `aria-valuetext` ("Mostrando 70 % del después"). Sin JS
queda mitad y mitad. Si se cambian las fotos, tienen que ser la misma toma con
el mismo encuadre, o el frasco salta al deslizar.

### Placeholders

Un valor marcado `PENDIENTE` en `config.js` hace que el sitio muestre el
elemento en estado placeholder visible (borde punteado y "(link pendiente de
configurar)"), así no se publica algo roto sin darse cuenta. Hoy no queda
ninguno.

### Resultados de Ámbar

En la página del caso, en recuadros (`.stats`): **80** seguidores orgánicos
en 2 semanas sin publicidad paga, y ventas de **4 → 10** por semana. La flecha
es visual; el lector de pantalla oye "De 4 a 10" (`.sr-only`).

### Retrato del hero

`images/leo-bn.webp`: la foto con el fondo quitado (rembg, modelo
`isnet-general-use`), en blanco y negro con contraste. Se funde hacia abajo y a
los costados con `mask-image`, así no se ve el corte de los hombros. Si se cambia
la foto, tiene que ser un recorte con fondo transparente. `images/leo.webp`
(color) queda como fuente alternativa.

### Imagen Open Graph

`images/og-v4.png` (1200×630): fondo oscuro, titular con el resaltado lima y el
retrato. LinkedIn y WhatsApp la muestran a ~500 px, así que lleva solo texto
grande (nombre, titular, dominio): nada por debajo de ~30 px.

Si se regenera, usar un nombre de archivo nuevo (`og-v5.png`, …) y actualizar
`ogImage` y los metadatos: las redes cachean la imagen por URL. Después, pasar
la URL por el Post Inspector de LinkedIn para refrescar su caché.

## Idiomas

Español por defecto. El switch ES/EN (dentro del menú) cambia el copy, los
metadatos (`title`, `description`, Open Graph, Twitter), el `lang` del `<html>` y
el mensaje precargado de WhatsApp. La elección se guarda en `localStorage` (y si
está bloqueado, el sitio igual funciona en la visita actual).

## Accesibilidad y motion

- Foco visible de 2 px en lima; dentro del bloque claro, en oscuro.
- Targets táctiles de 44 px mínimo; botones principales de 56 px.
- El menú abre con el botón redondo, cierra con Escape o al elegir un link.
- Dos animaciones: la entrada del hero y el titular "Experiencia". Ambas viven
  dentro de `@media (prefers-reduced-motion: no-preference)`: con movimiento
  reducido el contenido aparece quieto en su posición final. El scroll suave
  también se apaga con `prefers-reduced-motion`.

## Verificación

Verificado en Chromium headless sobre el sitio servido localmente (rediseño
oscuro, octubre 2026):

- render completo a 1440 px y a 390 px de la home y las dos páginas de caso;
  sin scroll horizontal en 390 px;
- menú: abre (`aria-expanded="true"`), muestra el panel y cierra con Escape;
- switch ES/EN: cambia titular y mensaje de WhatsApp;
- links de WhatsApp y Cal.com (los dos botones) resueltos desde la config
  (el mail ya no se muestra en la página); ningún placeholder pendiente;
- el botón de agenda abre el modal de Cal.com;
- comparador de Ámbar (en su página): nombre accesible desde el label; al
  llevarlo a 70 recorta la foto al 70 % y el `aria-valuetext` dice
  "Mostrando 70 % del después";
- el botón de agenda de la página de Festivy también abre el modal de Cal.com;
- cada CTA de planes y de las páginas de caso precarga su propio mensaje de
  WhatsApp (también en EN); "Ver el caso completo" lleva a `casos/ambar/` y
  `casos/festivy/`, y "Ver la tienda" / "Ver Festivy" abren el sitio real;
- precios: "Desde $390.000", "Desde $650.000 / o 3 cuotas sin interés" y
  "Desde $1.450.000 / o 3 cuotas sin interés / + $60.000 por mes de
  mantenimiento" (y su versión en EN);
- sin logos ni casos de Hospital Británico y Grimoldi en el DOM; los dos
  resultados de Ámbar visibles;
- las 234 claves de texto usadas (las tres páginas y JS) existen en ES y EN.

Lighthouse no se volvió a medir después del rediseño. Para hacerlo:

```bash
python3 -m http.server 8000          # desde la raíz del repo
npx lighthouse http://localhost:8000 --view
```
