import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ShowInvComponent } from './inventario/show-inv/show-inv.component';
import { AddEditInvComponent } from './inventario/add-edit-inv/add-edit-inv.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DevComponent } from './inventario/dev/dev.component';




@NgModule({
  declarations: [
    AppComponent,
    InventarioComponent,
    ShowInvComponent,
    AddEditInvComponent,
    DevComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
