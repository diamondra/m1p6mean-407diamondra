import { Component, OnInit } from '@angular/core';
import { VideoModel } from '../models/VideoModel';
import { VideoService } from '../service/video.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos: VideoModel[];
  video: VideoModel;

  constructor(private videoService: VideoService, private router: Router, private route: ActivatedRoute) { }

  selectedVideo: VideoModel;
  id: Number;

  ngOnInit() {
    this.getAllVideos();
    this.id = this.route.snapshot.params.id;
    this.getVideoById(this.id);
  }

  getVideoById(id): void {
    this.videoService.getVideoById(id).subscribe(data => {
      this.video = data;
      this.video.urlVideo = data.urlVideo;
      this.selectedVideo = this.video;
    });
  };
  getAllVideos(): void {
    this.videoService.getAllVideos().subscribe(data => {
      this.videos = data;
    });
  };

  onSelectVideo(video: any) {
    this.selectedVideo = video;
  }
}
