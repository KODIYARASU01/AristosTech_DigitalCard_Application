import feedBackMessage from "../Models/FeedBack.model.js";
export const feedBackPost = async (req, res) => {
  try {
    let { userName, userFeedback, currentRatting } = req.body;
    if (!userName || !userFeedback) {
      return res.status(400).json({ error: "All * field Required" });
    } else {
      let data = {
        // user: req.user.id,
        userName,
        userFeedback,
        currentRatting
      };
      let postFeedback = await feedBackMessage.create(data);
      return res
        .status(200)
        .json({ message: "Feedback Submited", data: postFeedback });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Something went Wrong", error: error.message });
  }
};

export const getFeedback = async (req, res) => {
  try{
    let {id}=req.params;
     let fetchData=await feedBackMessage.find();
     return res
     .status(200)
     .json({ message: "Comment Message Feched", fetchData });
  }catch(error){
    return res
    .status(400)
    .json({ message: "Fetching Message Error", error: error.message });
  }
};
