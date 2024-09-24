import { catchError } from 'rxjs';
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavSearchFormComponent } from '../nav-search-form/nav-search-form.component';
import { NavLinkComponent } from '../nav-link/nav-link.component';
import { NavSubItemComponent } from '../nav-sub-item/nav-sub-item.component';
import { NavSubLinkComponent } from '../nav-sub-link/nav-sub-link.component';
import { NavSearchComponent } from '../nav-search/nav-search.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';
import { IPoliticalParty } from '../../interfaces/interfaces';
import { PoliticalPartyTsService } from '../../api/services/promises/political-party.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule, NavSearchFormComponent, NavLinkComponent, NavSubItemComponent, NavSubLinkComponent, NavSearchComponent, LoaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isOpen: boolean = false;
  toggleIsOpen = () => (this.isOpen = !this.isOpen);
  lastScroll = 0;
  politicalPartyList?:IPoliticalParty[];

  constructor(private readonly politicalPartiesService: PoliticalPartyTsService){}

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: Event) {
    const mainHeader: HTMLElement | null = document.getElementById('header')
    if (mainHeader) {
      const st = window.pageYOffset || document.documentElement.scrollTop
      if (st > 100) {
        if (!mainHeader.classList.contains('on-scroll')) {
          mainHeader.classList.add('on-scroll')
        }
      } else {
        if (mainHeader.classList.contains('on-scroll')) {
          mainHeader.classList.remove('on-scroll')
        }
      }

      if (st > this.lastScroll+20) {
        if (!mainHeader.classList.contains('hide-header')) {
          mainHeader.classList.add('hide-header')
        }
      } else {
        if (mainHeader.classList.contains('hide-header')) {
          mainHeader.classList.remove('hide-header')
        }
      }

      const last = st <= 0 ? 0 : st
      this.lastScroll = last;
    }
  }

  ngOnInit(): void {
    
    //get all political parties
    this.politicalPartiesService.getAllPoliticalParties().subscribe({
      next: (politicalPartiesData) =>{
        this.politicalPartyList = politicalPartiesData;
      },
      error(error) {
        console.log({error});
      }
    });
    
  }
}
