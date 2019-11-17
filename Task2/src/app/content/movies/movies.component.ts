import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoviesComponent {
  errorMessage: string;
  data = [];
  totalResults: number;

  sendData = {
    'searchedName': '',
    'selectedType': 'movie',
    'releaseYear': '',
    'page': 1
  }

  formData = new FormGroup({
    searchedName: new FormControl('', Validators.required),  
    selectedType: new FormControl({value: 'movie', disabled: false}),
    releaseYear: new FormControl()
  })
  
  moviesTypes = ['movie', 'series', 'episode'];

  constructor(
    private _moviesService: MoviesService,
    private router: Router
  ) { }

  /* Filter displayed data  */
  applyFilters(): void {
    this.sendData = {
      'searchedName': this.formData.get('searchedName').value,
      'selectedType': this.formData.get('selectedType').value,
      'releaseYear': this.formData.get('releaseYear').value,
      'page': 1
    }
    
    this._moviesService.getMovies(this.sendData).then(response => {
      this.showData(response);
    });
  }

  resetFilters(): void {
    this.formData.setValue({searchedName: '', selectedType: 'movie', releaseYear: ''});
    this.data = [];
  }

  goToMovie(id: string) {
    this.router.navigate(['/movie', id]);
  }

  pageNavigate(event) {
    this.sendData['page'] = event.pageIndex + 1; // Beacuse API page numbering start with 1
    this._moviesService.getMovies(this.sendData).then(response => {
      this.showData(response);
    });
  }

  showData(response: any) {
    if (response.Response === 'False') {
      this.errorMessage = response.Error;
    } else {
      this.errorMessage = '';
      this.data = response.Search;
      this.totalResults = response.totalResults;
    }
  }
}
