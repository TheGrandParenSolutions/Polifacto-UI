import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss', '../../../assets/css/bootstrap.min.css']
})
export class AboutUsComponent implements AfterViewInit {
  @ViewChild("faqSection", { static: false }) faqSection!: ElementRef;
  isDark = false;
  activeLink = "about";
  hasUserReachedTheBottomOfThePage = false;
  currentFooterOffset = '';

  goDark = () => (this.isDark = !this.isDark)

  ngAfterViewInit(): void {
  }
  scrollIntoView = (section: HTMLElement, linkElement: string) => {
    this.activeLink = linkElement;
    section.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: Event) {
    const footer: HTMLElement | null = document.querySelector('app-footer')
    if (footer) {
      const footerOffset = footer.offsetTop;
      const windowTop = window.pageYOffset || document.documentElement.scrollTop;
      const footerHeight = (footer.offsetHeight || footer.clientHeight);
      if ((windowTop + window.innerHeight) >= (footerOffset)) {
        // this.currentFooterOffset = `${Math.floor(footerOffset - footerHeight)}px`;
        this.hasUserReachedTheBottomOfThePage = true;
      } else {
        // this.currentFooterOffset = '';
        this.hasUserReachedTheBottomOfThePage = false;
      }
    }
  }
}
