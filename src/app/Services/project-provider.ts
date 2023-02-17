import { HashTags } from '../Models/hash-tag';
import { Project } from '../Models/project';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
/**
 * Список проектов.
 */
export class ProjectProvider {
    private readonly projectList: Project[];

    constructor() {
        this.projectList = [
            new Project(
                'iznakurnoz.Bot',
                'бот telegram для домашнего сервера на .Net Core',
                'https://github.com/BooTheHamster/iznakurnoz.Bot',
                null,
                "netcore,telegram"),
            new Project(
                'leetCodeTests',
                'тестовые задачи с leetcode.com на .NET',
                'https://github.com/BooTheHamster/LeetCodeTests',
                null,
                "net6"),
            new Project(
                'ElecTap',
                'прототип клик-игры',
                'https://github.com/BooTheHamster/electap',
                null,
                "typescript,canvas,excaliburEngine,angular"),
            new Project(
                'JustScripts',
                'резервные копии скриптов на python, powershell',
                'https://github.com/BooTheHamster/scripts',
                null,
                "python,powershell"),
            new Project(
                'SDL2 Test',
                'приложение для изучения библиотеки SDL2',
                'https://github.com/BooTheHamster/sdl2-test',
                null,
                "netcore,sdl2")
        ];
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
