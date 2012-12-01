
  coffeeScript = require("coffee-script");
  var port,
      appController = require('./app/controller'),
      express = require('express'),
      colors  = require('colors'),
      hostname  = require('os').hostname(),
      path      = require('path'),
      config = require('./config/config').config,
      app = express();
      
  start();
  
  function initEnvironment() {
    homeFolder = __dirname;
    console.log('   info  -'.cyan, 'Application root'.yellow, homeFolder);

    app.configure(function() {
      // express config
      app.set('homefolder', homeFolder);
      app.set('view engine', 'jade');
      app.set('views', homeFolder + '/views');
      app.set('views');
      app.set('view options', { layout: null });


      // static resources
      app.use('/js', express.static(homeFolder + '/public/js'));
      app.use('/css', express.static(homeFolder + '/public/css'));
      app.use('/img', express.static(homeFolder + '/public/img'));
      app.use('/font', express.static(homeFolder + '/public/font'));
      app.use(require('less-middleware')({ src: __dirname + '/public' }));
      app.use(express.cookieParser());
      app.use(express.bodyParser());
      app.use(express.session({ secret: 'gfjghlsfjghlsfjkhg jfhgiuwrgöagka dgöajölfjgöljg' }));
      app.use(app.router);
    });
    // port
    port = parseInt(process.argv[2], 10) || config.server.port;
  }

  /**
    * Start server
    */
  function start() {
    initEnvironment()
    appController.setup(app);
    app.listen(port);
    
    console.log('Application started on'.yellow, (hostname + ':' + port).cyan);
  }

