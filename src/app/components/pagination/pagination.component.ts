import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";

@Component({
  selector: "app-pagination",
  standalone: true,
  imports: [CommonModule, FormsModule, NgxPaginationModule],
  templateUrl: "./pagination.component.html",
  styleUrl: "./pagination.component.scss",
})
export class PaginationComponent {
  @Output() changePage: EventEmitter<number> = new EventEmitter();

  goToPage = (event: any) => this.changePage.emit(event);
}
