export class Utils {
  public static delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
}
