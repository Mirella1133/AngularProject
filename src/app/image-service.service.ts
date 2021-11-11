import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "any"
})
export class ImageServiceService {

  private image_list: string[] = [];

  private image_number=0;

  private timerStatus=false
  private timer : any=0;
  private resetTimer : any=0;

  private alertStatus=false;


  constructor(private http: HttpClient) {
    this.restore()
   }

  getImagePath(){
    return this.image_list[this.image_number]
  }

  getImageList(){
    return this.image_list
  }

  getAlertStatus(){
    return this.alertStatus
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
        this.image_number=this.image_list.length-1
        this.store()
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
  }

  deletePic(int:number){

    const index= int

    if(index>-1){
      this.image_list.splice(index,1)
      this.store()
      if(this.image_number-1>=0){
        this.image_number--
      }
    }
  }

  private restore(){
    this.http.get<any>('http://localhost:8081').subscribe(data => this.image_list = data)
  }

  private store(){
    this.http.post<any>('http://localhost:8081/set', this.image_list).subscribe({next: data => console.log(data),error: error => console.error('There was an error!', error)})
  }
}
