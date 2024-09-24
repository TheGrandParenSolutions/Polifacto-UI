import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { LoaderService } from "../../shared/services/loader/loader.service";
import { fadeInAndOut } from "../../shared/animations/animations";

@Component({
  selector: "app-statement-assesment",
  standalone: true,
  imports: [CommonModule, FormsModule, NgxSkeletonLoaderModule],
  templateUrl: "./statement-assesment.component.html",
  styleUrl: "./statement-assesment.component.scss",
  animations: [fadeInAndOut],
})
export class StatementAssesmentComponent {
  constructor(public loaderService: LoaderService) {}
  colors: any = {
    truth: "primary",
    false: "red",
    unverified: "gray",
    misleading: "secondary",
  };
  @Input() judgement: string = "";
  currentBgColor = "bg-" + this.colors[this.judgement.toLowerCase()];

  getBGSpanCss = () => {
    if (!this.judgement || !this.judgement.length) return "";
    this.currentBgColor = "bg-" + this.colors[this.judgement.toLowerCase()];
    return `w-[36px] h-[36px] d-flex align-items-center justify-content-center ${this.currentBgColor} rounded-circle me-2`;
  };

  getTextColor() {
    if (!this.judgement || !this.judgement.length) return "";
    return "text-" + this.colors[this.judgement.toLowerCase()];
  }
}
