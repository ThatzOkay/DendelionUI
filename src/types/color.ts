export enum Color {
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
  public static toClassName(color: Color): string {
    switch (color) {
      case Color.Primary:
        return "bg-primary";
      case Color.PrimaryContent:
        return "bg-primary-content";
      case Color.Secondary:
        return "bg-secondary";
      case Color.SecondaryContent:
        return "bg-secondary-content";
      case Color.Accent:
        return "bg-accent";
      case Color.AccentContent:
        return "bg-accent-content";
      case Color.Neutral:
        return "bg-neutral";
      case Color.NeutralContent:
        return "bg-neutral-content";
      case Color.Base100:
        return "base-100";
      case Color.Base200:
        return "bg-base-200";
      case Color.Base300:
        return "bg-base-300";
      case Color.BaseContent:
        return "bg-base-content";
      case Color.Info:
        return "bg-info";
      case Color.InfoContent:
        return "bg-info-content";
      case Color.Success:
        return "bg-success";
      case Color.SuccessContent:
        return "bg-success-content";
      case Color.Warning:
        return "bg-warning";
      case Color.WarningContent:
        return "bg-warning-content";
      case Color.Error:
        return "bg-error";
      case Color.ErrorContent:
        return "bg-error-content";
      default:
        return "bg-base-content";
    }
  }
}

export class ButtonColorUtils {
  public static toClassName(color: Color): string {
    switch (color) {
      case Color.Primary:
        return "btn-primary";
      case Color.PrimaryContent:
        return "btn-primary-content";
      case Color.Secondary:
        return "btn-secondary";
      case Color.SecondaryContent:
        return "btn-secondary-content";
      case Color.Accent:
        return "btn-accent";
      case Color.AccentContent:
        return "btn-accent-content";
      case Color.Neutral:
        return "btn-neutral";
      case Color.NeutralContent:
        return "btn-neutral-content";
      case Color.Base100:
        return "base-100";
      case Color.Base200:
        return "btn-base-200";
      case Color.Base300:
        return "btn-base-300";
      case Color.BaseContent:
        return "btn-base-content";
      case Color.Info:
        return "btn-info";
      case Color.InfoContent:
        return "btn-info-content";
      case Color.Success:
        return "btn-success";
      case Color.SuccessContent:
        return "btn-success-content";
      case Color.Warning:
        return "btn-warning";
      case Color.WarningContent:
        return "btn-warning-content";
      case Color.Error:
        return "btn-error";
      case Color.ErrorContent:
        return "btn-error-content";
      default:
        return "btn-base-content";
    }
  }
}

export class TextColorUtils {
  public static toClassName(color: Color): string {
    switch (color) {
      case Color.Primary:
        return "text-primary";
      case Color.PrimaryContent:
        return "text-primary-content";
      case Color.Secondary:
        return "text-secondary";
      case Color.SecondaryContent:
        return "text-secondary-content";
      case Color.Accent:
        return "text-accent";
      case Color.AccentContent:
        return "text-accent-content";
      case Color.Neutral:
        return "text-neutral";
      case Color.NeutralContent:
        return "text-neutral-content";
      case Color.Base100:
        return "base-100";
      case Color.Base200:
        return "text-base-200";
      case Color.Base300:
        return "text-base-300";
      case Color.BaseContent:
        return "text-base-content";
      case Color.Info:
        return "text-info";
      case Color.InfoContent:
        return "text-info-content";
      case Color.Success:
        return "text-success";
      case Color.SuccessContent:
        return "text-success-content";
      case Color.Warning:
        return "text-warning";
      case Color.WarningContent:
        return "text-warning-content";
      case Color.Error:
        return "text-error";
      case Color.ErrorContent:
        return "text-error-content";
      default:
        return "text-base-content";
    }
  }
}

