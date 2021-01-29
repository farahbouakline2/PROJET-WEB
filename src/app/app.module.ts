import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import {etd} from './etudiant.component'; 

import { AppComponent } from './app.component';

import { SesseionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { InscriptionDisabledDirective } from './inscription-disabled.directive';
import { AdminModule } from './admin/admin.module';
import { MenuComponent } from './menu/menu.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import {RouterModule, Routes} from '@angular/router';
import { SessionFormulaireAddComponent } from './session-formulaire-add/session-formulaire-add.component';
import { SessionFormulaireEditComponent } from './session-formulaire-edit/session-formulaire-edit.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FakeSessionItemServiceService } from './fake-session-item.service';
import { FormAddFormateurComponent } from './form-add-formateur/form-add-formateur.component';
import { FromEditFormateurComponent } from './from-edit-formateur/from-edit-formateur.component';
import { FakeSessionFormateurService } from './fake-session-formateur.service';
import { ListeFormateursComponent } from './liste-formateurs/liste-formateurs.component';
import { FormAddParticipantComponent } from './form-add-participant/form-add-participant.component';
import { FromEditParticipantComponent } from './from-edit-participant/from-edit-participant.component';
import { participantsComponent } from './participants/participants.component';
import { ListeparticipantsComponent } from './liste-participants/liste-participants.component';

const appRoutes: Routes = [
  
  {
    path: 'session',
    component:SessionItemListComponent},
  {
    path: 'Dashboard',
    component:DashbordComponent},
    {
      path: 'add',
      component:SessionFormulaireAddComponent},
      {path: 'edit/:id',
      component:SessionFormulaireEditComponent},
      {path: '', redirectTo: '', pathMatch: 'full'
    },  
    {path:'formateurs',
    component: ListeFormateursComponent},
    
      {
        path:'add-formateur',
        component: FormAddFormateurComponent},
      {
        path:'edit-formateur',
        component: FromEditFormateurComponent},
        {
          path: 'add',
          component:SessionFormulaireAddComponent},
          {path: 'edit/:id',
          component:SessionFormulaireEditComponent},
          {path: '', redirectTo: '', pathMatch: 'full'
        },  

   {path:'participants',
    component: ListeparticipantsComponent},
    
      {
        path:'add-participant',
        component: FormAddParticipantComponent}
        ,
      {
        path:'edit-participant',
        component: FromEditParticipantComponent},
        {path: '**', 
        component: PagenotfoundComponent}
 ];
@NgModule({
  declarations: [
    PagenotfoundComponent,
    AppComponent,etd,DashbordComponent,
    MenuComponent, SesseionItemComponent,
     SessionItemListComponent, InscriptionDisabledDirective,
      MenuComponent, DashbordComponent, FormateursComponent,
       SessionFormulaireAddComponent, 
       SessionFormulaireEditComponent,
      
        FormAddFormateurComponent, 
        FromEditFormateurComponent, ListeFormateursComponent, ListeparticipantsComponent,FormAddParticipantComponent,FromEditParticipantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   ReactiveFormsModule,CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
      )
    
    
  ],
  providers: [FakeSessionItemServiceService,FakeSessionFormateurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
