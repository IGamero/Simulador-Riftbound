# Riftbound — Simulador TCG de League of Legends

Riftbound es un simulador de **juego de cartas coleccionables (TCG)** ambientado en el universo de *League of Legends*.  
El objetivo del proyecto es recrear la experiencia del futuro *Riftbound TCG*: permitiendo **ver cartas**, **crear mazos personalizados** y **jugar partidas online**.

---

## Características principales

### Visualización de cartas
- Navega por la colección completa de cartas.  
- Filtros avanzados por tipo, región, rareza o coste.  
- Diseño adaptable con estilo visual inspirado en el universo de Runaterra.

### Creador de mazos
- Crea, edita y guarda tus propios mazos.  
- Sistema de búsqueda rápida por nombre o efecto.  
- Validación automática del número de cartas por mazo.

### Simulador de partidas
- Interfaz de juego con tablero dinámico.  
- Interacción en tiempo real (jugador vs jugador online).  
- Reglas basadas en el sistema del TCG de *League of Legends*.

---

## Tecnologías principales

### Frontend
- **React + TypeScript**  
- **Vite** para un desarrollo rápido  
- **Styled Components** para los estilos modulares  
- Integración con **Google OAuth** para inicio de sesión  

### Backend *(en desarrollo)*
- **Node.js** + **NestJS / Express**  
- Base de datos **MariaDB / MongoDB**  
- Autenticación y gestión de partidas en tiempo real (WebSocket)


---

## Scripts útiles

Desde el directorio `/frontend`:

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# O también
npm start

# Generar build de producción
npm run build

# Previsualizar el build
npm run preview

---

## Objetivos futuros

- Autenticación y registro de usuarios
- Sistema completo de creación de mazos
- Partidas en tiempo real con reglas completas
- Modo espectador y clasificación online
- Editor de cartas personalizadas

---

## Desarrollador

**Iván Gamero**  
Desarrollador full stack especializado en TypeScript, Node.js y React.

> “Riftbound busca llevar la esencia de Runaterra al formato TCG.”

---

## Licencia

Este proyecto se distribuye bajo licencia **MIT**.  
*League of Legends* y *Runaterra* son propiedad de Riot Games, Inc.  
Riftbound es un proyecto no oficial con fines educativos y demostrativos.




