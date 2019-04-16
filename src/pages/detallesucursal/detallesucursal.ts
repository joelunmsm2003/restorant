
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Http,RequestOptions, Headers } from '@angular/http';
import { Chart } from 'chart.js';


/**
 * Generated class for the DetallesucursalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detallesucursal',
  templateUrl: 'detallesucursal.html',
})
export class DetallesucursalPage {

	sucursal:any;

    @ViewChild('barCanvas') barCanvas;

    @ViewChild('barCanvas1') barCanvas1;

    barChart: any;

    barChart1: any;

    anio:any;
    _anio:any;
    _mes:any;

    ventasanio:any;
    
    anioprincipal:any;
    ventaspordia:any;
    id_sucursal:any;


  constructor(public http: Http,private view:ViewController,public navCtrl: NavController, public navParams: NavParams) {


  	console.log(navParams.get('sucursal'))

  	this.sucursal=navParams.get('sucursal')


    this.id_sucursal = this.sucursal.sucursal.split(' ')[1]

    this.id_sucursal=this.sucursal.sucursal

    console.log(this.sucursal)


  }

  ionViewDidLoad() {



      this.anioprincipal=2019

    this.http.get('http://xiencias.com:4444/ventas/2/2019/'+this.id_sucursal)
     .subscribe(
      data => {


          this.ventasanio=JSON.parse(data['_body'])

          console.log(this.sucursal)


          for (let v in this.ventasanio){

            console.log('hshshs',this.ventasanio[v]['nombre'])

            this.barChart.data.datasets[0].data[v]=this.ventasanio[v]['total'].toFixed(2)

            if(this.ventasanio[v]['mes_nombre']){

            this.barChart.data.labels[v] = this.ventasanio[v]['mes_nombre'].substring(0, 3);


            }

            

          }

          this.barChart.update()


          //console.log('API de ANDER',JSON.parse(data['_body']))


      }),

      error => {

      }



     this.barChart = new Chart(this.barCanvas.nativeElement, {

            type: 'horizontalBar',
            data: {
                labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun","Jul","Ago","Set","Oct","Nov","Dic"],
                datasets: [{
                    label: 'Monto Total en Soles por Mes',
                    data: [0, 0, 0, 0, 0, 0,0,0,0,0,0,0],
                    backgroundColor: [
                        'rgb(247, 163, 91)',
                        'rgb(169, 254, 150)',
                        'rgb(123, 180, 237)',
                        'rgb(241, 92, 91)',
                        'rgb(247, 163, 91)',
                        'rgb(169, 254, 150)',
                        'rgb(123, 180, 237)',
                        'rgb(241, 92, 91)',
                        'rgb(247, 163, 91)',
                        'rgb(169, 254, 150)',
                        'rgb(123, 180, 237)',
                        'rgb(241, 92, 91)',
                    ]
                   
                }]
            },
            options: {

                legend: {
                  display: false
                },
                
                  
                
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        },
                        gridLines: {
                          display:false
                      }
 
                    }],

                    xAxes: [{
                        ticks: {
                            callback: function(tick) {
                                var characterLimit = 20;
                                
                                return parseFloat(tick)/1000+ 'K';
                            }
                        },
                        gridLines: {
                            display:true
                        }
 
                    }]
                },
                tooltips: {

                    callbacks: {
                        label: function(tooltipItem) {

                            console.log(tooltipItem)
                            return parseFloat(tooltipItem.value).toLocaleString();
                        }
                    }
               },
               tooltipTemplate: "<%= value %>",
               showTooltips: true,
               onAnimationComplete: function()
                {    
                    this.showTooltip(this.datasets[0].bars, true);          
                },

               tooltipEvents: [],

               hover: {
                    animationDuration: 0
                },

                animation: {
                onProgress: drawBarValues,
                onComplete: drawBarValues
                }

            }

        });



     function drawBarValues()
      {
        // render the value of the chart above the bar
        var ctx = this.chart.ctx;
        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'normal', Chart.defaults.global.defaultFontFamily);
        ctx.fillStyle = this.chart.config.options.defaultFontColor;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'bottom';
        this.data.datasets.forEach(function (dataset) {
          for (var i = 0; i < dataset.data.length; i++) {
            if(dataset.hidden === true && dataset._meta[Object.keys(dataset._meta)[0]].hidden !== false){ continue; }
            var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
            if(dataset.data[i] !== null){

              if (dataset.data[i]!=0){
                ctx.fillText(parseFloat(dataset.data[i]).toLocaleString(), 45, model.y +7);

              }
              
            }
          }
        });
      }








         this.barChart1 = new Chart(this.barCanvas1.nativeElement, {

            type: 'horizontalBar',
            data: {
                labels: ["1"],
                datasets: [{
                    label: 'Monto Total en Soles por Dia',
                    data: [0, 0, 0, 0, 0, 0,0,0,0,0,0,0],
                    backgroundColor: [
                        'rgb(247, 163, 91)',
                        'rgb(169, 254, 150)',
                        'rgb(123, 180, 237)',
                        'rgb(241, 92, 91)',
                        'rgb(247, 163, 91)',
                        'rgb(169, 254, 150)',
                        'rgb(123, 180, 237)',
                        'rgb(241, 92, 91)',
                        'rgb(247, 163, 91)',
                        'rgb(169, 254, 150)',
                        'rgb(123, 180, 237)',
                        'rgb(241, 92, 91)',
                        'rgb(247, 163, 91)',
                        'rgb(169, 254, 150)',
                        'rgb(123, 180, 237)',
                        'rgb(241, 92, 91)',
                        'rgb(247, 163, 91)',
                        'rgb(169, 254, 150)',
                        'rgb(123, 180, 237)',
                        'rgb(241, 92, 91)',
                        'rgb(247, 163, 91)',
                        'rgb(169, 254, 150)',
                        'rgb(123, 180, 237)',
                        'rgb(241, 92, 91)',
                        'rgb(169, 254, 150)',
                        'rgb(123, 180, 237)',
                        'rgb(241, 92, 91)',
                        'rgb(247, 163, 91)',
                        'rgb(169, 254, 150)',
                        'rgb(123, 180, 237)',
                        'rgb(241, 92, 91)',

                    ]
                   
                }]
            },
            options: {
                showAllTooltips: true,
                legend: {
                  display: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        },
                        gridLines: {
                            display:false
                        }
                    }],

                    xAxes: [{
                        ticks: {
                            callback: function(tick) {
                                var characterLimit = 20;


                                console.log('hahahapinches way',tick)
                                
                                return parseFloat(tick)/1000+ 'K';
                            }
                        },
                        gridLines: {
                            display:true
                        }
                    }]
                },
                tooltips: {
                    mode: 'single',
                    callbacks: {
                        label: function(tooltipItem) {

                            console.log(tooltipItem)
                            return parseFloat(tooltipItem.value).toLocaleString();
                        }
                    }
               },
                hover: {
                    animationDuration: 0
                },

                animation: {
                onProgress: drawBarValues,
                onComplete: drawBarValues
                }

            }

        });




      
         this.cambiaaniomes('2019-4')







  }



  cambiaaniomes(anio){


    this.limpia2()

    this._anio= parseInt(anio.split('-')[0])
    this._mes= parseInt(anio.split('-')[1])


    console.log(this._anio,this._mes)


    this.http.get('http://xiencias.com:4444/ventasxdia/'+this._mes+'/'+this._anio+'/'+this.id_sucursal)
     .subscribe(
      data => {


          this.ventaspordia=JSON.parse(data['_body'])



          for (let v in this.ventaspordia){

            console.log('hshshs',this.ventaspordia[v])

            this.barChart1.data.datasets[0].data[v]=this.ventaspordia[v]['total'].toFixed(2)

            this.barChart1.data.labels[v] = this.ventaspordia[v]['dia'];

            

          }

          this.barChart1.update()


          //console.log('API de ANDER',JSON.parse(data['_body']))


      }),

      error => {

      }



  }

  cambiaanio(anio){



    this.anioprincipal=anio


    this.limpia()

    this.http.get('http://xiencias.com:4444/ventas/2/'+anio+'/'+this.id_sucursal)
     .subscribe(
      data => {


          this.ventasanio=JSON.parse(data['_body'])

          console.log(this.sucursal)


          for (let v in this.ventasanio){

            console.log('hshshs',this.ventasanio[v]['nombre'])

            this.barChart.data.datasets[0].data[v]=this.ventasanio[v]['total'].toFixed(2)

            if(this.ventasanio[v]['mes_nombre']){

            this.barChart.data.labels[v] = this.ventasanio[v]['mes_nombre'].substring(0, 3);

             }

          }

          this.barChart.update()


          //console.log('API de ANDER',JSON.parse(data['_body']))


      }),

      error => {

      }
  }


 

   limpia(){


 

          for (let v in this.ventasanio){

            

            this.barChart.data.datasets[0].data[v]=0

            if(this.ventasanio[v]['mes_nombre']){

              this.barChart.data.labels[v] = this.ventasanio[v]['mes_nombre'].substring(0, 3);

            }

            

            

          }

          this.barChart.update()


      
  }



   limpia2(){


 

          for (let v in this.ventaspordia){

            

            this.barChart1.data.datasets[0].data[v]=0

            if(this.ventaspordia[v]['mes_nombre']){

            this.barChart1.data.labels[v] = this.ventaspordia[v]['mes_nombre'].substring(0, 3);

             }

          }

          this.barChart1.update()


      
  }




  closeModal(){


    

    this.view.dismiss()


}

}
