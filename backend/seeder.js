import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import Products from "./models/Products.js";
import User from "./models/User.js";
import {products} from "./data/productsData.js";

configDotenv();
//connect teh db
mongoose.connect(process.env.MONGO_URI);

//dleet all dat afrom user and products
const seedData = async () => {
  try {
    await Products.deleteMany();
    await User.deleteMany();

    //create new adminsuer
    const user = await User.create({
      username: "Admin User",
      email: "admin@gmail.com",
      password: "12345",
      role: "admin",
    });

    const hashpass=await bcrypt
    const userid = user._id;

    const sampleproducts = products.map((data) => {
      return { ...data, user: userid };
    });
    await Products.insertMany(sampleproducts);
    console.log("All products data are seeded");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

seedData();
