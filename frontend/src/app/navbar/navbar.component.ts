import { Component, OnInit} from '@angular/core';
import * as bootstrap from 'bootstrap';
// import { ModalModule, BsModalService, BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',

})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  createUser() {
    const userModal = new bootstrap.Modal('#userModal');
    // console.log("Hello");
    userModal.toggle();
}
}
