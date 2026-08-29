# SecHome — Sitio web (GitHub Pages)

Web estática y multiidioma (10 idiomas) para SecHome, lista para subir a **GitHub Pages**.
Incluye landing + las 3 páginas legales que piden las tiendas (Privacidad, Términos, Soporte).

## Contenido

```
website/
├─ index.html        ← Landing (qué hace la app)
├─ privacy.html      ← Política de privacidad
├─ terms.html        ← Términos y condiciones
├─ support.html      ← Soporte + FAQ
└─ assets/
   ├─ styles.css     ← Diseño (tema oscuro, verde de marca)
   ├─ i18n.js        ← Traducciones (10 idiomas)
   └─ app.js         ← Detección automática de idioma + selector manual
```

**Idiomas:** English, Español, Français, Deutsch, Italiano, Português, Nederlands, Polski, Türkçe, Русский.
Se detecta el idioma del navegador automáticamente; el usuario puede cambiarlo con el selector (se recuerda en su navegador).

**Correo de soporte:** neowavecode@gmail.com (aparece en Soporte, Privacidad, Términos y el pie).

## Cómo publicarlo en GitHub Pages (5 min)

1. Crea un repositorio en GitHub, por ejemplo `sechome-web`.
2. Sube **el contenido de esta carpeta `website/`** a la raíz del repo (los 4 `.html` y la carpeta `assets/`).
   - Con la web de GitHub: "Add file → Upload files" y arrastra todo.
   - O por git: copia estos archivos a tu repo, `git add . && git commit -m "web" && git push`.
3. En el repo → **Settings → Pages**.
4. En "Build and deployment" → Source: **Deploy from a branch**. Branch: **main** / **/(root)** → Save.
5. Espera 1-2 min. GitHub te dará la URL: `https://TU_USUARIO.github.io/sechome-web/`

## URLs para las tiendas (App Store / Google Play)

Una vez publicado, estas son las URLs que te piden:

- **Política de privacidad:** `https://TU_USUARIO.github.io/sechome-web/privacy.html`
- **Términos y condiciones:** `https://TU_USUARIO.github.io/sechome-web/terms.html`
- **Soporte / URL de asistencia:** `https://TU_USUARIO.github.io/sechome-web/support.html`

(Si usas un repo llamado `TU_USUARIO.github.io`, las URLs van sin el `/sechome-web/`.)

## Editar

- **Textos/traducciones:** todo está en `assets/i18n.js`, un idioma por bloque (`I18N.es = { ... }`).
- **Correo de contacto:** búscalo (`neowavecode@gmail.com`) en los `.html` y en `i18n.js` si algún día lo cambias.
- **Fecha de las políticas:** clave `pp_updated` / `tc_updated` en cada idioma dentro de `i18n.js`.
- **Añadir un idioma:** copia un bloque `I18N.xx = {...}` en `i18n.js`, tradúcelo, y añade el código a `LANGS`/`NAMES` en `app.js`.

> Nota: es una web 100% estática (HTML/CSS/JS), sin backend. Funciona tal cual en GitHub Pages.
> Aviso honesto: las políticas y términos son una base sólida y clara, pero no son asesoramiento
> legal; si en algún mercado necesitas requisitos específicos, conviene una revisión legal final.
