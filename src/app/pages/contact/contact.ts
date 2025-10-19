import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  contactLinks = [
    {
      icon: 'bi bi-envelope-fill',
      text: 'Email',
      url: 'mailto:tu.email@ejemplo.com',
      class: 'btn-primary'
    },
    {
      icon: 'bi bi-github',
      text: 'GitHub',
      url: 'https://github.com/yourusername',
      class: 'btn-dark'
    },
    {
      icon: 'bi bi-linkedin',
      text: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      class: 'btn-info'
    }
  ];
}
