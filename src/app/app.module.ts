import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ListeVoituresComponent } from './liste-voitures/liste-voitures.component';
import { VoitureService } from './shared/voiture.service';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ContactComponent } from './contact/contact.component';
import { Page404Component } from './page404/page404.component';
import { AdminComponent } from './admin/admin.component';


const Routes: Routes = [
  {path:'accueil', component:AccueilComponent},
  {path:'presentation', component:PresentationComponent},
  {path:'admin', component:AdminComponent}, 
  {path:'addVoiture', component:AddVoitureComponent}, 
  {path:'contact', component:ContactComponent},
  {path:'', redirectTo: 'accueil', pathMatch:'full'},
  {path:'**', component:Page404Component},
  {path: '', component:AccueilComponent}
];
// import {AngularFireDatabaseModule} from 'angularfire2/database';


@NgModule({
  declarations: [
    AppComponent,
    ListeVoituresComponent,
    AddVoitureComponent,
    AccueilComponent,
    PresentationComponent,
    ContactComponent,
    Page404Component,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(Routes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule  
  ],
  providers: [VoitureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
