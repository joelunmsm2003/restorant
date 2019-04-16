import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,AlertController,Platform } from 'ionic-angular';
import { Http,RequestOptions, Headers } from '@angular/http';
import { DetallesucursalPage } from '../detallesucursal/detallesucursal';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
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
anio:any=2019;

dia:any;
diax:any;
mesx:any;
diax1:any;
diasx1:any;
mes:any;
mesx1:any;
meses:any=[
      {'nombre':'Todos','id':0},
      {'nombre':'Enero','id':1},
      {'nombre':'Febrero','id':2},
      {'nombre':'Marzo','id':3},
      {'nombre':'Abril','id':4},
      {'nombre':'Mayo','id':5},
      {'nombre':'Junio','id':6},
      {'nombre':'Julio','id':7},
      {'nombre':'Julio','id':8},
      {'nombre':'Julio','id':9},
      {'nombre':'Julio','id':10},
      {'nombre':'Julio','id':11},
      {'nombre':'Julio','id':12},


      ]

dias:any=[
      {'nombre':'Todos','id':0},
      {'nombre':'1'},
      {'nombre':'2'},
      {'nombre':'3'},
      {'nombre':'4'},
      {'nombre':'5'},
      {'nombre':'6'},
      {'nombre':'7'},
      {'nombre':'8'},
      {'nombre':'9'},
      {'nombre':'10'},
      {'nombre':'11'},
      {'nombre':'12'},
      {'nombre':'13'},
      {'nombre':'14'},
      {'nombre':'15'},
      {'nombre':'16'},
      {'nombre':'17'},
      {'nombre':'18'},
      {'nombre':'19'},
      {'nombre':'20'},
      {'nombre':'21'},
      {'nombre':'22'},
      {'nombre':'23'},
      {'nombre':'24'},
      {'nombre':'25'},
      {'nombre':'26'},
      {'nombre':'27'},
      {'nombre':'28'},
      {'nombre':'29'},
      {'nombre':'30'},
      {'nombre':'31'}


      ]

      d:any;

  constructor(public platform: Platform,public alertCtrl: AlertController,public storage: Storage,public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams,public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VentasPage');


    let fecha= new Date()

    this.storage.get('logeado').then((val)=>{ 


        console.log('iii',val)

        if(val==null){

          this.pagelogin()

        }

     })



    

    

    

    console.log('fecha',fecha.getDay(),fecha.getMonth(),fecha.getFullYear())


    this.mesx=this.meses[fecha.getMonth()+1]

    this.diax = this.dias[fecha.getDate()]

    this.anio=fecha.getFullYear().toString()+'-01-01'


    let mes = parseInt(fecha.getMonth().toString())+1


   this.http.get('http://xiencias.com:4444/obras/'+fecha.getDate()+'/'+mes+'/'+fecha.getFullYear())
     .subscribe(
      data => {


          this.sucursal=JSON.parse(data['_body'])

          console.log(this.sucursal)
          //console.log('API de ANDER',JSON.parse(data['_body']))


      }),

      error => {

      }


  }



   clearanio(){

     this.anio=null
   }

   clearmes(){

     this.mesx=null
   }

   cleardia(){

     this.diax=null
   }

   cambiaanio(data){


     this.anio=data

     console.log('yyyy',data)



   }

   cambiames(data){

    this.mes=data

    console.log(data)




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

   cambiadia(data){


     console.log(data)

     this.dia=data


   }


   filtrar(anio,mes,dia){

     console.log('aniohahahahah',anio.split('-')[0])


     anio=anio.split('-')[0]

     console.log('mes',mes)

     console.log('dia',dia)

     

    if (dia===undefined){

      console.log('ingreseeeeeeeeee')

      this.diax1 = 'Todos'
    }
    else{

      this.diax1=dia.nombre

    }

    

    if(mes===undefined){

      this.mesx1=0
    }
    else{


      this.mesx1=mes.id
    }
    

     this.sacaventas(this.diax1,this.mesx1,anio)

   }



   sacaventas(dia,mes,anio){


      this.http.get('http://xiencias.com:4444/obras/'+dia+'/'+mes+'/'+anio)
     .subscribe(
      data => {


          this.sucursal=JSON.parse(data['_body'])

          console.log(this.sucursal)
          //console.log('API de ANDER',JSON.parse(data['_body']))


      }),

      error => {

      }


   }



   pagelogin(){


   let profileModal = this.modalCtrl.create(HomePage, {});
   profileModal.onDidDismiss(data => {
     


   });
   profileModal.present();


   
  }


  irasucursal(s){


   let profileModal = this.modalCtrl.create(DetallesucursalPage, {'sucursal':s});
   profileModal.onDidDismiss(data => {
     


   });
   profileModal.present();



  }





}
