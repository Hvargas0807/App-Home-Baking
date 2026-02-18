🧁 App Home Baking - Proyecto de Automatización de Pruebas

Proyecto de automatización End-to-End (E2E) desarrollado con Cypress para validar las funcionalidades principales de la aplicación App Home Baking.

📌 Descripción del Proyecto

Este proyecto contiene pruebas automatizadas diseñadas para validar flujos críticos de usuario y comportamientos de la interfaz de la aplicación.

Principales Escenarios de Prueba Cubiertos

✅ Autenticación de usuarios

✅ Validación de cuentas/productos

✅ Verificación de contenido en la UI

✅ Flujos funcionales de navegación

✅ Validación de datos dentro de las tarjetas de cuenta

El objetivo de este proyecto es demostrar prácticas de automatización estructuradas, mantenibles y escalables.

🛠 Stack Tecnológico

Cypress

JavaScript (ES6+)

Node.js

Git & GitHub

📂 Estructura del Proyecto

cypress/
│
├── e2e/ # Especificaciones de pruebas
├── fixtures/ # Datos estáticos de prueba
├── support/ # Comandos personalizados y configuración global
│
cypress.config.js # Archivo de configuración de Cypress
package.json # Dependencias y scripts del proyecto

⚙️ Instalación

Clonar el repositorio:

git clone https://github.com/Hvargas0807/App-Home-Baking.git

Ingresar al proyecto:

cd App-Home-Baking

Instalar dependencias:

npm install

▶️ Ejecución de Pruebas
Abrir Cypress en modo interfaz (UI mode)

npx cypress open

Ejecutar pruebas en modo headless

npx cypress run

📊 Artefactos de Prueba

Cypress genera automáticamente:

Capturas de pantalla (para pruebas fallidas)

Grabaciones en video (cuando se ejecuta en modo headless)

Los artefactos se almacenan en:

cypress/screenshots/
cypress/videos/

🧩 Enfoque de Automatización

Las aserciones están diseñadas para ser estables y legibles

Las pruebas evitan el uso de esperas fijas (hard-coded waits)

Los selectores son específicos y bien definidos

Los casos de prueba están estructurados para facilitar el mantenimiento

La lógica de validación considera el contenido real del DOM (no transformaciones CSS)

🚀 Mejoras Futuras

Implementar Page Object Model (POM)

Agregar cobertura de pruebas de API

Integrar GitHub Actions para CI/CD

Agregar reporting de pruebas (Mochawesome u otro similar)

Incrementar la parametrización de datos de prueba

👤 Autor

Habid Vargas
QA Automation Engineer