import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-servizi',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, NgFor, NgIf, RouterLink],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>Servizi, Spa e Pacchetti</h1>
        <p>Tutto ciò che rende il vostro soggiorno all'Hotel Vista Mare indimenticabile</p>
      </div>
    </section>

    <article class="demo-container content" *ngIf="servizi$ | async as data">
      <section class="servizi-section">
        <h2>I nostri servizi</h2>
        <ul class="servizi-grid">
          <li *ngFor="let s of data.servizi" class="servizio-card">
            <span class="servizio-icon" aria-hidden="true">{{ s.icon }}</span>
            <div class="servizio-body">
              <span class="servizio-cat">{{ s.categoria }}</span>
              <h3>{{ s.nome }}</h3>
              <p class="servizio-desc">{{ s.descrizione }}</p>
              <p class="servizio-orari"><strong>Orari:</strong> {{ s.orari }}</p>
              <ul class="servizio-dettagli">
                <li *ngFor="let d of s.dettagli">{{ d }}</li>
              </ul>
            </div>
          </li>
        </ul>
      </section>

      <section class="pacchetti-section">
        <h2>Pacchetti soggiorno</h2>
        <p class="pacchetti-intro">Abbiamo pensato a combinazioni speciali per rendere il vostro soggiorno ancora più memorabile.</p>
        <ul class="pacchetti-grid">
          <li *ngFor="let p of data.pacchetti" class="pacchetto-card">
            <div class="pacchetto-head">
              <h3>{{ p.nome }}</h3>
              <div class="pacchetto-price">
                <span class="price-from">da</span>
                <span class="price-amount">{{ p.prezzoDa | currency: 'EUR' }}</span>
              </div>
            </div>
            <p class="pacchetto-desc">{{ p.descrizione }}</p>
            <ul class="pacchetto-includes">
              <li *ngFor="let d of p.dettagli">{{ d }}</li>
            </ul>
            <a routerLink="/contatti" class="btn btn-primary">Richiedi info</a>
          </li>
        </ul>
      </section>
    </article>
  `,
  styles: [
    `
      .page-header {
        padding: 4rem 1rem 3rem;
        background: linear-gradient(180deg, #e0f2fe 0%, var(--color-bg-subtle) 100%);
        text-align: center;
        border-bottom: 1px solid var(--color-border);
      }
      .page-header h1 {
        margin: 0 0 0.5rem;
      }
      .page-header p {
        color: var(--color-fg-muted);
        margin: 0;
      }
      .content {
        padding: 3rem 1rem;
      }
      .servizi-section {
        margin-bottom: 4rem;
      }
      .servizi-section h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .servizi-grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 1.5rem;
      }
      .servizio-card {
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        padding: 1.5rem;
        display: flex;
        gap: 1rem;
        background: #ffffff;
      }
      .servizio-icon {
        font-size: 2.5rem;
        flex-shrink: 0;
        line-height: 1;
        margin-top: 0.2rem;
      }
      .servizio-body {
        flex: 1;
      }
      .servizio-cat {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-accent);
        font-weight: 600;
      }
      .servizio-body h3 {
        margin: 0.2rem 0 0.5rem;
        font-size: 1.1rem;
      }
      .servizio-desc {
        font-size: 0.9rem;
        color: var(--color-fg-muted);
        margin: 0 0 0.5rem;
        line-height: 1.5;
      }
      .servizio-orari {
        font-size: 0.85rem;
        margin: 0 0 0.75rem;
        color: var(--color-fg-muted);
      }
      .servizio-dettagli {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
      }
      .servizio-dettagli li {
        font-size: 0.82rem;
        color: var(--color-fg-muted);
        padding-left: 1rem;
        position: relative;
      }
      .servizio-dettagli li::before {
        content: '·';
        position: absolute;
        left: 0.2rem;
        color: var(--color-accent);
        font-weight: 700;
      }
      .pacchetti-section h2 {
        text-align: center;
        margin-bottom: 0.5rem;
      }
      .pacchetti-intro {
        text-align: center;
        color: var(--color-fg-muted);
        margin-bottom: 2rem;
      }
      .pacchetti-grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
      }
      .pacchetto-card {
        border: 2px solid var(--color-accent);
        border-radius: var(--radius-lg);
        padding: 1.75rem;
        background: #f0f9ff;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }
      .pacchetto-head {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1rem;
      }
      .pacchetto-head h3 {
        margin: 0;
        font-size: 1.2rem;
      }
      .pacchetto-price {
        text-align: right;
        flex-shrink: 0;
      }
      .price-from {
        display: block;
        font-size: 0.75rem;
        color: var(--color-fg-muted);
      }
      .price-amount {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--color-accent);
      }
      .pacchetto-desc {
        margin: 0;
        font-size: 0.9rem;
        color: var(--color-fg-muted);
        line-height: 1.5;
      }
      .pacchetto-includes {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        flex: 1;
      }
      .pacchetto-includes li {
        font-size: 0.85rem;
        padding-left: 1.2rem;
        position: relative;
        color: var(--color-fg-muted);
      }
      .pacchetto-includes li::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: var(--color-accent);
        font-weight: 700;
      }
      .btn {
        display: inline-block;
        padding: 0.65rem 1.25rem;
        border-radius: var(--radius-md);
        text-decoration: none;
        font-weight: 600;
        font-size: 0.9rem;
        text-align: center;
      }
      .btn-primary {
        background: var(--color-accent);
        color: #ffffff;
      }
      .btn-primary:hover {
        background: #083d5a;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiziComponent {
  private readonly mockData = inject(MockDataService);

  readonly servizi$ = this.mockData.servizi$;
}
