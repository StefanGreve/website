import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ActionSheetComponent } from "./action-sheet.component";
import { Button } from "src/app/interfaces/button";

describe("ActionSheetComponent", () => {
  let component: ActionSheetComponent;
  let fixture: ComponentFixture<ActionSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionSheetComponent);
    component = fixture.componentInstance;
    component.actions = [
      {
        label: "Ok",
      }
    ] as Button[];
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
