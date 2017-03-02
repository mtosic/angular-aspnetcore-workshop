import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { createTestCharacters } from './test-data';
import { LoggerService } from './logger.service';
import { Character } from './character';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
    private baseUrl = 'http://localhost:47539/';

    private charactersUrl = this.baseUrl + 'api/character';
    private housesUrl = this.baseUrl + 'api/house';

    constructor(
        private logger: LoggerService,
        private http: Http
    ) { }

    getCharactersP(): Promise<Character[]> {
        this.logger.log('Getting characters as a Promise via Http...');

        return this.http.get(this.charactersUrl) // <-- returns an observable
            .toPromise()  // <-- convert to a promise
            .then(response => {
                const chars = response.json() as Character[]; // <-- extract data from the response
                this.logger.log(`Got ${chars.length} characters`);
                return chars;
            })
            .catch((error: any) => {
                this.logger.log(`An error occurred ${error}`);
                return Promise.reject('Something bad happened with customers; please check the console');
            });

        // return new Promise(resolve => {
        //     setTimeout(() => {
        //         this.logger.log(`Got ${characters.length} characters.`);
        //         resolve(characters);
        //     }, 2000);
        // })
    }

    getCharacters(): Observable<Character[]> {
        this.logger.log('Getting characters as an Observable via Http ...');

        return this.http.get(this.charactersUrl)
            .map(response => response.json() as Character[])
            .do(chars => this.logger.log(`Got ${chars.length} characters.`))
            .catch((error: any) => {
                this.logger.log(`Error occured: ${error}`);
                return Observable.throw('Something bad happened in getting customers in Observable.')
            })
    }

    getHouses(): Observable<string[]> {
        this.logger.log('Getting houses as an Observable via Http ...');

        return this.http.get(this.housesUrl)
            .map(response => response.json() as string[])
            .do(houses => this.logger.log(`Got ${houses.length} houses.`))
            .catch((error: any) => {
                this.logger.log(`Error occured: ${error}`);
                return Observable.throw('Something bad happened in getting houses in Observable.')
            })
    }
}