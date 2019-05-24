import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { HttpClientModule  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { VideoComponent } from './video/video.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { SafePipe } from './safe.pipe';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { VideoCenterComponent } from './video-center/video-center.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListPlaylistComponent } from './list-playlist/list-playlist.component';
import { VideosPlaylistComponent } from './videos-playlist/videos-playlist.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import {MatSelectModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatDialogModule} from "@angular/material";

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VideoComponent,
    AccueilComponent,
    AuthentificationComponent,
    SafePipe,
    VideoListComponent,
    VideoDetailComponent,
    VideoCenterComponent,
    InscriptionComponent,
    ListPlaylistComponent,
    VideosPlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    NgxUiLoaderModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: ['localhost:3000/api/auth']
      }
    }),
    NgxSmartModalModule.forRoot(),
    MatDialogModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
