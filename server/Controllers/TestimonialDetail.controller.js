import TestimonialDetails from "../Models/TestimonialDetail.model.js";

//Post basic detail data to database:

export const createData = async (req, res) => {
  try {
    if (
        !req.body.clientImage || !req.body.clientName || !req.body.clientFeedback || !req.body.clientFeedbackDate
    ) {
      return res
        .status(401)
        .json({ message: "Mandatory fields:Image , ClientName, FeedBack ,Date" });
    } else {
      let data = {
        user: req.user.id,
        clientImage: req.body.clientImage,
        clientName: req.body.clientName,
        clientFeedback: req.body.clientFeedback,
        clientFeedbackDate:req.body.clientFeedbackDate
      };

      const result = await TestimonialDetails.create(data);

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
    let datas = await TestimonialDetails.find({});
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
    let getSpecificData = await TestimonialDetails.find({ user: req.user.id });

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
    let updateSpecificData = await TestimonialDetails.findByIdAndUpdate(id, data);

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
    let deleteSpecificData = await TestimonialDetails.deleteMany({
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

    let deleteSpecificData = await TestimonialDetails.findByIdAndDelete(id);

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
