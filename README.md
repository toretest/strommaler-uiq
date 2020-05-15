# strommalerApp (strommaler-ui)

Admin current use and payments in your house

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
quasar build
```

# Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

# env: Heroku
When checking into github, automatic build and deploy to stage.
Heroku support github out of the box!

## Nice commands https://help.heroku.com/UMAUQ4UF/why-am-i-seeing-application-error
```
npm audit // SIkkerhet på pakker https://blog.npmjs.org/post/173719309445/npm-audit-identify-and-fix-insecure
heroku create (first time)
heroku restart
heroku logs --tail --app <not needed when current>
```

https://dashboard.heroku.com/apps/desolate-temple-13672/activity/builds/faf99ec4-6e87-4297-9422-4d3d1e91e8bc

## Config notes using quasar

1. Seems that we need to install quasar locally (added as an dev dependency in package.json) , to get it available under build process
```
npm i @quasar/cli -D
   or
npm install @quasar/cli --save-dev

```
This give use new lines in package.json:
```
 "dependencies": {
    "@quasar/cli": "^1.0.7",


```

2. heroku-run-build-script, see **build**, **start** and **heroku-postbuild**
```
"scripts": {
    "lint": "eslint --ext .js,.ts,.vue --ignore-path .gitignore ./",
    "test": "echo \"No test specified\" && exit 0",
    "build": "quasar build",
    "start": "node server.js",
    "heroku-postbuild": "npm install && quasar build"
  },
```
and **heroku-run-build-script** set to _**true**_

```
.
.
  ],
  "resolutions": {
    "@babel/parser": "7.7.5"
  },
  "heroku-run-build-script": true
}
```

# Tips
- https://quasar.dev/
- Intelli Idea https://forum.quasar-framework.org/topic/1934/quasar-dev-to-intellij-run-debug-configuration
- Video https://www.youtube.com/watch?v=C-v262YhYvw
- ports settings https://stackoverflow.com/questions/18864677/what-is-process-env-port-in-node-js
- move dependencies to dev depenencies and versa  https://stackoverflow.com/questions/46903002/move-a-module-from-devdependencies-to-dependencies-in-npm-package-json

# AWS Amplify Console
https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
https://eu-central-1.console.aws.amazon.com/amplify/home?region=eu-central-1&code=287db6f5da6e37b3b42d#/
https://eu-central-1.console.aws.amazon.com/amplify/home?region=eu-central-1&code=287db6f5da6e37b3b42d#/d2560lcmcqv27r/settings/rewrites

https://github.com/jonashackt/spring-boot-vuejs

https://medium.com/netscape/deploying-a-vue-js-2-x-app-to-heroku-in-5-steps-tutorial-a69845ace489
