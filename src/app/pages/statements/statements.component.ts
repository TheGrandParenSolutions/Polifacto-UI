import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FilterFormComponent } from "../../components/filter-form/filter-form.component";
import { StatementItemComponent } from "../../components/statement-item/statement-item.component";
import { HttpClientModule } from "@angular/common/http";
import { StatementsService } from "../../api/services/statements/statements.service";
import { NgxPaginationModule } from "ngx-pagination";
import { getPaginationConfig } from "../../utils/constants/enums";
import { IStatement } from "../../interfaces/interfaces";
import { Observable } from "rxjs";
import { AppRootState } from "../../redux/models/AppRootState";
import { select, Store } from "@ngrx/store";
import { statementsSelector } from "../../redux/selectors";
import { FilterService } from "../../shared/services/loader/filter.service";
import * as AppActions from "../../redux/actions/index";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-statements",
  standalone: true,
  imports: [
    CommonModule,
    FilterFormComponent,
    StatementItemComponent,
    HttpClientModule,
    NgxPaginationModule,
  ],
  templateUrl: "./statements.component.html",
  styleUrl: "./statements.component.scss",
})
export class StatementsComponent implements OnInit {
  statements: any;
  paginationConfig = getPaginationConfig();
  statements$: Observable<IStatement[]>;

  constructor(
    private readonly statementService: StatementsService,
    private store: Store<AppRootState>,
    private filterService: FilterService,
    private toast: ToastrService
  ) {
    this.statements$ = this.store.pipe(select(statementsSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(AppActions.getStatements());
    this.statements$.subscribe({
      next: (statements) => {
        this.statements = statements;
        this.paginationConfig.totalItems = statements.length;
      },
      error: (error) => {
        this.toast.error(error.errorReason);
      },
    });
  }

  filterStatements(searchText: string) {
    this.statements$.subscribe({
      next: (statements) => {
        let filteredStatements = this.filterService.filterItems(
          searchText,
          statements,
          "statementByPolitician"
        );
        this.statements = filteredStatements;
        this.paginationConfig.totalItems = filteredStatements.length;
        this.paginationConfig.currentPage = 1;
      },
    });
  }
}
