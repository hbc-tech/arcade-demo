'use strict';

const { Arcade } = require('@hbc-tech/arcade-app');
const header = require('@hbc-tech/arcade-header');

const arcade = new Arcade();

header(arcade);

arcade.get('/', (ctx) => {
  ctx.arcade.render('Hello World');
});

arcade.get('/foo', (ctx) => {
  ctx.arcade.render('Foo World');
});

arcade.start();
