«СКАН» - сервис поиска публикаций о компаниях по ИНН. Сервис предназначен для менеджеров по PR, коммуникациям и специалистов по рискам и безопасности. Решает широкий спектр задач, связанных с медиааналитикой.

Компания «СКАН» помогает бизнесу формировать репутацию в интернете. Она предоставляет возможности не только мониторить СМИ и коммуницировать с журналистами, но и проверять своих контрагентов.

Что бы запустить проект нужно:
    1.Выполнить команду npm install (должны установиться все зависимости)
    2.Выполнить npm start (проект должен запуститься без ошибок)

Для авторизации можно использовать пользователя
    логин: sf_student1 | пароль - 4i2385j

Для теста используйте следующие ИНН: 7706074737 или 7710416415

Для проверки http запросов используем postman 
для проверки авторизации: POST запросе  https://gateway.scan-interfax.ru/api/v1/account/login  
        В body - key: {login  password}  value: {соответсвующие параметры}, далее получаем токен авторизации!

для проверки токена авторизации: в GET запросе https://gateway.scan-interfax.ru/api/v1/account/info выставляем авторизацию по токену Bearer! и получаем ответ! 
                   
                   
