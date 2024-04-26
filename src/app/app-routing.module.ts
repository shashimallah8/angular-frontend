import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVideoComponent } from './add-video/add-video.component';
import { VideoListComponent } from './video-list/video-list.component';
import { SendMessagesComponent } from './send-messages/send-messages.component';

const routes: Routes = [
  {
    path:"add-video",
    component: AddVideoComponent
  },
  {
    path:"watch-videos",
    component: VideoListComponent
  },
  {
    path:"send-link",
    component: SendMessagesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
