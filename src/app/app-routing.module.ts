import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoComponent } from './video/video.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { VideoCenterComponent } from './video-center/video-center.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListPlaylistComponent } from './list-playlist/list-playlist.component';
import { VideosPlaylistComponent } from './videos-playlist/videos-playlist.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthentificationComponent
  },
  {
    path: 'accueil',
    component: AccueilComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'videos',
    component: VideoComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'lecturevideo/:id',
    component: VideoCenterComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'inscription',
    component: InscriptionComponent
  },
  {
    path: 'myplaylists',
    component: ListPlaylistComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'videosplaylist/:id',
    component: VideosPlaylistComponent,
    canActivate: [AuthGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
