import { SpeakerComponent } from './../speaker/speaker.component';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PoliticiansService } from '../../api/services/politicians/politicians.service';
import { IPolitician } from '../../interfaces/interfaces';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { fadeInAndOut } from '../../shared/animations/animations';
import { LoaderService } from '../../shared/services/loader/loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-speaker-item',
  standalone: true,
  imports: [RouterModule, FormsModule, NgxSkeletonLoaderModule, CommonModule, FormsModule],
  templateUrl: './speaker-item.component.html',
  styleUrl: './speaker-item.component.scss',
  animations:[fadeInAndOut]
})
export class SpeakerItemComponent {

  constructor(private router:RouterModule, private readonly politiciansService:PoliticiansService, public loader: LoaderService){
  }
  @Input() politicians?: IPolitician;

  ngOnInit(): void {
    
  }
}
