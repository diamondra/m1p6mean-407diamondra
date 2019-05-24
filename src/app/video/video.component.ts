import { Component, OnInit } from '@angular/core';
import { VideoModel } from '../models/VideoModel';
import { VideoService } from '../service/video.service';
import { Router } from "@angular/router";
import { NgxSmartModalService } from 'ngx-smart-modal';
import { PlaylistModel } from '../models/PlaylistModel';
import { PlaylistService } from '../service/playlist.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  videos: VideoModel[];
  playlist: PlaylistModel[];
  idUser: string;
  selectedPlaylist;
  selectedVideo: string;
  showAddNew : boolean;
  newPlaylist: string;
  searchValue;

  constructor(private playlistService: PlaylistService,private videoService: VideoService, private router: Router, public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
    this.showAddNew = false;
    this.getAllVideos();
    var token = localStorage.getItem('access_token');
    this.idUser = jwt_decode(token).userID; 
    this.allPlaylists(this.idUser);
  }
  getAllVideos(): void {
      this.videoService.getAllVideos().subscribe(data=>{
      this.videos = data;
    });
  };

  performSearch(val : string): void{
    this.videoService.getVideoWhere(val).subscribe(data=>{
      this.videos = data;
    });
  }

  showAdd(): void{
    this.showAddNew = true;
  }

  hideAdd(): void{
    this.showAddNew = false;
    this.newPlaylist = "";
  }

  //get List playlist
  allPlaylists(idUser): void {
    this.playlistService.getPlaylistByCurrentUser(idUser).subscribe(data => {
      this.playlist = data;
    });
  };

  selected(){
    console.log(this.selectedPlaylist);
  }
  selectVideo(vid){
    this.selectedVideo = vid;
  }
  validate(){
    if(this.showAddNew){
      var data = {
        titre: this.newPlaylist,
        idUser: this.idUser
      };
      var newPlay = this.playlistService.addNewPlaylistAndSaveVideo(data,this.selectedVideo);
      console.log(newPlay);
    }else{
      this.playlistService.addVideoToAPlaylist(this.selectedPlaylist._id, this.selectedVideo);
    }
    this.ngxSmartModalService.getModal('myModal').close();
  }
}
