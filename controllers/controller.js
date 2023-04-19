import User from '../models/UserModel.js';
import Restaurant from '../models/FoodSpotModel.js';
import Location from '../models/LocationModel.js';


const controller = {

    isPrivate: (req, res, next) => {
        if (req.session.user) {
            return next();
        } else {
            res.redirect('/signin');
        }
    },

    isPublic: (req, res, next) => {
        if (req.session.user) {
            res.redirect("/signin", { layout: false });
        } else {
            return next();
        }
    },

    getLogout: (req, res) => {
        if (req.session) {
            req.session.destroy(() => {
                res.clearCookie("connect.sid");
                console.log("Session successfully destroyed.");
                res.redirect("/signin");
            });
        }
    },

    getSignIn: (req, res) => {
        res.render("login", { layout: false });
    },

    getRegister: (req, res) => {
        res.render("signup", { layout: false });
    },

    getHome: (req, res) => {
        res.render("homepage", { layout: false });
    },


    getProfile: (req, res) => {
        res.render("user", { layout: false });
    },

    getRestaurantPage: async (req, res) => {
        try {
          const id = req.params.id;
          // Lookup location by id in database
          const location = await Location.findById(id).lean();
          // Get restaurants by locationId
          const restaurants = await Restaurant.find({ locationId: id }).lean();
          // Render the restaurant view with pageTitle and restaurants variables
          res.render('restaurant', { pageTitle: location.pageTitle, restaurants });
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
      },
      


    getReviewPage: (req, res) => {
        res.render("review", { layout: false });
    },



    //This handles adding new users to the database
    postAddAccount: (req, res) => {
        console.log("/submit request received:");
        console.log(req.body);

        User.findOne({ email: req.body.email }).lean().exec().then(result => {
            if (result) {
                // Email already exists in the database
                console.log(`Email '${req.body.email}' already exists in the database.`);
                res.status(409).send('Email already exists in the database');
                return;
            } else {
                const myUser = new User({
                    email: req.body.email,
                    givenName: req.body.givenName,
                    lastName: req.body.lastName,
                    password: req.body.password,
                    username: req.body.username,
                    role: req.body.role
                });
                myUser.save().then((result) => {
                    res.sendStatus(200);
                }).catch(err => {
                    console.error(err);
                    res.sendStatus(500);
                });
            }
        }).catch(err => {
            console.error(err);
            res.sendStatus(500);
        });
    },


    postCheckAccount: async (req, res) => {
        console.log("/Login request received:");
        console.log(req.body);

        try {
            const user = await User.findOne({ email: req.body.email, password: req.body.password }).lean().exec();
            if (user) {
                console.log("Successful login for user: ", user.username);
                res.json(user);
            } else {
                res.status(401).send("Incorrect email or password");
            }
        } catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    }


}

export default controller;
