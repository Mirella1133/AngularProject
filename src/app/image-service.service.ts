import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  image_list: string[] = ["https://cdn.pixabay.com/photo/2020/04/13/20/48/dog-5040008_960_720.jpg"];

  image_path:string=this.image_list[0];
  image_number=0;

  constructor() {
   }

  submitPic(){
    var url=(document.getElementById("urlText") as HTMLInputElement).value

    if(!url.endsWith(".jpg",url.length)){

      window.alert("Bitte geben sie eine Bild URL ein!")
    }
    else{

    this.image_list.push(url)
    this.image_path=url
    }

  }

  changePic(){
    this.image_path=this.image_list[this.image_number];
    this.image_number++;
    if(this.image_number==this.image_list.length){
      this.image_number=0;
    }
  }
}
