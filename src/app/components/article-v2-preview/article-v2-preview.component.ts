import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SingleStatementArticlePreviewComponent } from '../single-statement-article-preview/single-statement-article-preview.component';
import { ArticleItemComponent } from '../article-item/article-item.component';
import { HomePageCardComponent } from '../home-page-card/home-page-card.component';
import { ArticleService } from '../../api/services/articles/article.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article-v2-preview',
  standalone: true,
  imports: [CommonModule, FormsModule, HomePageCardComponent, SingleStatementArticlePreviewComponent, ArticleItemComponent],
  templateUrl: './article-v2-preview.component.html',
  styleUrl: './article-v2-preview.component.scss'
})
export class ArticleV2PreviewComponent {
  articles: any [] = [];
  @Input() type: string = ''
  @Input() article: any={}
  constructor(private articleService: ArticleService, private toast: ToastrService) {
  }


}
