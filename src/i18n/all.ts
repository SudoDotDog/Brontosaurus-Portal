/**
 * @author WMXPY
 * @namespace I18N
 * @description All
 */

import { PROFILE } from "./profile";

export const ENGLISH_UNITED_STATES: Record<PROFILE, string> = {

    [PROFILE.NEED_HELP]: "Need help signing in?",
    [PROFILE.GO_TO_HELP_CENTER]: "Access Help center",
    [PROFILE.PASSWORD]: "Password",
    [PROFILE.PRIVACY_POLICY]: "Privacy Policy",
    [PROFILE.SIGN_IN]: "SignIn",
    [PROFILE.SIGN_IN_TO]: "Sign in to",
    [PROFILE.SIGN_IN_WITH_BEFORE]: "Sign in with",
    [PROFILE.SIGN_IN_WITH_AFTER]: "",
    [PROFILE.USERNAME]: "Username",
    [PROFILE.SAVE_USERNAME]: "Remember Username",
    [PROFILE.EMAIL]: "Email Address",
    [PROFILE.SEND_RESET_PASSWORD_EMAIL]: "Send Temporary Password",

    [PROFILE.LIMBO_DESCRIPTION]: "You are signing in with a temporary password, please enter a new password and use it the next time you log in.",
    [PROFILE.RESET_PASSWORD_DESCRIPTION]: "We apologize for your account login issue. You can click the link below to access our help center, or enter your username and email address to reset your password.",
    [PROFILE.NEW_PASSWORD]: "New password",
    [PROFILE.SAVE_NEW_PASSWORD_AND_SIGN_IN]: "Save and SignIn",

    [PROFILE.TWO_FA_DESCRIPTION]: "Two-Factor authentication is enabled on your account, Open the Two-Factor authentication app on your device to view your authentication code.",
    [PROFILE.AUTH_CODE]: "Authentication code",
    [PROFILE.AUTH_AND_SIGN_IN]: "Verify and SignIn",

    [PROFILE.CONNECT_SERVICE]: "If this error persists, please contact your system administrator for more help.",
    [PROFILE.UNKNOWN_ERROR]: "Unknown Error",
    [PROFILE.FAILED_TO_FETCH]: "Unable to connect authentication server",
    [PROFILE.FAILED_TO_FETCH_DESCRIPTION]: "This is usually because your network environment is poor, please try again later. If this error persists, please contact your system administrator for more help.",
    [PROFILE.INACTIVE_ACCOUNT]: "Account disabled",
    [PROFILE.INACTIVE_ACCOUNT_DESCRIPTION]: "This account has been disabled, Please contact your system administrator to restore this account.",
    [PROFILE.USERNAME_PASSWORD_NOT_MATCH]: "Username and password do not match",
    [PROFILE.USERNAME_PASSWORD_NOT_MATCH_DESCRIPTION]: 'Please try signing in again. Note that if you try too many times, your account may be locked. If you forget your password or this error persists, please contact your system administrator for more help.',
    [PROFILE.TWO_FA_NOT_MATCH]: "Two-Factor verification failed",
    [PROFILE.TWO_FA_NOT_MATCH_DESCRIPTION]: "This may be due to a system delay, please try again later. If this error persists, please contact your system administrator for more help.",
    [PROFILE.TOO_MANY_ATTEMPT]: "Account is locked",
    [PROFILE.TOO_MANY_ATTEMPT_DESCRIPTION]: "Your account has been locked due to too many attempts, please contact your system administrator for more help.",
    [PROFILE.UNSAFE_PASSWORD]: "Week password",
    [PROFILE.UNSAFE_PASSWORD_DESCRIPTION]: "A strong password should be at least eight characters long and contain at least one English character and one numeric character.",
    [PROFILE.WIRED_PASSWORD]: "Unreasonable password",
    [PROFILE.WIRED_PASSWORD_DESCRIPTION]: "You may have used special characters in your password. A reasonable password should only include English characters, numbers, and symbols on the keyboard.",
    [PROFILE.EMPTY_USERNAME]: "Empty Username",
    [PROFILE.EMPTY_USERNAME_DESCRIPTION]: "You have not enter a username. A valid username should be at least two in length and contain no spaces or special symbols.",
    [PROFILE.EMPTY_PASSWORD]: "Empty Password",
    [PROFILE.EMPTY_PASSWORD_DESCRIPTION]: "You have not entered a password. A valid password should be at least eight in length and contain only English letters, numbers, symbols and spaces.",
    [PROFILE.WRONG_TWO_FA_PATTERN]: "Invalid authentication code format",
    [PROFILE.WRONG_TWO_FA_PATTERN_DESCRIPTION]: "The authentication code you used for two-factor authentication is not in the correct format. A valid authentication code should be a numeric string of length six.",
    [PROFILE.APPLICATION_GROUP_NOT_FULFILLED]: "Insufficient group",
    [PROFILE.APPLICATION_GROUP_NOT_FULFILLED_DESCRIPTION]: "You may need sufficient group to use the application you want to log in to, please contact your system administrator for more help.",
    [PROFILE.APPLICATION_HAS_NO_PORTAL_ACCESS]: "No Portal Access",
    [PROFILE.APPLICATION_HAS_NO_PORTAL_ACCESS_DESCRIPTION]: "The Application has no Portal access. Usually, that issue is not because of you. Please contact your system administrator for more help.",
    [PROFILE.INTERNAL_ERROR]: "Internal Error",
    [PROFILE.INTERNAL_ERROR_DESCRIPTION]: "An internal error has occurred, usually not because of you. If this error persists, please contact your system administrator for more help.",
};

/* spell-checker: disable */

