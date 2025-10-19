import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadService } from '../../services/upload';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  selectedProject: { name: string; content: string } | null = null;
  projects: Project[] = [];

  constructor(public uploadService: UploadService) {
    this.uploadService.projects$.subscribe(projects => {
      this.projects = projects;
    });
  }

  viewProject(project: Project): void {
    this.uploadService.getProjectContent(project.path).subscribe(
      content => {
        this.selectedProject = { name: project.name, content };
      }
    );
  }

  getDownloadUrl(name: string): string {
    const found = this.projects.find(p => p.name === name);
    return found ? found.path : '';
  }

  formatBytes(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}
