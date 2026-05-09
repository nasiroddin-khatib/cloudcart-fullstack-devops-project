const User =
  require("../models/User");

const bcrypt =
  require("bcryptjs");

const jwt =
  require("jsonwebtoken");

exports.registerUser =
  async (req, res) => {

    try {

      const {
        username,
        email,
        password
      } = req.body;

      const userExists =
        await User.findOne({
          where: { email }
        });

      if(userExists) {

        return res.status(400)
        .json({
          message:
            "User already exists"
        });
      }

      const hashedPassword =
        await bcrypt.hash(password, 10);

      const user =
        await User.create({

          username,
          email,

          password:
            hashedPassword

        });

      const token =
        jwt.sign(

          { id: user.id },

          process.env.JWT_SECRET,

          { expiresIn: "7d" }

        );

      res.status(201).json({

        success: true,

        token,

        user

      });

    } catch(error) {

      res.status(500).json({
        message: error.message
      });
    }

};
