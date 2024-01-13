import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nature Spring';
  email_1 = 'info@naturespringspa.com';
  email_2 = 'support@naturespringspa.com';

  onButtonClick(){
    alert('Contacting...');
  }
  
}
