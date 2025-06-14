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


## Contenedor Docker

Puedes ejecutar el servidor en un contenedor Docker. Primero construye la imagen y luego levanta el servicio con Docker Compose:

```bash
docker compose up -d --build
```

El archivo `docker-compose.yml` montará la base de datos `habits.db` en el contenedor y expondrá el puerto 3000. Puedes cambiar el puerto con la variable de entorno `PORT`.

## Acceso desde Internet

Si quieres acceder a tu servidor fuera de tu red local puedes usar un servicio de DDNS como DuckDNS. Registra un subdominio y configura tu router para redirigir el puerto 3000 hacia la máquina donde se ejecuta el contenedor. Así podrás entrar mediante `http://tusubdominio.duckdns.org:3000`.
