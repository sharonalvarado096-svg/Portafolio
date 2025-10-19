import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../models/project.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private projectsSubject = new BehaviorSubject<Project[]>([
    {
      name: 'Hello World',
      path: 'assets/c-files/hello.c',
      description: 'Un programa simple que muestra "Hello, World!" en la consola.',
      size: 95,
      lastModified: new Date('2025-10-19')
    },
    {
      name: 'Calculadora',
      path: 'assets/c-files/calculadora.c',
      description: 'Una calculadora básica que realiza operaciones simples.',
      size: 184,
      lastModified: new Date('2025-10-19')
    }
  ]);

  projects$ = this.projectsSubject.asObservable();

  constructor(private http: HttpClient) { }

  getProjectContent(path: string) {
    return this.http.get(path, { responseType: 'text' });
  }
}
