# Servidor local de hábitos y presupuestos

Este directorio contiene un pequeño servidor Express con SQLite. Permite almacenar tareas y registros de presupuesto.

## Uso

1. Instala las dependencias:

```bash
npm install
```

2. Ejecuta el servidor:

```bash
npm start
```

Por defecto escuchará en el puerto **3000**.

## Endpoints básicos

- `GET /tasks` – Lista todas las tareas.
- `POST /tasks` – Crea una tarea. Debe enviarse `{ "title": "nombre" }`.
- `PUT /tasks/:id` – Marca una tarea como completada. Se envía `{ "completed": 1 }`.
- `GET /budgets` – Lista las entradas de presupuesto.
- `POST /budgets` – Crea una entrada. Enviar `{ "description": "texto", "amount": 10 }`.
