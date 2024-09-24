import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StatementAssesmentComponent } from '../statement-assesment/statement-assesment.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LoaderService } from '../../shared/services/loader/loader.service';
import { fadeInAndOut } from '../../shared/animations/animations';

@Component({
  selector: 'app-statement-item',
  standalone: true,
  imports: [CommonModule, RouterModule, StatementAssesmentComponent, FormsModule, NgxSkeletonLoaderModule],
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

}
