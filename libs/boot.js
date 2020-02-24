module.exports = app => {
  app.listen(app.get('port'), () => {
    console.log(`Node Task Online - port ${app.get('port')}`)
  })
}
