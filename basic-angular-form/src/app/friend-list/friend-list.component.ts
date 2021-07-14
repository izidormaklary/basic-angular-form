import {Component, OnInit} from '@angular/core';
import {AddFriendService} from "../add-friend.service";
import {Form, FormGroup, FormsModule} from '@angular/forms';
@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {
  // #delMailForm = "ngForm"
  allFriends: any;
  // public emailToDel:object = {value:""};
  constructor(
    private addFriendService: AddFriendService
  ) {
    this.fetchFriends(this.addFriendService.url)
  }

  ngOnInit(): void {

  }
  // removeFriend(){
  //   console.log(this.emailToDel)
  //   // this.addFriendService.removeFriendByEmail(this.emailToDel)
  // }

  public async fetchFriends(url: string): Promise<any> {
    await fetch(url, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }).then(response => {
      return response.json()
    }).then(data => (this.allFriends = data));

  }
}
