import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/header/navigation.component';
import { CodeLineComponent } from './components/code-line/code-line.component';
import { IconsComponent } from './components/icons/icons.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CodeLineComponent,
    DialogComponent,
    IconsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
