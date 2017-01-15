import { Component } from '@angular/core';
import { menuItem } from './menuItem'; 

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  inputs:['link']
})


export class MenuComponent {
	menuList: Array<menuItem>;
	selectedLink: number;

	constructor(){
		this.menuList = [{name:"Test",slug:"test"}];
	}

	 onMenuSelect(link){
	 		console.log(link);
			this.selectedLink = link;
	 }
}
