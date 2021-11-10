import { Component } from '@angular/core';
import { ImageServiceService } from './image-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project1';

  constructor(public imageservice:ImageServiceService){}


  clickFunction() {
    this.imageservice.changePic()
    }

    submit(){
      this.imageservice.submitPic()
    }
}
