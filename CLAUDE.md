# CLAUDE.md — Portfolio de Daniel Jiménez

## Resumen del proyecto

Portfolio personal de Daniel Jiménez, ingeniero informático de último año (IA/ML, UCM, Segovia). Objetivo dual: captar clientes locales para freelance de desarrollo web (restaurantes, peluquerías, comercios de Segovia) y mostrar perfil técnico a posibles empleadores. El mensaje prioriza al cliente no técnico; la calidad del código habla al empleador.

## Stack técnico

- **Framework:** Astro 6, static output (sin adapter)
- **Lenguaje:** TypeScript estricto
- **Estilos:** Tailwind CSS v4 integrado como plugin de Vite — NO usar `@astrojs/tailwind` (deprecada)
- **Contenido:** Content Collections con Content Layer API
- **Navegación:** View Transitions vía `<ClientRouter />`
- **Deployment:** Vercel (sitio estático)
- **Formulario de contacto:** Formspree

## Comandos

```bash
npm run dev        # servidor de desarrollo
npm run build      # build de producción
npm run preview    # previsualizar el build
npm run astro check # verificación de tipos
```

## Design system (tokens inviolables)

| Token | Valor |
|---|---|
| Fondo | `#f5f5f0` (off-white cálido) |
| Texto principal | `#1a1a2e` (casi negro, matiz azulado) |
| Acento | `#4a6fa5` (azul sobrio) |
| Fondo tarjetas | `#e8eef7` (azul muy claro) |
| Tipografía | Inter vía Astro Fonts API, fallback `system-ui` |
| Radios | Sutiles: 4px–8px máximo |
| Sombras | Mínimas; preferir bordes de 1px con opacidad |

NUNCA usar colores, fuentes o espaciados fuera de estos tokens.

## Idioma y tono

- Todo el contenido en **español de España**, tuteo, primera persona
- Frases de 12–18 palabras, tono sobrio y cercano
- Orientado a captar clientes de negocio (beneficio concreto, no jerga técnica)
- **Prohibido:** "apasionado", "innovador", "sinergia", "orientado a resultados" y similares
- Sustituir siempre adjetivos vacíos por **evidencia concreta**

## Reglas de código

- Componentes Astro por defecto; islands (Preact) solo si la interactividad lo exige estrictamente
- Preferir vanilla JS en `<script>` tags antes que islands
- **Accesibilidad WCAG 2.2 AA:** labels asociados a inputs, `aria-describedby` para errores, `role="alert"` para mensajes dinámicos
- Imágenes siempre vía `<Image />` de `astro:assets` (optimización automática a WebP)
- **SEO:** cada página con `<meta>` title, description y OpenGraph completos

## Principios de trabajo

- Mínimo código que resuelva el problema. Nada especulativo.
- No añadir abstracciones hasta que el patrón se repita 3 veces.
- Si hay dudas sobre una decisión de diseño o arquitectura, preguntar antes de implementar.
- Precisión sobre amabilidad: cuestionar asunciones si se detecta un problema.

## Audiencia dual

| Audiencia | Qué necesita ver |
|---|---|
| Cliente local (no técnico) | El beneficio para su negocio, no la tecnología |
| Empleador técnico | Rigor, stack moderno, buenas prácticas |

**Estrategia:** el mensaje prioriza al cliente; el rigor técnico se demuestra por la calidad del propio sitio.
