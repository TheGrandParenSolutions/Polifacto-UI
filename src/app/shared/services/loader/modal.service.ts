import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import {
  lockBgScrollWhenModalOpen,
  unLockBgScrollWhenModalClose,
} from "../../../utils/helper";

@Injectable({
  providedIn: "root",
})
export class ModalService {
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  public isOpen$ = this.isOpenSubject.asObservable();
  constructor() {}

  openModal() {
    this.isOpenSubject.next(true);
    lockBgScrollWhenModalOpen();
  }

  hideModal() {
    this.isOpenSubject.next(false);
    unLockBgScrollWhenModalClose();
  }
}
