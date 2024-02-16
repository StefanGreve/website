import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { ActionSheetComponent } from "./components/action-sheet/action-sheet.component";
import { AlertComponent } from "./components/alert/alert.component";
import { CodeLineComponent } from "./components/code-line/code-line.component";
import { DialogComponent } from "./components/dialog/dialog.component";
import { DropdownComponent } from "./components/dropdown/dropdown.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { SwitchComponent } from "./components/switch/switch.component";
import { DropPipe } from "./pipes/drop/drop.pipe";
import { SortByPipe } from "./pipes/sort-by/sort-by.pipe";

describe("AppComponent", () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [
      ActionSheetComponent,
      AlertComponent,
      CodeLineComponent,
      DialogComponent,
      DropdownComponent,
      NavigationComponent,
      SwitchComponent,
      SortByPipe,
      DropPipe,
    ],
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
