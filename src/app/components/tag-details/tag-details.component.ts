import { Component, Input } from '@angular/core';
import { ArticleItemComponent } from '../article-item/article-item.component';
import { HomePageCardComponent } from '../home-page-card/home-page-card.component';
import { ArticleTagsComponent } from '../article-tags/article-tags.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tag-details',
  standalone: true,
  imports: [ArticleItemComponent, HomePageCardComponent, ArticleTagsComponent,RouterModule],
  templateUrl: './tag-details.component.html',
  styleUrl: './tag-details.component.scss'
})
export class TagDetailsComponent {
  @Input() title: string = "";
  @Input() description: string = "";
}
