import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { isRequiredValidator } from '../validators/isRequired.validators';
import { rangeDateValidator } from '../validators/rangeDate.validators';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  public minimumYear: number = 1900;
  public maxmimumYear: number = 2022;

  searchMovieForm = this.formBuilder.group(
    {
      identity: this.formBuilder.group(
        {
          id:[''],
          title:['']
        },
        { validators: isRequiredValidator("id", "title")}
      ),
      searchType: this.formBuilder.group(
        {
          film:[''],
          serie:[''],
          episode:['']
        }
      ),
      releaseDate:['', rangeDateValidator(this.minimumYear, this.maxmimumYear)],
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
