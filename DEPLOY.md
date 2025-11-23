# Guía de Despliegue en Vercel

Esta guía te ayudará a desplegar tu portfolio en Vercel de forma rápida y sencilla.

## Por qué Vercel

- Despliegue automático desde Git
- HTTPS gratuito con certificado SSL
- CDN global para máxima velocidad
- Preview deployments para cada commit
- Configuración cero para React + Vite
- Dominio personalizado gratuito
- Analíticas integradas

## Requisitos Previos

- Cuenta de GitHub (o GitLab/Bitbucket)
- Cuenta en Vercel (gratuita en [vercel.com](https://vercel.com))
- Tu código en un repositorio Git

## Método 1: Despliegue desde la Web (Recomendado)

### Paso 1: Preparar el Repositorio

```bash
# Asegúrate de que todos los cambios estén guardados
git add .
git commit -m "Preparar portfolio para despliegue"
git push origin main
```

### Paso 2: Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Click en **"Add New Project"**
3. Selecciona **"Import Git Repository"**
4. Conecta tu cuenta de GitHub/GitLab/Bitbucket
5. Selecciona el repositorio de tu portfolio

### Paso 3: Configurar el Proyecto

Vercel detectará automáticamente que es un proyecto Vite. Verifica que la configuración sea:

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### Paso 4: Desplegar

1. Click en **"Deploy"**
2. Espera 1-2 minutos mientras Vercel compila tu proyecto
3. ¡Listo! Tu portfolio estará disponible en una URL tipo: `tu-portfolio.vercel.app`

## Método 2: Despliegue con CLI

### Instalación

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel
```

### Despliegue

```bash
# Desde la raíz del proyecto
vercel

# Sigue las instrucciones:
# 1. Set up and deploy? Yes
# 2. Which scope? (Tu cuenta)
# 3. Link to existing project? No
# 4. What's your project's name? portfolio
# 5. In which directory is your code located? ./
# 6. Want to override the settings? No
```

### Despliegue a Producción

```bash
# Para desplegar directamente a producción
vercel --prod
```

## Configuración Avanzada

### Dominio Personalizado

1. En Vercel Dashboard, ve a tu proyecto
2. Click en **"Settings"** > **"Domains"**
3. Añade tu dominio personalizado
4. Configura los DNS según las instrucciones de Vercel

### Variables de Entorno (si las necesitas)

1. Ve a **"Settings"** > **"Environment Variables"**
2. Añade tus variables (formato: `VITE_API_URL=https://api.example.com`)
3. Re-despliega el proyecto

### Configuración del Build

El archivo `vercel.json` ya está configurado correctamente:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Esto asegura que todas las rutas redirijan a `index.html` para el correcto funcionamiento del SPA.

## Despliegues Automáticos

Una vez configurado, Vercel desplegará automáticamente:

- **Production**: Cada commit en la rama `main`
- **Preview**: Cada commit en otras ramas o Pull Requests

## Verificar el Despliegue

Después del despliegue, verifica:

1. ✅ El sitio carga correctamente
2. ✅ Los temas (claro/oscuro) funcionan
3. ✅ El cambio de idioma (ES/EN) funciona
4. ✅ Las imágenes se cargan correctamente
5. ✅ Los enlaces a proyectos abren correctamente
6. ✅ El sitio es responsive en móvil

## Comandos Útiles de Vercel CLI

```bash
# Ver logs del despliegue
vercel logs

# Listar todos tus proyectos
vercel list

# Remover un proyecto
vercel remove nombre-proyecto

# Ver información del proyecto
vercel inspect
```

## Solución de Problemas

### Error: "Build failed"

```bash
# Verifica que el build funcione localmente
npm run build

# Si funciona local, limpia node_modules y re-intenta
rm -rf node_modules package-lock.json
npm install
vercel --prod
```

### Las imágenes no se cargan

- Asegúrate de que las imágenes estén en `src/assets/`
- Verifica que estés importando correctamente: `import img from '../assets/img.jpg'`

### Error 404 en rutas

- Verifica que el archivo `vercel.json` exista en la raíz
- Asegúrate de que tenga la configuración de rewrites

### El sitio no actualiza

```bash
# Fuerza un nuevo despliegue
vercel --prod --force
```

## Optimizaciones Post-Despliegue

### 1. Configurar Analytics

1. En Vercel Dashboard, ve a **"Analytics"**
2. Activa las analíticas (gratis para hasta 100k eventos/mes)

### 2. Optimizar Rendimiento

- Vercel automáticamente optimiza imágenes
- Habilita compresión (ya activada por defecto)
- Usa lazy loading para componentes pesados

### 3. SEO

Añade meta tags en `index.html`:

```html
<meta name="description" content="Portfolio de Cristian Rosca - Full-Stack Developer">
<meta property="og:title" content="Cristian Rosca - Portfolio">
<meta property="og:description" content="Full-Stack Developer especializado en React, TypeScript y .NET">
```

## Monitoreo

### Ver Estadísticas

1. Ve a tu proyecto en Vercel Dashboard
2. Revisa:
   - Número de visitantes
   - Países de origen
   - Páginas más visitadas
   - Tiempo de carga

### Logs en Tiempo Real

```bash
# Ver logs en tiempo real
vercel logs --follow
```

## Actualizar el Portfolio

```bash
# Haz cambios en tu código local
git add .
git commit -m "Actualizar información de proyectos"
git push origin main

# Vercel desplegará automáticamente en 1-2 minutos
```

## Rollback (Volver a Versión Anterior)

1. Ve a tu proyecto en Vercel Dashboard
2. Click en **"Deployments"**
3. Encuentra el despliegue anterior que funcionaba
4. Click en los tres puntos (...) > **"Promote to Production"**

## Recursos Adicionales

- [Documentación de Vercel](https://vercel.com/docs)
- [Configuración de Vite en Vercel](https://vercel.com/docs/frameworks/vite)
- [Dominios Personalizados](https://vercel.com/docs/custom-domains)
- [Variables de Entorno](https://vercel.com/docs/environment-variables)

## Soporte

Si tienes problemas:

1. Revisa los logs en Vercel Dashboard
2. Consulta la [documentación oficial](https://vercel.com/docs)
3. Busca en [Vercel Discussions](https://github.com/vercel/vercel/discussions)

---

**¡Tu portfolio estará en línea en menos de 5 minutos!**

Para cualquier duda, consulta la [documentación oficial de Vercel](https://vercel.com/docs).
