const router = require("express").Router();
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user

    //save user and respond
    res.status(200).json(user);
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
});

module.exports = router;