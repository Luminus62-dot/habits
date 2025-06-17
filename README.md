# OurHabits

Este repositorio incluye tanto el _backend_ como el _frontend_ de **OurHabits**.

## Ejecutar pruebas

1. Instala las dependencias en `ourhabits-backend`:
   ```bash
   cd ourhabits-backend
   npm install
   ```
2. Lanza los tests con:
   ```bash
   npm test
   ```

## Instalación y desarrollo

### Backend
1. `cd ourhabits-backend`
2. `npm install`
3. Copia `.env.example` a `.env` y ajusta las variables (`DATABASE_URL`, `JWT_SECRET`, etc.).
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
3. Copia `.env.example` a `.env` y actualiza `VITE_API_BASE_URL` según corresponda.
4. Ejecuta en modo desarrollo:
   ```bash
   npm run dev
   ```

## Acceso mediante Cloudflare Tunnel

El archivo `config.yml` permite exponer el backend usando Cloudflare. Instala `cloudflared` y ejecuta:
```bash
cloudflared tunnel --config config.yml run
```
Luego actualiza `VITE_API_BASE_URL` en el frontend para apuntar al dominio público.

## Configuración del túnel de Cloudflare

Si tus credenciales no están en `~/.cloudflared/cred.json`, define la variable de entorno `CLOUDFLARED_CREDENTIALS_FILE` con la ruta correcta antes de lanzar `cloudflared`.
