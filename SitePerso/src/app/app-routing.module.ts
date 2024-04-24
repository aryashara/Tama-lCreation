import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProjectPhotoComponent } from './components/Components/project-photo/project-photo.component';
import { DescriptionComponent } from './components/Components/description/description.component';

const routes: Routes = [
  { path: '', component: DescriptionComponent },
  { path:'main', component: MainComponent },
  { path: 'project-photo', component: ProjectPhotoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
