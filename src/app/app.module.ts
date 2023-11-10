import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/header/navigation.component';
import { CodeLineComponent } from './components/code-line/code-line.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CodeLineComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
