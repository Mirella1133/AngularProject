import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project1';

  image_path: string[] = ["https://media.istockphoto.com/photos/studio-portrait-of-a-dog-sticking-out-her-tongue-picture-id1138848967?k=20&m=1138848967&s=612x612&w=0&h=JVCxh4GulisK2v4hVqhxRhZIvveld1RDXsCxRXhxYPk="];

  image_list:string=this.image_path[0];
  i=0;
  id=2;


  clickFunction() {
    this.image_list=this.image_path[this.i];
    this.i++;
    if(this.i==this.image_path.length){
      this.i=0;
    }
    }

    submit(){
      var url=(document.getElementById("fname") as HTMLInputElement).value

      var td_id_node = document.createElement("td");

      var id_text_node = document.createTextNode(this.id.toString());

      td_id_node.appendChild(id_text_node);

      var td_url_node = document.createElement("td");

      var url_text_node = document.createTextNode(url);

      td_url_node.appendChild(url_text_node);


      var tr_node = document.createElement("tr");

      tr_node.appendChild(td_id_node);
      tr_node.appendChild(td_url_node);

      var table_node = document.getElementsByTagName("table")[0];
      table_node.appendChild(tr_node);

      this.image_path.push(url)
      this.image_list=url

      this.id++;


    }
}
