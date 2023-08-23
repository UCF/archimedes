import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { isLoggedInGuard } from './guards/is-logged-in.guard';

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    canActivate: [isLoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
