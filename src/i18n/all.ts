/**
 * @author WMXPY
 * @namespace I18N
 * @description All
 */

import { PROFILE } from "./profile";

export const ENGLISH_UNITED_STATES: Record<PROFILE, string> = {

    [PROFILE.NEED_HELP]: "Need help signing in?",
    [PROFILE.PASSWORD]: "Password",
    [PROFILE.PRIVACY_POLICY]: "Privacy Policy",
    [PROFILE.SIGN_IN]: "SignIn",
    [PROFILE.SIGN_IN_TO]: "Sign in to",
    [PROFILE.USERNAME]: "Username",

    [PROFILE.LIMBO_DESCRIPTION]: "You are signing in with a temporary password, please enter a new password and use it the next time you log in.",
    [PROFILE.NEW_PASSWORD]: "New password",
    [PROFILE.SAVE_NEW_PASSWORD_AND_SIGN_IN]: "Save and SignIn",

    [PROFILE.TWO_FA_DESCRIPTION]: "Two-factor authentication is enabled on your account, Open the two-factor authentication app on your device to view your authentication code.",
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
    [PROFILE.TWO_FA_NOT_MATCH]: "Two-factor verification failed",
    [PROFILE.TWO_FA_NOT_MATCH_DESCRIPTION]: "This may be due to a system delay, please try again later. If this error persists, please contact your system administrator for more help.",
    [PROFILE.TOO_MANY_ATTEMPT]: "Account is locked",
    [PROFILE.TOO_MANY_ATTEMPT_DESCRIPTION]: "Your account has been locked due to too many attempts, please contact your system administrator for more help.",
    [PROFILE.INTERNAL_ERROR]: "Internal Error",
    [PROFILE.INTERNAL_ERROR_DESCRIPTION]: "An internal error has occurred, usually not because of you. If this error persists, please contact your system administrator for more help.",
};

export const RUSSIAN_RUSSIA: Record<PROFILE, string> = {

    [PROFILE.NEED_HELP]: "Логин нуждается в помощи?",
    [PROFILE.PASSWORD]: "Парола",
    [PROFILE.PRIVACY_POLICY]: "Политика конфиденциальности",
    [PROFILE.SIGN_IN]: "Войти",
    [PROFILE.SIGN_IN_TO]: "Войти в",
    [PROFILE.USERNAME]: "Потребителско име",

    [PROFILE.LIMBO_DESCRIPTION]: "Вы входите с временным паролем, введите новый пароль и используйте его при следующем входе.",
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
    [PROFILE.INTERNAL_ERROR]: "Внутренняя ошибка",
    [PROFILE.INTERNAL_ERROR_DESCRIPTION]: "Произошла внутренняя ошибка, обычно не по вашей вине. Если эта ошибка не устранена, обратитесь за помощью к системному администратору.",
};

export const FRENCH_FRANCE: Record<PROFILE, string> = {

    [PROFILE.NEED_HELP]: "Besoin d'aide pour vous connecter?",
    [PROFILE.PASSWORD]: "Mot de passe",
    [PROFILE.PRIVACY_POLICY]: "Politique de confidentialité",
    [PROFILE.SIGN_IN]: "Se connecter",
    [PROFILE.SIGN_IN_TO]: "Se connecter à",
    [PROFILE.USERNAME]: "Identifiant",

    [PROFILE.LIMBO_DESCRIPTION]: "Vous vous connectez avec un mot de passe temporaire, veuillez entrer un nouveau mot de passe et l'utiliser lors de votre prochaine connexion.",
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
    [PROFILE.INTERNAL_ERROR]: "Erreur interne",
    [PROFILE.INTERNAL_ERROR_DESCRIPTION]: "Une erreur interne s'est produite, généralement pas à cause de vous. Si cette erreur persiste, contactez votre administrateur système pour obtenir de l'aide.",
};

export const JAPANESE_JAPAN: Record<PROFILE, string> = {

    [PROFILE.NEED_HELP]: "ログインにはヘルプが必要？",
    [PROFILE.PASSWORD]: "パスワード",
    [PROFILE.PRIVACY_POLICY]: "プライバシーポリシー",
    [PROFILE.SIGN_IN]: "ログイン",
    [PROFILE.SIGN_IN_TO]: "にログイン",
    [PROFILE.USERNAME]: "ユーザー名",

    [PROFILE.LIMBO_DESCRIPTION]: "あなたは一時的なパスワードでログインしています。新しいパスワードを入力して、次回のログイン時にそれを使用してください。",
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
    [PROFILE.TWO_FA_NOT_MATCH]: "二要素認証に失敗しました",
    [PROFILE.TWO_FA_NOT_MATCH_DESCRIPTION]: "このエラーが解決しない場合は、システム管理者に連絡してください",
    [PROFILE.TOO_MANY_ATTEMPT]: "アカウントはロックされています",
    [PROFILE.TOO_MANY_ATTEMPT_DESCRIPTION]: "試行回数が多すぎたため、アカウントはロックされました。システム管理者に連絡してください。",
    [PROFILE.INTERNAL_ERROR]: "内部エラー",
    [PROFILE.INTERNAL_ERROR_DESCRIPTION]: "このエラーが解決しない場合には、システム管理者に連絡してください。",
};

