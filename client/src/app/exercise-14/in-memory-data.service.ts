import { InMemoryDbService } from 'angular-in-memory-web-api';

import { createTestCharacters } from './test-data';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const houses: string[] = ['Arryn', 'Frey', 'Greyjoy', 'Lannister', 'Stark', 'Tyrell', 'Targaryen'];
        return { 
            characters: createTestCharacters(),
            houses
          };
    }
}

