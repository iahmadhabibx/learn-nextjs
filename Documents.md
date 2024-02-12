# Special Files
## page.tsx
## not-found.tsx
## layout.tsx
## template.tsx
## loading.tsx
## error.tsx
## default.tsx <!--This file acts as a fallback for the "slot" means paralell routes when you refresh the browser, if default.tsx is not present, the ui will go to not-found.tsx-->


# Parallel Routes usage (Same as multiple components)
## Each slot of your layout, such as user analytics or revenue metrics, can have its own loading and error states.

## This granular control is particularly beneficial in scenarios where different sections of the page load at varying speeds or encounter unique errors