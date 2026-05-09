const Order =
  require("../models/Order");

exports.placeOrder =
  async (req, res) => {

    try {

      const {
        username,
        product,
        location
      } = req.body;

      const deliveryDays =
        Math.floor(
          Math.random() * 4
        ) + 3;

      const order =
        await Order.create({

          username,
          product,
          location,
          deliveryDays

        });

      res.status(201).json({

        success: true,

        message:
          `Your order for ${product} will arrive in ${deliveryDays} days`,

        order

      });

    } catch(error) {

      res.status(500).json({
        message: error.message
      });
    }

};
