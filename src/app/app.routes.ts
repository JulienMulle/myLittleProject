import { Routes } from '@angular/router';

import { SearchMovieComponent } from './search-movie/search-movie.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const ROUTES: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: UserProfileComponent },
  //{ path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'searchmovies', component: SearchMovieComponent}
];

export { ROUTES }
