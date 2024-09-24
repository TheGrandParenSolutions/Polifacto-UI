import { Component, Input } from '@angular/core';
import { ArticleSpeakerComponent } from '../article-speaker/article-speaker.component';
import { CommonModule } from '@angular/common';
import { SingleSpeakerComponent } from '../single-speaker/single-speaker.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SpeakerComponent } from '../speaker/speaker.component';
import { StatementAssesmentComponent } from '../statement-assesment/statement-assesment.component';
import { LoaderService } from '../../shared/services/loader/loader.service';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { fadeInAndOut } from '../../shared/animations/animations';
import { BrokenImage } from '../../utils/constants/enums';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [RouterModule, SpeakerComponent, CommonModule, FormsModule, NgxSkeletonLoaderModule, StatementAssesmentComponent],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.scss',
  animations: [fadeInAndOut]

})
export class ArticleItemComponent {
  @Input() article: any = {};
  BrokenImageUrl = BrokenImage.URL;
  isBrokenImageLoaded: boolean = false
  constructor(public loader: LoaderService) { }

}
