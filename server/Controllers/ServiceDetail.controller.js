import ServiceDetails from "../Models/ServiceDetail.model.js";

//Post basic detail data to database:

export const createData = async (req, res) => {
  try {
    if (!req.body.serviceTitle || !req.body.serviceSummary) {
      return res
        .status(401)
        .json({ message: "Mandatory fields:ServiceTitle , ServiceSummary" });
    } else {
      let data = {
        user: req.user.id,
        serviceImage: req.body.serviceImage,
        serviceTitle: req.body.serviceTitle,
        serviceSummary: req.body.serviceSummary,
      };

      const result = await ServiceDetails.create(data);

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
    let datas = await ServiceDetails.find({});
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
    let getSpecificData = await ServiceDetails.find({ user: req.user.id });

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
    let getSpecificData = await ServiceDetails.find(id );

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
//Update Specific document user data:

export const updateSpecificUserData = async (req, res) => {
  try {
    let { id } = req.params;
    let data = req.body;
    let updateSpecificData = await ServiceDetails.findByIdAndUpdate(id, data);

    if (!updateSpecificData) {
      res.status(400).json({ message: "Specific Data Not Found" });
    } else {
      res
        .status(201)
        .json({ message: "Specific Data Updated", data: updateSpecificData });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete Specific User Bssic detail All data deleted By using user Id:
export const deleteSpecificUserAllData = async (req, res) => {
  try {
    let deleteSpecificData = await ServiceDetails.deleteMany({
      user: req.user.id,
    });

    if (!deleteSpecificData) {
      res.status(400).json({ message: "Specific Data Not Found" });
    } else {
      res
        .status(201)
        .json({ message: "Specific Data Deleted", data: deleteSpecificData });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete Spcific user  Document in Basic Detail:

export const deleteSpecificUserData = async (req, res) => {
  try {
    let { id } = req.params;

    let deleteSpecificData = await ServiceDetails.findByIdAndDelete(id);

    if (!deleteSpecificData) {
      res.status(400).json({ message: "Specific Data Not Found" });
    } else {
      res
        .status(201)
        .json({ message: "Specific Data Deleted", data: deleteSpecificData });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
