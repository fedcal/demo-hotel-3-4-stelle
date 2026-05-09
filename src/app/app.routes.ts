import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Hotel Vista Mare — 4 stelle Rimini sul mare dal 1978'
  },
  {
    path: 'camere',
    loadComponent: () => import('./pages/camere/camere.component').then((m) => m.CamereComponent),
    title: 'Camere e Suite — Hotel Vista Mare Rimini'
  },
  {
    path: 'chi-siamo',
    loadComponent: () => import('./pages/chi-siamo/chi-siamo.component').then((m) => m.ChiSiamoComponent),
    title: 'Chi siamo — Hotel Vista Mare Rimini'
  },
  {
    path: 'servizi',
    loadComponent: () => import('./pages/servizi/servizi.component').then((m) => m.ServiziComponent),
    title: 'Servizi: Spa, Ristorante, Pacchetti — Hotel Vista Mare'
  },
  {
    path: 'contatti',
    loadComponent: () => import('./pages/contatti/contatti.component').then((m) => m.ContattiComponent),
    title: 'Prenota il tuo soggiorno — Hotel Vista Mare Rimini'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
