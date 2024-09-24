import {
  Component,
  Input,
  AfterViewInit,
  EventEmitter,
  Output,
} from "@angular/core";
import { SearchButtonComponent } from "../search-button/search-button.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PaginationComponent } from "../pagination/pagination.component";
import { NavSearchComponent } from "../nav-search/nav-search.component";
import { LoaderService } from "../../shared/services/loader/loader.service";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-filter-form",
  standalone: true,
  imports: [
    SearchButtonComponent,
    CommonModule,
    FormsModule,
    PaginationComponent,
    NavSearchComponent,
    RouterModule,
  ],
  templateUrl: "./filter-form.component.html",
  styleUrl: "./filter-form.component.scss",
})
export class FilterFormComponent implements AfterViewInit {
  shouldShowPagination: boolean = true;
  @Input() pageSize = 0;
  @Input() currentPage = 0;
  @Input() placeholderText: string = "";
  @Input() totalCount = 0;
  @Input() areFiltersOpen: boolean = false;
  @Output() handlePageChange: EventEmitter<number> = new EventEmitter();
  @Output() onSearchInputChange: EventEmitter<string> = new EventEmitter();
  handleChange = (event: any) => {};
  handleReset = (event: any) => {};

  constructor(public readonly loader: LoaderService) {}

  ngAfterViewInit(): void {}
  GetSearchedText(searchText: string) {
    this.onSearchInputChange.emit(searchText);
  }
}
