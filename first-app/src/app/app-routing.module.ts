import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsExampleComponent } from './components/events-example/events-example.component';
import { HelloComponent } from './components/hello/hello.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RmjFormComponent } from './components/rmj-form/rmj-form.component';

const routes: Routes = [

  {path: 'hello', component: HelloComponent},
  {path: 'events', component: EventsExampleComponent},
  {path: 'rmj', component: RmjFormComponent},
  {path: '', redirectTo: '/rmj', pathMatch: 'full'},
  {path:'**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
