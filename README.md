# OurHabits

Este repositorio contiene dos aplicaciones separadas:

- **ourhabits-backend**: API REST construida con Node.js, Express y Prisma para gestionar hábitos y usuarios.
- **ourhabits-frontend**: interfaz web creada con React y Vite que consume la API anterior.

## Instalación de dependencias

### Backend
1. `cd ourhabits-backend`
2. `npm install`
3. Define un archivo `.env` con las variables necesarias (`DATABASE_URL`, `JWT_SECRET`, etc.).
4. Ejecuta las migraciones de Prisma:
   ```bash
   npx prisma migrate dev
   ```
5. Inicia el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```

### Frontend
1. `cd ourhabits-frontend`
2. `npm install`
3. Copia `.env.example` a `.env` y ajusta `VITE_API_BASE_URL` con la URL de tu backend.
4. Lanza la aplicación de desarrollo:
   ```bash
   npm run dev
   ```

## Acceso mediante Cloudflare Tunnel

El archivo `config.yml` permite exponer el backend a internet usando Cloudflare. Para habilitarlo, instala `cloudflared` y ejecuta:

```bash
cloudflared tunnel --config config.yml run
```

Una vez activo el túnel, actualiza `VITE_API_BASE_URL` en el frontend para que apunte al dominio público definido en `config.yml`.

