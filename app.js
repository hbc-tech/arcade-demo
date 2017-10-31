'use strict';

const { Arcade } = require('@hbc-tech/arcade-app');
const header = require('@hbc-tech/arcade-header');
const footer = require('@hbc-tech/arcade-footer');

const arcade = new Arcade();

header(arcade);
footer(arcade);

arcade.app.use(async (ctx, next) => {
  ctx.arcade.head.links.push({
    rel: 'stylesheet',
    href: '/assets/css/framework_commons_saks.css'
  });
  await next();
});

arcade.get('/', (ctx) => {
  ctx.arcade.render('Hello World');
});

arcade.get('/foo', (ctx) => {
  ctx.arcade.render('Foo World');
});

arcade.start();
