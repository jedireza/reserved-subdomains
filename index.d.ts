export default class ReservedSubdomains {
  public static isNotValid(name: string): boolean;
  public static isValid(name: string): boolean;
  public static names: string[];
  public static nameMap: Record<string, boolean>;
  public static patterns: string[];
  public static patternsRegex: Regex[];
}
