![CI/CD](https://github.com/ckomop0x/CurrencyExchangeApplication/workflows/CI/CD-Prod/badge.svg)
[![codecov](https://codecov.io/gh/ckomop0x/CurrencyExchangeApplication/branch/master/graph/badge.svg)](https://codecov.io/gh/ckomop0x/CurrencyExchangeApplication)
[![Codecov](https://img.shields.io/codecov/c/github/ckomop0x/CurrencyExchangeApplication)](https://codecov.io/gh/ckomop0x/CurrencyExchangeApplication)

## Currency Exchange App

[Online Application](https://ckomop0x.github.io/CurrencyExchangeApplication)

The application for exchange currencies online using API of [https://openexchangerates.org](https://openexchangerates.org)

API data for free accounts refreshes every hour, so you can use refresh rate 1 time per hour. Now its refreshes every 30 seconds (for the task purpose).

P.S. You can customise your own key and delay in config.js.

## Folder Structure

Folder

```
revolutApp/
  build/          - folder for delpoy (I use it for github-pages)
  .eslintrc       – eslint rules (JavaScript codestyle)
  .gitignore      – what files will be hidden for git
  README.md       - project description
  package.json    - project dependecies
  public/         - public files
    index.html    – main page tempate
    favicon.ico   – site favicon
    manifest.json – webapp rules

	src/            - application source files
    components/   - application components
    helpers/      - funtional helpers
    App.css       - applicaiton styles
    App.js        - main application component
    App.test.js   - application tests
    config.js     - application variables
    index.css     - template styles
    index.js      - root application JS file
```

**Helpful links**

[API usage statistic](https://openexchangerates.org/account/usage)
