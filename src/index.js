const app = require('express')()
const consign = require('consign')
const db = require('./database/db')

app.db = db

consign()
  .include('./src/config/passport.js')
  .then('./src/config/middlewares.js')
  .then('./src/controller/validation.js')
  .then('./src/controller')
  //  .then('./src/schedule')
  .then('./src/config/routes.js')
  .into(app)

app.listen(4000, () => {
  console.log('Backend executando...')
}) 