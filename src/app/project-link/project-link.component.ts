import { ProjectProvider } from '../Services/project-provider';
import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../Models/project';

@Component({
    selector: 'app-project-link',
    templateUrl: './project-link.component.html',
    styleUrls: ['./project-link.component.less'],
})

export class ProjectLinkComponent implements OnInit {
    private readonly projectProvider: ProjectProvider;
    private selectedProject: Project;

    public get project(): Project {
        return this.selectedProject;
    }

    @Input() projectName: string;

    constructor(projectProvider: ProjectProvider) {
        this.projectProvider = projectProvider;
    }

    ngOnInit(): void {
        console.log(this.projectName);
        this.selectedProject = this.projectProvider.projectByName(this.projectName);
    }
}
