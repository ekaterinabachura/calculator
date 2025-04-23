# Calculator

## Task  
Техническое задание проекта доступно [по этой ссылке](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0)

---

## How to run the app  
### 1. Установите зависимости:  
```bash 
npm install
npm run build
npm run deploy
```

## Structure of the project
calculator/
├── dist/                 # Собранные файлы для продакшена
│   ├── index.html        # Оптимизированный HTML
│   └── bundle.[hash].js  # Минифицированный JS-код
│
├── src/                  # Исходные файлы
│   ├── index.html        # Основной HTML-шаблон со стилями приложения
│   └── script.js         # Логика калькулятора
│
├── .eslintrc.json        # Конфигурация ESLint и Prettier
├── webpack.config.js     # Настройки Webpack
└── package.json          # Зависимости и скрипты
