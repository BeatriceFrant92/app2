import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../shared/voiture.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-liste-voitures',
  templateUrl: './liste-voitures.component.html',
  styleUrls: ['./liste-voitures.component.css']
})

export class ListeVoituresComponent implements OnInit {
  
  voitures;
  constructor(private voitureService:VoitureService) { }

  ngOnInit() {
    // this.voitures = this.voitureService.getVoitures()
      this.voitures = this.voitureService.getVoitures().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
}

removeVoiture(id) {
  if (confirm('Etes-vous sûr de vouloir supprimer')){
    //deleteStagiaire i/o deleteVoiture
    this.voitureService.deleteStagiaire(id); 
    }
  } 
}

