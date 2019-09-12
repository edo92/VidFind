  const express = require( 'express' );
  const path = require( 'path' );
  const app = express(  );
  const db = require( './models' );

  const mongooseConnection = require( './server/mongo' );
  const appUse = require( './server/appUse' );

  const server = require( 'http' ).createServer( app );

  const PORT = process.env.PORT || 3001;
  if ( process.env.NODE_ENV === 'production' ) {
    app.use( express.static( 'client/build' ) );
  };

  appUse( app ); // app.user(  )

  mongooseConnection(  ); // Mongoose

  require('./routes' )( app, db ); //Route files

  app.get( '*', ( req, res ) =>{
    res.sendFile( path.join( __dirname, './client/build/index.html' ) );
  });
  
  server.listen( PORT, (  ) =>{
    console.log( `🌎 ==> Server now on port ${PORT}!` );
  });