export const RUSSIAN_RUSSIA: Record<PROFILE, string> = {

    [PROFILE.NEED_HELP]: "Логин нуждается в помощи?",
    [PROFILE.GO_TO_HELP_CENTER]: "PLACEHOLDER",
    [PROFILE.PASSWORD]: "Парола",
    [PROFILE.PRIVACY_POLICY]: "Политика конфиденциальности",
    [PROFILE.SIGN_IN]: "Войти",
    [PROFILE.SIGN_IN_TO]: "Войти в",
    [PROFILE.SIGN_IN_WITH_BEFORE]: "Войти с помощью аккаунта",
    [PROFILE.SIGN_IN_WITH_AFTER]: "",
    [PROFILE.USERNAME]: "Потребителско име",
    [PROFILE.SAVE_USERNAME]: "Запомнить имя пользователя",
    [PROFILE.EMAIL]: "Email Address",
    [PROFILE.SEND_RESET_PASSWORD_EMAIL]: "Send Temporary Password",

    [PROFILE.LIMBO_DESCRIPTION]: "Вы входите с временным паролем, введите новый пароль и используйте его при следующем входе.",
    [PROFILE.RESET_PASSWORD_DESCRIPTION]: "PLACEHOLDER",
    [PROFILE.NEW_PASSWORD]: "Новый пароль",
    [PROFILE.SAVE_NEW_PASSWORD_AND_SIGN_IN]: "Сохранить и войти",

    [PROFILE.TWO_FA_DESCRIPTION]: "В вашем аккаунте включена двухфакторная аутентификация, Откройте приложение двухфакторной аутентификации на своем устройстве, чтобы просмотреть код аутентификации.",
    [PROFILE.AUTH_CODE]: "Код аутентификации",
    [PROFILE.AUTH_AND_SIGN_IN]: "Подтвердите и войдите",

    [PROFILE.CONNECT_SERVICE]: "Если эта ошибка повторяется, обратитесь за помощью к системному администратору.",
    [PROFILE.UNKNOWN_ERROR]: "Неизвестная ошибка",
    [PROFILE.FAILED_TO_FETCH]: "Невозможно подключиться к серверу аутентификации",
    [PROFILE.FAILED_TO_FETCH_DESCRIPTION]: "Обычно это происходит из-за плохой сетевой среды, повторите попытку позже. Если ошибка не устранена, обратитесь за помощью к системному администратору.",
    [PROFILE.INACTIVE_ACCOUNT]: "Аккаунт отключен",
    [PROFILE.INACTIVE_ACCOUNT_DESCRIPTION]: "Эта учетная запись была отключена. Пожалуйста, обратитесь к системному администратору для восстановления этой учетной записи.",
    [PROFILE.USERNAME_PASSWORD_NOT_MATCH]: "Имя пользователя и пароль не совпадают",
    [PROFILE.USERNAME_PASSWORD_NOT_MATCH_DESCRIPTION]: 'Пожалуйста, попробуйте войти снова. Обратите внимание, что если вы попробуете слишком много раз, ваша учетная запись может быть заблокирована. Если вы забыли свой пароль или эта ошибка повторяется, обратитесь за помощью к системному администратору.',
    [PROFILE.TWO_FA_NOT_MATCH]: "Двухфакторная проверка не удалась",
    [PROFILE.TWO_FA_NOT_MATCH_DESCRIPTION]: "Это может быть связано с системной задержкой, повторите попытку позже. Если ошибка не устранена, обратитесь за помощью к системному администратору.",
    [PROFILE.TOO_MANY_ATTEMPT]: "Аккаунт заблокирован",
    [PROFILE.TOO_MANY_ATTEMPT_DESCRIPTION]: "Ваша учетная запись заблокирована из-за слишком большого количества попыток, обратитесь за помощью к системному администратору.",
    [PROFILE.UNSAFE_PASSWORD]: "Слабый пароль",
    [PROFILE.UNSAFE_PASSWORD_DESCRIPTION]: "Надежный пароль должен содержать не менее восьми символов и содержать как минимум один английский символ и один цифровой символ.",
    [PROFILE.WIRED_PASSWORD]: "Неразумный пароль",
    [PROFILE.WIRED_PASSWORD_DESCRIPTION]: "Возможно, вы использовали специальные символы в вашем пароле. Разумный пароль должен включать только английские символы, цифры и символы на клавиатуре.",
    [PROFILE.EMPTY_USERNAME]: "Пустое имя пользователя",
    [PROFILE.EMPTY_USERNAME_DESCRIPTION]: "Вы не ввели имя пользователя. Допустимое имя пользователя должно быть длиной не менее двух и не должно содержать пробелов или специальных символов.",
    [PROFILE.EMPTY_PASSWORD]: "Пустой пароль",
    [PROFILE.EMPTY_PASSWORD_DESCRIPTION]: "Вы не ввели пароль. Действительный пароль должен быть не менее восьми и содержать только английские буквы, цифры, символы и пробелы.",
    [PROFILE.WRONG_TWO_FA_PATTERN]: "Неверный формат кода аутентификации",
    [PROFILE.WRONG_TWO_FA_PATTERN_DESCRIPTION]: "Код аутентификации, который вы использовали для двухфакторной аутентификации, имеет неправильный формат. Действительный код аутентификации должен быть числовой строкой длиной шесть.",
    [PROFILE.APPLICATION_GROUP_NOT_FULFILLED]: "Недостаточно разрешений",
    [PROFILE.APPLICATION_GROUP_NOT_FULFILLED_DESCRIPTION]: "Вам может потребоваться достаточные разрешения для использования приложения, в которое вы хотите войти, обратитесь к системному администратору за дополнительной помощью.",
    [PROFILE.APPLICATION_HAS_NO_PORTAL_ACCESS]: "Нет доступа к порталу",
    [PROFILE.APPLICATION_HAS_NO_PORTAL_ACCESS_DESCRIPTION]: "Приложение не имеет доступа к порталу. Обычно эта проблема не из-за вас. Пожалуйста, обратитесь к системному администратору за дополнительной помощью.",
    [PROFILE.INTERNAL_ERROR]: "Внутренняя ошибка",
    [PROFILE.INTERNAL_ERROR_DESCRIPTION]: "Произошла внутренняя ошибка, обычно не по вашей вине. Если эта ошибка не устранена, обратитесь за помощью к системному администратору.",
};

/* spell-checker: enable */

/* spell-checker: disable */

