Source: [https://www.youtube.com/watch?v=NwyQONeqRXA](https://www.youtube.com/watch?v=NwyQONeqRXA)

Repo: [https://github.com/satansdeer/ssr-example](https://github.com/satansdeer/ssr-example)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


- `npx create-react-app react-app-ssr`
- `npm i express`
- `npm i @babel/preset-env @babel/preset-react @babel/register ignore-styles`

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
  
- `import` `react` and `react-dom/server` so to be able to launch <App /> as string.

  ```js
     return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    );
  ```

- Update src/index.js replace `ReactDOM.render()` to `ReactDOM.hydrate`.

  ```js
    ReactDOM.hydrate(     <=== from ReactDOM.render()
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  ```

