import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideoModel } from '../models/VideoModel';
import { appConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  baseurl: string = appConfig.apiUrl + "video";

  getAllVideos(){
    return this.http.get<VideoModel[]>(this.baseurl + '/');
  }

  getVideoById(id: string){
    return this.http.get<VideoModel>(this.baseurl + '/' + id);
  }

  getVideoWhere(str: string){
    return this.http.get<VideoModel[]>(this.baseurl + '/search/' + str);
  }

  getNewestVideo(){
    return this.http.get<VideoModel>(this.baseurl + '/newest');
  }

  getVideoByIdPlaylist(idPlaylist: string){
    return this.http.get<VideoModel[]>(this.baseurl + '/playlist/'+idPlaylist);
  }
}