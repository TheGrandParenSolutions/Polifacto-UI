import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { StatementAssesmentComponent } from "../statement-assesment/statement-assesment.component";
import { PoliticiansService } from "../../api/services/politicians/politicians.service";
import { IPolitician } from "../../interfaces/interfaces";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [StatementAssesmentComponent, FormsModule, CommonModule],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.scss",
})
export class CardComponent implements OnChanges {
  @Input() post: any;
  politician!: IPolitician;
  constructor(private politicianService: PoliticiansService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.post) {
      this.politicianService
        .getPoliticianById(this.post.politicianId)
        .subscribe((data: any) => {
          this.politician = data;
        });
    }
  }
}
