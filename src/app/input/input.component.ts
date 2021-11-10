import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../image-service.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(public imageService : ImageServiceService) { }

  ngOnInit(): void {
  }

  submit(){
    this.imageService.submitPic();
  }

}
