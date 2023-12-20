const { 
  getAllUsers, 
  getUser, 
  postUser, 
  updateUser,
  deleteUser 
} = require("../controls/usersControls"); // We set up a controller for this route (its just a file with bunch of functions)
                                          // The controlller has all functions required by each menthod

const express = require("express");

const router = express.Router(); // getting the router object

// router.get("/", getAllUsers); // The router object is used instead of app object for handling the requests
// router.get("/:id", getUser);
// router.post("/", postUser);
// router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);

router.route('/').get(getAllUsers).post(postUser); // we can chain methods for same URL using router.route()
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router; // exporting the router for usage by app


// Note : Remember to not include '/api/users' in the router URL here as that has been take care of
      // All the URL having the Base as /api/users are forwarded here , so we are only concerned about the elements coming next in the URL
      // Don't use router.get('/api/user') here as it will symbolize  : /api/user/api/user
      // instead use router.get('/') which will symbolize : /api/user/
