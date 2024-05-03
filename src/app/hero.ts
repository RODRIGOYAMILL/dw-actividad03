// Creamos una interfaz para representar la estructura de un Jugador
export interface Hero {
  id: number; // ID del Jugador
  name: string; // Nombre del Jugador
  dorsal: number; // Número del dorsal del Jugador
  image: string; // Ruta de la imagen del Jugador
  dateOfBirth: string; // Fecha de nacimiento del Jugador
  height: string; // Altura del Jugador
  weight: string; // Peso del Jugador
  nationality: string; // Nacionalidad del Jugador
  position: string; // Posición del Jugador
  goalsScored: number; // Goles anotados por el Jugador
  assists: number; // Asistencias realizadas por el Jugador
  yellowCards: number; // Tarjetas amarillas recibidas por el Jugador
  redCards: number; // Tarjetas rojas recibidas por el Jugador
  internationalCaps: number; // Partidos internacionales jugados por el Jugador
}