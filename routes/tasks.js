module.exports = app => {
  const Tasks = app.models.tasks
  console.log(Tasks)
  app.get('/tasks', (req, res) => {
    Tasks.findAll({}, tasks => {
      res.json({ tasks: tasks })
    })
  })
}
