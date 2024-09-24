import { Component, Input } from '@angular/core';
import { PromiseRatings } from '../../utils/Promises/PromiseRatingConf';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-promise-rating',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './promise-rating.component.html',
  styleUrl: './promise-rating.component.scss'
})
export class PromiseRatingComponent {

  backgroundColor:string="";
  textColor:string="";

  @Input() promiseJudgementType:any;

  ngOnInit(): void {   
  }

  get promiseRatingKeyGetter() {
    return PromiseRatings;
  }
}
