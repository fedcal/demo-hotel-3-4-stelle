import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, NgFor, NgIf, RouterLink],
  template: `
    <section class="hero">
      <div class="demo-container">
        <div class="hero__stars" aria-label="4 stelle">★★★★</div>
        <h1>Hotel Vista Mare</h1>
        <p class="hero-tagline">Il tuo soggiorno sulla Riviera Romagnola dal 1978</p>
        <p class="hero-sub">35 camere · Spa & Wellness · Ristorante di mare · Parcheggio gratuito</p>
        <div class="hero-actions">
          <a routerLink="/camere" class="btn btn-primary">Scopri le camere</a>
          <a routerLink="/contatti" class="btn btn-secondary">Prenota ora</a>
        </div>
      </div>
    </section>

    <section class="stats-band">
      <div class="demo-container">
        <ul class="stats-list">
          <li>
            <span class="stat-num">1978</span>
            <span class="stat-label">Anno di apertura</span>
          </li>
          <li>
            <span class="stat-num">35</span>
            <span class="stat-label">Camere</span>
          </li>
          <li>
            <span class="stat-num">4★</span>
            <span class="stat-label">Stelle</span>
          </li>
          <li>
            <span class="stat-num">400m²</span>
            <span class="stat-label">Spa & Wellness</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="features demo-container">
      <h2>Perché scegliere Hotel Vista Mare</h2>
      <ul class="feature-grid">
        <li>
          <span class="feature-icon" aria-hidden="true">🌊</span>
          <h3>Vista mare garantita</h3>
          <p>Camere Superior e Suite affacciate direttamente sull'Adriatico con balcone privato.</p>
        </li>
        <li>
          <span class="feature-icon" aria-hidden="true">♨️</span>
          <h3>Spa & Wellness 400m²</h3>
          <p>Piscina termale, sauna finlandese, bagno turco e trattamenti personalizzati.</p>
        </li>
        <li>
          <span class="feature-icon" aria-hidden="true">🍽️</span>
          <h3>Ristorante La Terrazza</h3>
          <p>Cucina romagnola di mare con pesce fresco dell'Adriatico e vini DOC locali.</p>
        </li>
        <li>
          <span class="feature-icon" aria-hidden="true">🅿️</span>
          <h3>Parcheggio gratuito</h3>
          <p>40 posti auto videosorvegliati. Colonnine ricarica elettrica. Navetta stazione inclusa.</p>
        </li>
      </ul>
    </section>

    <section class="featured demo-container" *ngIf="featuredCamere$ | async as camere">
      <div class="section-header">
        <h2>Le nostre camere</h2>
        <a routerLink="/camere" class="link-more">Tutte le tipologie →</a>
      </div>
      <ul class="camere-grid">
        <li *ngFor="let camera of camere" class="camera-card">
          <div class="camera-card__head">
            <div>
              <h3>{{ camera.nome }}</h3>
              <span class="camera-card__vista">{{ camera.vista }}</span>
            </div>
            <div class="camera-card__price-block">
              <span class="camera-card__from">da</span>
              <span class="camera-card__price">{{ camera.prezzoPerNotte | currency: 'EUR' }}</span>
              <span class="camera-card__night">/notte</span>
            </div>
          </div>
          <p class="camera-card__desc">{{ camera.descrizione }}</p>
          <div class="camera-card__meta">
            <span class="meta-tag">{{ camera.mq }} m²</span>
            <span class="meta-tag">Max {{ camera.maxOspiti }} ospiti</span>
            <span *ngIf="camera.badge" class="badge badge--featured">{{ camera.badge }}</span>
          </div>
        </li>
      </ul>
    </section>

    <section class="cta-band">
      <div class="demo-container">
        <h2>Prenota il tuo soggiorno sul mare</h2>
        <p>Reception attiva 24h — Check-in dalle 15:00 — Colazione inclusa in tutte le tariffe</p>
        <div class="hero-actions">
          <a routerLink="/contatti" class="btn btn-primary">Richiedi disponibilità</a>
          <a routerLink="/servizi" class="btn btn-secondary">Scopri i pacchetti</a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        padding: 5rem 1rem;
        text-align: center;
        background: linear-gradient(180deg, #e0f2fe 0%, #ffffff 100%);
        border-bottom: 1px solid var(--color-border);
      }
      .hero__stars {
        font-size: 1.5rem;
        color: var(--color-accent);
        letter-spacing: 0.15rem;
        margin-bottom: 0.75rem;
      }
      .hero h1 {
        font-size: clamp(2rem, 5vw, 3.5rem);
        margin: 0 0 0.75rem;
        color: var(--color-fg-default);
      }
      .hero-tagline {
        font-size: 1.2rem;
        color: var(--color-fg-muted);
        margin: 0 0 0.5rem;
      }
      .hero-sub {
        font-size: 0.95rem;
        color: var(--color-fg-muted);
        margin: 0 0 2rem;
      }
      .hero-actions {
        display: flex;
        gap: 0.75rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      .btn {
        display: inline-block;
        padding: 0.7rem 1.5rem;
        border-radius: var(--radius-md);
        text-decoration: none;
        font-weight: 600;
        transition: all 0.15s ease;
      }
      .btn-primary {
        background: var(--color-accent);
        color: #ffffff;
      }
      .btn-primary:hover {
        background: #083d5a;
      }
      .btn-secondary {
        background: #ffffff;
        color: var(--color-fg-default);
        border: 1px solid var(--color-border);
      }
      .btn-secondary:hover {
        background: var(--color-bg-subtle);
      }
      .stats-band {
        background: var(--color-accent);
        color: #ffffff;
        padding: 2rem 1rem;
      }
      .stats-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 3rem;
      }
      .stats-list li {
        text-align: center;
      }
      .stat-num {
        display: block;
        font-size: 2rem;
        font-weight: 700;
        line-height: 1;
      }
      .stat-label {
        display: block;
        font-size: 0.85rem;
        opacity: 0.85;
        margin-top: 0.25rem;
      }
      .features {
        padding: 4rem 1rem;
      }
      .features h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .feature-grid {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
      }
      .feature-grid li {
        text-align: center;
      }
      .feature-icon {
        font-size: 2.5rem;
        display: block;
        margin-bottom: 0.5rem;
      }
      .feature-grid h3 {
        margin: 0 0 0.5rem;
        font-size: 1.1rem;
      }
      .feature-grid p {
        margin: 0;
        color: var(--color-fg-muted);
        font-size: 0.95rem;
      }
      .featured {
        padding: 4rem 1rem;
        background: var(--color-bg-subtle);
        border-radius: var(--radius-lg);
        margin: 0 1rem 4rem;
      }
      .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
      .section-header h2 {
        margin: 0;
      }
      .link-more {
        color: var(--color-accent);
        text-decoration: none;
        font-weight: 600;
      }
      .camere-grid {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1rem;
      }
      .camera-card {
        background: #ffffff;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        padding: 1.25rem;
      }
      .camera-card__head {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 0.75rem;
      }
      .camera-card__head h3 {
        margin: 0 0 0.2rem;
        font-size: 1.05rem;
      }
      .camera-card__vista {
        font-size: 0.8rem;
        color: var(--color-accent);
        font-weight: 500;
      }
      .camera-card__price-block {
        text-align: right;
        flex-shrink: 0;
      }
      .camera-card__from {
        display: block;
        font-size: 0.75rem;
        color: var(--color-fg-muted);
      }
      .camera-card__price {
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--color-accent);
      }
      .camera-card__night {
        font-size: 0.75rem;
        color: var(--color-fg-muted);
      }
      .camera-card__desc {
        color: var(--color-fg-muted);
        font-size: 0.9rem;
        margin: 0 0 0.75rem;
        line-height: 1.5;
      }
      .camera-card__meta {
        display: flex;
        gap: 0.4rem;
        flex-wrap: wrap;
        align-items: center;
      }
      .meta-tag {
        font-size: 0.75rem;
        background: var(--color-bg-subtle);
        border: 1px solid var(--color-border);
        padding: 0.15rem 0.5rem;
        border-radius: 9999px;
        color: var(--color-fg-muted);
      }
      .badge {
        font-size: 0.7rem;
        padding: 0.15rem 0.5rem;
        border-radius: 9999px;
        font-weight: 600;
      }
      .badge--featured {
        background: #e0f2fe;
        color: var(--color-accent);
      }
      .cta-band {
        padding: 4rem 1rem;
        background: var(--color-fg-default);
        color: #ffffff;
        text-align: center;
      }
      .cta-band h2 {
        margin: 0 0 0.75rem;
        color: #ffffff;
      }
      .cta-band p {
        color: rgba(255, 255, 255, 0.85);
        margin: 0 0 2rem;
      }
      .cta-band .btn-secondary {
        background: transparent;
        color: #ffffff;
        border-color: rgba(255, 255, 255, 0.3);
      }
      .cta-band .btn-secondary:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private readonly mockData = inject(MockDataService);

  readonly featuredCamere$ = this.mockData.camere$.pipe(
    map((c) => c.tipologie.slice(0, 3))
  );
}
