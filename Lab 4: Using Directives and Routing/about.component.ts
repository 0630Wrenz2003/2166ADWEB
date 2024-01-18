import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  position="Sindikato";
  work_experience="10";
  mail="renzy@gmail.com";
  website="windowWhen.waha.com";
  phone="0911666";


  imageUrl:string="assets/logo.jpg";
  imageW: number = 110;
  imageH: number = 100;

}
