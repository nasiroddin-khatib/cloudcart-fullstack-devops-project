const SavedItem =
  require("../models/SavedItem");

exports.saveItem =
  async (req, res) => {

    try {

      const {
        username,
        product
      } = req.body;

      const savedItem =
        await SavedItem.create({

          username,
          product

        });

      res.status(201).json({

        success: true,

        message:
          `${product} saved successfully`,

        savedItem

      });

    } catch(error) {

      res.status(500).json({
        message: error.message
      });
    }

};
