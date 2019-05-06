import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  sucursal=[{'sucursal':'Sucursal 1'}]
  selectedCategories:any=[]
  itemsproductos:any=[]
  listaproductos__:any=[]
  mesx:any;
  listaitems:any;
  anio:any;
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



  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {


  	  	  	let fecha = new Date()


  	this.mesx=this.meses[fecha.getMonth()+1]

  	console.log(this.mesx)



  	this.anio=fecha.getFullYear().toString()+'-01-01'

  	console.log(fecha.getFullYear())


  		this.filtrafechas('2018',this.mesx.nombre)

  		this.http.get('http://xiencias.com:4444/listaproductos/')
     .subscribe(
      data => {



          this.listaitems=JSON.parse(data['_body'])


          for(let i in this.listaitems){

          	this.itemsproductos.push(this.listaitems[i]['producto'])

          }



   


      
      }),

      error => {

      }
    
   



  }


  filtraproducto(producto){

  	var filtrado = this.listaproductos__.filter(function(data){

          	return data.producto==producto

          })


  	return filtrado[0]


  }


  filtrafechas(anio,mes){

  	 this.http.get('http://xiencias.com:4444/productos/'+anio+'/'+mes)
     .subscribe(
      data => {




          this.listaproductos__=JSON.parse(data['_body'])[1]['data']

          let _items = []


          for (let j in this.itemsproductos ){


          		_items.push(this.filtraproducto(this.itemsproductos[j]))

          }

          console.log('items...',_items)
	

          this.listaproductos=_items
          
 
      
      }),

      error => {

      }
  }



    filtrar(anio,mes){


     console.log('aniohahahahah',this.itemsproductos)


     anio=anio.split('-')[0]

     console.log('mes',mes)


     this.filtrafechas(anio,mes.nombre)



    

     //this.sacaventas(this.diax1,this.mesx1,anio)

   }

   clearmes(){

     this.mesx=null
   }


}
