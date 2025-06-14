# Aplicación de hábitos y presupuestos

Este repositorio contiene la estructura inicial para crear una aplicación móvil sencilla que se conecta a un servidor local. La idea es que únicamente tú y tu pareja puedan utilizarla.

## Estructura del proyecto

- `server/` – Servidor Express con SQLite para almacenar tareas y presupuestos.
- `mobile/` – Carpeta destinada a la aplicación móvil (por ejemplo, React Native o Flutter).

## Cómo empezar

1. Clona este repositorio y entra en la carpeta `server`.
2. Instala las dependencias con `npm install` y ejecuta `npm start` para poner en marcha el servidor local.
3. Dentro de `mobile/` puedes crear tu aplicación móvil con el framework que prefieras.
   - **React Native**: `npx react-native init MiApp` dentro de la carpeta.
   - **Flutter**: `flutter create mi_app` y mueve el contenido aquí.
4. Configura la app móvil para que haga peticiones HTTP a la dirección del servidor (por defecto `http://<TU_IP>:3000`).

Consulta el archivo `server/README.md` para más información sobre los endpoints disponibles.

## Ejecutar con Docker

Dentro de la carpeta `server` se incluye un `Dockerfile` y un `docker-compose.yml` para que puedas levantar el backend fácilmente:

```bash
cd server
docker compose up -d --build
```

De esta manera la base de datos se guardará en `server/habits.db` y el puerto 3000 quedará expuesto.

## Servidor accesible desde Internet

Para que tú y tu pareja puedan usar la aplicación fuera de casa configura un servicio de DNS dinámico como DuckDNS y abre el puerto 3000 de tu router hacia la computadora que ejecute el contenedor. Así podréis usar la app desde `http://tusubdominio.duckdns.org:3000`.
