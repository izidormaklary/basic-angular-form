import {Component, OnInit} from '@angular/core';
import {Friend} from "../friend";
import {AddFriendService} from "../add-friend.service";
import {Router} from "@angular/router";
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  #formName = "ngForm"
  languages = ["html", "css", "javascript", "php", "java", "c#"];
  emailRegX = "^([a-zA-Z0-9_-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([a-zA-Z0-9-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$";
  phoneRegX = "^\ (((+|0\ 0)\ ([0-9]\ [0-9]))|[0-9])(\ [0-9]){9}\ $";
  title = 'basic-angular-form';
  friendModel = new Friend();

  constructor(private addFriendService: AddFriendService,
              private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  addFriend() {

    this.addFriendService.addFriend(this.friendModel).subscribe(data => alert("s"), error => alert("it didn't work"));
    this.router.navigate(['list']);

  }

}
