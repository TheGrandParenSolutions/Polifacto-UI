import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PromiseRatingComponent } from '../promise-rating/promise-rating.component';

@Component({
  selector: 'app-governmental-promise-content',
  standalone: true,
  imports: [CommonModule, PromiseRatingComponent],
  templateUrl: './governmental-promise-content.component.html',
  styleUrl: './governmental-promise-content.component.scss'
})
export class GovernmentalPromiseContentComponent {

  viewDetails:boolean=false;
  ngOnInit(): void {
    
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  }

  showDetails(){
    this.viewDetails = !this.viewDetails;
  }
}
