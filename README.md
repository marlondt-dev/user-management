# User Management App

Aplicación de gestión de usuarios desarrollada con Vue 3 y TypeScript.

<img width="1910" height="667" alt="Captura de pantalla 2026-02-08 043452" src="https://github.com/user-attachments/assets/c1f3cf83-ffc6-4a1d-b3b9-6b1d855b74a3" />

<img width="1903" height="851" alt="Captura de pantalla 2026-02-08 043502" src="https://github.com/user-attachments/assets/5b2671a9-3102-42f4-8389-1f5b62aa6cae" />

## 🚀 Cómo arrancar el proyecto

### Prerrequisitos

- Node.js (v16 o superior)
- npm

### Instalación y ejecución

1. **Clonar el repositorio:**

```
git clone <url-del-repositorio>
cd user-management
```

2. **Instalar dependencias del frontend:**

```
npm install
```

3. **Instalar dependencias del servidor mock:**

```
cd server
npm install
cd ..
```

4. **Arrancar el servidor mock (Terminal 1):**

```
cd server
node index.js
```

El servidor estará disponible en `http://localhost:3001`

5. **Arrancar la aplicación Vue (Terminal 2):**

```
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

---

## 🏗️ Principales decisiones técnicas

### Arquitectura y estructura

- **Composition API**: Utilizada en todos los componentes para mejor organización del código y reutilización de lógica.
- **TypeScript**: Implementado para type safety y mejor experiencia de desarrollo.
- **Composables**: Creación de `useUsers` para centralizar la lógica de gestión de usuarios y hacerla reutilizable.
- **Servicios**: Separación de la lógica de llamadas HTTP en `api.ts` para facilitar el mantenimiento y testing.

### Internacionalización

- **vue-i18n**: Implementación completa en 5 idiomas (ES, EN, IT, FR, DE).
- **Estructura escalable**: Archivos JSON separados por idioma para facilitar la adición de nuevas traducciones.

### Servidor Mock

- **Express.js local**: Servidor HTTP real (no solo interceptores) para simular mejor el comportamiento de una API REST.
- **CORS habilitado**: Permite la comunicación entre el frontend (puerto 5173) y el backend (puerto 3001).
- **Datos en memoria**: Los datos no persisten al reiniciar.

### Estilos

- **SCSS**: Uso de variables, mixins y estructura modular para estilos mantenibles.
- **Diseño responsive**: Grid layout adaptable para diferentes tamaños de pantalla.

### Validaciones

- **Validación en tiempo real**: Feedback inmediato al usuario sobre errores en el formulario.
- **Validaciones implementadas**:
  - Campos obligatorios
  - Fecha válida
  - Fecha no futura
  - Limpieza de espacios en blanco

### Gestión de errores

- La aplicación utiliza clases de error personalizadas que extienden de `Error`,
  permitiendo diferenciar errores de dominio y mostrar mensajes adecuados en la UI.

---

## 🔧 Qué mejoraría con más tiempo

### Funcionalidades

- **Persistencia de datos**: Implementar una base de datos real (PostgreSQL/MongoDB) en lugar de almacenamiento en memoria.
- **Búsqueda y filtros**: Añadir funcionalidad para buscar usuarios por nombre o filtrar por edad.
- **Edición de usuarios**: Permitir modificar los datos de usuarios existentes.
- **Eliminación de usuarios**: Funcionalidad para borrar usuarios de la lista.
- **Paginación**: Implementar paginación para manejar grandes cantidades de usuarios.

---

## 📦 Tecnologías utilizadas

- **Vue 3** - Framework frontend
- **TypeScript** - Tipado estático
- **Vite** - Build tool
- **Vue Router** - Enrutamiento
- **vue-i18n** - Internacionalización
- **SCSS** - Preprocesador CSS
- **Express.js** - Servidor mock
- **ESLint / Prettier** - Automatizar calidad y formato de código
---

## 📁 Estructura del proyecto

```
user-management/
├── server/
│   ├── index.js
│   └── package.json
├── src/
│   ├── assets/
│   │   └── scss/
│   ├── components/
│   ├── composables/
│   ├── errors/
│   ├── i18n/
│   │   ├── locales/
│   │   └── index.ts
│   ├── router/
│   ├── services/
│   ├── types/
│   └── views/
└── package.json
```

---

## 👤 Autor

Marlon Torres
