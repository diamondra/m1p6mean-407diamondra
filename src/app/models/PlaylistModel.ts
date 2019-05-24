import {VideoModel} from "./VideoModel";
export class PlaylistModel {
    _id: string;
    titre : string;
    videos : VideoModel[];
}