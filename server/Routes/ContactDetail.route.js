import express from "express";
import {
  createData,
  readAllData,
  readSpecificUserData,
  updateSpecificUserData,
  deleteSpecificUserAllData,
  deleteSpecificUserData
} from "../Controllers/ContactDetail.controller.js";
import { verifyToken } from "../Middleware/verifyToken.js";

let router = express.Router();


// Create Data
router.post("/", verifyToken, createData);
// Read all ContactDetailData:
router.get("/", verifyToken, readAllData);
 //Read Specific user all Data:
router.get("/specific/:id", verifyToken, readSpecificUserData);
//Update Specific user Single Data:
router.put("/update/:id", verifyToken, updateSpecificUserData);
//Delete Specific user all Data in Basic Detail:
router.delete("/deleteAll/:id", verifyToken, deleteSpecificUserAllData);
//Delete Specific user document Data in Basic Detail:
router.delete("/delete/:id", verifyToken, deleteSpecificUserData);


export default router;
