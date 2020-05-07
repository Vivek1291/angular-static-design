import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  

  username = new FormControl('');
  password = new FormControl('');
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>
    ) {}

    ngOnInit(): void {

    }
  onCancelClick(): void {
    this.dialogRef.close();
  }

}
