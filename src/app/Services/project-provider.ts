import { Project } from '../Models/project';
import { Injectable } from '@angular/core';
import data from '../data.json';

@Injectable({
    providedIn: 'root',
})
/**
 * Список проектов.
 */
export class ProjectProvider {
    private readonly projectList: Project[];

    constructor() {
        this.projectList = data.projects.map(p => new Project(p.name, p.description, p.sourceCodeUrl, p.demoUrl, p.hashTags));
    }

    public get projects(): Project[] {
        return Object.assign([], this.projectList);
    }

    public projectByName(projectName: string): Project {
        const result = this.projects.find((project: Project) => {
            return project.name === projectName;
        });

        return result;
    }

}
