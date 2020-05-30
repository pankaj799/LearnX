import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes, stagger,

} from "@angular/animations";


export const slideInAnimation =

    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '-100%'})
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('200ms ease-out', style({ left: '100%'}))
          ]),
          query(':enter', [
            animate('200ms ease-out', style({ left: '0%'}))
          ])
        ]),
        query(':enter', animateChild()),
      ])

    ]);

export const buttontoggle=
  trigger('buttontoggle',[
    transition("* <=> *",[
        animate('.5s ease-in',keyframes([
          style({opacity: 0, transform:'translateX(6rem)' , offset: 0}),
          style({opacity: .5, transform:'translateX(-1.5rem)', offset: 0.5}),
          style({opacity: 1, transform:'translateX(0)', offset: 1}),
        ]))
      ])

    ]);
export const buttontoggle1=
  trigger('buttontoggle1',[
    transition("* <=> *",[
      animate('.5s ease-in',keyframes([
        style({opacity: 0, transform:'translateY(6rem)' , offset: 0}),
        style({opacity: .5, transform:'translateY(-1.5rem)', offset: 0.5}),
        style({opacity: 1, transform:'translateY(0)', offset: 1}),
      ]))
    ])

  ]);
