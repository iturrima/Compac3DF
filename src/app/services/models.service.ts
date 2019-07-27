import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelModel } from '../models/model.model';
import  { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

private url = 'https://compac3d.firebaseio.com';

  constructor( private http: HttpClient) { }

  
crearModel ( model : ModelModel){

  return  this.http.post(`${  this.url  }/models.json`, model)
          .pipe(
            map( (resp:any) => { 
              model.id = resp.name;
              return model;
            })
          );
  }




actualizarModel( model: ModelModel ){

  const modelTemp = {
    ...model
  };

  delete modelTemp.id;

  return this.http.put(`${ this.url }/models/${ model.id }.json`, modelTemp)

}

deleteModel ( id: string ){
  return this.http.delete(`${ this.url }/models/${ id }.json`);
}


getModel ( id: string ){
  return this.http.get(`${ this.url }/models/${ id }.json`);
}


getModels(){
  return this.http.get(`${ this.url }/models.json`)
    .pipe(
      map( this.crearArreglo )
      );
}

private crearArreglo( modelsObj: Object ){

  const models: ModelModel[] = [];
  
  console.log( modelsObj );

  if( modelsObj === null ){ return []; }


  Object.keys ( modelsObj ).forEach ( key => {

    const model: ModelModel = modelsObj[key];
    model.id = key;

    models.push ( model );

  });

  return models;

}


}
