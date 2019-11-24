import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';

const appRoutes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "posts", component: PostCreateComponent },
  { path: "", redirectTo: "/register", pathMatch: "full" },
  { path: "**", redirectTo: "/register", pathMatch: "full" }
];


@NgModule({

  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }