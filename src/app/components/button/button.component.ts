import { CommonModule } from "@angular/common";
import { Component, Input, OnInit, inject } from "@angular/core";
import { v4 as uuid } from "uuid";
import { Role } from "src/app/enums/role";
import { Button } from "src/app/interfaces/button";
import { ThemeSwitcherService } from "src/app/services/theme-switcher.service";
import { Utils } from "src/app/lib/utils";
import { Size } from "src/app/enums/size";

@Component({
  selector: "adv-button",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
})
export class ButtonComponent implements OnInit {
  // dependency injection
  private themeSwitcherService = inject(ThemeSwitcherService);

  // public fields
  public readonly id: string = `adv__button__${uuid()}`;
  public accentColor: string | undefined;

  @Input({required: true})
  public action!: Button;

  @Input()
  public role: Role = Role.Primary;

  @Input()
  public size: Size = Size.Medium;

  ngOnInit(): void {
    const themeDefinition = this.themeSwitcherService.getThemeDefinition();
    this.accentColor = Utils.mapStateToColor(this.action.state, themeDefinition);
  }
}
