import { Component, OnInit } from '@angular/core';
import { PlaylistModel } from '../models/PlaylistModel';
import { PlaylistService } from '../service/playlist.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-videos-playlist',
  templateUrl: './videos-playlist.component.html',
  styleUrls: ['./videos-playlist.component.css']
})
export class VideosPlaylistComponent implements OnInit {

  playlist: PlaylistModel;
  id: String;
  playlists: PlaylistModel[];
  idUser: String;

  constructor(private playlistService: PlaylistService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    var token = localStorage.getItem('access_token');
    this.idUser = jwt_decode(token).userID;
    this.id = this.route.snapshot.params.id;
    this.getVideosByIdPlaylist(this.id);
    this.allPlaylists(this.idUser);
  }

  getVideosByIdPlaylist(id): void {
    this.playlistService.getPlayListByidPlaylist(id).subscribe(data => {
      this.playlist = data;
    });
  };

  //get List playlist
  allPlaylists(idUser): void {
    this.playlistService.getPlaylistByCurrentUser(idUser).subscribe(data => {
      this.playlists = data;
    });
  };

  changePlay(idPlay) {
    this.getVideosByIdPlaylist(idPlay);
  }
}
