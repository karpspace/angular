import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { PlaylistComponent } from './playlist.component';
import { MenuComponent } from './menu.component';
@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {
      path: 'menu',
      component: MenuComponent
    }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


