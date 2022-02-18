const newsRouter = require('./news')
const siteRouter = require('./site');
const authorRouter = require('./author');

function route(app) {

    app.use('/news', newsRouter);
    app.use('/author', authorRouter);
    app.use('/', siteRouter);
   
}

module.exports = route;