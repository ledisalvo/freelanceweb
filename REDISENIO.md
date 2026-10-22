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
index.html                     una sola página, HTML semántico, copy ES inline
assets/css/site.css            sistema visual (tokens en :root) + componentes
assets/css/fonts.css           @font-face de Manrope (self-hosted)
assets/fonts/manrope-*.woff2   Manrope variable, subsets latin y latin-ext
assets/js/config.js            ← TODAS las URLs y datos externos viven acá
assets/js/translations.js      ← TODO el copy ES/EN vive acá
assets/js/site.js              i18n, links, logos, menú, agenda Cal.com
images/leo-bn.webp             retrato del hero (recorte B/N, fondo transparente)
images/empresas/               logos de empresas (SVG/PNG transparentes)
images/casos/festivy.webp      captura de Festivy
images/og-v4.png               imagen Open Graph
```

Orden de secciones: Nav → Hero → Experiencia (logos) → Qué hago → Ideas por
rubro → Trabajos → Cómo trabajamos → Sobre mí → Contacto → Footer.

## Sistema visual

Inspirado en la plantilla Rayo: fondo casi negro (`#141414`), tarjetas
`#1E1E1E` muy redondeadas, botones en píldora, un único acento **lima**
(`#DDF26B`) y un violeta (`#B3A6FF`) reservado para badges. Manrope en todo el
sitio: titulares en peso 500 con interletrado negativo, cuerpo en 400.

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

### Placeholders

Un valor marcado `PENDIENTE` en `config.js` hace que el sitio muestre el
elemento en estado placeholder visible (borde punteado y "(link pendiente de
configurar)"), así no se publica algo roto sin darse cuenta. Hoy no queda
ninguno.

### Logos de empresas

Se cargan desde `config.companies`; sin `logo`, la empresa sale como nombre en
texto con el mismo tono. El archivo tiene que ser **SVG o PNG con fondo
transparente**: el CSS los aplana a gris claro con
`grayscale(1) contrast(0) brightness(1.5)`, que conserva la forma por el canal
alfa; un logo con fondo opaco se vería como un rectángulo gris.

Pendiente de Leo: confirmar que el contrato con la consultora permite mostrar
los logos de Grimoldi y Telmex.

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

- render completo a 1440 px y a 390 px; sin scroll horizontal en 390 px;
- menú: abre (`aria-expanded="true"`), muestra el panel y cierra con Escape;
- switch ES/EN: cambia titular y mensaje de WhatsApp;
- links de WhatsApp y Cal.com (los dos botones) resueltos desde la config
  (el mail ya no se muestra en la página); ningún placeholder pendiente; los 6 logos cargados;
- el botón de agenda abre el modal de Cal.com;
- las 77 claves de texto usadas en el HTML existen en ES y EN.

Lighthouse no se volvió a medir después del rediseño. Para hacerlo:

```bash
python3 -m http.server 8000          # desde la raíz del repo
npx lighthouse http://localhost:8000 --view
```
