import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlaygroundModule } from './playground';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    PlaygroundModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule {}
