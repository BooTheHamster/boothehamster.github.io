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
            ['.NET Framework / .Net Core / .NET 6 / .NET 8', 'HTML', 'CSS', 'TypeScript', 'Angular'],
            ['python', 'powershell', 'javascript', 'ms sql', 'postgresql'],
            new Date('1978-06-01')
        );
    }
}
