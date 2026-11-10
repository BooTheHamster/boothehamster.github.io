import { Person } from '../Models/person';
import { Injectable } from '@angular/core';
import data from '../data.json';

@Injectable({
    providedIn: 'root',
})
/**
 * Поставщик информации о пользователе.
 */
export class PersonProvider {
    public readonly person: Person;

    constructor() {
        const p = data.person;

        this.person = new Person(p.name, p.advancedSkills, p.basicSkills, p.hobbySkills, new Date(p.birthday));
    }
}