export const KOREAN_KOREA: Record<PROFILE, string> = {

    [PROFILE.NEED_HELP]: "로그인에 문제가 발생했습니다？",
    [PROFILE.PASSWORD]: "비밀번호",
    [PROFILE.PRIVACY_POLICY]: "개인 정보 보호 정책",
    [PROFILE.SIGN_IN]: "로그인",
    [PROFILE.SIGN_IN_TO]: "로그인",
    [PROFILE.USERNAME]: "사용자 아이디",

    [PROFILE.LIMBO_DESCRIPTION]: "임시 비밀번호로 로그인하는 중입니다. 다음에 로그인 할 때 새 비밀번호를 입력하여 사용하십시오.",
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
    [PROFILE.INTERNAL_ERROR]: "내부 오류",
    [PROFILE.INTERNAL_ERROR_DESCRIPTION]: "일반적으로 사용자가 아닌 내부 오류가 발생했습니다.이 오류가 계속 발생하면 시스템 관리자에게 도움을 요청하십시오.",
};

export const CHINESE_SIMPLIFIED: Record<PROFILE, string> = {

    [PROFILE.NEED_HELP]: "登录需要帮助？",
    [PROFILE.PASSWORD]: "密码",
    [PROFILE.PRIVACY_POLICY]: "隐私政策",
    [PROFILE.SIGN_IN]: "登录",
    [PROFILE.SIGN_IN_TO]: "登录至",
    [PROFILE.USERNAME]: "用户名",

    [PROFILE.LIMBO_DESCRIPTION]: "您正在使用临时密码登录，请输入新密码，并在下次登录时使用它。",
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
    [PROFILE.INTERNAL_ERROR]: "内部错误",
    [PROFILE.INTERNAL_ERROR_DESCRIPTION]: "发生了内部错误，这通常不是因为您，如果这个错误持续出现，请联系系统管理员来获得更多帮助。",
};

export const CHINESE_TRADITIONAL: Record<PROFILE, string> = {

    [PROFILE.NEED_HELP]: "登入遇到問題？",
    [PROFILE.PASSWORD]: "密鑰",
    [PROFILE.PRIVACY_POLICY]: "隱私政策",
    [PROFILE.SIGN_IN]: "登入",
    [PROFILE.SIGN_IN_TO]: "登入到",
    [PROFILE.USERNAME]: "使用者名稱",

    [PROFILE.LIMBO_DESCRIPTION]: "您正在使用臨時密鑰登入，請輸入新密鑰，並在下次登入時使用它。",
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
    [PROFILE.USERNAME_PASSWORD_NOT_MATCH]: "用戶名和密鑰不匹配",
    [PROFILE.USERNAME_PASSWORD_NOT_MATCH_DESCRIPTION]: "請嘗試重新登錄，注意，如果嘗試次數過多您的賬戶可能會被鎖定，如果您忘記了密碼或者這個錯誤持續出現，請聯繫系統管理員來獲得更多幫助。",
    [PROFILE.TWO_FA_NOT_MATCH]: "雙因素驗證失敗",
    [PROFILE.TWO_FA_NOT_MATCH_DESCRIPTION]: "這可能是由於系統延遲，請稍後重試，如果這個錯誤持續出現，請聯繫系統管理員來獲得更多幫助。",
    [PROFILE.TOO_MANY_ATTEMPT]: "賬戶被鎖定",
    [PROFILE.TOO_MANY_ATTEMPT_DESCRIPTION]: "您的賬戶因為嘗試次數過多而被鎖定，請聯繫系統管理員來獲得更多幫助。",
    [PROFILE.INTERNAL_ERROR]: "內部錯誤",
    [PROFILE.INTERNAL_ERROR_DESCRIPTION]: "發生了內部錯誤，這通常不是因為您，如果這個錯誤持續出現，請聯繫系統管理員來獲得更多幫助。",
};

export const SPANISH_MEXICO: Record<PROFILE, string> = {

    [PROFILE.NEED_HELP]: "¿Necesitas ayuda para iniciar sesión?",
    [PROFILE.PASSWORD]: "Contraseña",
    [PROFILE.PRIVACY_POLICY]: "Política de privacidad",
    [PROFILE.SIGN_IN]: "Iniciar sesión",
    [PROFILE.SIGN_IN_TO]: "Iniciar sesión en",
    [PROFILE.USERNAME]: "Usuario",

    [PROFILE.LIMBO_DESCRIPTION]: "Está iniciando sesión con una contraseña temporal, ingrese una nueva contraseña y úsela la próxima vez que inicie sesión.",
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
    [PROFILE.INTERNAL_ERROR]: "Error interno",
    [PROFILE.INTERNAL_ERROR_DESCRIPTION]: "Se ha producido un error interno, generalmente no debido a usted. Si este error persiste, comuníquese con el administrador del sistema para obtener más ayuda.",
};
