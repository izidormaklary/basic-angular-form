import {Component, OnInit} from '@angular/core';
import {AddFriendService} from "../add-friend.service";
import {Form, FormGroup, FormsModule,} from '@angular/forms';
import {Friend} from "../friend";

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  allFriends: any;

  constructor(
    private addFriendService: AddFriendService
  ) {

  }

  ngOnInit(): void {
    this.fetchFriends(this.addFriendService.url)
  }

   async removeFriend(form: any) {
    await this.addFriendService.removeFriendByEmail(form.value.emailToDel).subscribe(data => console.log(data), error => console.log(error));
    this.fetchFriends(this.addFriendService.url)
  }

  public async fetchFriends(url: string): Promise<any> {
    await fetch(url, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }).then(response => {
      return response.json()
    }).then(data => (this.allFriends = data));

  }
}
