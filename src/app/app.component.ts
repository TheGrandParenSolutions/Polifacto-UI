import { Component, Inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { AskQuestionOverlayComponent } from "./components/ask-question-overlay/ask-question-overlay.component";
import { SpinnerComponent } from './components/spinner/spinner.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styles: [],
    imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent, VideoPlayerComponent, LoaderComponent, AskQuestionOverlayComponent, SpinnerComponent]
})
export class AppComponent {
  constructor(public router: Router) {}

  isAuthPageActive = () => {
    const isLoginActive = this.router.url === '/login';
    const isSignUpActive = this.router.url === '/sign-up';
    const isForgotPasswordActive = this.router.url === '/forgot-password';
    return (isLoginActive || isSignUpActive || isForgotPasswordActive);
  }
}
