import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  showText: boolean = false;
  toggleText() {
      this.showText = !this.showText;
    }

  staff = [ 
      { firstName: 'Joseph', lastName: 'Joestar', email: 'Pillarmen@gmail.com', role: 'User' },   
      { firstName: 'Dio', lastName: 'Brando', email: 'ItsMeDio@gmail.com', role: 'Admin' }, 
      { firstName: 'Jonathan', lastName: 'Joestar', email: 'klaus@gmail.com', role: 'Admin' }, 
      { firstName: 'Jotaro', lastName: 'Kujo', email: 'YareYareDaze@gmail.com', role: 'User' }, 
      { firstName: 'Kira', lastName: 'Joestar', email: 'KillerQueen@gmail.com', role: 'User' } 
      ];  


}