export const FRENCH_FRANCE: Record<PROFILE, string> = {

    [PROFILE.NEED_HELP]: "Besoin d'aide pour vous connecter?",
    [PROFILE.GO_TO_HELP_CENTER]: "PLACEHOLDER",
    [PROFILE.PASSWORD]: "Mot de passe",
    [PROFILE.PRIVACY_POLICY]: "Politique de confidentialité",
    [PROFILE.SIGN_IN]: "Se connecter",
    [PROFILE.SIGN_IN_TO]: "Se connecter à",
    [PROFILE.SIGN_IN_WITH_BEFORE]: "Se connecter avec un compte",
    [PROFILE.SIGN_IN_WITH_AFTER]: "",
    [PROFILE.USERNAME]: "Identifiant",
    [PROFILE.SAVE_USERNAME]: "Se souvenir du nom d'utilisateur",
    [PROFILE.EMAIL]: "Email Address",
    [PROFILE.SEND_RESET_PASSWORD_EMAIL]: "Send Temporary Password",

    [PROFILE.LIMBO_DESCRIPTION]: "Vous vous connectez avec un mot de passe temporaire, veuillez entrer un nouveau mot de passe et l'utiliser lors de votre prochaine connexion.",
    [PROFILE.RESET_PASSWORD_DESCRIPTION]: "PLACEHOLDER",
    [PROFILE.NEW_PASSWORD]: "Nouveau mot de passe",
    [PROFILE.SAVE_NEW_PASSWORD_AND_SIGN_IN]: "Enregistrer et se connecter",

    [PROFILE.TWO_FA_DESCRIPTION]: "L’authentification à deux facteurs est activée sur votre compte, Ouvrez l'application d'authentification à deux facteurs sur votre appareil pour afficher votre code d'authentification.",
    [PROFILE.AUTH_CODE]: "Code d'identification",
    [PROFILE.AUTH_AND_SIGN_IN]: "3Vérifier et se connecter",

    [PROFILE.CONNECT_SERVICE]: "Si cette erreur persiste, veuillez contacter votre administrateur système pour obtenir de l'aide.",
    [PROFILE.UNKNOWN_ERROR]: "Erreur inconnue",
    [PROFILE.FAILED_TO_FETCH]: "Impossible de se connecter au serveur d'authentification",
    [PROFILE.FAILED_TO_FETCH_DESCRIPTION]: "Si votre environnement réseau est médiocre, veuillez réessayer ultérieurement. Si cette erreur persiste, contactez votre administrateur système pour obtenir de l'aide.",
    [PROFILE.INACTIVE_ACCOUNT]: "Compte désactivé",
    [PROFILE.INACTIVE_ACCOUNT_DESCRIPTION]: "Ce compte a été désactivé. Veuillez contacter votre administrateur système pour restaurer ce compte.",
    [PROFILE.USERNAME_PASSWORD_NOT_MATCH]: "Le nom d'utilisateur et le mot de passe ne correspondent pas",
    [PROFILE.USERNAME_PASSWORD_NOT_MATCH_DESCRIPTION]: "Essayez de vous reconnecter, Notez que si vous essayez plusieurs fois, votre compte risque d'être verrouillé. Si vous oubliez votre mot de passe ou si cette erreur persiste, veuillez contacter votre administrateur système pour obtenir de l'aide.",
    [PROFILE.TWO_FA_NOT_MATCH]: "Échec de la vérification à deux facteurs",
    [PROFILE.TWO_FA_NOT_MATCH_DESCRIPTION]: "Cela peut être dû à un retard du système, veuillez réessayer ultérieurement. Si cette erreur persiste, contactez votre administrateur système pour obtenir de l'aide.",
    [PROFILE.TOO_MANY_ATTEMPT]: "Le compte est verrouillé",
    [PROFILE.TOO_MANY_ATTEMPT_DESCRIPTION]: "Votre compte a été bloqué suite à de nombreuses tentatives. Veuillez contacter votre administrateur système pour obtenir de l'aide.",
    [PROFILE.UNSAFE_PASSWORD]: "Mot de passe faible",
    [PROFILE.UNSAFE_PASSWORD_DESCRIPTION]: "Un mot de passe fort doit comporter au moins huit caractères et au moins un caractère anglais et un caractère numérique.",
    [PROFILE.WIRED_PASSWORD]: "Mot de passe déraisonnable",
    [PROFILE.WIRED_PASSWORD_DESCRIPTION]: "Vous avez peut-être utilisé des caractères spéciaux dans votre mot de passe. Un mot de passe raisonnable ne doit contenir que des caractères anglais, des chiffres et des symboles sur le clavier.",
    [PROFILE.EMPTY_USERNAME]: "Le nom d'utilisateur est vide",
    [PROFILE.EMPTY_USERNAME_DESCRIPTION]: "Vous n'avez pas entré de nom d'utilisateur. Un nom d'utilisateur valide doit être au moins deux et ne pas contenir d'espaces ni de symboles spéciaux.",
    [PROFILE.EMPTY_PASSWORD]: "Le mot de passe est vide",
    [PROFILE.EMPTY_PASSWORD_DESCRIPTION]: "Vous n'avez pas entré de mot de passe. Un mot de passe valide doit être au moins huit et contenir uniquement des lettres anglaises, des chiffres, des symboles et des espaces.",
    [PROFILE.WRONG_TWO_FA_PATTERN]: "Mauvais format de code d'authentification",
    [PROFILE.WRONG_TWO_FA_PATTERN_DESCRIPTION]: "Le code d’authentification que vous avez utilisé pour l’authentification à deux facteurs n’est pas au format correct; un code d’authentification valide doit être une chaîne numérique de longueur six.",
    [PROFILE.APPLICATION_GROUP_NOT_FULFILLED]: "Groupe insuffisantes",
    [PROFILE.APPLICATION_GROUP_NOT_FULFILLED_DESCRIPTION]: "Vous aurez peut-être besoin d'autorisations suffisantes pour utiliser l'application à laquelle vous souhaitez vous connecter. Veuillez contacter votre administrateur système pour obtenir de l'aide.",
    [PROFILE.APPLICATION_HAS_NO_PORTAL_ACCESS]: "Pas d'accès au portail",
    [PROFILE.APPLICATION_HAS_NO_PORTAL_ACCESS_DESCRIPTION]: "L'application n'a pas d'accès au portail. Habituellement, ce problème n'est pas à cause de vous. Veuillez contacter votre administrateur système pour plus d'aide.",
    [PROFILE.INTERNAL_ERROR]: "Erreur interne",
    [PROFILE.INTERNAL_ERROR_DESCRIPTION]: "Une erreur interne s'est produite, généralement pas à cause de vous. Si cette erreur persiste, contactez votre administrateur système pour obtenir de l'aide.",
};

