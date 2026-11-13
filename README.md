# 📚 Ruta de Aprendizaje: Sequelize en 7 Días

Este repositorio contiene la estructura completa, explicaciones diarias y el **Proyecto Final funcional** de la guía compartida por Bianca.

---

## 🎯 Objetivo
Aprender a conectar una aplicación con base de datos mediante **Sequelize ORM** y construir una **API REST completa** en Express con operaciones CRUD y relaciones.

---

## 📅 Estructura del Plan de 7 Días

| Día | Tema | Archivos / Práctica en este Repo |
| :--- | :--- | :--- |
| **Día 1** | Introducción a Node.js y npm | `package.json`, scripts y módulos CommonJS |
| **Día 2** | Bases de datos, ORM e instalación | `src/config/database.js` (conexión SQLite plug-and-play) |
| **Día 3** | Modelos, tipos de datos y tablas | `src/models/Estudiante.js`, `src/models/Curso.js` |
| **Día 4** | Operaciones CRUD | `src/routes/estudiantes.js` (create, findAll, findByPk, update, destroy) |
| **Día 5** | Relaciones (N:M) y Validaciones | `src/models/index.js` (`belongsToMany`) y validadores de email/edad |
| **Día 6** | API REST con Express y Sequelize | `src/server.js`, routers modulares |
| **Día 7** | Proyecto Final y Pruebas Postman | `src/seed.js`, `postman_collection.json` |

---

## 🚀 Inicio Rápido (En 1 Minuto)

### 1. Instalar dependencias
```bash
npm install
```

### 2. (Opcional) Cargar datos de prueba
```bash
npm run seed
```

### 3. Iniciar el servidor
```bash
npm run dev
```
El servidor estará activo en `http://localhost:3000`.

---

## 🧪 Pruebas de Endpoints (Postman / cURL)

Puedes importar directamente el archivo `postman_collection.json` en Postman.

### Endpoints principales:
- `GET /api/estudiantes` - Listar estudiantes con sus cursos.
- `POST /api/estudiantes` - Crear estudiante (con validación de email y edad).
- `PUT /api/estudiantes/:id` - Actualizar estudiante.
- `DELETE /api/estudiantes/:id` - Eliminar estudiante.
- `POST /api/estudiantes/:id/cursos/:cursoId` - Inscribir estudiante a un curso.
- `GET /api/cursos` - Listar todos los cursos.
- `POST /api/cursos` - Crear curso.

---

## 📖 Recursos Oficiales
- [Node.js Getting Started](https://nodejs.org/learn/getting-started/introduction-to-nodejs)
- [Sequelize Getting Started](https://sequelize.org/docs/v6/getting-started/)
- [Sequelize Model Basics](https://sequelize.org/docs/v6/core-concepts/model-basics/)
- [Sequelize CRUD Queries](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/)
- [Sequelize Associations](https://sequelize.org/docs/v6/core-concepts/assocs/)
- [Express Routing](https://expressjs.com/es/starter/basic-routing/)
