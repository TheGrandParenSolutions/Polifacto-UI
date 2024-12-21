import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IPolitician } from '../../interfaces/interfaces';
import { PoliticiansService } from '../../api/services/politicians/politicians.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TooltipDirective } from '../../shared/tooltip/tooltip.directive';

@Component({
  selector: 'app-speaker',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, TooltipDirective],
  templateUrl: './speaker.component.html',
  styleUrl: './speaker.component.scss'
})
export class SpeakerComponent {
  @Input() speakers: string[] = [];
  @Input() politicians: IPolitician[] = [];

  constructor(private router: Router) { }

  navigateToPolitician(politicianId: string | undefined): void {
    if (politicianId) {
      this.router.navigate([`/politicians/${politicianId}`]);
    }
  }
}
