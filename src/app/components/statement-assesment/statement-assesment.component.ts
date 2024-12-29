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
  constructor(public loaderService: LoaderService) { }
  colors: any = {
    true: "primary",
    false: "red",
    "no comment": "gray-500",
    misleading: "secondary",
  };
  stats = [
    { label: "True", percentage: 75, type: "bg-primary" },
    { label: "False", percentage: 5, type: "bg-red" },
    { label: "Misleading", percentage: 5, type: "bg-secondary" },
    { label: "No comment", percentage: 15, type: "bg-gray-500" }
  ];

  @Input() judgement: string = "";
  currentBgColor = "bg-" + this.colors[this.stats[0].label];

  getBGSpanCss = (judgement: string) => {
    if (!judgement || !judgement.length) return "";
    this.currentBgColor = "bg-" + this.colors[judgement.toLowerCase()];
    return `!w-[36px] !h-[36px] !min-w-[36px] !min-h-[36px] d-flex items-center justify-center ${this.currentBgColor} rounded-circle me-1`;
  };

  getTextColor(judgement: string) {
    return "text-" + this.colors[judgement.toLowerCase()];
  }

  getLeftPercentage(index: number): number {
    return this.stats.slice(0, index).reduce((sum, bar) => sum + bar.percentage, 0);
  }

}
