import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-speaker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-speaker.component.html',
  styleUrl: './article-speaker.component.scss'
})
export class ArticleSpeakerComponent {
  @Input() speaker: string = ''
}
