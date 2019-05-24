import { Component, OnInit, EventEmitter } from '@angular/core';
import { VideoModel } from '../models/VideoModel';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs: ['videos'],
  outputs: ['SelectVideo']
})
export class VideoListComponent implements OnInit {
  public SelectVideo = new EventEmitter();
  videos;
  constructor() { }

  ngOnInit() {
  }

  onSelect(video : VideoModel){
    this.SelectVideo.emit(video);
  }

}
