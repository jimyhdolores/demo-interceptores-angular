import { Component } from '@angular/core';
import { RequestHtppService } from './service/request-htpp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private requesService: RequestHtppService) {

  }
  peticion(peticion: number) {
    this.requesService.getPost(peticion).subscribe(data => {
      console.log(data);
    })
  }


}
