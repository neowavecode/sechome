/* SecHome web — textos de la página "Registro confirmado" (registro-exitoso.html).
   Se añaden a window.I18N sin tocar el i18n.js principal. Mismos 10 idiomas que app.js. */
(function () {
  var S = {
    en: {
      rs_title: "You're all set!",
      rs_msg: "Your email has been confirmed. Open the SecHome app and sign in to continue.",
      rs_hint: "You can close this tab."
    },
    es: {
      rs_title: "¡Registro confirmado!",
      rs_msg: "Tu correo se ha verificado. Abre la app SecHome e inicia sesión para continuar.",
      rs_hint: "Ya puedes cerrar esta pestaña."
    },
    fr: {
      rs_title: "Inscription confirmée !",
      rs_msg: "Votre e-mail a été vérifié. Ouvrez l'application SecHome et connectez-vous pour continuer.",
      rs_hint: "Vous pouvez fermer cet onglet."
    },
    de: {
      rs_title: "Registrierung bestätigt!",
      rs_msg: "Deine E-Mail wurde bestätigt. Öffne die SecHome-App und melde dich an, um fortzufahren.",
      rs_hint: "Du kannst diesen Tab schließen."
    },
    it: {
      rs_title: "Registrazione confermata!",
      rs_msg: "La tua email è stata verificata. Apri l'app SecHome e accedi per continuare.",
      rs_hint: "Puoi chiudere questa scheda."
    },
    pt: {
      rs_title: "Registo confirmado!",
      rs_msg: "O teu email foi verificado. Abre a aplicação SecHome e inicia sessão para continuar.",
      rs_hint: "Já podes fechar este separador."
    },
    nl: {
      rs_title: "Registratie bevestigd!",
      rs_msg: "Je e-mail is bevestigd. Open de SecHome-app en log in om door te gaan.",
      rs_hint: "Je kunt dit tabblad sluiten."
    },
    pl: {
      rs_title: "Rejestracja potwierdzona!",
      rs_msg: "Twój adres e-mail został potwierdzony. Otwórz aplikację SecHome i zaloguj się, aby kontynuować.",
      rs_hint: "Możesz zamknąć tę kartę."
    },
    tr: {
      rs_title: "Kayıt onaylandı!",
      rs_msg: "E-postan doğrulandı. SecHome uygulamasını açıp giriş yaparak devam edebilirsin.",
      rs_hint: "Bu sekmeyi kapatabilirsin."
    },
    ru: {
      rs_title: "Регистрация подтверждена!",
      rs_msg: "Ваш адрес электронной почты подтверждён. Откройте приложение SecHome и войдите, чтобы продолжить.",
      rs_hint: "Можете закрыть эту вкладку."
    }
  };
  var I = window.I18N = window.I18N || {};
  for (var l in S) {
    I[l] = I[l] || {};
    for (var k in S[l]) I[l][k] = S[l][k];
  }
})();
