# Portfolio - Cristian Rosca

Portfolio profesional interactivo con diseño tipo IDE (Visual Studio Code), modo claro/oscuro y soporte bilingüe (ES/EN).

## Características

- Diseño inspirado en VS Code con navegación tipo explorador de archivos
- Modo claro/oscuro con persistencia
- Internacionalización (Español/Inglés)
- Totalmente responsive
- 5 proyectos destacados con enlaces a demos y repositorios
- Secciones: Sobre mí, Experiencia, Proyectos, Skills, Educación y Contacto

## Stack Tecnológico

- React 18.2.0
- Vite 5.0.8
- CSS3 (variables CSS para temas)
- Context API

## Inicio Rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (puerto 3003)
npm run dev

# Compilar para producción
npm run build

# Vista previa del build
npm run preview
```

## Estructura del Proyecto

```
portfolio/
├── src/
│   ├── components/       # Componentes React
│   ├── contexts/         # Context API (idioma, tema)
│   ├── locales/          # Traducciones ES/EN
│   ├── styles/           # Estilos CSS
│   ├── assets/           # Imágenes y recursos
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Compilar para producción
- `npm run preview` - Vista previa del build
- `npm run lint` - Ejecutar ESLint

## Despliegue

Ver [DEPLOY.md](./DEPLOY.md) para instrucciones detalladas de despliegue en Vercel.

## Personalización

Para personalizar el portfolio con tu información:

1. Edita los archivos de traducciones en `src/locales/`
2. Reemplaza la imagen de perfil en `src/assets/`
3. Modifica los colores del tema en `src/styles/index.css`

## Licencia

Proyecto de código abierto - Libre para usar como plantilla

## Autor

**Cristian Rosca**
Full-Stack Developer

- LinkedIn: [cristian-rosca-b444251b8](https://www.linkedin.com/in/cristian-rosca-b444251b8/)
- GitHub: [rosca-cristian](https://github.com/rosca-cristian)
- Email: roscacristian98@gmail.com
