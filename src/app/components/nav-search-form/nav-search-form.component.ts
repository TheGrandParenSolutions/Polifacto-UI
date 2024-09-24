import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchButtonComponent } from '../search-button/search-button.component';

@Component({
  selector: 'app-nav-search-form',
  standalone: true,
  imports: [SearchButtonComponent, CommonModule],
  templateUrl: './nav-search-form.component.html',
  styleUrl: './nav-search-form.component.scss'
})
export class NavSearchFormComponent {

}
