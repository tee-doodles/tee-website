import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tee-website';
  goobValue = 0;
  imageName="";

  constructor(private appService: AppService){}

  ngOnInit(){
    if(this.appService.hasGoob()){
      this.goobValue = this.appService.getGoob();
    } else{
      this.appService.setGoob();
      this.goobValue = this.appService.getGoob();
    }
    this.imageName = "assets/sidebar/Goobers"+ this.goobValue +".png";
  }
}