/* spell-checker: enable */

export const JAPANESE_JAPAN: Record<PROFILE, string> = {

    [PROFILE.NEED_HELP]: "ログインにはヘルプが必要？",
    [PROFILE.GO_TO_HELP_CENTER]: "PLACEHOLDER",
    [PROFILE.PASSWORD]: "パスワード",
    [PROFILE.PRIVACY_POLICY]: "プライバシーポリシー",
    [PROFILE.SIGN_IN]: "ログイン",
    [PROFILE.SIGN_IN_TO]: "にログイン",
    [PROFILE.SIGN_IN_WITH_BEFORE]: "",
    [PROFILE.SIGN_IN_WITH_AFTER]: "でログイン",
    [PROFILE.USERNAME]: "ユーザー名",
    [PROFILE.SAVE_USERNAME]: "ユーザー名を記憶",
    [PROFILE.EMAIL]: "Email Address",
    [PROFILE.SEND_RESET_PASSWORD_EMAIL]: "Send Temporary Password",

    [PROFILE.LIMBO_DESCRIPTION]: "あなたは一時的なパスワードでログインしています。新しいパスワードを入力して、次回のログイン時にそれを使用してください。",
    [PROFILE.RESET_PASSWORD_DESCRIPTION]: "PLACEHOLDER",
    [PROFILE.NEW_PASSWORD]: "新しいパスワード",
    [PROFILE.SAVE_NEW_PASSWORD_AND_SIGN_IN]: "保存してサインイン",

    [PROFILE.TWO_FA_DESCRIPTION]: "アカウントで2要素認証が有効になっている，認証コードを確認するには、デバイスで2要素認証アプリを開きます。",
    [PROFILE.AUTH_CODE]: "認証コード",
    [PROFILE.AUTH_AND_SIGN_IN]: "確認してサインイン",

    [PROFILE.CONNECT_SERVICE]: "このエラーが解決しない場合は、システム管理者に連絡してください。",
    [PROFILE.UNKNOWN_ERROR]: "不明なエラー",
    [PROFILE.FAILED_TO_FETCH]: "認証サーバーに接続できません",
    [PROFILE.FAILED_TO_FETCH_DESCRIPTION]: "このエラーが解決しない場合は、システム管理者に連絡してください。",
    [PROFILE.INACTIVE_ACCOUNT]: "アカウント無効",
    [PROFILE.INACTIVE_ACCOUNT_DESCRIPTION]: "このアカウントは無効になっています，このアカウントを復元するには、システム管理者に連絡してください。",
    [PROFILE.USERNAME_PASSWORD_NOT_MATCH]: "ユーザー名とパスワードが一致しません",
    [PROFILE.USERNAME_PASSWORD_NOT_MATCH_DESCRIPTION]: 'パスワードを忘れた場合やこのエラーが解決しない場合は、システム管理者に連絡してください。',
    [PROFILE.TWO_FA_NOT_MATCH]: "2要素認証に失敗しました",
    [PROFILE.TWO_FA_NOT_MATCH_DESCRIPTION]: "これはシステムの遅延による可能性があります，しばらくしてからもう一度お試しください。このエラーが解決しない場合は、システム管理者に連絡してください",
    [PROFILE.TOO_MANY_ATTEMPT]: "アカウントはロックされています",
    [PROFILE.TOO_MANY_ATTEMPT_DESCRIPTION]: "試行回数が多すぎたため、アカウントはロックされました。システム管理者に連絡してください。",
    [PROFILE.UNSAFE_PASSWORD]: "弱いパスワード",
    [PROFILE.UNSAFE_PASSWORD_DESCRIPTION]: "強力なパスワードは8文字以上で、少なくとも1文字の英字と1文字の数字が含まれている必要があります。",
    [PROFILE.WIRED_PASSWORD]: "不当なパスワード",
    [PROFILE.WIRED_PASSWORD_DESCRIPTION]: "パスワードに特殊文字を使用した可能性がありますが、適切なパスワードには、キーボードの英字、数字、および記号のみを含める必要があります。",
    [PROFILE.EMPTY_USERNAME]: "空のユーザー名",
    [PROFILE.EMPTY_USERNAME_DESCRIPTION]: "ユーザー名を入力していません。有効なユーザー名は2文字以上で、スペースや特殊記号を含めないでください。",
    [PROFILE.EMPTY_PASSWORD]: "空のパスワード",
    [PROFILE.EMPTY_PASSWORD_DESCRIPTION]: "パスワードを入力しませんでした。有効なパスワードは8文字以上で、英字、数字、記号、およびスペースのみを含める必要があります。",
    [PROFILE.WRONG_TWO_FA_PATTERN]: "認証コードの形式が無効です",
    [PROFILE.WRONG_TWO_FA_PATTERN_DESCRIPTION]: "2要素認証に使用した認証コードが正しい形式ではありません有効な認証コードは、長さ6の数値ストリングです。",
    [PROFILE.APPLICATION_GROUP_NOT_FULFILLED]: "権限が不十分です",
    [PROFILE.APPLICATION_GROUP_NOT_FULFILLED_DESCRIPTION]: "ログインするアプリケーションを使用するのに十分な権限が必要な場合があります。詳細については、システム管理者に連絡してください。",
    [PROFILE.APPLICATION_HAS_NO_PORTAL_ACCESS]: "ポータルアクセスなし",
    [PROFILE.APPLICATION_HAS_NO_PORTAL_ACCESS_DESCRIPTION]: "アプリケーションにはポータルへのアクセス権がありません。 通常、その問題はあなたのせいではありません。 詳細については、システム管理者にお問い合わせください。",
    [PROFILE.INTERNAL_ERROR]: "内部エラー",
    [PROFILE.INTERNAL_ERROR_DESCRIPTION]: "このエラーが解決しない場合には、システム管理者に連絡してください。",
};

