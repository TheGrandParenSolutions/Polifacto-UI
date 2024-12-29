import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StatementAssesmentComponent } from '../statement-assesment/statement-assesment.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LoaderService } from '../../shared/services/loader/loader.service';
import { fadeInAndOut } from '../../shared/animations/animations';
import { TooltipDirective } from '../../shared/tooltip/tooltip.directive';

@Component({
  selector: 'app-statement-item',
  standalone: true,
  imports: [CommonModule, RouterModule, StatementAssesmentComponent, FormsModule, NgxSkeletonLoaderModule, TooltipDirective],
  templateUrl: './statement-item.component.html',
  styleUrl: './statement-item.component.scss',
  animations: [fadeInAndOut]
})
export class StatementItemComponent {
  @Input() politicianWithStatements: any = {}
  @Input() politicianDetails: any = {}
  readonly wrongUrl = '../../../assets/images/kejriwal.jpg';
  openExplanation = false;
  sid:string="";

  constructor(private router: Router, public loader: LoaderService) {

  }

  ngOnInit(): void {
    this.sid = this.politicianWithStatements.statementId;
  }

  colors: any = {
    true: "primary",
    false: "red",
    "no comment": "gray-500",
    misleading: "secondary",
  };
   stats = [
      { label: "True", percentage: 75, type: "bg-primary" },
      { label: "False", percentage: 5, type: "bg-red" },
      { label: "Misleading", percentage: 5, type: "bg-secondary" },
      { label: "No comment", percentage: 15, type: "bg-gray-500" }
    ];
  
    currentBgColor = "bg-" + this.colors[this.stats[0].label];
  
    getBGSpanCss = (judgement: string) => {
      if (!judgement || !judgement.length) return "";
      this.currentBgColor = "bg-" + this.colors[judgement.toLowerCase()];
      return `!w-[26px] !h-[26px] !min-w-[26px] !min-h-[26px] d-flex items-center justify-center ${this.currentBgColor} rounded-circle me-1`;
    };
  
    getTextColor(judgement: string) {
      return "text-" + this.colors[judgement.toLowerCase()];
    }

}
