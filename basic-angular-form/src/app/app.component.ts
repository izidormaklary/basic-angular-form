import {Component, OnInit} from '@angular/core';
import {Friend} from "./friend";
import {AddFriendService} from "./add-friend.service";
import {combineAll} from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  #formName = "ngForm"
  languages = ["html", "css", "javascript", "php", "java", "c#"];
  emailRegX = "^([a-zA-Z0-9_-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([a-zA-Z0-9-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$";
  phoneRegX = "^\ (((+|0\ 0)\ ([0-9]\ [0-9]))|[0-9])(\ [0-9]){9}\ $";
  title = 'basic-angular-form';
  friendModel = new Friend();
  allFriends: any;

  constructor(private addFriendService: AddFriendService) {
  }

  ngOnInit() {
    this.fetchFriends(this.addFriendService.url)
  }

  addFriend() {

    this.addFriendService.addFriend(this.friendModel).subscribe(data => alert("s"), error => alert("it didn't work"));
    this.fetchFriends(this.addFriendService.url);
  }

  public async fetchFriends(url : string): Promise<any> {
    await fetch(url, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }).then(response => {
      return response.json()
    }).then(data => (this.allFriends = data));

  }
}
