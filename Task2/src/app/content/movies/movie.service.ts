import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class MovieService implements Resolve<any> {
    baseURL: string = 'http://www.omdbapi.com/';

    constructor(
        private _httpClient: HttpClient
    ) { }

    resolve(route: ActivatedRouteSnapshot): any {
        return this.getMovie(route.params.id)
    };

    getMovie(id): Promise<any> {
        const params = new HttpParams()
            .set('apikey', '980ecfb8')
            .set('i', id);

        return new Promise((resolve, reject) => {
            this._httpClient.get(this.baseURL, {params}).subscribe((response: any) => {
                resolve(response);
            }, reject);
        });
    }
}

