const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  createFriend,
  deleteFriend,
} = require("../../controllers/userControllers");

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getSingleUser).delete(deleteUser);

router.route("/:userId").get(getSingleUser).put(updateUser);

router.route('/:userId/friends/:friendId')
.post(createFriend)
.delete(deleteFriend)


module.exports = router;
