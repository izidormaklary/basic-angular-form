import { Component } from '@angular/core';
import {Friend} from "./friend";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  #formName="ngForm"
  languages = ["html", "css", "javascript", "php", "java", "c#"];
  emailRegX = "^([a-zA-Z0-9_-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([a-zA-Z0-9-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$";
  phoneRegX = "^\ (((+|0\ 0)\ ([0-9]\ [0-9]))|[0-9])(\ [0-9]){9}\ $";
  title = 'basic-angular-form';
  friendModel = new Friend();
}
