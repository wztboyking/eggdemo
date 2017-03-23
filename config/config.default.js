'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1490162058309_9723';
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
  config.news = {
    pageSize: 10,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };
  return config;
};
