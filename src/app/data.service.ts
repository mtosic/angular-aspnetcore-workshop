import { Injectable } from '@angular/core';

import { createTestCharacters } from './test-data';

@Injectable()
export class DataService {
    getCharacters() {
        return createTestCharacters();
    }
}