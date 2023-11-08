const express = require("express");
const router = express.Router();
const {
  addItems,
  addItemsInCart,
  createUser,
  CheckUser,
} = require("../controllers/post");
const {
  getAllItems,
  GetSingleItem,
  getAllCartItems,
} = require("../controllers/get");
const {
  deleteAllItems,
  deleteSingleItem,
  deleteSingleCart,
  deleteAllCart,
} = require("../controllers/delete");

router.post("/add", addItems);
router.post("/check/user", CheckUser);
router.post("/add/in/cart", addItemsInCart);
router.post("/create/user", createUser);
router.get("/get/all", getAllItems);
router.get("/get/all/cart", getAllCartItems);
router.get("/get/single", GetSingleItem);
router.delete("/delete/all", deleteAllItems);
router.delete("/delete/single", deleteSingleItem);
router.delete("/delete/single/cart", deleteSingleCart);
router.delete("/delete/all/cart", deleteAllCart);
module.exports = router;
