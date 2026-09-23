# Primeros Pasitos

Landing page informativa y responsive para madres primerizas y familias.

## Tecnologías

- HTML5
- CSS3
- JavaScript vanilla
- SVG para las ilustraciones
- GitHub Pages para despliegue

## Estructura

```text
primeros-pasitos/
├── index.html
├── styles.css
├── script.js
├── .nojekyll
├── README.md
└── assets/
    ├── hero-mama-bebe.svg
    ├── etapa-embarazo.svg
    ├── etapa-lactancia.svg
    ├── etapa-complementaria.svg
    ├── etapa-preescolar.svg
    ├── lactancia.svg
    └── lonchera.svg
```

## Ejecutar localmente

No requiere Node.js.

1. Abre la carpeta.
2. Haz doble clic en `index.html`.
3. Para una experiencia más cercana a producción puedes usar la extensión **Live Server** de VS Code.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub, por ejemplo `primeros-pasitos`.
2. Sube todos los archivos manteniendo la carpeta `assets`.
3. En GitHub entra a **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/(root)`.
6. Guarda.
7. GitHub te mostrará el enlace de la página.

La página usa `index.html` como entrada y no necesita backend.