export const KOREAN_KOREA: Record<PROFILE, string> = {

    [PROFILE.NEED_HELP]: "로그인에 문제가 발생했습니다？",
    [PROFILE.GO_TO_HELP_CENTER]: "PLACEHOLDER",
    [PROFILE.PASSWORD]: "비밀번호",
    [PROFILE.PRIVACY_POLICY]: "개인 정보 보호 정책",
    [PROFILE.SIGN_IN]: "로그인",
    [PROFILE.SIGN_IN_TO]: "로그인",
    [PROFILE.SIGN_IN_WITH_BEFORE]: "",
    [PROFILE.SIGN_IN_WITH_AFTER]: "로 로그인",
    [PROFILE.USERNAME]: "사용자 아이디",
    [PROFILE.SAVE_USERNAME]: "사용자 이름 기억하기",
    [PROFILE.EMAIL]: "Email Address",
    [PROFILE.SEND_RESET_PASSWORD_EMAIL]: "Send Temporary Password",

    [PROFILE.LIMBO_DESCRIPTION]: "임시 비밀번호로 로그인하는 중입니다. 다음에 로그인 할 때 새 비밀번호를 입력하여 사용하십시오.",
    [PROFILE.RESET_PASSWORD_DESCRIPTION]: "PLACEHOLDER",
    [PROFILE.NEW_PASSWORD]: "새 비밀번호",
    [PROFILE.SAVE_NEW_PASSWORD_AND_SIGN_IN]: "저장 및 로그인",

    [PROFILE.TWO_FA_DESCRIPTION]: "귀하의 계정에서 이중 인증이 활성화되어 있고, 기기에서 2 단계 인증 앱을 열어 인증 코드를 확인합니다.",
    [PROFILE.AUTH_CODE]: "인증 코드",
    [PROFILE.AUTH_AND_SIGN_IN]: "확인 및 로그인",

    [PROFILE.CONNECT_SERVICE]: "이 오류가 계속되면 시스템 관리자에게 문의하여 도움을 받으십시오.",
    [PROFILE.UNKNOWN_ERROR]: "알 수없는 오류",
    [PROFILE.FAILED_TO_FETCH]: "인증 서버에 연결할 수 없습니다.",
    [PROFILE.FAILED_TO_FETCH_DESCRIPTION]: "네트워크 환경이 좋지 않아 대개의 경우입니다. 나중에 다시 시도하십시오.이 오류가 계속되면 시스템 관리자에게 도움을 요청하십시오.",
    [PROFILE.INACTIVE_ACCOUNT]: "계정 사용 중지됨",
    [PROFILE.INACTIVE_ACCOUNT_DESCRIPTION]: "이 계정은 사용 중지되었습니다. 이 계정을 복원하려면 시스템 관리자에게 문의하십시오.",
    [PROFILE.USERNAME_PASSWORD_NOT_MATCH]: "사용자 이름과 비밀번호가 일치하지 않습니다.",
    [PROFILE.USERNAME_PASSWORD_NOT_MATCH_DESCRIPTION]: "암호를 잊어 버리거나이 오류가 계속되면 시스템 관리자에게 도움을 요청하십시오.",
    [PROFILE.TWO_FA_NOT_MATCH]: "2 중 요소 확인에 실패했습니다.",
    [PROFILE.TWO_FA_NOT_MATCH_DESCRIPTION]: "시스템 지연으로 인한 것일 수 있습니다. 나중에 다시 시도하십시오.이 오류가 계속되면 시스템 관리자에게 문의하여 도움을 받으십시오.",
    [PROFILE.TOO_MANY_ATTEMPT]: "계정이 잠겼습니다.",
    [PROFILE.TOO_MANY_ATTEMPT_DESCRIPTION]: "시도 횟수가 너무 많아 계정이 잠겼습니다. 시스템 관리자에게 문의하여 도움을 요청하십시오.",
    [PROFILE.UNSAFE_PASSWORD]: "약한 암호",
    [PROFILE.UNSAFE_PASSWORD_DESCRIPTION]: "강력한 암호는 8 자 이상이어야하며 영문자와 숫자가 각각 하나 이상이어야합니다.",
    [PROFILE.WIRED_PASSWORD]: "부당한 암호",
    [PROFILE.WIRED_PASSWORD_DESCRIPTION]: "암호에 특수 문자를 사용했을 수 있습니다. 합리적인 암호는 영문자, 숫자 및 기호 만 키보드에 포함해야합니다.",
    [PROFILE.EMPTY_USERNAME]: "사용자 이름이 비어 있습니다",
    [PROFILE.EMPTY_USERNAME_DESCRIPTION]: "사용자 이름을 입력하지 않았습니다. 올바른 사용자 이름은 길이가 2 자 이상이어야하며 공백이나 특수 기호가 없어야합니다.",
    [PROFILE.EMPTY_PASSWORD]: "비밀번호가 비어 있습니다",
    [PROFILE.EMPTY_PASSWORD_DESCRIPTION]: "암호를 입력하지 않았습니다. 유효한 암호는 길이가 8 자 이상이어야하며 영문자, 숫자, 기호 및 공백 만 포함해야합니다.",
    [PROFILE.WRONG_TWO_FA_PATTERN]: "인증 코드 형식 오류",
    [PROFILE.WRONG_TWO_FA_PATTERN_DESCRIPTION]: "이중 인증에 사용 된 인증 코드의 형식이 올바르지 않습니다. 유효한 인증 코드는 길이가 6 인 숫자 문자열이어야합니다.",
    [PROFILE.APPLICATION_GROUP_NOT_FULFILLED]: "권한이 충분하지 않습니다",
    [PROFILE.APPLICATION_GROUP_NOT_FULFILLED_DESCRIPTION]: "로그인하려는 응용 프로그램을 사용하려면 충분한 권한이 필요할 수 있습니다. 자세한 내용은 시스템 관리자에게 문의하십시오.",
    [PROFILE.APPLICATION_HAS_NO_PORTAL_ACCESS]: "포털 액세스 권한이 없음",
    [PROFILE.APPLICATION_HAS_NO_PORTAL_ACCESS_DESCRIPTION]: "응용 프로그램에 포털 액세스 권한이 없습니다. 일반적으로 그 문제는 당신 때문이 아닙니다. 도움이 필요하면 시스템 관리자에게 문의하십시오.",
    [PROFILE.INTERNAL_ERROR]: "내부 오류",
    [PROFILE.INTERNAL_ERROR_DESCRIPTION]: "일반적으로 사용자가 아닌 내부 오류가 발생했습니다.이 오류가 계속 발생하면 시스템 관리자에게 도움을 요청하십시오.",
};

