import { Component, Input, OnInit } from '@angular/core';
import { VideoPlayerComponent } from '../../components/video-player/video-player.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticleService } from '../../api/services/articles/article.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-discussion',
  standalone: true,
  imports: [VideoPlayerComponent, CommonModule, FormsModule],
  templateUrl: './discussion.component.html',
  styleUrl: './discussion.component.scss'
})
export class DiscussionComponent implements OnInit {
  articleId: string | number = "";
  article: any = {};
  constructor(private articleService: ArticleService, private route: ActivatedRoute, private toast: ToastrService) {

  }
  ngOnInit(): void {
    this.articleId = this.route.snapshot.params["articleId"];
    this.articleService.getArticleById(this.articleId).subscribe({
      next: (data => {
        this.article = data;
      }),
    })

  }
}
