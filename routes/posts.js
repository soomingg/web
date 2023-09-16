var express = require('express');
var router = express.Router();

/* 게시판 page. */
router.get('/', function(req, res, next) {
  res.render('posts', { title: '익스프레스', name:'홍길동' });      //posts뒤에 ejs 생략
});

module.exports = router;