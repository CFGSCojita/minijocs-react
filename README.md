# 🎮 Minijuegos React — PixelGame Shop

Mini-proyecto integrado de React desarrollado como parte del proyecto **PixelGame Shop** para las asignaturas DIW, DWEC y DWES.

## 📋 Descripción

Aplicación web de minijuegos educativos que permite a los usuarios poner a prueba sus conocimientos de catalán y videojuegos para obtener descuentos en la tienda PixelGame Shop.

## 🎯 Minijuegos disponibles

- **Joc de Paraules** — Adivina palabras relacionadas con videojuegos a partir de pistas.
- **Questionari** — Responde preguntas de cultura general sobre videojuegos.

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| React 19 + Vite | Framework y bundler |
| React Router DOM | Navegación entre páginas |
| CSS puro + Flexbox | `Header.jsx` |
| CSS puro + Grid | `Home.jsx` |
| Tailwind CSS | `JocParaules.jsx` |
| SASS/SCSS | `Questionari.jsx` |
| CSS puro (tablas) | `ResultatFinal.jsx` |

## 📁 Estructura del proyecto

```
minijocs-react/
├── public/
├── src/
│   ├── assets/
│   │   └── img/
│   │       └── logo-black-removebg-preview.webp
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── JocParaules.jsx
│   │   ├── Questionari.jsx
│   │   └── ResultatFinal.jsx
│   ├── data/
│   │   ├── paraules.js
│   │   └── preguntes.js
│   ├── styles/
│   │   ├── Header.css
│   │   ├── Home.css
│   │   ├── Questionari.scss
│   │   └── ResultatFinal.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Instalación y ejecución:

### Requisitos previos
- Node.js >= 18
- npm

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/usuario/minijocs-react.git
cd minijocs-react

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```

## Enlaces

- [PixelGame Shop](https://remotehost.es/student006/shop)
- [Demo desplegada](https://minijocs-react.web.app) *(Firebase Hosting)*