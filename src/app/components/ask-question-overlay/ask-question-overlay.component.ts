import { ModalService } from "./../../shared/services/loader/modal.service";
import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { fadeInAndOut } from "../../shared/animations/animations";
import { PoliticiansService } from "../../api/services/politicians/politicians.service";
import { ToastrService } from "ngx-toastr";
import { IPolitician } from "../../interfaces/interfaces";
import { VerifyPostService } from "../../api/services/verify-post/VerifyPost.service";
import { SpinnerComponent } from "../spinner/spinner.component";

@Component({
  selector: "app-ask-question-overlay",
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerComponent],
  templateUrl: "./ask-question-overlay.component.html",
  styleUrl: "./ask-question-overlay.component.scss",
  animations: [fadeInAndOut],
})
export class AskQuestionOverlayComponent implements OnInit {
  politicians: IPolitician[] = [];
  openDropdown!: boolean;
  askUsForm!: FormGroup;
  addPoliticianForm!: FormGroup;
  selectedPolitician!: IPolitician;
  openAddPoliticianModal: boolean = false;

  constructor(
    public modal: ModalService,
    private politiciansService: PoliticiansService,
    private toast: ToastrService,
    private verifyPostService: VerifyPostService
  ) { }
  ngOnInit(): void {
    this.askUsForm = new FormGroup({
      email: new FormControl<string>("", [Validators.required]),
      source: new FormControl<string>("", [Validators.required]),
      question: new FormControl<string>("", [Validators.required]),
    });
    this.addPoliticianForm = new FormGroup({
      name: new FormControl<string>("", [Validators.required]),
      party: new FormControl<string>("", [Validators.required]),
      designation: new FormControl<string>(""),
    });
    this.fetchPoliticians();
  }

  get name(){
    return this.addPoliticianForm.get('name');
  }
  get party(){
    return this.addPoliticianForm.get('party');
  }
  get designation(){
    return this.addPoliticianForm.get('designation');
  }

  isFormValid(){
    return this.addPoliticianForm.valid;
  }
  toggleDropdown() {
    this.openDropdown = !this.openDropdown;
  }

  selectPolitician(politician: IPolitician) {
    this.selectedPolitician = politician;
    this.openDropdown = false;
  }

  postUserQuestionForVerification() {
    const userProvidedQuestionInfo = this.askUsForm.value;

    this.verifyPostService
      .verifyUserAskedPost({
        userEmail: userProvidedQuestionInfo.email,
        politicianId: this.selectedPolitician.politicianId,
        postDescription: userProvidedQuestionInfo.question,
        postUrl: userProvidedQuestionInfo.source,
      })
      .subscribe({
        next: (data) => {
          this.toast.success(
            "Thankyou for asking, we will verify this and reach out to you if it is a truth or not."
          );
          this.modal.hideModal();
        }
      });
  }

  addPolitician() {
   
    if(!this.isFormValid()){
      return;
    }
    const newPoliticianDetails = this.addPoliticianForm.value;
    this.politiciansService
      .createPolitician({
        politicianName: newPoliticianDetails.name,
        politicianDesignation: newPoliticianDetails.designation,
        politicianParty: newPoliticianDetails.party,
      })
      .subscribe({
        next: (data) => {
          this.toast.success("Politician successfully created.");
          this.fetchPoliticians();
          this.openAddPoliticianModal = false;
        },
      });
  }

  fetchPoliticians = () => {
    this.politiciansService.getAllPoliticians().subscribe({
      next: (politicians) => {
        this.politicians = politicians;
      },
    });
  };
}
