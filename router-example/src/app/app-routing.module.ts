import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './app-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerResolver } from './servers/server/server-resolver.service';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ]
  },
  { path: '', component: HomeComponent },
  {
    path: 'servers', 
    // canActivate : [AuthGuard] ,
    canActivateChild : [AuthGuard] ,
    component: ServersComponent, children: [
      { path: ':id/edit', component: EditServerComponent , canDeactivate : [CanDeactivateGuard]},
      { path: ':id', component: ServerComponent , resolve : { server : ServerResolver} }
    ]
  } ,
  // {path : 'not-found' , component : PageNotFoundComponent} ,
  {path : 'not-found' , component : ErrorPageComponent , data : { message: ''} } ,
  {path : '**' , redirectTo : '/not-found' , pathMatch : 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
