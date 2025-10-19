import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  name = 'Sharon Ludwhyka Alvarado Meneses';
  description = 'Estudiante de Ingeniería en Sistemas (primer año) y entusiasta de la programación. Me apasiona aprender nuevas tecnologías y crear soluciones innovadoras.';
  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'bi bi-github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'bi bi-linkedin' }
  ];
}
