import Products from "../models/Products.js";

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

//get  products details with optional filtering
export const getProducts = async (req, res) => {
  const {
    collections,
    size,
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
    let query = {};

    // Filtering logic
    if (collections && collections.toLowerCase() !== "all") {
      query.collections = collections;
    }
    if (category && category.toLowerCase() !== "all") {
      query.category = category;
    }
    if (size && size.toLowerCase() !== "all") {
      query.sizes = size;
    }
    if (color && color.toLowerCase() !== "all") {
      query.colors = color;
    }
    if (gender && gender.toLowerCase() !== "all") {
      query.gender = gender;
    }
    if (material && material.toLowerCase() !== "all") {
      query.material = material;
    }
    if (brand && brand.toLowerCase() !== "all") {
      query.brand = brand;
    }
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }
    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    let productsQuery = Products.find(query);

    // Sorting
    if (sortBy) {
      let sortOption = {};
      if (sortBy === "priceAsc") sortOption.price = 1;
      else if (sortBy === "priceDesc") sortOption.price = -1;
      else if (sortBy === "newest") sortOption.createdAt = -1;
      productsQuery = productsQuery.sort(sortOption);
    }

    // Limit
    if (limit) {
      productsQuery = productsQuery.limit(Number(limit));
    }

    const products = await productsQuery.exec();

    return res.status(200).json({
      message: "Products fetched successfully",
      data: products,
      success: true,
    });
  } catch (error) {
    console.error("Error in getProducts:", error);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};
