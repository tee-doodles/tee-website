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

  // used for preloading goobers
  images = ["assets/sidebar/Goobers0.png",
    "assets/sidebar/Goobers1.png", 
    "assets/sidebar/Goobers2.png", 
    "assets/sidebar/Goobers3.png", 
    "assets/sidebar/Goobers4.png"];
  loadedImages = 0;

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

  public testFunc(){
    const previousGoobValue = this.goobValue;
    while(previousGoobValue == this.goobValue){
      this.appService.setGoob();
      this.goobValue = this.appService.getGoob();
    }
    
    this.imageName = "assets/sidebar/Goobers"+ this.goobValue +".png";
  }

  public loaded(){
    this.loadedImages++;
    if(this.images.length == this.loadedImages){
      //all images loaded
    }
  }
}
