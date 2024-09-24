import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { lockBgScrollWhenModalOpen, unLockBgScrollWhenModalClose } from "../../utils/helper";
@Component({
  selector: "app-video-player",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./video-player.component.html",
  styleUrl: "./video-player.component.scss",
})
export class VideoPlayerComponent implements OnChanges {
  @Input() thumbnail: string = "";
  @Input() videoSrc: string = "";

  @ViewChild("video", { static: false }) videoElement!: ElementRef;

  modalOpen: boolean = false;

  openModal = () => {
    this.modalOpen = true;
    lockBgScrollWhenModalOpen()
    this.videoElement.nativeElement.play();
  };

  closeModal = () => {
    this.modalOpen = false;
    unLockBgScrollWhenModalClose()
    this.videoElement.nativeElement.pause();
  };

  clickInside = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();
    if (this.videoElement.nativeElement.paused) {
      this.videoElement.nativeElement.play();
    } else {
      this.videoElement.nativeElement.pause();
    }
  };

  ngOnChanges(changes: SimpleChanges): void {}

  @HostListener("document:keydown.escape", ["$event"]) onEscapeButtonHandler(
    evt: KeyboardEvent
  ) {
    this.closeModal();
  }
  onSpaceButtonHandler() {
    if (!this.videoElement?.nativeElement) return;
    if (this.videoElement.nativeElement.paused) {
      this.videoElement.nativeElement.play();
    } else {
      this.videoElement.nativeElement.pause();
    }
  }
}
