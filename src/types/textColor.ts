export enum TextColor {
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

export class TextColorUtils {
  public static toClassName(color: TextColor): string {
    switch (color) {
      case TextColor.Primary:
        return "text-primary";
      case TextColor.PrimaryContent:
        return "text-primary-content";
      case TextColor.Secondary:
        return "text-secondary";
      case TextColor.SecondaryContent:
        return "text-secondary-content";
      case TextColor.Accent:
        return "text-accent";
      case TextColor.AccentContent:
        return "text-accent-content";
      case TextColor.Neutral:
        return "text-neutral";
      case TextColor.NeutralContent:
        return "text-neutral-content";
      case TextColor.Base100:
        return "base-100";
      case TextColor.Base200:
        return "text-base-200";
      case TextColor.Base300:
        return "text-base-300";
      case TextColor.BaseContent:
        return "text-base-content";
      case TextColor.Info:
        return "text-info";
      case TextColor.InfoContent:
        return "text-info-content";
      case TextColor.Success:
        return "text-success";
      case TextColor.SuccessContent:
        return "text-success-content";
      case TextColor.Warning:
        return "text-warning";
      case TextColor.WarningContent:
        return "text-warning-content";
      case TextColor.Error:
        return "text-error";
      case TextColor.ErrorContent:
        return "text-error-content";
      default:
        return "text-base-content";
    }
  }
}
