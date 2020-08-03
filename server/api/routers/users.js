const userRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User, Session } = require('../../db/Models/index');

// // //  this will need to bring in the models
// // //  API routes will be in the form of: "userRouter.get()"

userRouter.get('/', async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

userRouter.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  if (!user) {
    res.sendStatus(401);
  } else {
    bcrypt.compare(password, user.password, async (err, result) => {
      if (err) {
        throw err;
      } else if (result === true) {
        const session = await Session.findOne({ where: { id: req.session_id } });
        await Session.update({ UserId: user.id }, { where: { id: session.id } });
        await res.status(200).send(user);
      } else {
        res.sendStatus(401);
      }
    });
  }
});

userRouter.get('/logincheck', async (req, res) => {
  if (req.user) {
    res.send({ user: req.user, loggedIn: true });
  } else {
    res.send({ user: {}, loggedIn: false });
  }
});

userRouter.delete('/logout', async (req, res) => {
  await Session.destroy({ where: { id: req.session_id } });

  const session = await Session.create();

  const oneWeek = 1000 * 60 * 60 * 24 * 7;

  res.cookie('session_id', session.id, {
    path: '/',
    expires: new Date(Date.now() + oneWeek),
  });

  req.session_id = session.id;

  res.sendStatus(204);
});

module.exports = userRouter;
