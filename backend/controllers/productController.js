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
            return res.status(401).json({ message: "Unauthorized: User not authenticated" });
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
        return res
            .status(200)
            .json({ message: "", data: newProduct });
    } catch (error) {
        console.error("Error in postProduct:", error);
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};
