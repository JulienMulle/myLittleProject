import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  searchMovieForm = this.formBuilder.group(
    {
      identity: this.formBuilder.group(
        {
          id:[''],
          title:['']
        }
      ),
      searchType: this.formBuilder.group(
        {
          film:[''],
          serie:[''],
          episode:['']
        }
      ),
      releaseDate:[''],
      fiche: this.formBuilder.group(
        {
          complete:[''],
          short:['']
        }
      )
    }
  )

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit():void {
    console.log('cool un console log...',this.searchMovieForm.value)
  }
}
