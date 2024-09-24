import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticleSpeakerComponent } from '../article-speaker/article-speaker.component';
import { SpeakerComponent } from '../speaker/speaker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LoaderService } from '../../shared/services/loader/loader.service';
import { fadeInAndOut } from '../../shared/animations/animations';
import { StatementAssesmentComponent } from '../statement-assesment/statement-assesment.component';
import { BrokenImage } from '../../utils/constants/enums';

@Component({
  selector: 'app-home-page-card',
  standalone: true,
  imports: [RouterModule, SpeakerComponent, CommonModule, FormsModule, NgxSkeletonLoaderModule, StatementAssesmentComponent],
  templateUrl: './home-page-card.component.html',
  styleUrl: './home-page-card.component.scss',
  animations: [fadeInAndOut]
})
export class HomePageCardComponent {
  @Input() article: any = {};
  BrokenImageUrl = BrokenImage.URL
  isBrokenImageLoaded: boolean = false;

  constructor(public loader: LoaderService) { }
}