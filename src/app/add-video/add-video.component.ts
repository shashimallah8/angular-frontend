import { Component, OnInit } from '@angular/core';
import { GenericService } from '../services/generic.service';
import { API_CONSTANTS } from '../constants/API_CONSTANTS';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {
  value: string = '';
  constructor(
    private _genericService: GenericService
  ) {
    this.value = '';
  }

  ngOnInit(): void {
    this.value = '';
  }


  submit() {
    let videoId: string | null = '';
    if (this.value.includes('youtube.com')) {
      let regex = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
      videoId = regex.exec(this.value)[3];
    } else {
      videoId = this.value;
    }
    this._genericService.post(API_CONSTANTS.ADD_NEW_VIDEO + '?videoId=' + videoId).subscribe((result: any) => {
      console.log('add video', result['responseBody']);
      this.value = '';
    })
  }

}
