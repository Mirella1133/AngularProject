import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project1';

  image_path: string[] = ["https://cdn.pixabay.com/photo/2020/04/13/20/48/dog-5040008_960_720.jpg"];

  image_list:string=this.image_path[0];
  i=0;


  clickFunction() {
    this.image_list=this.image_path[this.i];
    this.i++;
    if(this.i==this.image_path.length){
      this.i=0;
    }
    }

    submit(){
      var url=(document.getElementById("urlText") as HTMLInputElement).value

      if(!url.endsWith(".jpg",url.length)){

        window.alert("Bitte geben sie eine Bild URL ein!")
      }
      else{

      this.image_path.push(url)
      this.image_list=url
      }

    }
}
