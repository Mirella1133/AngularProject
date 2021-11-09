export class AppComponent {
  image_path: string = "https://cdn.pixabay.com/photo/2020/04/13/20/48/dog-5040008_960_720.jpg"


  clickFunction() {
    if (this.image_path == "https://cdn.pixabay.com/photo/2020/04/13/20/48/dog-5040008_960_720.jpg"){
      this.image_path = "https://media.istockphoto.com/photos/studio-portrait-of-a-dog-sticking-out-her-tongue-picture-id1138848967?k=20&m=1138848967&s=612x612&w=0&h=JVCxh4GulisK2v4hVqhxRhZIvveld1RDXsCxRXhxYPk="
    }
    else{
      this.image_path="https://cdn.pixabay.com/photo/2020/04/13/20/48/dog-5040008_960_720.jpg"
      }
}
}
