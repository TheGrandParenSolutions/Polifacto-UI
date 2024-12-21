import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit,
} from "@angular/core";
import { CardComponent } from "../card/card.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AskQuestionOverlayComponent } from "../ask-question-overlay/ask-question-overlay.component";
import { ModalService } from "../../shared/services/loader/modal.service";
import { VerifyPostService } from "../../api/services/verify-post/VerifyPost.service";
import { ToastrService } from "ngx-toastr";
// declare var $:JQueryStatic;

@Component({
  selector: "app-user-carousel",
  standalone: true,
  templateUrl: "./user-carousel.component.html",
  styleUrl: "./user-carousel.component.scss",
  imports: [
    CardComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    AskQuestionOverlayComponent,
  ],
})
export class UserCarouselComponent implements OnInit {
  @ViewChild("cardWrapper") cardWrapper!: ElementRef;
  userPosts: any = []
  constructor(
    public modal: ModalService,
    private verifyPostsService: VerifyPostService,
    private toast: ToastrService
  ) { }
  isOverlayOpen?: boolean;

  ngOnInit(): void {
    this.verifyPostsService.getUserAskedPosts().subscribe({
      next: (data: any) => {
        if (!data) return;
        this.userPosts = data.filter(post => post?.verificationStatus !== "unverified");
      },
    });
  }
  goToPrevious = () => {
    this.cardWrapper.nativeElement.scrollTo({
      top: 0,
      left: (this.cardWrapper.nativeElement.scrollLeft -= 390),
      behavior: "smooth",
    });
  };

  goToNext = () => {
    this.cardWrapper.nativeElement.scrollTo({
      top: 0,
      left: (this.cardWrapper.nativeElement.scrollLeft += 390),
      behavior: "smooth",
    });
  };

  openOverlay() {
    this.modal.openModal();
  }
}
