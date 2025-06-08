# Astro Skeleton Starter Kit

## Guía de Instalación y Ejecución de un Proyecto con Bun 🚀

### 1. 📥 Descargar el Repositorio desde GitHub como ZIP

- Haz clic en el botón verde **"Code"**
- Selecciona **"Download ZIP"**
- Extrae el archivo ZIP en una carpeta de tu elección

### 2. 🌐 Modificar datos del proyecto

- Navega a la carpeta del proyecto descomprimido. Ejemplo: `cd Descargas/astro-bun-skeleton-main`
- Modifica el archivo `package.json` con los datos de tu proyecto
- Renombra la carpeta `astro-bun-skeleton-main` por el dato **name** asignado en `package.json` 
- Crea una copia del archivo `.env.development` y renombra la copia con el nombre de `.env`

### 3. 🧰 Instalar Dependencias

- Abre la terminal
- Navega a la carpeta del proyecto descomprimido
- Ejecuta: `bun install`

### 4. 🚀 Ejecutar el Proyecto

- Ejecuta el comando: `bun run dev`

### 5. 🌐 Abrir el Proyecto en el Navegador

- Abre tu navegador preferido
- Ve a la dirección: <a href="http://localhost:4321" target="_blank">http://localhost:4321</a>
- Recomendado: Google Chrome para mejor compatibilidad

---

¡Listo! Ahora deberías tener el proyecto funcionando correctamente

## 🚀 Project Structure

| Folder                   | Description                                           |
| :------------------------ | :----------------------------------------------- |
| `src/assets`             | Archivo de imagenes, fuentes, etc. que seran optimizadas|
| `src/components`             | Componentes de la pagina web |
| `src/content`           | Archivos de contenido estructurado en formatos `*.json, *.ts, *.yml`          |
| `src/layouts`         | Archivos con estructura basica para diferentes paginas del proyecto |
| `src/pages`         | Archivos de paginas completas |
| `src/scripts`         | Archivos de tipo `*.js * *.ts` necesarios para que funcione un un `page, layouts, etc.`|
| `src/styles`         | Directorio principal que contiene archivos de tipo `*.css` para el proyecto |


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Instala las dependencias|
| `bun dev`             | Inicia un servidor local en `localhost:4321`      |
| `bun build`           | Construye la pagina web en la carpeta `./dist/`|
| `bun preview`         | Obtiene una vista previa de su compilación local, antes de implementarla|
