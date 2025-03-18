export enum ButtonColor {
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
  
  export class ButtonColorUtils {
    public static toClassName(color: ButtonColor): string {
      switch (color) {
        case ButtonColor.Primary:
          return "btn-primary";
        case ButtonColor.PrimaryContent:
          return "btn-primary-content";
        case ButtonColor.Secondary:
          return "btn-secondary";
        case ButtonColor.SecondaryContent:
          return "btn-secondary-content";
        case ButtonColor.Accent:
          return "btn-accent";
        case ButtonColor.AccentContent:
          return "btn-accent-content";
        case ButtonColor.Neutral:
          return "btn-neutral";
        case ButtonColor.NeutralContent:
          return "btn-neutral-content";
        case ButtonColor.Base100:
          return "base-100";
        case ButtonColor.Base200:
          return "btn-base-200";
        case ButtonColor.Base300:
          return "btn-base-300";
        case ButtonColor.BaseContent:
          return "btn-base-content";
        case ButtonColor.Info:
          return "btn-info";
        case ButtonColor.InfoContent:
          return "btn-info-content";
        case ButtonColor.Success:
          return "btn-success";
        case ButtonColor.SuccessContent:
          return "btn-success-content";
        case ButtonColor.Warning:
          return "btn-warning";
        case ButtonColor.WarningContent:
          return "btn-warning-content";
        case ButtonColor.Error:
          return "btn-error";
        case ButtonColor.ErrorContent:
          return "btn-error-content";
        default:
          return "btn-base-content";
      }
    }
  }
  
  