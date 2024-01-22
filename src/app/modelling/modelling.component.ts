import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-modelling',
  templateUrl: './modelling.component.html',
  styleUrls: ['./modelling.component.css'],
  standalone: true,
  imports: [MatExpansionModule, MatDialogModule]

})
export class ModellingComponent implements OnInit {
  panelOpenState = false;

  ngOnInit(){
    // @ts-ignore
    window.scrollTo({top: 0, behavior: 'instant'});
  }
}
