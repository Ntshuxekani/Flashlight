import { Flashlight } from '@ionic-native/flashlight';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
isOn:boolean;
  constructor(public navCtrl: NavController,private platform:Platform, private flash:Flashlight) {
this.platform.ready().then(()=>{
this.updateFlashlightstatus()
})
  }
switchOn():void{
this.flash.switchOn();
this.updateFlashlightstatus();
}
switchOff():void{
  this.flash.switchOff();
  this.updateFlashlightstatus();
  }
  toggle():void{
    this.flash.toggle();
    this.updateFlashlightstatus();
    }
updateFlashlightstatus(){
  this.isOn=this.flash.isSwitchedOn();

}

}