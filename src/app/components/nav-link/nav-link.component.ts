import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [ CommonModule, RouterModule],
  templateUrl: './nav-link.component.html',
  styleUrl: './nav-link.component.scss'
})
export class NavLinkComponent {
  @Input() url: string = "";
  @Input() title: string = "";
}
