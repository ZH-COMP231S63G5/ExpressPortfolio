var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Zhixiang Hu Protfolio Site',
                      page_name: "index"});
});


/* GET aboutme page. */
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'Zhixiang Hu Protfolio Site',
                        page_name: "aboutme"});
});


/* GET servicesme page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Zhixiang Hu Protfolio Site',
                        page_name: "services"});
});

/* GET contactme page. */
router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Zhixiang Hu Protfolio Site',
                        page_name: "contactme"});
});


/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Zhixiang Hu Protfolio Site',
                        page_name: "projects"});
});


/* GET project1 page. */
router.get('/projects/project1', function(req, res, next) {
  res.render('projects/project1', { title: 'Zhixiang Hu Protfolio Site',
                        page_name: "project1"});
});

/* GET project2 page. */
router.get('/projects/project2', function(req, res, next) {
  res.render('projects/project2', { title: 'Zhixiang Hu Protfolio Site',
                        page_name: "project2"});
});

/* GET project3 page. */
router.get('/projects/project3', function(req, res, next) {
  res.render('projects/project3', { title: 'Zhixiang Hu Protfolio Site',
                        page_name: "project3"});
});


/* GET term page. */
router.get('/term', function(req, res, next) {
  res.render('term', { title: 'Zhixiang Hu Protfolio Site',
                        page_name: "term"});
});


/* GET privacy page. */
router.get('/privacy', function(req, res, next) {
  res.render('privacy', { title: 'Zhixiang Hu Protfolio Site',
                        page_name: "privacy"});
});


/* GET sitemap page. */
router.get('/sitemap', function(req, res, next) {
  res.render('sitemap', { title: 'Zhixiang Hu Protfolio Site',
                        page_name: "sitemap"});
});
module.exports = router;
