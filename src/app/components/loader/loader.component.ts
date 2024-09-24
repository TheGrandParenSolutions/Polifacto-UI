import { Component } from '@angular/core';
import { LoaderService } from '../../shared/services/loader/loader.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  isLoading$!: Observable<boolean>;
  constructor(public loaderService: LoaderService) {
    this.isLoading$ = loaderService.isLoading$;
  }
}