export const CHINESE_SIMPLIFIED: Record<PROFILE, string> = {

    [PROFILE.NEED_HELP]: "登录需要帮助？",
    [PROFILE.GO_TO_HELP_CENTER]: "PLACEHOLDER",
    [PROFILE.PASSWORD]: "密码",
    [PROFILE.PRIVACY_POLICY]: "隐私政策",
    [PROFILE.SIGN_IN]: "登录",
    [PROFILE.SIGN_IN_TO]: "登录至",
    [PROFILE.SIGN_IN_WITH_BEFORE]: "使用",
    [PROFILE.SIGN_IN_WITH_AFTER]: "登陆",
    [PROFILE.USERNAME]: "用户名",
    [PROFILE.SAVE_USERNAME]: "记住用户名",
    [PROFILE.EMAIL]: "Email Address",
    [PROFILE.SEND_RESET_PASSWORD_EMAIL]: "Send Temporary Password",

    [PROFILE.LIMBO_DESCRIPTION]: "您正在使用临时密码登录，请输入新密码，并在下次登录时使用它。",
    [PROFILE.RESET_PASSWORD_DESCRIPTION]: "PLACEHOLDER",
    [PROFILE.NEW_PASSWORD]: "新密码",
    [PROFILE.SAVE_NEW_PASSWORD_AND_SIGN_IN]: "保存并登录",

    [PROFILE.TWO_FA_DESCRIPTION]: "您的帐户已启用双因素身份验证，在您的设备上打开双因素身份验证应用以查看您的身份验证代码。",
    [PROFILE.AUTH_CODE]: "身份验证代码",
    [PROFILE.AUTH_AND_SIGN_IN]: "验证并登录",

    [PROFILE.CONNECT_SERVICE]: "如果这个错误持续出现，请联系系统管理员来获得更多帮助。",
    [PROFILE.UNKNOWN_ERROR]: "未知的错误",
    [PROFILE.FAILED_TO_FETCH]: "无法连接验证服务器",
    [PROFILE.FAILED_TO_FETCH_DESCRIPTION]: "这通常是因为您的网络环境较差，请稍后重试，如果这个错误持续出现，请联系系统管理员来获得更多帮助。",
    [PROFILE.INACTIVE_ACCOUNT]: "帐号已停用",
    [PROFILE.INACTIVE_ACCOUNT_DESCRIPTION]: "此帐号已被停用，请与系统管理员联系以恢复此帐号。",
    [PROFILE.USERNAME_PASSWORD_NOT_MATCH]: "用户名和密码不匹配",
    [PROFILE.USERNAME_PASSWORD_NOT_MATCH_DESCRIPTION]: "请尝试重新登录，注意，如果尝试次数过多您的账户可能会被锁定，如果您忘记了密码或者这个错误持续出现，请联系系统管理员来获得更多帮助。",
    [PROFILE.TWO_FA_NOT_MATCH]: "双因素验证失败",
    [PROFILE.TWO_FA_NOT_MATCH_DESCRIPTION]: "这可能是由于系统延迟，请稍后重试，如果这个错误持续出现，请联系系统管理员来获得更多帮助。",
    [PROFILE.TOO_MANY_ATTEMPT]: "账户被锁定",
    [PROFILE.TOO_MANY_ATTEMPT_DESCRIPTION]: "您的账户因为尝试次数过多而被锁定，请联系系统管理员来获得更多帮助。",
    [PROFILE.UNSAFE_PASSWORD]: "密码太弱",
    [PROFILE.UNSAFE_PASSWORD_DESCRIPTION]: "一个强密码应该至少八个字符长，并包含至少一个英文字符和一个数字字符。",
    [PROFILE.WIRED_PASSWORD]: "密码不合理",
    [PROFILE.WIRED_PASSWORD_DESCRIPTION]: "您可能在密码中使用了特殊字符，合理的密码应该只包括英文字符，数字和键盘上的符号。",
    [PROFILE.EMPTY_USERNAME]: "用户名为空",
    [PROFILE.EMPTY_USERNAME_DESCRIPTION]: "您没有输入用户名，一个合法的用户名应该长度至少为二，并且不包含空格和特殊符号。",
    [PROFILE.EMPTY_PASSWORD]: "密码为空",
    [PROFILE.EMPTY_PASSWORD_DESCRIPTION]: "您没有输入密码，一个合法的密码应该长度至少为八，并且只包含英文字母，数字，符号和空格。",
    [PROFILE.WRONG_TWO_FA_PATTERN]: "身份验证代码格式错误",
    [PROFILE.WRONG_TWO_FA_PATTERN_DESCRIPTION]: "您用于双因素验证的身份验证代码格式不正确，一个合法的身份验证代码应该是一个长度为六的数字字符串。",
    [PROFILE.APPLICATION_GROUP_NOT_FULFILLED]: "权限组不足",
    [PROFILE.APPLICATION_GROUP_NOT_FULFILLED_DESCRIPTION]: "您可能需要足够的权限来使用您想要登陆的应用程序, 请联系系统管理员来获得更多帮助",
    [PROFILE.APPLICATION_HAS_NO_PORTAL_ACCESS]: "无法访问玄关",
    [PROFILE.APPLICATION_HAS_NO_PORTAL_ACCESS_DESCRIPTION]: "该应用程序没有玄关应用访问权限。通常该问题不是由于您的操作导致的。请与系统管理员联系以获取更多帮助。",
    [PROFILE.INTERNAL_ERROR]: "内部错误",
    [PROFILE.INTERNAL_ERROR_DESCRIPTION]: "发生了内部错误，这通常不是因为您，如果这个错误持续出现，请联系系统管理员来获得更多帮助。",
};

