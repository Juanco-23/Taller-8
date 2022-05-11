import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { inicioComponent } from './componente/inicio/inicio.component';
import { vista2Component } from './componente/vista2/vista2.component';
import { vista3Component } from './componente/vista3/vista3.component';
import { vista4Component } from './componente/vista4/vista4.component';

const routes: Routes = [
  {path:'inicio', component:inicioComponent},
  {path:'vista2', component:vista2Component},
  {path:'vista3', component:vista3Component},
  {path:'vista4', component:vista4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
