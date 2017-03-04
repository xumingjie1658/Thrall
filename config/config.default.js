exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};
// 切记：要改为自己的 key 值
exports.keys = 'thrall';

exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
};

exports.middleware = [
  'robot'
];
// middleware config
exports.robot = {
  ua: [
    /curl/i,
    /Baiduspider/i,
  ],
};