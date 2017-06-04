import Express from 'express';
import GraphHTTP from 'express-graphql';
import Schema from './schema';

// Config
const APP_PORT = 3060;

// Start
const app = Express();

app.get('/',function(req, res){
	res.send(`<h1>Express is working!</h1> <p>Go to <a href='http://localhost:${APP_PORT}/graphql'>graphQL</a></p>`);
});

// GraphQL
app.use('/graphql', GraphHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true
}));

app.listen(APP_PORT, ()=> {
  console.log(`App listening on port http://localhost:${APP_PORT}`);
});