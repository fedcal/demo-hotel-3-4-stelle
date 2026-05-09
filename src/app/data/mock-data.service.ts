import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

import type { InfoHotel, Camere, Servizi, Team, Faq } from './types';

@Injectable({ providedIn: 'root' })
export class MockDataService {
  private readonly http = inject(HttpClient);

  readonly info$: Observable<InfoHotel> = this.http
    .get<InfoHotel>('/assets/mock/info.json')
    .pipe(shareReplay(1));

  readonly camere$: Observable<Camere> = this.http
    .get<Camere>('/assets/mock/camere.json')
    .pipe(shareReplay(1));

  readonly servizi$: Observable<Servizi> = this.http
    .get<Servizi>('/assets/mock/servizi.json')
    .pipe(shareReplay(1));

  readonly team$: Observable<Team> = this.http
    .get<Team>('/assets/mock/team.json')
    .pipe(shareReplay(1));

  readonly faq$: Observable<Faq> = this.http
    .get<Faq>('/assets/mock/faq.json')
    .pipe(shareReplay(1));
}
