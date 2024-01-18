import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class AppService {
  goobValue = -1;

  setGoob(){
    this.goobValue = Math.floor(Math.random() * (4 - 0 + 1) + 0);
    console.log(this.goobValue);
  }

  getGoob(){
    return this.goobValue;
  }

  hasGoob(){
    return this.goobValue != -1;
  }
}
