import ProductDetails from "../Models/ProductDetail.model.js";

//Post basic detail data to database:

export const createData = async (req, res) => {
  try {
    if (
      !req.body.productTitle ||
      !req.body.productSummary ||
      !req.body.productReleaseDate
    ) {
      return res
        .status(401)
        .json({ message: "Mandatory fields:Title , Summary, Date" });
    } else {
      let data = {
        user: req.user.id,
        productImage: req.body.productImage,
        productTitle: req.body.productTitle,
        productSummary: req.body.productSummary,
        productReleaseDate: req.body.productReleaseDate,
      };

      const result = await ProductDetails.create(data);

      return res
        .status(201)
        .json({ message: "Data saved Sucessfully", result });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//Read or get all user basicDetail data  from database:

export const readAllData = async (req, res) => {
  try {

    let datas = await ProductDetails.find({});
    if (!datas) {
      res.status(400).json({ message: "Data not found" });
    } else {
      res
        .status(201)
        .json({
          message: "Data Fetched Sucessfully",
          count: datas.length,
          result: datas,
        });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// //Read or get Specific User all Data  :
export const readSpecificUserData = async (req, res) => {
  try {
    let getSpecificData = await ProductDetails.find({ user: req.user.id });

    if (!getSpecificData) {
      res.status(400).json({ message: "Specific Data Not Found" });
    } else {
      res
        .status(201)
        .json({ message: "Specific Data Fetched", data: getSpecificData });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// //Read or get Specific User all Data  :
export const getSpecificIdData = async (req, res) => {
  try {
    let {id}=req.params;
    let getSpecificData = await ProductDetails.findById(id );

    if (!getSpecificData) {
      res.status(400).json({ message: "Product Data Not Found" });
    } else {
      res
        .status(201)
        .json({ message: "Product Data Fetched", data: getSpecificData });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Update Specific document user data:

export const updateSpecificUserData = async (req, res) => {
  try {
    let { id } = req.params;
    let data = req.body;
    let updateSpecificData = await ProductDetails.findByIdAndUpdate(id, data);

    if (!updateSpecificData) {
      res.status(400).json({ message: "Product Data Not Found" });
    } else {
      res
        .status(201)
        .json({ message: "Product Data Updated", data: updateSpecificData });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete Specific User Bssic detail All data deleted By using user Id:
export const deleteSpecificUserAllData = async (req, res) => {
  try {
    let deleteSpecificData = await ProductDetails.deleteMany({
      user: req.user.id,
    });

    if (!deleteSpecificData) {
      res.status(400).json({ message: "Product Data Not Found" });
    } else {
      res
        .status(201)
        .json({ message: "Product Data Deleted", data: deleteSpecificData });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete Spcific user  Document in Basic Detail:

export const deleteSpecificUserData = async (req, res) => {
  try {
    let { id } = req.params;

    let deleteSpecificData = await ProductDetails.findByIdAndDelete(id);

    if (!deleteSpecificData) {
      res.status(400).json({ message: "Product Data Not Found" });
    } else {
      res
        .status(201)
        .json({ message: "Product Data Deleted", data: deleteSpecificData });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
