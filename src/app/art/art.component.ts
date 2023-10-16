import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css'],
  standalone: true,
  imports: [MatExpansionModule, MatDialogModule],
})
export class ArtComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(value: Number) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);
    dialogRef.componentInstance.name = value;
    
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
  
  panelOpenState = false;
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.html',
  styleUrls: ['./dialog-content.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule],
})
export class DialogContentExampleDialog {
  name: Number = 0;
}
