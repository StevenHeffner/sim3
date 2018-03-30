

module.exports = {
  addUser: (req, res) => {
    const db = req.app.get('db');
    const {username, password, profile_pic} = req.body
    db.add_user([username, password, profile_pic])
    .then(newUser => res.status(200).send(newUser))
  },
  getUser: (req, res) => {
    const db = req.app.get('db');
    const {username, password} = req.body
    db.get_user([username, password])
    .then(user => res.status(200).send(user)) 




  }


}