import { Component } from '@angular/core';
import { NavController,ToastController,ViewController } from 'ionic-angular';
import { VentasPage } from '../ventas/ventas';
import { Http,RequestOptions, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


	 pushPage: any;

	 user:any={}

  constructor(public storage: Storage,private view:ViewController,public toastCtrl: ToastController,public http: Http,public navCtrl: NavController) {


  	this.pushPage = VentasPage;

  }


     agregatoast(data) {
    let toast = this.toastCtrl.create({
      message: data,
      duration: 2000,
      cssClass: 'mitoast',
      position:'bottom',
    });
    toast.present();
  }

   closeModal(){


  
    

    this.view.dismiss()
}


   


  login(user){

  	 this.http.get('http://xiencias.com:4444/ingresar/'+user.nombre+'/'+user.password)
     .subscribe(
      data => {


      	console.log(data['_body'])

      	if(data['_body']=='"OK"'){

      		this.storage.set('logeado',true)
			
			this.view.dismiss()

			this.agregatoast('Bienvenido')

      	}
      	else{

      		this.agregatoast('Usuario Incorrecto')
      	}
      	


      }),

      error => {

      	this.agregatoast('Verifique su conexion')

      }
  }

}
