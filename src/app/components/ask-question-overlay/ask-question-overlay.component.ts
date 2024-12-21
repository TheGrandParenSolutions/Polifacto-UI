// Import necessary Angular and external modules
import { ModalService } from "./../../shared/services/loader/modal.service";
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { fadeInAndOut } from "../../shared/animations/animations";
import { PoliticiansService } from "../../api/services/politicians/politicians.service";
import { ToastrService } from "ngx-toastr";
import { IPolitician } from "../../interfaces/interfaces";
import { VerifyPostService } from "../../api/services/verify-post/VerifyPost.service";
import { SpinnerComponent } from "../spinner/spinner.component";
import { TooltipDirective } from "../../shared/tooltip/tooltip.directive";

@Component({
  selector: "app-ask-question-overlay",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SpinnerComponent, TooltipDirective],
  templateUrl: "./ask-question-overlay.component.html",
  styleUrls: ["./ask-question-overlay.component.scss"],
  animations: [fadeInAndOut],
})
export class AskQuestionOverlayComponent implements OnInit {
  politicians: IPolitician[] = [];
  openDropdown = false;
  askUsForm!: FormGroup;
  addPoliticianForm!: FormGroup;
  selectedPolitician!: IPolitician;
  openAddPoliticianModal = false;

  constructor(
    public modal: ModalService,
    private politiciansService: PoliticiansService,
    private toast: ToastrService,
    private verifyPostService: VerifyPostService
  ) { }

  ngOnInit(): void {
    this.askUsForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      source: new FormControl("", [Validators.required, this.urlValidator]),
      question: new FormControl("", [Validators.required]),
      politician: new FormControl(null, [Validators.required])
    });

    this.addPoliticianForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      party: new FormControl("", [Validators.required]),
      designation: new FormControl("", [Validators.required]),
    });

    this.fetchPoliticians();
  }

  get email() {
    return this.askUsForm.get("email");
  }

  get source() {
    return this.askUsForm.get("source");
  }

  get question() {
    return this.askUsForm.get("question");
  }

  get name() {
    return this.addPoliticianForm.get("name");
  }

  get party() {
    return this.addPoliticianForm.get("party");
  }

  get designation() {
    return this.addPoliticianForm.get("designation");
  }

  isFormValid(): boolean {
    return this.addPoliticianForm.valid;
  }

  toggleDropdown(): void {
    this.openDropdown = !this.openDropdown;
  }

  selectPolitician(politician: IPolitician): void {
    this.selectedPolitician = politician;
    this.askUsForm.patchValue({ politician })
    this.openDropdown = false;
  }

  postUserQuestionForVerification(): void {
    if (this.askUsForm.invalid || !this.selectedPolitician) {
      this.toast.error("Please fill out all fields and select a politician.");
      return;
    }

    const userProvidedQuestionInfo = this.askUsForm.value;

    this.verifyPostService
      .verifyUserAskedPost({
        userEmail: userProvidedQuestionInfo.email,
        politicianId: this.selectedPolitician.politicianId,
        postDescription: userProvidedQuestionInfo.question,
        postUrl: userProvidedQuestionInfo.source,
      })
      .subscribe({
        next: () => {
          this.toast.success(
            "Thank you for asking. We will verify this and reach out to you."
          );
          this.modal.hideModal();
          this.askUsForm.reset();
          this.selectedPolitician = undefined!;
        },
      });
  }

  addPolitician(): void {
    if (!this.isFormValid()) {
      this.toast.error("Please fill out all fields to add a politician.");
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
        next: () => {
          this.toast.success("Politician successfully created.");
          this.fetchPoliticians();
          this.openAddPoliticianModal = false;
          this.addPoliticianForm.reset();
        },
      });
  }

  fetchPoliticians(): void {
    this.politiciansService.getAllPoliticians().subscribe({
      next: (politicians) => {
        this.politicians = politicians;
      },
    });
  }

  showFieldError(fieldName: string): boolean {
    const field = this.askUsForm.controls[fieldName];
    return !!field && field.invalid && field.touched;
  }

  urlValidator(control: FormControl): { [key: string]: boolean } | null {
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    return control.value && !urlPattern.test(control.value)
      ? { invalidUrl: true }
      : null;
  }

  showFieldErrorForAddPoliticianForm(fieldName: string): boolean {
    const field = this.addPoliticianForm.controls[fieldName];
    return !!field && field.invalid && field.touched;
  }
}
