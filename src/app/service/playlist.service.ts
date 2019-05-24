import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlaylistModel } from '../models/PlaylistModel';
import { appConfig } from '../app.config';
import { VideoModel } from '../models/VideoModel';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }

  baseurl: string = appConfig.apiUrl + "playlist/";

  getPlaylistByCurrentUser(idUser: string) {
    return this.http.get<PlaylistModel[]>(this.baseurl + idUser);
  }

  getPlayListByidPlaylist(id: string) {
    return this.http.get<PlaylistModel>(this.baseurl + 'videos/' + id);
  }

  addVideoToAPlaylist(idPlaylist: string, idVideo: string) {
    console.log(this.baseurl + 'addVideo/' + idPlaylist + '/' + idVideo);
    let header = new HttpHeaders({
			'Content-Type': 'application/json'
		});
    return this.http.post(this.baseurl + 'addVideo/' + idPlaylist + '/' + idVideo, null,{headers:header})
    .toPromise()
    .then(response => { return response });
  }

  addPlaylist(data) {
    let header = new HttpHeaders({
			'Content-Type': 'application/json'
		});
    return this.http.post(this.baseurl + 'add/', data,{headers:header})
    .toPromise()
    .then(response => { 
      console.log(response);
      return response ;
    });
  }

  addNewPlaylistAndSaveVideo(data,video) {
    let header = new HttpHeaders({
			'Content-Type': 'application/json'
		});
    return this.http.post(this.baseurl + 'add/', data,{headers:header})
    .toPromise()
    .then(response => { 
      this.addVideoToAPlaylist(response.toString(),video);
      return response ;
    });
  }
}