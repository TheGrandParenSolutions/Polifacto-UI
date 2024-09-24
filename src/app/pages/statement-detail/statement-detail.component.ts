import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { StatementItemComponent } from "../../components/statement-item/statement-item.component";
import { FilterFormComponent } from "../../components/filter-form/filter-form.component";
import { HomePageCardComponent } from "../../components/home-page-card/home-page-card.component";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { StatementsService } from "../../api/services/statements/statements.service";
import { map } from "rxjs";
import { StatementAssesmentComponent } from "../../components/statement-assesment/statement-assesment.component";
import { IPolitician, IStatement } from "../../interfaces/interfaces";

@Component({
  selector: "app-statement-detail",
  standalone: true,
  templateUrl: "./statement-detail.component.html",
  styleUrl: "./statement-detail.component.scss",
  imports: [
    CommonModule,
    FormsModule,
    StatementItemComponent,
    FilterFormComponent,
    HomePageCardComponent,
    StatementAssesmentComponent,
    RouterModule,
  ],
})
export class StatementDetailComponent {
  sid: string = "";
  currentUrl: string = "";
  previousUrl:string = "";
  statementDetails: IStatement = {
    createdAt: new Date(),
    statementId: 0,
    politicianId: 0,
    statementByPolitician: "",
    statementInfo: "",
    statementNiche: "",
    sourceOfStatement: "",
    statementJudgement: "",
    statementCompleteInfo: ""
  };
  politicianDetails: IPolitician = {
    politicianId: 0,
    politicianName: "",
    politicianDesignation: "",
    politicianProfilePic: "",
    politicianParty: "",
    createdAt: new Date(),
    statementCount: 0,
    truthCount: 0,
    unTruthCount: 0,
    misleadingCount: 0,
    unverifiedCount: 0
  };
  constructor(
    private readonly statementService: StatementsService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {
    this.previousUrl = router?.getCurrentNavigation()?.previousNavigation?.finalUrl?.toString() ?? "";
   }

  ngOnInit(): void {
    this.sid = this.activatedRoute.snapshot.params["sid"];

    this.statementService.getStatementByStatementId(this.sid).subscribe({
      next: (detailedStatement: any) => {
        this.statementDetails = detailedStatement;
      },
    });

    this.activatedRoute.paramMap
      .pipe(map(() => window.history.state))
      .subscribe({
        next: (data) => {
          this.politicianDetails = data.politician;
        },
      });
  }
}
