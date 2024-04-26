import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerComponent } from './components/container/container.component';
import { NavbarComponent } from './components/Components/navbar/navbar.component';
import { ProjectPhotoComponent } from './components/Components/project-photo/project-photo.component';
import { ProjectFrontEndComponent } from './components/Components/project-front-end/project-front-end.component';
import { DescriptionComponent } from './components/Components/description/description.component';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ObjectPersoComponent } from './components/Components/object-perso/object-perso.component';



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
    
    DescriptionComponent,
         ObjectPersoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
