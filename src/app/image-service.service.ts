import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "any"
})
export class ImageServiceService {

  image_list: string[] = ["https://cdn.pixabay.com/photo/2020/04/13/20/48/dog-5040008_960_720.jpg"];

  image_path:string=this.image_list[0];
  image_number=0;

  timerStatus=false
  timer : any=0;
  resetTimer : any=0;

  alertStatus=false;


  constructor() {
   }



  submitPic(){

    this.alertStatus=false;

    if(this.timerStatus){
      clearTimeout(this.timer)
      clearTimeout(this.resetTimer)
    }
    const url = (document.getElementById("urlText") as HTMLInputElement).value
    this.timerStatus=true
    this.timer=setTimeout(()=>{
      this.timerStatus=false
      if(url.endsWith(".jpg")){
        this.image_list.push(url);
        this.image_path=url
        this.image_number=this.image_list.length-1
      }else{
        this.alertStatus=true;
      }    },100)

      this.resetTimer=setTimeout(()=>{
        this.alertStatus=false;
      },1500)


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
