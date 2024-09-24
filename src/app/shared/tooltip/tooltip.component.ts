import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TooltipPosition, TooltipTheme } from './constants';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {

  position: TooltipPosition = TooltipPosition.DEFAULT;
  theme: TooltipTheme = TooltipTheme.DEFAULT;
  tooltip = '';
  left = 0;
  top = 0;
  visible = false;

  constructor() {
  }

  ngOnInit(): void {
  }
}
