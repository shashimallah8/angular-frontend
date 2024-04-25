import { Component, OnInit } from '@angular/core';
import { YoutubeVideo } from '../models/youtube-video';
import { GenericService } from '../services/generic.service';
import { API_CONSTANTS } from '../constants/API_CONSTANTS';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  embeddedUrlList: any[] = [];

  constructor(
    private _genericService: GenericService
  ) {
    this.getVideoList()
  }

  ngOnInit(): void {
  }

  getVideoList() {
    this._genericService.get(API_CONSTANTS.GET_VIDEO_LIST).subscribe((result: any) => {
      const data = result['responseBody'];
      data.forEach((element: any) => {
        let url = 'https://www.youtube.com/embed/' + element?.videoId + '?mute=1';
        let iframe = document.createElement('iframe');
        // var url = "https://www.google.com";
        /* iframe.setAttribute("src", url); */
        iframe.src = url;
        document.body.appendChild(iframe);
        // this.embeddedUrlList = [...this.embeddedUrlList, url];
      });
      // console.log('embeddedUrlList', this.embeddedUrlList)
    });
  }

}
