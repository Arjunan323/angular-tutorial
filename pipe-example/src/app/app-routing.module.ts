import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './components/pipe-demo/filter/filter.component';
import { PostsComponent } from './components/http-demo/posts/posts.component';


const routes: Routes = [
  {
    path: '', component: FilterComponent
  },
  {
    path: 'posts', component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
