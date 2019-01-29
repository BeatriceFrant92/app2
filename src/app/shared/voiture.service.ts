import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VoitureService{

  constructor(private firestore: AngularFirestore) {}
    
  //Méthode getVoitures() pour extraire les données disponibles de la collection Firestore:
  getVoitures(){
  return this.firestore.collection('voitures').snapshotChanges();
  // return this.firestore.collection('voitures').valueChanges();
  }
  
  createVoiture(v){
  return this.firestore.collection('voitures').add(v);     
  }
 
  deleteStagiaire(id) {
  return this.firestore.collection('voitures').doc(id).delete();
  }
}