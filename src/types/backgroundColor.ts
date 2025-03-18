export enum BackgroundColor {
  Primary,
  PrimaryContent,
  Secondary,
  SecondaryContent,
  Accent,
  AccentContent,
  Neutral,
  NeutralContent,
  Base100,
  Base200,
  Base300,
  BaseContent,
  Info,
  InfoContent,
  Success,
  SuccessContent,
  Warning,
  WarningContent,
  Error,
  ErrorContent,
}

export class BackgroundColorUtils {
  public static toClassName(color: BackgroundColor): string {
    switch (color) {
      case BackgroundColor.Primary:
        return "bg-primary";
      case BackgroundColor.PrimaryContent:
        return "bg-primary-content";
      case BackgroundColor.Secondary:
        return "bg-secondary";
      case BackgroundColor.SecondaryContent:
        return "bg-secondary-content";
      case BackgroundColor.Accent:
        return "bg-accent";
      case BackgroundColor.AccentContent:
        return "bg-accent-content";
      case BackgroundColor.Neutral:
        return "bg-neutral";
      case BackgroundColor.NeutralContent:
        return "bg-neutral-content";
      case BackgroundColor.Base100:
        return "base-100";
      case BackgroundColor.Base200:
        return "bg-base-200";
      case BackgroundColor.Base300:
        return "bg-base-300";
      case BackgroundColor.BaseContent:
        return "bg-base-content";
      case BackgroundColor.Info:
        return "bg-info";
      case BackgroundColor.InfoContent:
        return "bg-info-content";
      case BackgroundColor.Success:
        return "bg-success";
      case BackgroundColor.SuccessContent:
        return "bg-success-content";
      case BackgroundColor.Warning:
        return "bg-warning";
      case BackgroundColor.WarningContent:
        return "bg-warning-content";
      case BackgroundColor.Error:
        return "bg-error";
      case BackgroundColor.ErrorContent:
        return "bg-error-content";
      default:
        return "bg-base-content";
    }
  }
}
