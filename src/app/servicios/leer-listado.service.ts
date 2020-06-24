import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LeerListadoService {

  constructor(private httpClient: HttpClient) {}

  getPersonas(): Observable<any> {
      return this.httpClient.get('./../assets/listapersonas.json');
  }
}
