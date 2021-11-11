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

  //Diese Methode startet die deletePic Methode des ImageServices und gibt dabei die Nummer des Bildes weiter
  clickDelete(int:number){
    this.imageService.deletePic(int)
  }

}
