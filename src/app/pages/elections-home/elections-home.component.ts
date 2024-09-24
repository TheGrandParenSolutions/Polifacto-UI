import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ArticleTagsComponent } from '../../components/article-tags/article-tags.component';
import { ArticleV2PreviewComponent } from '../../components/article-v2-preview/article-v2-preview.component';
import { HomeSideBarComponent } from '../../components/home-side-bar/home-side-bar.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { SpeakerComponent } from '../../components/speaker/speaker.component';
import { UserCarouselComponent } from '../../components/user-carousel/user-carousel.component';
import { TagDetailsComponent } from '../../components/tag-details/tag-details.component';

@Component({
  selector: 'app-elections-home',
  standalone: true,
  imports: [CommonModule, HomeSideBarComponent, SpeakerComponent, TagDetailsComponent , ArticleTagsComponent, ArticleV2PreviewComponent, PaginationComponent, UserCarouselComponent],
  templateUrl: './elections-home.component.html',
  styleUrl: './elections-home.component.scss'
})
export class ElectionsHomeComponent {

}
