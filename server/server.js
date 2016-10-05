/* eslint no-console: 0 */
const path                  = require('path');
const express               = require('express');
const webpack               = require('webpack');
const webpackMiddleware     = require('webpack-dev-middleware');
const webpackHotMiddleware  = require('webpack-hot-middleware');
const config                = require('../webpack.config.js');
const db                    = require('./models');
const routes                = require('./routes/index');
const bodyParser            = require('body-parser');
const session               = require('cookie-session');
const passport              = require('passport');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

// Enable body parser
app.use(bodyParser.urlencoded({
    extended: false
}));

// Enable sessions
app.use(session({
    name: 'session',
    signed: false,
    cookie: {
        maxAge: 360000 * 14 * 24
    }
}));


// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Routes for rest api
app.use('/', routes);

// Development and production config for react SPA
if (isDeveloping) {
    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
        contentBase: 'src',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    app.get('/*', function response(req, res) {
        res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '../client/dist/index.html')));
        res.end();
    });
} else {
    app.use(express.static(__dirname + '/dist'));
    app.get('/*', function response(req, res) {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
}

// Sync postgres db models and then start server
db.sequelize.sync().then(() => {
    app.listen(port, '0.0.0.0', (err) => {
        if (err) {
            console.log(`There was an error:\n${err}`);
        }
        console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
    });
});
