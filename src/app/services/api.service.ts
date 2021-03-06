import { Injectable } from '@angular/core';
import { Data } from '../models/data.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { 

  }

  getData(url) {
    return this.http.get<Array<Data>>(url);
  }
}
