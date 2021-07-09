import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

export const signIn = async (req, res) => {
  const { login, password } = req.body;

  try {
    const existingUser = await User.findOne({ login });

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist :(" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return await res.status(404).json({ message: "Invalid credentials :(" });

    const token = jwt.sign(
      { login: existingUser.login, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong :(" });
  }
};

export const signUp = async (req, res) => {
  const { login, password, firstName } = req.body;

  try {
    const existingUser = await User.findOne({ login });

    if (existingUser)
      return res.status(400).json({ message: "User already exists :(" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      login,
      password: hashedPassword,
      name: `${firstName}`,
    });

    const token = jwt.sign({ login: result.login, id: result._id }, "test", {
      expiresIn: "1h",
    });

    res.status(200).json({ result, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
