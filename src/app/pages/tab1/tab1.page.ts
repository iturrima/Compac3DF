import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { AuthService } from '../../services/auth.service'



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public deseosService: DeseosService,
               private router: Router,
               private alertCtrl: AlertController,
               private auth:AuthService ) {
  }



  sites: any[] = [
    {
      id: 1,
      country: 'Canada',
      state: 'Ontario'
    },
    {
      id: 2,
      country: 'Canada',
      state: 'Vancouver'
    },
    {
      id: 3,
      country: 'Canada',
      state: 'Quebec'
    },
    {
      id: 4,
      country: 'Canada',
      state: 'Ontario'
    },
    {
      id: 5,
      country: 'Canada',
      state: 'Vancouver'
    },
    {
      id: 6,
      country: 'Canada',
      state: 'Quebec'
    },
    {
      id: 7,
      country: 'Canada',
      state: 'Ontario'
    },
    {
      id: 8,
      country: 'Canada',
      state: 'Vancouver'
    },
    {
      id: 9,
      country: 'Canada',
      state: 'Quebec'
    },
    {
      id: 10,
      country: 'Canada',
      state: 'Ontario'
    },
    {
      id: 11,
      country: 'Canada',
      state: 'Vancouver'
    },
    {
      id: 12,
      country: 'Canada',
      state: 'Quebec'
    }
  ];


  soils: any[] = [
    {
      id: 1,
      soil: 'asassaasas'
    },
    {
      id: 2,
      soil: 'sbbssbss'
    },
    {
      id: 3,
      soil: 'bcbcbcbc'
    },
    {
      id: 4,
      soil: 'dbdbdddbd'
    }   
  ];
  // compareWithFn = (o1, o2) => {
  //   return o1 && o2 ? o1.id === o2.id : o1 === o2;
  // };

  // compareWith = this.compareWithFn;


// login () {
//   this.auth.login()
// }

  async agregarLista() {

    const alert = await this.alertCtrl.create({
      header: 'New Analysis',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Name of the analysis'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel');
          }
        },
        {
          text: 'Create',
          handler: ( data ) => {
            console.log(data);
            if ( data.titulo.length === 0 ) {
              return;
            }

            const listaId = this.deseosService.crearLista( data.titulo );

            // Tengo que crear la lista
            this.router.navigateByUrl(`/tabs/tab1/agregar/${ listaId }`);
          }
        }
      ]
    });

    alert.present();

  }


}
