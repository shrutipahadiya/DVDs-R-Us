const cartRouter = require('express').Router();
const { Cart, Order } = require('../../db/Models/index');

cartRouter.post('/addtocart', async (req, res) => {
  const { movieId, quantity } = req.body;
  console.log('session from addtocart route', req.session_id);
  const cart = await Cart.findOne({
    where: {
      sessionId: req.session_id,
    },
  });
  const createdOrder = await Order.create(
    {
      movieId,
      quantity,
      CartId: cart.id,
    },
  );
  res.send(createdOrder);
});

module.exports = cartRouter;
