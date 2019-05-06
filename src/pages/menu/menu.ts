import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { VentasPage } from '../ventas/ventas';
import { ProductosPage } from '../productos/productos';

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


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	 this.pages = [
      { title: 'Productos', component: ProductosPage },
     
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

  



}
