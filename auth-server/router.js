module.exports = function (app) {
  app.get('/', function (req, res, next) {
    res.send(['person', 'woman', 'man', 'camera', 'tv']);
  });
};
