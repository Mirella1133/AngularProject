import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../image-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(public imageService: ImageServiceService) { }

  ngOnInit(): void {
  }

  clickDelete(int:number){
    this.imageService.deletePic(int)
  }

}
