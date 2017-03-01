import { Injectable } from '@angular/core';

import { createTestCharacters } from './test-data';
import { LoggerService } from './logger.service';
import { Character } from './character';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class DataService {
    constructor(private logger: LoggerService) { };

    getCharactersP(): Promise<Character[]> {
        this.logger.log('Getting characters as Promise.');
        const characters = createTestCharacters();

        return new Promise(resolve => {
            setTimeout(() => {
                this.logger.log(`Got ${characters.length} characters.`);
                resolve(characters);
            }, 2000);
        })
    }

    getCharacters(): Observable<Character[]> {
        this.logger.log('Getting characters as Observable.');
        const characters = createTestCharacters();

        return of(characters)
            .delay(2000)
            .do(chars => this.logger.log(`Got ${characters.length} characters.`));
    }
}