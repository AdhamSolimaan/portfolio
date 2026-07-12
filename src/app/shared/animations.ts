import { animate, query, style, transition, trigger } from '@angular/animations';

// Lightweight route fade — no fixed positioning (avoids layout lag)
export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter', [
      style({ opacity: 0 }),
      animate('200ms ease-out', style({ opacity: 1 }))
    ], { optional: true })
  ])
]);

export const pageFadeAnimation = trigger('pageFadeAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(8px)' }),
    animate('220ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

export const listStaggerAnimation = trigger('listStaggerAnimation', [
  transition(':enter', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(10px)' }),
      animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ], { optional: true })
  ]),
  transition('* <=> *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(10px)' }),
      animate('180ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ], { optional: true })
  ])
]);
