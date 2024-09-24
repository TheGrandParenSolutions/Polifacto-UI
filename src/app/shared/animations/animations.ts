import { trigger, state, style, transition, animate } from "@angular/animations";

export const fadeInAndOut = trigger('fadeInOut', [
  state('void', style({ opacity: 0 })),
  state('*', style({ opacity: 1 })),
  transition('void => *', animate('500ms ease-in')),
  transition('* => void', animate('500ms ease-out')),
]);