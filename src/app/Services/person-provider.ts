import { Person } from '../Models/person';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
/**
 * Поставщик информации о пользователе.
 */
export class PersonProvider {
    public readonly person: Person;

    constructor() {
        this.person = new Person(
            'Олег Севостьянов',
            ['C#', 'Delphi'],
            ['.NET Core / .NET 6', 'HTML', 'CSS', 'TypeScript', 'Angular'],
            ['python', 'powershell', 'javascript'],
            new Date('1978-06-01')
        );
    }
}
