import { Component } from "@angular/core";
import { LoaderService } from "../../shared/services/loader/loader.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-spinner",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./spinner.component.html",
  styleUrl: "./spinner.component.scss",
})
export class SpinnerComponent {
  isLoading$!: Observable<boolean>;
  constructor(public loaderService: LoaderService) {
    this.isLoading$ = loaderService.isLoading$;
  }
}
