import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVideoComponent } from './add-video/add-video.component';
import { VideoListComponent } from './video-list/video-list.component';

const routes: Routes = [
  {
    path:"add-video",
    component: AddVideoComponent
  },
  {
    path:"watch-videos",
    component: VideoListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
