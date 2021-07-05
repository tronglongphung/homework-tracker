const router = require("express").Router();

const apiRoutes = require("./api");
const htmlRoutes = require("./views");

router.use("/api", apiRoutes);
router.use(htmlRoutes);

module.exports = router;
