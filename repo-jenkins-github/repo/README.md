# demo-ci-jenkins

Práctica de integración continua con **Jenkins**: pipeline de 3 etapas sobre un proyecto mínimo en Node.js.

## Etapas del pipeline (`Jenkinsfile`)
1. **Integración al repo** – clona el repositorio con la credencial `git-privado`.
2. **Compilación y test** – `npm ci`, `npm run build`, `npm test`.
3. **Notificación** – mensaje por Telegram (éxito o fallo) desde el bloque `post`.

## Configuración en Jenkins
- Plugin **NodeJS** y herramienta llamada `node20`.
- Credenciales: `git-privado` (usuario + token), `telegram-token` y `telegram-chat-id` (secret text).
- Job tipo **Pipeline**; cambia `REPO_URL` en el `Jenkinsfile` por la URL de tu repo.

## Probar un fallo
En `suma.test.js` cambia `5` por `6`, haz commit y push, y vuelve a ejecutar el job.

## Imágenes (`docs/`)
Son **simulaciones ilustrativas** del aspecto esperado, no capturas de una ejecución real.
