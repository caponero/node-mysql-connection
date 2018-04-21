const app = require('./config/server');

require ('./app/routes/news')(app);

app.listen(app.get('port'), () => {
    console.log('Servidor en puerto ', app.get('port'));
})