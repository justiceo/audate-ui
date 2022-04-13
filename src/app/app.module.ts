import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupComponent } from './popup/popup.component';
import { InputPlateComponent } from './popup/input-plate/input-plate.component';
import { TranscriptComponent } from './popup/transcript/transcript.component';
import { AudioWavesComponent } from './popup/audio-waves/audio-waves.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    InputPlateComponent,
    TranscriptComponent,
    AudioWavesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
