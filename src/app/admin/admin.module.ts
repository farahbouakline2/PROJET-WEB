import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import { Routes, RouterModule } from '@angular/router';
const appRoutes: Routes = [
  
  
{    path: 'form',
    component:SessionAddFormComponent},
    
 ];
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
      )
  ],
  declarations: [AdminComponent, SessionItemComponent, SessionItemListComponent, SessionAddFormComponent, SessionEditFormComponent],
  
  bootstrap: [AdminComponent]
})
export class AdminModule { }
