# OurHabits

Este repositorio contiene la configuración y el código para los proyectos **OurHabits**.

## Configuración del túnel de Cloudflare

El archivo `config.yml` define el túnel de Cloudflare utilizado para exponer el backend.
Para indicar dónde se encuentra el archivo de credenciales puedes definir la variable de
entorno `CLOUDFLARED_CREDENTIALS_FILE`:

```bash
export CLOUDFLARED_CREDENTIALS_FILE=~/.cloudflared/cred.json
```

Si no defines la variable, `config.yml` utilizará la ruta `~/.cloudflared/cred.json` por defecto.

Guarda el archivo de credenciales de tu túnel de Cloudflare en esa ubicación o ajusta la
variable de entorno antes de ejecutar `cloudflared`.
