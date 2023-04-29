import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { TemplateFormComponent } from "./template-form/template-form.component";

const appRoutes: Routes = [
    { path : 'reactive-form' , component : ReactiveFormComponent  } ,
    { path : 'template-form' , component : TemplateFormComponent } ,
    { path : '' , redirectTo : "reactive-form" , pathMatch : "full" } ,
];



@NgModule({

    imports : [RouterModule.forRoot(appRoutes)] ,
    exports : [RouterModule]
})
export class AppRoutingModule {


}