export const CHINESE_TRADITIONAL: Record<PROFILE, string> = {

    [PROFILE.NEED_HELP]: "登入遇到問題？",
    [PROFILE.GO_TO_HELP_CENTER]: "PLACEHOLDER",
    [PROFILE.PASSWORD]: "密鑰",
    [PROFILE.PRIVACY_POLICY]: "隱私政策",
    [PROFILE.SIGN_IN]: "登入",
    [PROFILE.SIGN_IN_TO]: "登入到",
    [PROFILE.SIGN_IN_WITH_BEFORE]: "使用",
    [PROFILE.SIGN_IN_WITH_AFTER]: "登入",
    [PROFILE.USERNAME]: "使用者名稱",
    [PROFILE.SAVE_USERNAME]: "記住使用者名稱",
    [PROFILE.EMAIL]: "Email Address",
    [PROFILE.SEND_RESET_PASSWORD_EMAIL]: "Send Temporary Password",

    [PROFILE.LIMBO_DESCRIPTION]: "您正在使用臨時密鑰登入，請輸入新密鑰，並在下次登入時使用它。",
    [PROFILE.RESET_PASSWORD_DESCRIPTION]: "PLACEHOLDER",
    [PROFILE.NEW_PASSWORD]: "新密鑰",
    [PROFILE.SAVE_NEW_PASSWORD_AND_SIGN_IN]: "保存並登入",

    [PROFILE.TWO_FA_DESCRIPTION]: "您的帳戶已啟用雙因素身份驗證，在您的設備上打開雙因素身份驗證應用以查看您的身份驗證代碼。",
    [PROFILE.AUTH_CODE]: "身份驗證代碼",
    [PROFILE.AUTH_AND_SIGN_IN]: "驗證並登入",

    [PROFILE.CONNECT_SERVICE]: "如果這個錯誤持續出現，請聯繫系統管理員來獲得更多幫助。",
    [PROFILE.UNKNOWN_ERROR]: "未知的錯誤",
    [PROFILE.FAILED_TO_FETCH]: "無法連接驗證服務器",
    [PROFILE.FAILED_TO_FETCH_DESCRIPTION]: "這通常是因為您的網絡環境較差，請稍後重試，如果這個錯誤持續出現，請聯繫系統管理員來獲得更多幫助。",
    [PROFILE.INACTIVE_ACCOUNT]: "帳號已停用",
    [PROFILE.INACTIVE_ACCOUNT_DESCRIPTION]: "此帳號已被停用，請與系統管理員聯繫以恢復此帳號。",
    [PROFILE.USERNAME_PASSWORD_NOT_MATCH]: "使用者名稱和密鑰不匹配",
    [PROFILE.USERNAME_PASSWORD_NOT_MATCH_DESCRIPTION]: "請嘗試重新登錄，注意，如果嘗試次數過多您的賬戶可能會被鎖定，如果您忘記了密鑰或者這個錯誤持續出現，請聯繫系統管理員來獲得更多幫助。",
    [PROFILE.TWO_FA_NOT_MATCH]: "雙因素驗證失敗",
    [PROFILE.TWO_FA_NOT_MATCH_DESCRIPTION]: "這可能是由於系統延遲，請稍後重試，如果這個錯誤持續出現，請聯繫系統管理員來獲得更多幫助。",
    [PROFILE.TOO_MANY_ATTEMPT]: "賬戶被鎖定",
    [PROFILE.TOO_MANY_ATTEMPT_DESCRIPTION]: "您的賬戶因為嘗試次數過多而被鎖定，請聯繫系統管理員來獲得更多幫助。",
    [PROFILE.UNSAFE_PASSWORD]: "密鑰太弱",
    [PROFILE.UNSAFE_PASSWORD_DESCRIPTION]: "一個強密鑰應該至少八個字符長，並包含至少一個英文字符和一個數字字符。",
    [PROFILE.WIRED_PASSWORD]: "密鑰不合理",
    [PROFILE.WIRED_PASSWORD_DESCRIPTION]: "您可能在密鑰中使用了特殊字符，合理的密鑰應該只包括英文字符，數字和鍵盤上的符號。",
    [PROFILE.EMPTY_USERNAME]: "使用者名稱為空",
    [PROFILE.EMPTY_USERNAME_DESCRIPTION]: "您沒有輸入使用者名稱，一個合法的使用者名稱應該長度至少為二，並且不包含空格和特殊符號。",
    [PROFILE.EMPTY_PASSWORD]: "密鑰為空",
    [PROFILE.EMPTY_PASSWORD_DESCRIPTION]: "您沒有輸入密鑰，一個合法的密鑰應該長度至少為八，並且只包含英文字母，數字，符號和空格。",
    [PROFILE.WRONG_TWO_FA_PATTERN]: "身份驗證代碼格式錯誤",
    [PROFILE.WRONG_TWO_FA_PATTERN_DESCRIPTION]: "您用於雙因素驗證的身份驗證代碼格式不正確，一個合法的身份驗證代碼應該是一個長度為六的數字字符串。",
    [PROFILE.APPLICATION_GROUP_NOT_FULFILLED]: "權限組不足",
    [PROFILE.APPLICATION_GROUP_NOT_FULFILLED_DESCRIPTION]: "您可能需要足夠的權限來使用您想要登陸的應用程序, 請聯繫系統管理員來獲得更多幫助。",
    [PROFILE.APPLICATION_HAS_NO_PORTAL_ACCESS]: "無法訪問玄關",
    [PROFILE.APPLICATION_HAS_NO_PORTAL_ACCESS_DESCRIPTION]: "該應用程序沒有玄關應用訪問權限。通常該問題不是由於您的操作導致的。請與系統管理員聯繫以獲取更多幫助。",
    [PROFILE.INTERNAL_ERROR]: "內部錯誤",
    [PROFILE.INTERNAL_ERROR_DESCRIPTION]: "發生了內部錯誤，這通常不是因為您，如果這個錯誤持續出現，請聯繫系統管理員來獲得更多幫助。",
};

/* spell-checker: disable */

