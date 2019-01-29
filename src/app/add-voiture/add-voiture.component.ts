import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VoitureService } from '../shared/voiture.service';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.css']
})
export class AddVoitureComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private voitureService: VoitureService) { }

  ngOnInit() {
    //construction des éléments du formulaire
    this.form = this.formBuilder.group({
    marque: ['', Validators.required],
    modele: ['', Validators.required],
    pays: ['', Validators.required]
    });
  }
addVoiture(){
  if (this.form.valid){
    //Création d'un objet voiture dont les propriétés ont pour valeur
    //les données récupérées via les champs de saisie du formulaire
    let voiture = {
      marque: this.form.value.marque,
      modele: this.form.value.modele,
      pays: this.form.value.pays
    };
    //appel de la méthode createVoiture(v) pour insérer la voiture
    this.voitureService.createVoiture(voiture);
    console.log(voiture);
    }
  }
}
