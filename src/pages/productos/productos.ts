import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,LoadingController } from 'ionic-angular';
import { Http,RequestOptions, Headers } from '@angular/http';
/**
 * Generated class for the ProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {

  listaproductos:any;
  itemscategoria:any;
  clave:any=false
  sucursal=[{'sucursal':'Sucursal 1','id':1},{'sucursal':'Sucursal 2','id':2}]
  selectedCategories:any=[]
  itemsproductos:any=[]
  listaproductos__:any=[]
  mesx:any;
  selectsucursal:any;
  listaitems:any;
  anio:any;
  categorias:any;
  categoria:any;
  productos:any;
  estado:any;
  loader:any;
  meses:any=[
     
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



  constructor(public loadingCtrl: LoadingController,public http: Http,public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {


  }


   presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Cargando Productos..."
    });
    this.loader.present();
  }



  selecciona(data){



      if(this.clave){

          for(let i in  this.listaitems){

             this.listaitems[i]['selecciona']=false
          }

          


      }
      else{

          for(let i in  this.listaitems){

             this.listaitems[i]['selecciona']=true
          }

          

      }

      this.clave=!this.clave
   

      

      console.log('hahahah',this.listaitems)

  }

  ionViewDidLoad() {


    this.http.get('http://xiencias.com:4444/categoria')
     .subscribe(
      data => {



          this.categorias=JSON.parse(data['_body'])


      
      }),

      error => {

      }



this.selectsucursal=1

this.estado=true



  	  	  	let fecha = new Date()


  	this.mesx=this.meses[fecha.getMonth()]

  	console.log(this.mesx)



  	this.anio=fecha.getFullYear().toString()+'-01-01'

  	console.log(fecha.getFullYear())


  		this.filtrafechas('2019',this.mesx.nombre,1)

  		this.http.get('http://xiencias.com:4444/listaproductos/')
     .subscribe(
      data => {



          this.listaitems=JSON.parse(data['_body'])


          for(let i in this.listaitems){

               this.listaitems[i]['selecciona']=false
            }

          

           

          for(let i in this.listaitems){

          	this.itemsproductos.push(this.listaitems[i]['producto'])

          }


          

      
      }),

      error => {

      }
    
   



  }




  filtracategoria(producto){

  	var filtrado = this.productos.filter(function(data){

          	return data.categoria==producto

          })


    console.log('Filtrado...',filtrado)
  	return filtrado


  }


  filtrafechas(anio,mes,sucursal){


    this.presentLoading()

  	 this.http.get('http://xiencias.com:4444/productos/'+anio+'/'+mes)
     .subscribe(
      data => {



          console.log('DTA Cragada.',JSON.parse(data['_body']))


          this.loader.dismiss()


          this.productos=JSON.parse(data['_body'])

          let _items = []


          this.productos=this.filtracategoria(this.itemscategoria)


          if(this.itemscategoria==undefined){

              this.productos=JSON.parse(data['_body'])

          }
 

          



          console.log('Lista de Productos...',this.productos)
          
 
      
      }),

      error => {

      }
  }



    filtrar(anio,mes,selectsucursal){


     console.log('aniohahahahah',this.itemsproductos)


     anio=anio.split('-')[0]

     console.log('mes',mes)


     this.filtrafechas(anio,mes.nombre,selectsucursal)



    

     //this.sacaventas(this.diax1,this.mesx1,anio)

   }

   clearmes(){

     this.mesx=null
   }


}
