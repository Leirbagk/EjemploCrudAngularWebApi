import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventarioComponent } from './inventario/inventario.component';
import { DevComponent } from './inventario/dev/dev.component';



const routes: Routes = [
{path:'inventario',component:InventarioComponent},
{path:'Dev',component:DevComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
