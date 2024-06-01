{RU}
«СКАН» - сервис поиска публикаций о компаниях по ИНН. Сервис предназначен для менеджеров по PR, коммуникациям и специалистов по рискам и безопасности. Решает широкий спектр задач, связанных с медиааналитикой.<br/>

Компания «СКАН» помогает бизнесу формировать репутацию в интернете. Она предоставляет возможности не только мониторить СМИ и коммуницировать с журналистами, но и проверять своих контрагентов.<br/>

Что бы запустить проект нужно:<br/>
    1.Выполнить команду npm install (должны установиться все зависимости)<br/>
    2.Выполнить npm start (проект должен запуститься без ошибок)<br/>

Для авторизации можно использовать пользователя<br/>
    логин: <code>**sf_student1**</code> | пароль - <code>**4i2385j**</code><br/>

Для теста используйте следующие ИНН:<code>**7706074737**</code> или <code>**7710416415**</code><br/>

Для проверки http запросов используем postman  <br/>
для проверки авторизации: POST запросе  `https://gateway.scan-interfax.ru/api/v1/account/login`<br/>
        В body - key: {login  password}  value: {соответсвующие параметры}, далее получаем токен авторизации!<br/>

для проверки токена авторизации: в GET запросе `https://gateway.scan-interfax.ru/api/v1/account/info` выставляем авторизацию по токену Bearer! и получаем ответ!<br/>

{EN}
"SCAN" is a service for searching publications about companies by TIN (Taxpayer Identification Number). The service is designed for PR managers, communications specialists, and risk and security professionals. It addresses a wide range of tasks related to media analytics.

The "SCAN" company helps businesses shape their online reputation. It provides opportunities not only to monitor the media and communicate with journalists but also to check counterparties.<br/>

To launch the project, follow these steps:<br/>

Execute the command npm install (all dependencies should be installed).<br/>
Execute npm start (the project should start without errors).<br/>
For authorization, you can use the following login credentials: username - <code>**sf_student1**</code> | <code>password - **4i2385j**</code>.<br/>

For testing purposes, use the following TIN (Taxpayer Identification Numbers): <code>**7706074737**</code> or <code>**7710416415***</code>.<br/>
                   
