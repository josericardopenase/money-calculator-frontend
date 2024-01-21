# Interfaz de Intercambio de Divisas

Esta aplicación es una interfaz de usuario para un sistema de intercambio de divisas, construida con React, TypeScript y Vite. Ofrece una experiencia de usuario fluida y eficiente para realizar operaciones de intercambio de divisas en tiempo real.

## Características Principales

- **Hot Module Replacement (HMR):** Recarga en vivo del módulo para un desarrollo rápido y eficiente.
- **TypeScript Integrado:** Proporciona tipado estático para un código más seguro y mantenible.
- **Vite para un Desarrollo Rápido:** Vite ofrece un servidor de desarrollo ultrarrápido con optimización de módulos.
- **Conexión con API de Intercambio de Divisas:** Interfaz diseñada para interactuar con la API de intercambio de divisas, permitiendo realizar y visualizar conversiones de moneda en tiempo real.

## Configuración de ESLint

La aplicación incluye una configuración de ESLint personalizada para garantizar la calidad del código:

1. **Parser Options:**
   - Configura las opciones del analizador para TypeScript y ECMAScript moderno.
   - `parserOptions` incluye:
     ```javascript
     {
       ecmaVersion: 'latest',
       sourceType: 'module',
       project: ['./tsconfig.json', './tsconfig.node.json'],
       tsconfigRootDir: __dirname,
     }
     ```

2. **Reglas de TypeScript:**
   - Utiliza `plugin:@typescript-eslint/recommended-type-checked` o `plugin:@typescript-eslint/strict-type-checked` para reglas más estrictas.
   - Opcionalmente, añade `plugin:@typescript-eslint/stylistic-type-checked`.

3. **Integración de React:**
   - Instala `eslint-plugin-react`.
   - Añade `plugin:react/recommended` y `plugin:react/jsx-runtime` a la lista de extensiones.

## Uso

Para comenzar a usar esta aplicación, sigue estos pasos:

1. Clona el repositorio y navega a su directorio:
   ```bash
   git clone [URL del repositorio]
   cd [Nombre del proyecto]
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

La aplicación ahora estará corriendo en `http://localhost:3000/` y estará lista para interactuar con la API de intercambio de divisas.

## Contribuciones

Las contribuciones son bienvenidas para mejorar la aplicación. Por favor, lee el archivo `CONTRIBUTING.md` para más detalles sobre cómo contribuir.

## Licencia

Este proyecto está bajo la licencia [Nombre de la Licencia]. Consulta el archivo `LICENSE` para más detalles.
