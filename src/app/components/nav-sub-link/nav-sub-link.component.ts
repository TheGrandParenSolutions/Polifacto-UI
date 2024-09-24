import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-sub-link',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-sub-link.component.html',
  styleUrl: './nav-sub-link.component.scss'
})
export class NavSubLinkComponent {
  @Input() url: string = "";
  @Input() title: string = "";
  @Input() promiseId : number = 0;
}
