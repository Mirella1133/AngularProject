import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../image-service.service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  constructor(public imageService : ImageServiceService) { }

  ngOnInit(): void {
  }

  clickNext(){
    this.imageService.changePic();
  }

}
