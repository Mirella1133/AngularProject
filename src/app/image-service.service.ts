import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  image_list: string[] = ["https://cdn.pixabay.com/photo/2020/04/13/20/48/dog-5040008_960_720.jpg"];

  image_path:string=this.image_list[0];
  image_number=0;

  timerison=false
  Timer :any;


  constructor() {
   }



  submitPic(){
    if(this.timerison){
      clearTimeout(this.Timer)
    }
    const url = (document.getElementById("urlText") as HTMLInputElement).value
    this.timerison=true
    this.Timer=setTimeout(()=>{
      this.timerison=false
      if(url.endsWith(".jpg")){
        this.image_list.push(url);
        this.image_path=url
        this.image_number=this.image_list.length-1
      }else{
        console.log("Bitte gültige Url angeben")
      }    },1000)
  }

  changePic(){
    this.image_number++;
    if(this.image_number==this.image_list.length){
      this.image_number=0;
    }
    this.image_path=this.image_list[this.image_number];
  }

  deletePic(int:number){

    const index= int

    if(index>-1){
      this.image_list.splice(index,1)
      if(this.image_number-1>=0){
        this.image_path=this.image_list[this.image_number-1]
      }
      else{
        this.image_path=this.image_list[this.image_number]
      }
    }
    

  }
}
