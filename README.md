Source: [https://www.youtube.com/watch?v=NwyQONeqRXA](https://www.youtube.com/watch?v=NwyQONeqRXA)

Repo: [https://github.com/satansdeer/ssr-example](https://github.com/satansdeer/ssr-example)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


- `npx create-react-app react-app-ssr`
- `npm i express`

- Update src/Apps.js and what is needed to create a skeleton app.
- Create [root]/server/server.js
  - import express
  - create const app from express()
  
  ```js
  import express from 'express';

  const app = express();

  app.use('^/$', (req, res, next) => {

  });
  ```

- At this point , `build` the react application so that we will hava a pre-build `index.html`.
- `npm rub build`
- Then, `import` `fs` and `path` modules to read the [root]/build/index.html.

  ```js
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
  ```
