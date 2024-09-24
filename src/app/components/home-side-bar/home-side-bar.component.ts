import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AskQuestionOverlayComponent } from '../ask-question-overlay/ask-question-overlay.component';
import { VideoPlayerComponent } from '../video-player/video-player.component';
import { RouterModule } from '@angular/router';
import { ModalService } from '../../shared/services/loader/modal.service';

@Component({
  selector: 'app-home-side-bar',
  standalone: true,
  imports: [CommonModule, AskQuestionOverlayComponent, VideoPlayerComponent, RouterModule],
  templateUrl: './home-side-bar.component.html',
  styleUrl: './home-side-bar.component.scss'
})
export class HomeSideBarComponent {

  isOpenOverlay:boolean = false;
  constructor(public modal:ModalService){}

  setVideoModal(value: boolean) {

  }

  openAskQuestionOverlay(){
    this.modal.openModal();
  }
}
