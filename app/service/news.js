'use strict';

const cheerio = require('cheerio');
module.exports = app => {
  class NewsService extends app.Service {
    * list() {
      const url = 'http://www.piaohua.com/html/dianying.html';
      const { data: html } = yield this.ctx.curl(url, { dataType: 'text' });
      const $ = cheerio.load(html);
      const movieList = $('a[class=img]').map(function(index, item) {
        const itemSrc = $(item).find('img').attr('src');
        const itemUrl = url + $(item).attr('href');
        const title = $(item).next().text();
        return {
          title,
          itemSrc,
          itemUrl,
        };
      });
      return movieList;
      // read config
    //   const { serverUrl, pageSize } = this.app.config.news;

    //   // use build-in http client to GET hacker-news api
    //   const { data: idList } = yield this.ctx.curl(`${serverUrl}/topstories.json`, {
    //     data: {
    //       orderBy: '"$key"',
    //       startAt: `"${pageSize * (page - 1)}"`,
    //       endAt: `"${pageSize * page - 1}"`,
    //     },
    //     dataType: 'json',
    //   });
    //   // parallel GET detail, see `yield {}` from co
    //   const newsList = yield Object.keys(idList).map(key => {
    //     const url = `${serverUrl}/item/${idList[key]}.json`;
    //     return this.ctx.curl(url, { dataType: 'json' });
    //   });
    //   return newsList.map(res => res.data);
    }
  }
  return NewsService;
};
