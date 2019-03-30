import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Http,RequestOptions, Headers } from '@angular/http';
import { DetallesucursalPage } from '../detallesucursal/detallesucursal';
/**
 * Generated class for the VentasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ventas',
  templateUrl: 'ventas.html',
})
export class VentasPage {


sucursal:any;

  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams,public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VentasPage');



   this.http.get('http://xiencias.com:4444/obras/')
     .subscribe(
      data => {


          this.sucursal=JSON.parse(data['_body'])

          console.log(this.sucursal)
          //console.log('API de ANDER',JSON.parse(data['_body']))


      }),

      error => {

      }


  }


  irasucursal(s){


   let profileModal = this.modalCtrl.create(DetallesucursalPage, {'sucursal':s});
   profileModal.onDidDismiss(data => {
     


   });
   profileModal.present();
  }



}
