import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {
  ngOnInit(){
    // @ts-ignore
    window.scrollTo({top: 0, behavior: 'instant'});
  }
}
