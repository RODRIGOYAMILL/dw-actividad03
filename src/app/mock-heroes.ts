// Aqui se agrega todos los datos que tendra la lista de jugadores 
import { Hero } from './hero';

export const HEROES: Hero[] = [
  {
    id: 1, // ID del Jugador
    name: 'Lionel Messi', // Nombre del Jugador
    dorsal: 10, // Número del dorsal del Jugador
    image: 'assets/messi.jpg', // Ruta de la imagen del Jugador
    dateOfBirth: '24 de junio de 1987', // Fecha de nacimiento del Jugador
    height: '1.70 m', // Altura del Jugador
    weight: '72 kg', // Peso del Jugador
    nationality: 'Argentino', // Nacionalidad del Jugador
    position: 'Delantero', // Posición del Jugador
    goalsScored: 672, // Goles anotados por el Jugador
    assists: 305, // Asistencias realizadas por el Jugador
    yellowCards: 67, // Tarjetas amarillas recibidas por el Jugador
    redCards: 2, // Tarjetas rojas recibidas por el Jugador
    internationalCaps: 151 // Partidos internacionales jugados 
  },

  {
    id: 2,
    name: 'Neymar Jr',
    dorsal: 11,
    image: 'assets/neymar.jpg',
    dateOfBirth: '5 de febrero de 1992',
    height: '1.75 m',
    weight: '68 kg',
    nationality: 'Brasileño',
    position: 'Delantero',
    goalsScored: 228,
    assists: 188,
    yellowCards: 45,
    redCards: 2,
    internationalCaps: 108
  },
  {
    id: 3,
    name: 'Luis Suárez',
    dorsal: 9,
    image: 'assets/suarez.jpg',
    dateOfBirth: '24 de enero de 1987',
    height: '1.82 m',
    weight: '86 kg',
    nationality: 'Uruguayo',
    position: 'Delantero',
    goalsScored: 425,
    assists: 227,
    yellowCards: 98,
    redCards: 4,
    internationalCaps: 116
  },
  {
    id: 4,
    name: 'Andrés Iniesta',
    dorsal: 8,
    image: 'assets/iniesta.jpg',
    dateOfBirth: '11 de mayo de 1984',
    height: '1.70 m',
    weight: '68 kg',
    nationality: 'Español',
    position: 'Centrocampista',
    goalsScored: 57,
    assists: 139,
    yellowCards: 63,
    redCards: 0,
    internationalCaps: 131
  },
  {
    id: 5,
    name: 'Xavi Hernández',
    dorsal: 6,
    image: 'assets/xavi.jpg',
    dateOfBirth: '25 de enero de 1980',
    height: '1.70 m',
    weight: '68 kg',
    nationality: 'Español',
    position: 'Centrocampista',
    goalsScored: 85,
    assists: 182,
    yellowCards: 65,
    redCards: 1,
    internationalCaps: 133
  },
  {
    id: 6,
    name: 'Sergio Busquets',
    dorsal: 5,
    image: 'assets/busi.jpg',
    dateOfBirth: '16 de julio de 1988',
    height: '1.89 m',
    weight: '76 kg',
    nationality: 'Español',
    position: 'Centrocampista',
    goalsScored: 16,
    assists: 42,
    yellowCards: 101,
    redCards: 2,
    internationalCaps: 126
  },
  {
    id: 7,
    name: 'Javier Mascherano',
    dorsal: 14,
    image: 'assets/mascherano.jpg',
    dateOfBirth: '8 de junio de 1984',
    height: '1.74 m',
    weight: '73 kg',
    nationality: 'Argentino',
    position: 'Defensor',
    goalsScored: 3,
    assists: 7,
    yellowCards: 126,
    redCards: 6,
    internationalCaps: 147
  },
  {
    id: 8,
    name: 'Gerard Piqué',
    dorsal: 3,
    image: 'assets/pique.jpg',
    dateOfBirth: '2 de febrero de 1987',
    height: '1.94 m',
    weight: '85 kg',
    nationality: 'Español',
    position: 'Defensor',
    goalsScored: 48,
    assists: 12,
    yellowCards: 95,
    redCards: 4,
    internationalCaps: 102
  },
  {
    id: 9,
    name: 'Dani Alves',
    dorsal: 22,
    image: 'assets/alves.jpg',
    dateOfBirth: '6 de mayo de 1983',
    height: '1.73 m',
    weight: '68 kg',
    nationality: 'Brasileño',
    position: 'Defensor',
    goalsScored: 26,
    assists: 57,
    yellowCards: 89,
    redCards: 5,
    internationalCaps: 118
  }
];