import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { VentasPage } from '../pages/ventas/ventas';
import { ProductosPage } from '../pages/productos/productos';
import { SlaPage } from '../pages/sla/sla';

import { DetallesucursalPage } from '../pages/detallesucursal/detallesucursal';
import { HttpClientModule,HttpClient } from '@angular/common/http'; 
import { Http, RequestOptions, HttpModule } from '@angular/http';
import {IonicStorageModule} from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VentasPage,
    MenuPage,
    ProductosPage,
    DetallesucursalPage,
    SlaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
    }),
    HttpModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VentasPage,
    MenuPage,
    ProductosPage,
    SlaPage,
    DetallesucursalPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
