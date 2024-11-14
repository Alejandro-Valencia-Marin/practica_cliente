# To Do List - Proyecto JavaScript

## Descripción

Este proyecto consiste en una aplicación web de lista de tareas (To Do List) donde el usuario puede agregar tareas, marcarlas como completadas y eliminarlas. Se utiliza JavaScript para manejar la lógica y el DOM, y el diseño es responsivo y visualmente atractivo gracias a CSS.

## Decisiones de Desarrollo

- **Uso de constantes**: Las constantes como selectores y mensajes se definen en un archivo separado (`constants.js`) para facilitar el mantenimiento y la modificación del código.
- **Interactividad**: La aplicación responde a eventos como clics y pulsaciones de teclas (para agregar tareas) para mejorar la experiencia del usuario.
- **Estructura de Código**: El código JavaScript se organiza en funciones pequeñas y manejables. Cada función tiene una responsabilidad clara (agregar tarea, marcar como completada, eliminar tarea).
- **CSS**: Se utilizó un diseño simple pero moderno, con efectos visuales como el hover en los botones de eliminar y la línea tachada para tareas completadas.

## Funcionalidades Implementadas

1. **Agregar tareas**: El usuario puede agregar una tarea a la lista desde un input de texto.
2. **Marcar tareas como completadas**: Al hacer clic en una tarea, esta se marcará como completada (con una línea tachada).
3. **Eliminar tareas**: Cada tarea tiene un botón de eliminar que solo se muestra cuando el usuario pasa el ratón por encima de la tarea.

## Mejoras Posibles

- Añadir persistencia (guardar las tareas en localStorage o en una base de datos).
- Mejorar el diseño con iconos o animaciones.
- Implementar categorías para las tareas.
