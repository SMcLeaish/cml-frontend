import { useState } from "react";
import { clsx } from "keycloakify/tools/clsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login(
  props: PageProps<Extract<KcContext, { pageId: "login.ftl" }>, I18n>,
) {
  const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

  const { kcClsx } = getKcClsx({
    doUseDefaultCss,
    classes,
  });

  const {
    social,
    realm,
    url,
    usernameHidden,
    login,
    auth,
    registrationDisabled,
    messagesPerField,
  } = kcContext;

  const { msg, msgStr } = i18n;

  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

  return (
    <Template
      kcContext={kcContext}
      i18n={i18n}
      doUseDefaultCss={doUseDefaultCss}
      classes={classes}
      displayMessage={!messagesPerField.existsError("username", "password")}
      headerNode=""
      displayInfo={
        realm.password && realm.registrationAllowed && !registrationDisabled
      }
      infoNode={
        <a href={url.registrationUrl}>
          <Label className="self-end">Register</Label>
        </a>
      }
      socialProvidersNode={
        <>
          {realm.password &&
            social.providers !== undefined &&
            social.providers.length !== 0 && (
              <div
                id="kc-social-providers"
                className={kcClsx("kcFormSocialAccountSectionClass")}
              >
                <hr />
                <h2>{msg("identity-provider-login-label")}</h2>
                <ul
                  className={kcClsx(
                    "kcFormSocialAccountListClass",
                    social.providers.length > 3 &&
                      "kcFormSocialAccountListGridClass",
                  )}
                >
                  {social.providers.map((...[p, , providers]) => (
                    <li key={p.alias}>
                      <a
                        id={`social-${p.alias}`}
                        className={kcClsx(
                          "kcFormSocialAccountListButtonClass",
                          providers.length > 3 && "kcFormSocialAccountGridItem",
                        )}
                        type="button"
                        href={p.loginUrl}
                      >
                        {p.iconClasses && (
                          <i
                            className={clsx(
                              kcClsx("kcCommonLogoIdP"),
                              p.iconClasses,
                            )}
                            aria-hidden="true"
                          ></i>
                        )}
                        <span
                          className={clsx(
                            kcClsx("kcFormSocialAccountNameClass"),
                            p.iconClasses && "kc-social-icon-text",
                          )}
                          dangerouslySetInnerHTML={{ __html: p.displayName }}
                        ></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </>
      }
    >
      <div id="kc-form">
        <div id="kc-form-wrapper">
          {realm.password && (
            <form
              id="kc-form-login"
              onSubmit={() => {
                setIsLoginButtonDisabled(true);
                return true;
              }}
              action={url.loginAction}
              method="post"
            >
              {!usernameHidden && (
                <div className={kcClsx("kcFormGroupClass")}>
                  <Label htmlFor="username">
                    {!realm.loginWithEmailAllowed
                      ? msg("username")
                      : !realm.registrationEmailAsUsername
                        ? msg("usernameOrEmail")
                        : msg("email")}
                  </Label>
                  <Input
                    tabIndex={2}
                    id="username"
                    name="username"
                    defaultValue={login.username ?? ""}
                    type="text"
                    autoFocus
                    autoComplete="username"
                    aria-invalid={messagesPerField.existsError(
                      "username",
                      "password",
                    )}
                  />
                  {messagesPerField.existsError("username", "password") && (
                    <span
                      id="input-error"
                      className={kcClsx("kcInputErrorMessageClass")}
                      aria-live="polite"
                      dangerouslySetInnerHTML={{
                        __html: messagesPerField.getFirstError(
                          "username",
                          "password",
                        ),
                      }}
                    />
                  )}
                </div>
              )}
              <div>
                <Label htmlFor="password" className="p-1">
                  {msg("password")}
                </Label>
                <Input
                  tabIndex={3}
                  id="password"
                  name="password"
                  type="password"
                  className="outline-none"
                  autoComplete="current-password"
                  aria-invalid={messagesPerField.existsError(
                    "username",
                    "password",
                  )}
                />
                {usernameHidden &&
                  messagesPerField.existsError("username", "password") && (
                    <span
                      id="input-error"
                      className={kcClsx("kcInputErrorMessageClass")}
                      aria-live="polite"
                      dangerouslySetInnerHTML={{
                        __html: messagesPerField.getFirstError(
                          "username",
                          "password",
                        ),
                      }}
                    />
                  )}
              </div>
              <div className={kcClsx("kcFormGroupClass", "kcFormSettingClass")}>
                <div id="kc-form-options">
                  {realm.rememberMe && !usernameHidden && (
                    <div className="checkbox">
                      <label>
                        <input
                          tabIndex={5}
                          id="rememberMe"
                          name="rememberMe"
                          type="checkbox"
                          defaultChecked={!!login.rememberMe}
                        />{" "}
                        {msg("rememberMe")}
                      </label>
                    </div>
                  )}
                </div>
                <div className={kcClsx("kcFormOptionsWrapperClass")}>
                  {realm.resetPasswordAllowed && (
                    <span>
                      <a tabIndex={6} href={url.loginResetCredentialsUrl}>
                        <Label>Forgot Password</Label>
                      </a>
                    </span>
                  )}
                </div>
              </div>
              <Button className="w-full place-self-end">
                <input
                  type="hidden"
                  id="id-hidden-input"
                  name="credentialId"
                  value={auth.selectedCredential}
                />
                <input
                  tabIndex={7}
                  disabled={isLoginButtonDisabled}
                  name="login"
                  id="kc-login"
                  type="submit"
                  value={msgStr("doLogIn")}
                />
              </Button>
            </form>
          )}
        </div>
      </div>
    </Template>
  );
}
