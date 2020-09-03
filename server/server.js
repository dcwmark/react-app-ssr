import express from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';

const PORT = process.env.PORT || 5000;

const app = express();

app.use('^/$', (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    );
  });
});

/* Serve all static files from the build folder. */
/* From this folder [__dirname], one level up [../], the 'build' folder [build]. */
app.use(express.static(path.resolve(__dirname, '../', 'build')));

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
