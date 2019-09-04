import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nextone } from './nextone.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NextoneService {

  readonly url :string =  "http://localhost:50094/api/nextones";
  formData:Nextone;
  constructor(private http : HttpClient) { 

  }

  getAllNextones():Observable<Nextone[]>{
    return this.http.get<Nextone[]>(this.url);
  }
}
