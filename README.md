# Twitter clone - social network

Демо версия приложения. Многие функции основного приложения (порционный прогруз постов, страницы других пользователей и т.п.) опущены ввиду отсутствия бэкенд клиента.

### [Deploy(demo)](https://twitter-clone-frontend-demo.vercel.app/) ###

**Фреймворк** В качестве основы приложения используется фреймворк *NextJS*, где каждая страница `(src/pages)` ассоциируется с маршрутом (роутом) по названию. Навигация осуществляется при помощи метода push из хука useRouter. Файлы (src/pages) является оберткой состоящей из `src/views` где собрана вся страница и плагина *SEO(next-seo)*, который предоставляет данные страницы для поисковых роботов (конфиг `next-seo.config.ts`);

**Typescript**;

**Стейтменеджер**. Для выполнения асинхронных запросов используется *tanStack (react-query)*. Внутри проекта в папке query располагаются кастомные хуки которые в основном используют useQuery и useMutation. В параметры хуков входят queryKey(для идентификации и работы с кэшем), тело запроса(с использованием *AXIOS*) и параметры, например действия после успешного запроса(onSuccess) или инвалидация при обновлении данных(invalidateQueries) Сами тела запросов находятся в папке `src/services`;

**Запросы на сервер** осуществляются при помощи HTTP клиента *Axios*, но обработка идет при помощи *react-query*. Все запросы идут через папку `src/api`, в ней идет добавление текущего JWT токена в localStorage пользователя, в хедер при обращении к серверу, а также его чтение. Имеется асинхронный метод check `(src/api/authCheck)` который возвращает boolean значение в зависимости от актуальности JWT токена(плагин `jwt-decode`);

**Библиотека компонентов**: *Material UI*. Базовая стилизация реализована самой библиотекой. Дополнительная кастомизация осуществляется при помощи встроенного пропса sx, а также при помощи ссылок-рефов(ref) из *React*. Список цветов(палетка), основных наборов(h1-h6 и т.д.) и кастомных наборов находятся в папке `src/theme`. Другие дополнительные наборы плагина(типа SvgIcon) не используются;

`src/styles` папка содержит базовые стили для всего проекта;

`UI` папка содержит рукописную кнопку закрыть(крестик) и инпут с дата-маской (плагин *react-input-mask*);

`forms` папка содержит компоненты форм(регистрация, авторизация и т.д.). Используется плагин react-hook-form где при помощи хука useForm осуществляется сбор данных методом register, передача методом handleSubmit и очистка формы методом reset. Компоненты разделены на логическую часть и часть верстки(папка `src/templates`);

`src/data` папка содержит конфиг для меню(с url, title и ссылки на svg);

`src/components` папка содержит главные компоненты страниц(типа Search, Inner)

`src/common` папка содержит все переиспользуемые компоненты;

`src/assets` папка содержит файлы проекта(svg, img);

`src/temp` папка содержит временные файлы проекта содержит тестовые посты; картинки и описания проекта;

Файл **Dockerfile** содержит настройки для сборки в *Docker*.


## Getting Started

First run the command to install all the project dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Next, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Data & Breakpoints

useGetAuthorizedUserDataQuery - дата авторизованного пользователя, не принимает пропсы. Возвращает: profileId, username, email, followers, followees, joinDate, bio, location, website, birthDate, avatarUrl, bannerUrl

useGetProfilePathIdByEmailQuery - pathId любого пользователя, принимает email. Возвращает pathId
## Demo changes:

query, services, src\components\avatar\CustomAvatar.tsx, src\components\banner\CustomBanner.tsx

