var express = require("express");
var router = express.Router();

// Load User model
const User = require("../models/Users");

// GET request 
// Getting all the users
router.get("/", function(req, res) {
    User.find(function(err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});

// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request 
// Add a user to db
router.post("/buyer", (req, res) => {
 console.log(req.body)
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        contactnumber: req.body.contactnumber,
        age: req.body.age,
        batch: req.body.batch

    });

    newUser.save()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            console.log(err)
            res.status(400).send(err);
        });
});

router.post("/vendor",(req,res)=>{
    console.log(req.body)
    const newUser = new User({
        vname: req.body.vname,
        vemail: req.body.vemail,
        vcontactnumber: req.body.vcontactnumber,
        vshop: req.body.vshop,
        vopen: req.body.vopen,
        vclose: req.body.vclose
    });
    console.log(newUser)
    newUser.save()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            console.log(err)
            res.status(400).send(err);
        });

});
// POST request 
// Login
router.post("/buyerlogin", (req, res) => {
	const email = req.body.email;
    console.log(email)
   // console.log("hello")
	// Find user by email
	User.findOne({ email }).then(user => {
		// Check if user email exists
		if (!user) {
            console.log("noemail")
			return res.status(404).json({
				error: "Email not found",
			});
        }
        else{
            res.send(user);
            return user;
        }
	});
});

router.post("/vendorlogin", (req, res) => {
	const vemail = req.body.vemail;
    //console.log(vemail)
    console.log(req.body)
   // console.log("hello")
	// Find user by email
	User.findOne({ vemail }).then(user => {
		// Check if user email exists
		if (!user) {
            console.log("noemail")
			return res.status(404).json({
				error: "Email not found",
			});
        }
        else{
            res.send(user);
            return user;
        }
	});
});

module.exports = router;