import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NoopScrollStrategy } from '@angular/cdk/overlay';


@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css'],
  standalone: true,
  imports: [MatExpansionModule, MatDialogModule],
})
export class ArtComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(){
    // @ts-ignore
    window.scrollTo({top: 0, behavior: 'instant'});
  }

  openDialog(value: Number) {
    const dialogRef = this.dialog.open(DialogContent, {
      scrollStrategy: new NoopScrollStrategy()
    });
    dialogRef.componentInstance.name = value;
    
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
  
  panelOpenState = false;
}

@Component({
  selector: 'dialog-content',
  templateUrl: './dialog-content.html',
  styleUrls: ['./dialog-content.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule],
})
export class DialogContent {
  name: Number = 0;
}