import { Component } from '@angular/core';
import { ArticleSpeakerComponent } from '../article-speaker/article-speaker.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-statement-article-preview',
  standalone: true,
  imports: [ArticleSpeakerComponent, CommonModule],
  templateUrl: './single-statement-article-preview.component.html',
  styleUrl: './single-statement-article-preview.component.scss'
})
export class SingleStatementArticlePreviewComponent {

  formatDate(inputDate: Date){
    // const dateToConvert = new Date(inputDate);
    // return format(dateToConvert, 'do MMMM yyyy', { locale: cs });
  }
}
