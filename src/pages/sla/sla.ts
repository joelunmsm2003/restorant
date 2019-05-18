import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http,RequestOptions, Headers } from '@angular/http';

/**
 * Generated class for the SlaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sla',
  templateUrl: 'sla.html',
})
export class SlaPage {

	sla:any=[];

  slas:any=[]

  //fecha:any;
  fecha:any 

	  sucursal:any=['Sucursal 1','Sucursal 2']


  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlaPage');

   this.fecha = new Date().toISOString()

   this.cambia(this.fecha)


  }

  cambia(data){

    this.slas=[]

  	
    for(let s in this.sucursal){

        console.log(s)

          this.traedatosucursal(data,this.sucursal[s])
    }

  
 


    
  	


  }

  trae(){

    console.log('HAHAHAHA',this.slas)
  }

  traedatosucursal(data,sucursal){




  	data={'fecha':data.substr(0,10),'sucursal':sucursal}


  	 this.http.post('http://xiencias.com:4444/sla',JSON.stringify(data))
     .subscribe(
      data => {


        console.log(JSON.parse(data['_body']))

      	if (JSON.parse(data['_body'])){

      		this.sla=JSON.parse(data['_body'])[0]

          console.log('SLA....',this.sla)

          this.slas.push(this.sla)


      	}

      	




      }),

      error => {

      }
  }

}
