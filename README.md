# Unit тестирование.
> Описание как настроить конфигурацию для react-testing-library

### Используемые библиотеки:

-   [Jest](https://jestjs.io/en/)
-   [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
-   [@testing-library/user-event](https://github.com/testing-library/user-event)
-   [@testing-library/jest-dom](https://github.com/testing-library/jest-dom)

### Использование пользовательских событий:

-   [user-event](https://github.com/testing-library/user-event)

### Использование событий dom дерева:

-   [jest-dom](https://github.com/testing-library/jest-dom)

### Проверка выполняемого теста:

-   [expect](https://jestjs.io/docs/ru/expect)

### Использование Mock Functions:

-   [Mock Functions](https://jestjs.io/docs/ru/mock-function-api)

#### Файл конфигурации для тестов лежит в _/jest.config.js_

> Конфиги к файлу искать [тут](https://jestjs.io/docs/en/configuration)

#### Файл с пустым модулем(нужен для работы импортных файлов) лежит в _/src/js/emptyModuleJest.ts_

#### Файл с установленными конфигами для testing-library лежит в _/src/js/setupJestTests.ts_

> Конфиги к файлу искать [тут](https://testing-library.com/docs/dom-testing-library/api-configuration/)

#### Файл с оберткой, для работы редакс лежит в _/src/js/test-utils.tsx_

### Возможные проблемы и их решение:

-   Ошибка импорта less(и других) файлов в компоненте.
    > в файле конфига редактировать moduleNameMapper
    >
    > > добавить расширения, и ссылаться на пустой модуль: { "\\.(css|less)\$": "<rootDir>src/js/emptyModuleJest.ts" }

### Как прокидывать initialState в тестовых файлах можно почитать в [Redux](https://redux.js.org/recipes/writing-tests#connected-components)

> Обертка провайдера уже настроена.
>
> Пример можно найти в файле _src/js/Components/Common/Search/SearchLine/SearchLine.test.tsx_

### !!! ф-ю render импортить из "test-utils"; (import { render } from "test-utils";)
