import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RequestHtppService {

  constructor(private http: HttpClient) { }

  getPost(peticion: number) {
    return this.http.get("https://jsonplaceholder.typicode.com/todos/" + peticion);
  }
}