export const SPANISH_MEXICO: Record<PROFILE, string> = {

    [PROFILE.NEED_HELP]: "¿Necesitas ayuda para iniciar sesión?",
    [PROFILE.GO_TO_HELP_CENTER]: "PLACEHOLDER",
    [PROFILE.PASSWORD]: "Contraseña",
    [PROFILE.PRIVACY_POLICY]: "Política de privacidad",
    [PROFILE.SIGN_IN]: "Iniciar sesión",
    [PROFILE.SIGN_IN_TO]: "Iniciar sesión en",
    [PROFILE.SIGN_IN_WITH_BEFORE]: "Inicia sesión con",
    [PROFILE.SIGN_IN_WITH_AFTER]: "",
    [PROFILE.USERNAME]: "Usuario",
    [PROFILE.SAVE_USERNAME]: "Recordar el nombre de usuario",
    [PROFILE.EMAIL]: "Email Address",
    [PROFILE.SEND_RESET_PASSWORD_EMAIL]: "Send Temporary Password",

    [PROFILE.LIMBO_DESCRIPTION]: "Está iniciando sesión con una contraseña temporal, ingrese una nueva contraseña y úsela la próxima vez que inicie sesión.",
    [PROFILE.RESET_PASSWORD_DESCRIPTION]: "PLACEHOLDER",
    [PROFILE.NEW_PASSWORD]: "Nueva contraseña",
    [PROFILE.SAVE_NEW_PASSWORD_AND_SIGN_IN]: "Salvar y Iniciar",

    [PROFILE.TWO_FA_DESCRIPTION]: "La autenticación de dos factores está habilitada en su cuenta, Abra la aplicación de autenticación de dos factores en su dispositivo para ver su código de autenticación.",
    [PROFILE.AUTH_CODE]: "Código de autenticación",
    [PROFILE.AUTH_AND_SIGN_IN]: "Verificar y Iniciar",

    [PROFILE.CONNECT_SERVICE]: "Si este error persiste, póngase en contacto con el administrador del sistema para obtener más ayuda.",
    [PROFILE.UNKNOWN_ERROR]: "Error desconocido",
    [PROFILE.FAILED_TO_FETCH]: "No se puede conectar con el servidor de autenticación",
    [PROFILE.FAILED_TO_FETCH_DESCRIPTION]: "Esto suele deberse a que su entorno de red es deficiente, inténtelo de nuevo más tarde. Si este error persiste, póngase en contacto con el administrador del sistema para obtener más ayuda.",
    [PROFILE.INACTIVE_ACCOUNT]: "Cuenta desactivada",
    [PROFILE.INACTIVE_ACCOUNT_DESCRIPTION]: "Esta cuenta ha sido deshabilitada. Póngase en contacto con el administrador del sistema para restaurar esta cuenta.",
    [PROFILE.USERNAME_PASSWORD_NOT_MATCH]: "Nombre de usuario y contraseña no coinciden",
    [PROFILE.USERNAME_PASSWORD_NOT_MATCH_DESCRIPTION]: "Intente iniciar sesión nuevamente. Tenga en cuenta que si lo intenta muchas veces, su cuenta puede estar bloqueada. Si olvida su contraseña o este error persiste, comuníquese con el administrador de su sistema para obtener más ayuda.",
    [PROFILE.TWO_FA_NOT_MATCH]: "La verificación de dos factores falló",
    [PROFILE.TWO_FA_NOT_MATCH_DESCRIPTION]: "Esto puede deberse a un retraso en el sistema, inténtelo de nuevo más tarde. Si este error persiste, comuníquese con el administrador del sistema para obtener más ayuda.",
    [PROFILE.TOO_MANY_ATTEMPT]: "Cuenta esta bloqueada",
    [PROFILE.TOO_MANY_ATTEMPT_DESCRIPTION]: "Su cuenta se ha bloqueado debido a demasiados intentos, póngase en contacto con el administrador del sistema para obtener más ayuda.",
    [PROFILE.UNSAFE_PASSWORD]: "Contraseña débil",
    [PROFILE.UNSAFE_PASSWORD_DESCRIPTION]: "Una contraseña segura debe tener al menos ocho caracteres y contener al menos un carácter en inglés y un carácter numérico.",
    [PROFILE.WIRED_PASSWORD]: "Contraseña irrazonable",
    [PROFILE.WIRED_PASSWORD_DESCRIPTION]: "Es posible que haya usado caracteres especiales en su contraseña. Una contraseña razonable solo debe incluir caracteres en inglés, números y símbolos en el teclado.",
    [PROFILE.EMPTY_USERNAME]: "Nombre de usuario vacío",
    [PROFILE.EMPTY_USERNAME_DESCRIPTION]: "No ingresó un nombre de usuario. Un nombre de usuario válido debe tener al menos dos de longitud y no debe contener espacios ni símbolos especiales.",
    [PROFILE.EMPTY_PASSWORD]: "Contraseña vacía",
    [PROFILE.EMPTY_PASSWORD_DESCRIPTION]: "No ha introducido una contraseña. Una contraseña válida debe tener una longitud de al menos ocho y contener solo letras, números, símbolos y espacios en inglés.",
    [PROFILE.WRONG_TWO_FA_PATTERN]: "Formato de código de autenticación no válido",
    [PROFILE.WRONG_TWO_FA_PATTERN_DESCRIPTION]: "El código de autenticación que usó para la autenticación de dos factores no tiene el formato correcto. Un código de autenticación válido debe ser una cadena numérica de longitud seis.",
    [PROFILE.APPLICATION_GROUP_NOT_FULFILLED]: "Grupo insuficientes",
    [PROFILE.APPLICATION_GROUP_NOT_FULFILLED_DESCRIPTION]: "Es posible que necesite permisos suficientes para usar la aplicación en la que desea iniciar sesión, comuníquese con el administrador del sistema para obtener más ayuda.",
    [PROFILE.APPLICATION_HAS_NO_PORTAL_ACCESS]: "Sin acceso al portal",
    [PROFILE.APPLICATION_HAS_NO_PORTAL_ACCESS_DESCRIPTION]: "La aplicación no tiene acceso al portal. Por lo general, ese problema no se debe a usted. Póngase en contacto con el administrador del sistema para obtener más ayuda.",
    [PROFILE.INTERNAL_ERROR]: "Error interno",
    [PROFILE.INTERNAL_ERROR_DESCRIPTION]: "Se ha producido un error interno, generalmente no debido a usted. Si este error persiste, comuníquese con el administrador del sistema para obtener más ayuda.",
};

/* spell-checker: enable */
