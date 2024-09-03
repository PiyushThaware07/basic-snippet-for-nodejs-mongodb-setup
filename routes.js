const express = require("express");
const router = express.Router();

const controller = require("./controllers");
router.route("").get(controller.getAll);
router.route("/:id?").get(controller.getById);
router.route("").post(controller.create);
router.route("/:id?").put(controller.updateById);
router.route("/:id?").delete(controller.deleteById);

module.exports = router;