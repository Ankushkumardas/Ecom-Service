import Products from "../models/Products.js";


//best seller products get the product with highest rating as best seller
export const bestSellerProducts = async (_req, res) => {
  try {
    // Fetch products sorted by rating in descending order, limit to top 10
    const bestSellers = await Products.find().sort({ rating: -1 }).limit(4);
    return res.status(200).json({
      message: "Best seller products fetched successfully",
      data: bestSellers,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message, success: false });
  }
};

export const postProduct = async (req, res) => {
  const {
    name,
    description,
    price,
    discountPrice,
    countInStock,
    sku,
    category,
    brand,
    sizes,
    colors,
    collections, // changed from collections
    material,
    gender,
    images,
    isFeatured,
    isPublished,
    tags,
    dimensions,
    weight,
    rating,
    numReviews,
  } = req.body;
  try {
    if (!req.user || !req.user.id) {
      return res
        .status(401)
        .json({ message: "Unauthorized: User not authenticated" });
    }

    const product = new Products({
      name,
      description,
      price,
      discountPrice,
      countInStock,
      sku,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      rating,
      numReviews,
      user: req.user.id,
    });

    const newProduct = await product.save();
    return res.status(200).json({
      message: "Product created sucecssfully",
      success: true,
      data: newProduct,
    });
  } catch (error) {
    console.error("Error in postProduct:", error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

//update exisiting product by id PUT, private and only accessible by admin

export const editProduct = async (req, res) => {
  const {
    name,
    description,
    price,
    discountPrice,
    countInStock,
    sku,
    category,
    brand,
    sizes,
    colors,
    collections,
    material,
    gender,
    images,
    isFeatured,
    isPublished,
    tags,
    dimensions,
    weight,
    rating,
    numReviews,
  } = req.body;
  try {
    const product = await Products.findById(req.params.id);
    if (product) {
      product.name = name !== undefined ? name : product.name;
      product.description =
        description !== undefined ? description : product.description;
      product.price = price !== undefined ? price : product.price;
      product.discountPrice =
        discountPrice !== undefined ? discountPrice : product.discountPrice;
      product.countInStock =
        countInStock !== undefined ? countInStock : product.countInStock;
      product.sku = sku !== undefined ? sku : product.sku;
      product.category = category !== undefined ? category : product.category;
      product.brand = brand !== undefined ? brand : product.brand;
      product.sizes = sizes !== undefined ? sizes : product.sizes;
      product.colors = colors !== undefined ? colors : product.colors;
      product.collections =
        collections !== undefined ? collections : product.collections;
      product.material = material !== undefined ? material : product.material;
      product.gender = gender !== undefined ? gender : product.gender;
      product.images = images !== undefined ? images : product.images;
      product.isFeatured =
        isFeatured !== undefined ? isFeatured : product.isFeatured;
      product.isPublished =
        isPublished !== undefined ? isPublished : product.isPublished;
      product.tags = tags !== undefined ? tags : product.tags;
      product.dimensions =
        dimensions !== undefined ? dimensions : product.dimensions;
      product.weight = weight !== undefined ? weight : product.weight;
      product.rating = rating !== undefined ? rating : product.rating;
      product.numReviews =
        numReviews !== undefined ? numReviews : product.numReviews;

      const updatedata = await product.save();
      return res.status(200).json({
        message: "Product data updated",
        data: updatedata,
        success: true,
      });
    } else {
      return res
        .status(404)
        .json({ message: "Product not found", success: false });
    }
  } catch (error) {
    console.error("Error in editProduct:", error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// delete route
export const deleteProduct = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) {
      return res
        .status(400)
        .json({ message: "Product with id not found", success: false });
    } else {
      await product.deleteOne();
      return res
        .status(200)
        .json({ message: "Product deleted successfully", success: true });
    }
  } catch (error) {}
};

//get all products details with optional filtering public route
export const getProducts = async (req, res) => {
  const {
    collections,
    sizes,
    color,
    gender,
    minPrice,
    maxPrice,
    sortBy,
    search,
    category,
    material,
    brand,
    limit,
  } = req.query;

  try {
    // console.log(req.query);
    let query = {};
    let sortOption = {}; // Define sortOption here

    // Filtering logic
    if (collections && collections.toLowerCase() !== "all") {
      query.collections = collections;
    }
    if (category && category.toLowerCase() !== "all") {
      query.category = category;
    }
    if (sizes && sizes.toLowerCase() !== "all") {
      query.sizes = { $in: sizes.split(",") };
    }
    if (color && color.toLowerCase() !== "all") {
      query.colors = { $in: [color] };
    }
    if (gender && gender.toLowerCase() !== "all") {
      query.gender = gender;
    }
    if (material && material.toLowerCase() !== "all") {
      query.material = { $in: material.split(",") };
    }
    if (brand && brand.toLowerCase() !== "all") {
      query.brand = { $in: brand.split(",") };
    }
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    // Sorting
    if (sortBy) {
      if (sortBy === "priceAsc") sortOption.price = 1;
      else if (sortBy === "priceDesc") sortOption.price = -1;
      else if (sortBy === "newest") sortOption.createdAt = -1;
      else if (sortBy === "popularity") sortOption.rating = -1;
    }
    // console.log(query)
    const products = await Products.find(query)
      .sort(sortOption)
      .limit(Number(limit) || 0);

    return res.status(200).json({
      message: "Products fetched successfully",
      data: products,
      success: true,
    });
  } catch (error) {
    console.error("Error in getProducts:", error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

//get single profuct ddetails over _id
export const getProduct = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ message: "Product not found", success: false });
    }
    return res
      .status(200)
      .json({ message: "Product details", data: product, success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// get similar products based on current product's gender and category and public route
export const getSimilarProducts = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.findById(id);
    if (!product) {
      return res
        .status(400)
        .json({ message: "product not found", success: false });
    }
    const similarProducts = await Products.find({
      _id: { $ne: id },
      gender: product.gender,
      category: product.category,
    })
      .sort({ rating: -1 })
      .limit(4);
    res.status(200).json({
      message: "Similar Porducts data over gender and vategry",
      data: similarProducts,
      success: true,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internel server error", error, success: false });
  }
};

//get product for new-arrival on teh bssis of creation date
export const getNewProducts=async(req,res)=>{
  try {
    const products=await Products.find().sort({createdAt:-1}).limit(10);
    return res.status(200).json({message:"New arrival products",data:products})
  } catch (error) {
    return res.status(500).json({message:"Internel server error",error})
  }
}