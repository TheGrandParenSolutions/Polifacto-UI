import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-article-tags',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './article-tags.component.html',
  styleUrl: './article-tags.component.scss'
})
export class ArticleTagsComponent {

  isElectionsActive:boolean = false;
  title:string="ARTICLES"


  setIcons(icon: number): string {
    switch (icon) {
      case 1:
        return "/assets/icons/packman.svg"
      case 2:
        return "/assets/icons/presidental.svg"
      case 3:
        return "/assets/icons/slovakia.svg"
      case 4:
        return "/assets/icons/ukrajine.svg"
      default:
        return ""
    }
  }

  
}
