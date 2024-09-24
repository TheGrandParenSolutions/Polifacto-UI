import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, output, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-nav-search",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./nav-search.component.html",
  styleUrl: "./nav-search.component.scss",
})
export class NavSearchComponent {
  @Input() placeholderText: string = "";
  searchText: string = "";
  @Output() onSearchInputChange = new EventEmitter<string>();
  isOpen = false;
  search: string = "";
  toggleIsOpen = () => (this.isOpen = !this.isOpen);
  GetSearchText(event: Event) {
    this.onSearchInputChange.emit(
      (event.currentTarget as HTMLInputElement).value
    );
  }
}
