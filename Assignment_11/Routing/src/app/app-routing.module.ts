import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BookComponent } from './book/book.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  { path: 'BookDetails', component: BookComponent },
  { path: 'TechnolgyDetails', component: TechnologiesComponent },
  { path: '', component: TechnologiesComponent },
  { path: '**', component: TechnologiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
