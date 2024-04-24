import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerComponent } from './components/Components/container/container.component';
import { NavbarComponent } from './components/Components/navbar/navbar.component';
import { ProjectPhotoComponent } from './components/Components/project-photo/project-photo.component';
import { ProjectFrontEndComponent } from './components/Components/project-front-end/project-front-end.component';
import { ProjectBackEndComponent } from './components/Components/project-back-end/project-back-end.component';
import { DescriptionComponent } from './components/Components/description/description.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ContainerComponent,
    NavbarComponent,
    ProjectPhotoComponent,
    ProjectFrontEndComponent,
    ProjectBackEndComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
