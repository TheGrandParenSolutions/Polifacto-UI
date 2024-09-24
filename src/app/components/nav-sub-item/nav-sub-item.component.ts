import { CommonModule } from "@angular/common";
import { Component, HostListener, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IPoliticalParty } from "../../interfaces/interfaces";

@Component({
  selector: "app-nav-sub-item",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: "./nav-sub-item.component.html",
  styleUrl: "./nav-sub-item.component.scss",
})
export class NavSubItemComponent {
  @Input() title: string = "";
  @Input() promises?: IPoliticalParty[];
  isOpen = false;

  toggleIsOpen() {
    this.isOpen = !this.isOpen;
  }

  constructor() {}

  private wasInside = false;

  @HostListener("click")
  clickInside() {
    this.wasInside = true;
  }

  @HostListener("document:click")
  clickOutside() {
    if (!this.wasInside) {
      this.isOpen = false;
    }
    this.wasInside = false;
  }
}
