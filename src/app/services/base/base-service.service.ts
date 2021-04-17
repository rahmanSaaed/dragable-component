import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {
  baseURL: string;

  constructor(public httpClient: HttpClient) { 
    this.baseURL = `${environment.url}`;
  }

  public get(endpoint: string) {
    return this.httpClient.get(`${this.baseURL}/${endpoint}`, {observe: 'body'});
  }

}
