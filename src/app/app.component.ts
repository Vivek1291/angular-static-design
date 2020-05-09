import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';
  constructor(public dialog: MatDialog) {}

  openLoginDialog(): void  {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '100%',
      minHeight: '250px',
      maxWidth: '400px'
    })
    console.log("Event click");
  }
}
