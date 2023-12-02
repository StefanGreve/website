import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/header/navigation.component';
import { CodeLineComponent } from './components/code-line/code-line.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { SwitchComponent } from './components/switch/switch.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    CodeLineComponent,
    SwitchComponent,
    DropdownComponent,
    NavigationComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
