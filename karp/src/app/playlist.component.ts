import { Component } from '@angular/core';
import { Video } from './video'; 
@Component({
  selector: 'playlist',
  templateUrl: './playlist.component.html',
  inputs:['videos']
})


export class PlaylistComponent {


	onSelect(vid:Video){
		console.log(JSON.stringify(vid));
	}
}
