import { Injectable } from '@angular/core';

import { createTestCharacters } from './test-data';
import { LoggerService} from './logger.service';

@Injectable()
export class DataService {
    constructor (private logger: LoggerService) {};

    getCharacters() {
        const characters = createTestCharacters();
        this.logger.log(`Got ${characters.length} characters.`); 
        return characters;
    }
}