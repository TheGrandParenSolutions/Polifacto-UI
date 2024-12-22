import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeSideBarComponent } from "../../components/home-side-bar/home-side-bar.component";
import { SpeakerComponent } from "../../components/speaker/speaker.component";
import { ArticleTagsComponent } from "../../components/article-tags/article-tags.component";
import { ArticleV2PreviewComponent } from "../../components/article-v2-preview/article-v2-preview.component";
import { PaginationComponent } from "../../components/pagination/pagination.component";
import { UserCarouselComponent } from "../../components/user-carousel/user-carousel.component";
import { ToastrService } from "ngx-toastr";
import { ArticleService } from "../../api/services/articles/article.service";
import { PoliticiansService } from "../../api/services/politicians/politicians.service";
import { IPolitician } from "../../interfaces/interfaces";
import { getPaginationConfig } from "../../utils/constants/enums";
import { NgxPaginationModule } from "ngx-pagination";
import { LoaderService } from "../../shared/services/loader/loader.service";
import { BannerComponent } from "../../shared/banner/banner.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    HomeSideBarComponent,
    SpeakerComponent,
    ArticleTagsComponent,
    ArticleV2PreviewComponent,
    PaginationComponent,
    UserCarouselComponent,
    NgxPaginationModule,
    BannerComponent
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  paginationConfig = getPaginationConfig();
  topArticles: any[] = [];
  bottomArticles: any[] = [];
  politicians: IPolitician[] = [];
  constructor(
    private articleService: ArticleService,
    private toast: ToastrService,
    private readonly politiciansService: PoliticiansService,
    public loader: LoaderService
  ) { }
  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe({
      next: (data) => {
        this.topArticles = data.slice(0, 3);
        this.bottomArticles = data.slice(4);
      },
    });

    this.politiciansService.getAllPoliticians().subscribe({
      next: (politicians) => {
        this.politicians = politicians;
      },
    });
  }
}
