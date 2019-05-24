import { Component, OnInit } from '@angular/core';
import { PlaylistModel } from '../models/PlaylistModel';
import { PlaylistService } from '../service/playlist.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-list-playlist',
  templateUrl: './list-playlist.component.html',
  styleUrls: ['./list-playlist.component.css']
})
export class ListPlaylistComponent implements OnInit {
  playlist: PlaylistModel[];
  idUser: String;

  constructor(private playlistService: PlaylistService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    var token = localStorage.getItem('access_token');
    this.idUser = jwt_decode(token).userID; 
    this.allPlaylists(this.idUser);
  }
  //get List playlist
  allPlaylists(idUser): void {
    this.playlistService.getPlaylistByCurrentUser(idUser).subscribe(data => {
      this.playlist = data;
      console.log(data);
    });
  };

}
