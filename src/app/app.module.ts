import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PictureComponent } from './picture/picture.component';
import { InputComponent } from './input/input.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageComponent } from './image/image.component';
import {RouterModule, Routes} from "@angular/router";
import { FailedComponent } from './failed/failed.component';
import { HttpClientModule } from "@angular/common/http"

const approots: Routes = [{path: '',component: HomeComponent},{path: 'Image',component: ImageComponent},
  {path: 'Images',component: PictureComponent},{path: '**',component: FailedComponent}]


@NgModule({
  declarations: [
    AppComponent,
    PictureComponent,
    InputComponent,
    TableComponent,
    HomeComponent,
    NavbarComponent,
    ImageComponent,
    FailedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approots),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
