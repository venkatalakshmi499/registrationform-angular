import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second';
   urllink: string | ArrayBuffer | null | undefined ="assets/images/1.jpg";

selectFile(event: any){
 if(event.target.files){
   var reader=new FileReader();
   reader.readAsDataURL(event.target.files[0]);
   reader.onload=(event)=>{
     this.urllink=event.target?.result;
   }
 }
}


}
