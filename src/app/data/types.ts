// Tipi TypeScript per i dati mock di Hotel Vista Mare

export interface Indirizzo {
  via: string;
  citta: string;
  provincia: string;
  cap: string;
  regione: string;
  paese: string;
  lat: number;
  lng: number;
}

export interface Contatti {
  telefono: string;
  whatsapp: string;
  email: string;
  social: {
    instagram?: string;
    facebook?: string;
  };
}

export interface OrariHotel {
  checkIn: string;
  checkOut: string;
  reception: string;
  ristorante: string;
  spa: string;
  piscina: string;
}

export interface ServiziHotel {
  wifiGratuito: boolean;
  parcheggio: string;
  navettaStazione: boolean;
  ristoranteInterno: boolean;
  spa: boolean;
  piscina: boolean;
  accessibileDisabili: boolean;
  petPolicy: string;
  ariaCondizionata: boolean;
}

export interface MetaSeo {
  title: string;
  description: string;
  keywords: string[];
}

export interface InfoHotel {
  ragioneSociale: string;
  nomeCommerciale: string;
  tagline: string;
  stelle: number;
  numCamere: number;
  indirizzo: Indirizzo;
  contatti: Contatti;
  orari: OrariHotel;
  servizi: ServiziHotel;
  metaSeo: MetaSeo;
}

export interface TipologiaCamera {
  id: string;
  nome: string;
  descrizione: string;
  prezzoPerNotte: number;
  prezzoWeekend: number;
  maxOspiti: number;
  mq: number;
  letti: string;
  vista: string;
  disponibili: number;
  badge: string | null;
  dotazioni: string[];
}

export interface Camere {
  tipologie: TipologiaCamera[];
}

export interface ServizioHotel {
  id: string;
  categoria: string;
  nome: string;
  descrizione: string;
  orari: string;
  icon: string;
  dettagli: string[];
}

export interface PacchettoHotel {
  id: string;
  nome: string;
  descrizione: string;
  prezzoDa: number;
  dettagli: string[];
}

export interface Servizi {
  servizi: ServizioHotel[];
  pacchetti: PacchettoHotel[];
}

export interface MembroTeam {
  id: number;
  nome: string;
  ruolo: string;
  bio: string;
  anniEsperienza: number;
  image: string;
  specialita: string[];
}

export interface Team {
  team: MembroTeam[];
}

export interface FaqItem {
  domanda: string;
  risposta: string;
}

export interface Faq {
  faq: FaqItem[];
}
