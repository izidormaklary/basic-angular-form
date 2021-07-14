import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {FriendListComponent} from "./friend-list/friend-list.component";
import {AddFormComponent} from "./add-form/add-form.component";

const routes: Routes = [
  {path: 'form', component:AddFormComponent},
  {path: 'list', component:FriendListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
