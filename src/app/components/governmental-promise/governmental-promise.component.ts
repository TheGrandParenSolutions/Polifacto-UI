import { Component, Input } from '@angular/core';
import { PromiseRatingComponent } from '../promise-rating/promise-rating.component';
import { CommonModule } from '@angular/common';
import { GovernmentalPromiseContentComponent } from '../governmental-promise-content/governmental-promise-content.component';

@Component({
  selector: 'app-governmental-promise',
  standalone: true,
  imports: [PromiseRatingComponent,CommonModule, GovernmentalPromiseContentComponent],
  templateUrl: './governmental-promise.component.html',
  styleUrl: './governmental-promise.component.scss'
})
export class GovernmentalPromiseComponent {

  @Input() promises: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  
}
