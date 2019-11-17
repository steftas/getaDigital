import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  movie: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.movie = this.route.snapshot.data.movie;
  }

  goBack() {
    this.router.navigate(['/movies']);
  }
}
