import { Component, OnInit } from '@angular/core';
import {ImageServiceService} from "../image-service.service";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor(public imageService: ImageServiceService) { }

  ngOnInit(): void {
  }

}
