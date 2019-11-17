import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class MoviesService {
    baseURL: string = 'http://www.omdbapi.com/';

    constructor(
        private _httpClient: HttpClient
    ) { }

    getMovies(searchData = {}): Promise<any> {
        const params = new HttpParams()
            .set('apikey', '980ecfb8')
            .set('s', searchData['searchedName'] ? searchData['searchedName'] : '')
            .set('type', searchData['selectedType'] ? searchData['selectedType'] : 'movie')
            .set('y', searchData['releaseYear'] ? searchData['releaseYear'] : '')
            .set('page ', searchData['page'] ? searchData['page'] : 1);

        return new Promise((resolve, reject) => {
            this._httpClient.get(this.baseURL, {params}).subscribe((response: any) => {
                resolve(response);
            }, reject);
        });
    }
}
