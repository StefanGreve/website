import { State } from "../enums/state";
import { ThemeDefinition } from "../interfaces/theme";

export class Utils {
  public static delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  public static mapStateToColor = (state: State | undefined, themeDefinition: ThemeDefinition): string => {
    switch(state) {
      default:
      case State.Default:
        return themeDefinition.infoColor;
      case State.Success:
        return themeDefinition.successColor;
      case State.Info:
        return themeDefinition.infoColor;
      case State.Warning:
        return themeDefinition.warningColor;
      case State.Danger:
        return themeDefinition.errorColor;
    }
  };
}
