import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { AskQuestionOverlayComponent } from "./components/ask-question-overlay/ask-question-overlay.component";
import { SpinnerComponent } from './components/spinner/spinner.component';
import { Title, Meta } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styles: [],
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent, VideoPlayerComponent, LoaderComponent, AskQuestionOverlayComponent, SpinnerComponent]
})
export class AppComponent implements OnInit {
  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap(route => route.data)
      )
      .subscribe(data => {
        if (data['title']) {
          this.titleService.setTitle(data['title']);
        }

        if (data['description']) {
          this.metaService.updateTag({ name: 'description', content: data['description'] });
        }
      });
  }

  isAuthPageActive = () => {
    const isLoginActive = this.router.url === '/login';
    const isSignUpActive = this.router.url === '/sign-up';
    const isForgotPasswordActive = this.router.url === '/forgot-password';
    return (isLoginActive || isSignUpActive || isForgotPasswordActive);
  }
}
