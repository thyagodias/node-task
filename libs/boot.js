module.exports = app => {
  app.db.sync().done(() => {
    app.listen(app.get('port'), () => {
      console.log(`Node Task Online - port ${app.get('port')}`)
    })
  })
}
