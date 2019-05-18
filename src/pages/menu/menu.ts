import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, AlertController, Platform} from 'ionic-angular';
import { VentasPage } from '../ventas/ventas';
import { ProductosPage } from '../productos/productos';
import { SlaPage } from '../sla/sla';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {


  rootPage:any=VentasPage
  productoPage:any=ProductosPage

  pages: Array<{title: string, component: any}>;


  constructor(public storage: Storage,public platform: Platform,public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,) {

  	 this.pages = [

      { title: 'Ventas', component: VentasPage },
      { title: 'Productos', component: ProductosPage },
      { title: 'SLA', component: SlaPage },
     
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario

    this.navCtrl.push(page.component);
  }

 

   salir() {
    const alert = this.alertCtrl.create({
     
      subTitle: 'Desea salir del sistema?',
      buttons: [
        {
          text: 'No',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Si',
          handler: data => {
             this.storage.remove('logeado')


             this.platform.exitApp();
          }
        }
      ]
    });
    alert.present();
  }
  



}
