import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { StatementItemComponent } from "../../components/statement-item/statement-item.component";
import { PaginationComponent } from "../../components/pagination/pagination.component";
import { FilterFormComponent } from "../../components/filter-form/filter-form.component";
import { PoliticiansService } from "../../api/services/politicians/politicians.service";
import { ActivatedRoute } from "@angular/router";
import { StatementsService } from "../../api/services/statements/statements.service";
import {
  IPoliticianWithStatementDetails,
  IStatement,
} from "../../interfaces/interfaces";
import { FilterService } from "../../shared/services/loader/filter.service";
import { getPaginationConfig } from "../../utils/constants/enums";
import { NgxPaginationModule } from "ngx-pagination";

@Component({
  selector: "app-politicians-profile",
  standalone: true,
  imports: [
    CommonModule,
    StatementItemComponent,
    PaginationComponent,
    FilterFormComponent,
    NgxPaginationModule
  ],
  templateUrl: "./politicians-profile.component.html",
  styleUrl: "./politicians-profile.component.scss",
})
export class PoliticiansProfileComponent {
  pid: any = 0;
  politicianWithStatementDetails!: IPoliticianWithStatementDetails;
  statements!: IStatement[];
  paginationConfig = getPaginationConfig();
  constructor(
    private politiciansService: PoliticiansService,
    private route: ActivatedRoute,
    private filterService: FilterService
  ) {}
  ngOnChanges(): void {}

  ngOnInit(): void {
    this.pid = this.route.snapshot.params["id"];
    this.politiciansService.getPoliticianById(this.pid).subscribe({
      next: (statements) => {
        this.politicianWithStatementDetails = statements;
        this.statements = statements.statements;
        this.paginationConfig.totalItems = statements.statements.length;
      },
    });
  }

  filterStatements(searchText: string) {
    if (this.politicianWithStatementDetails) {
      let filteredStatements = this.filterService.filterItems(
        searchText,
        this.politicianWithStatementDetails.statements,
        "statementByPolitician"
      );
      this.statements = filteredStatements;
      this.paginationConfig.totalItems = filteredStatements.length;
      this.paginationConfig.currentPage = 1;
    }
  }
}
