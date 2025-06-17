# OurHabits Frontend

Este frontend utiliza React y Vite. Contiene un sencillo formulario de registro e inicio de sesión que se comunica con el backend de OurHabits.

## Variables de entorno

Copia el archivo `.env.example` a `.env` y ajusta `VITE_API_BASE_URL` con la URL base de tu backend (por defecto `http://localhost:3000`).

```bash
cp .env.example .env
```

## Scripts

- `npm run dev` &mdash; ejecuta la aplicación en modo desarrollo.
- `npm run build` &mdash; genera la versión de producción.

## Despliegue por túnel Cloudflare

Si expones tu backend local mediante un túnel de Cloudflare (por ejemplo `ourhabits.org`), asegúrate de que `VITE_API_BASE_URL` apunte a ese dominio para que el frontend pueda acceder desde cualquier lugar.
