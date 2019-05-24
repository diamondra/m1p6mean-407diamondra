import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { VideoModel } from '../models/VideoModel';
import { VideoService } from '../service/video.service';
import { Router } from "@angular/router";
import { UserModel } from '../models/UserModel';
import { UserService } from '../service/user.service';

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  video: VideoModel;
  constructor(private ngxService: NgxUiLoaderService, private videoService: VideoService, private router: Router, private user: UserService) { }

  ngOnInit() {
    this.ngxService.start(); // start foreground loading with 'default' id

    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground loading with 'default' id
    }, 3000);
    this.getNewestVideo();
    // OR
    // this.ngxService.startBackground('do-background-things');
    // // Do something here...
    // this.ngxService.stopBackground('do-background-things');
  }

  getNewestVideo(): void {
    this.videoService.getNewestVideo().subscribe(data => {
      this.video = data[0];
      console.log(data);
    });
  };
}
