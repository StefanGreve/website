export interface ThemeDefinition {
  [key: string]: string;
  name: string;
  // default colors
  neutralColor: string;
  neutralColorMuted: string;
  neutralColorAlt: string;
  // accent colors
  primaryColor: string;
  onPrimaryColor: string;
  secondaryColor: string;
  onSecondaryColor: string;
  // building colors
  backgroundColor: string;
  onBackgroundColor: string;
  surfaceColor: string;
  onSurfaceColor: string;
  // status colors
  successColor: string;
  infoColor: string;
  warningColor: string;
  errorColor: string;
  // miscellaneous colors
  scrollbarColor: string;
  scrollbarTrack: string;
  backgroundBorder: string;
  surfaceBorder: string;
}
