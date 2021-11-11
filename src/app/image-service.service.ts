import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "any"
})
export class ImageServiceService {

  //Delaration und Initialisierung aller nötigen Attribute
  private image_list: string[] = [];
  private image_number=0;
  private timerStatus=false
  private timer : any=0;
  private resetTimer : any=0;
  private alertStatus=false;


  constructor(private http: HttpClient) {
    this.restore()
   }

  //Zugriff auf den ImagePath für alle Komponenten
  getImagePath(){
    return this.image_list[this.image_number]
  }

  //Zugriff auf die ImageListe für alle Komponenten
  getImageList(){
    return this.image_list
  }

  //Zugriff auf den AlertStatus für alle Komponenten
  getAlertStatus(){
    return this.alertStatus
  }

  //Zugriff auf die ImageNumber für alle Komponenten
  getImageNumber(){
    return this.image_number
  }


  //Diese Methode checkt ob die URL korrekt ist und speichert diese in diesem Fall in die ImageListe
  //Ist die URL nicht korrekt wird der alertStatus gesetzt was zu einer Warnung führt
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
      }},100)

  this.resetTimer=setTimeout(()=>{
    this.alertStatus=false;
    },1500)
  }

  //Diese Methode zählt die ImageNumber hoch wodurch das nächste Bild angezeigt wird
  changePic(){
    this.image_number++;

    if(this.image_number==this.image_list.length){
      this.image_number=0;
    }
  }

  //Diese Methode löscht das von dem User ausgewählte Bild
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

  //Die ImageListe wird mit den Daten des NodeJs Servers gefüllt
  private restore(){
    this.http.get<any>('http://localhost:8081').subscribe(data => this.image_list = data)
  }

  //Änderungen an der ImageListe werden auf den NodeJs Servers geladen
  private store(){
    this.http.post<any>('http://localhost:8081/set', this.image_list)
    .subscribe({next: data => console.log(data),error: error => console.error('There was an error!', error)})
  }
}
