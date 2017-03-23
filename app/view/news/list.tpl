<!DOCTYPE html>
<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <h1>{{title}}</h1>
    <div class="news-view view">
      {% for item in list %}
        <div class="item">
          <img src="{{ item.itemSrc }}">
          <p><a href="{{ item.itemUrl }}">{{ item.title }}</a></p>
        </div>
      {% endfor %}
    </div>
  </body>
</html>