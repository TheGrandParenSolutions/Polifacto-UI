import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NewsletterComponent } from '../newsletter/newsletter.component';
import { SocialComponent } from '../social/social.component';
import { SocialMediaFooterIconsComponent } from '../social-media-footer-icons/social-media-footer-icons.component';
import { ModalService } from '../../shared/services/loader/modal.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NewsletterComponent, SocialComponent, SocialMediaFooterIconsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(
    public modal: ModalService,
  ) {

  }

  openAskOverlay = () => {
    this.modal.openModal()
  }

}
