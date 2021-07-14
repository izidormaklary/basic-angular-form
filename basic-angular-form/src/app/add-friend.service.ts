import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Friend} from "./friend";
import {OnInit} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  url = 'http://localhost:6969/allFriends';
  constructor(
   private http: HttpClient
  ) { }

  addFriend(friend : Friend){
   return this.http.post( this.url, friend)
  }
  removeFriendByEmail(email:string){
    return this.http.post( this.url+"/delete-mail", email)
  }
}
