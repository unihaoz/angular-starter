import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import {
  routeAnimations,
  selectIsAuthenticated
} from '../../../core/core.module';

import { State } from '../examples.state';

@Component({
  selector: 'uh-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean> | undefined;

  examples = [
    { link: 'todos', label: 'uh.examples.menu.todos' },
    { link: 'stock-market', label: 'uh.examples.menu.stocks' },
    { link: 'theming', label: 'uh.examples.menu.theming' },
    { link: 'crud', label: 'uh.examples.menu.crud' },
    {
      link: 'simple-state-management',
      label: 'uh.examples.menu.simple-state-management'
    },
    { link: 'form', label: 'uh.examples.menu.form' },
    { link: 'notifications', label: 'uh.examples.menu.notifications' },
    { link: 'elements', label: 'uh.examples.menu.elements' },
    { link: 'authenticated', label: 'uh.examples.menu.auth', auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
