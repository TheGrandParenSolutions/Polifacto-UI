import { FilterService } from './../../shared/services/loader/filter.service';
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { SpeakerItemComponent } from "../../components/speaker-item/speaker-item.component";
import { PaginationComponent } from "../../components/pagination/pagination.component";
import { FilterFormComponent } from "../../components/filter-form/filter-form.component";
import { PoliticiansService } from "../../api/services/politicians/politicians.service";
import { IPolitician, IStatement } from "../../interfaces/interfaces";
import { ToastrService } from "ngx-toastr";
import { select, Store } from "@ngrx/store";
import { AppRootState } from "../../redux/models/AppRootState";
import { AppActionTypes } from "../../redux/actions/constants";
import * as AppActions from "../../redux/actions/index";
import { politicianSelector } from "../../redux/selectors";
import { Observable } from "rxjs";
import { NgxPaginationModule } from "ngx-pagination";
import { getPaginationConfig } from "../../utils/constants/enums";
import { RouterModule } from "@angular/router";
import { LoaderService } from '../../shared/services/loader/loader.service';
@Component({
  selector: "app-politicians",
  standalone: true,
  imports: [
    CommonModule,
    SpeakerItemComponent,
    PaginationComponent,
    FilterFormComponent,
    NgxPaginationModule,
    RouterModule
  ],
  templateUrl: "./politicians.component.html",
  styleUrl: "./politicians.component.scss",
})
export class PoliticiansComponent {
  politicians: IPolitician[] = [];
  politicians$: Observable<IPolitician[]>;
  paginationConfig = getPaginationConfig();
  searchedText:string="";

  constructor(
    private toast: ToastrService,
    private store: Store<AppRootState>,
    private filterService: FilterService,
    public loader: LoaderService
  ) {
    this.politicians$ = this.store.pipe(select(politicianSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(AppActions.getPoliticians());
    this.politicians$.subscribe({
      next: (politicians) => {
        this.politicians = politicians;
        this.paginationConfig.totalItems = politicians.length;
      },
    });
  }
  
  filterPoliticians(searchText:string){
    this.politicians$.subscribe({
      next: (politicians)=>{
        let filteredPoliticians = this.filterService.filterItems(searchText,politicians,"politicianName");
        this.politicians = filteredPoliticians;
        this.paginationConfig.totalItems = filteredPoliticians.length;
        this.paginationConfig.currentPage=1;
      }
    })
  }
}
