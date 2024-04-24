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

  videoList: YoutubeVideo[]= [];

  constructor(
    private _genericService: GenericService
  ) { 
    this.getVideoList();
  }

  ngOnInit(): void {
  }

  async getVideoList(){
    await this._genericService.get(API_CONSTANTS.GET_VIDEO_LIST).subscribe((result:any) => {
      return result['responseBody'];
    });
  }

}
