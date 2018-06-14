import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBaGumlW8coZcXI8CEjZenmCdTFU76BHK0",
    authDomain: "placebowl-f7a12.firebaseapp.com",
    databaseURL: "https://placebowl-f7a12.firebaseio.com",
    projectId: "placebowl-f7a12",
    storageBucket: "placebowl-f7a12.appspot.com",
    messagingSenderId: "1062633641931"
};

firebase.initializeApp(config);

const database = firebase.database();

const cereals = {
    
        bbPancakeCrunch: {
            cerealName: "Captain Crunch",
            cerealImage:
                "https://i5.walmartimages.com/asr/7844c13a-bd2e-4ef8-a1a6-e7cabfb1e253_1.3479b54db367f2388eab55203bbdd89c.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
            cerealRating: "🥄🥄🥄🥄🥄",
            cerealYear: 2017,
            cerealReview: "OMG I am in love with this. Best cereal ever man!"
        },

        fruityPebbles: {
            cerealName: "Fruity Pebbles",
            cerealImage:
                "https://i5.walmartimages.com/asr/12d76547-beff-4c4c-9d03-47127e8660ec_1.fb023687d116035e39128ac1b3f12b01.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
            cerealRating: "🥄🥄🥄🥄🥄",
            cerealYear: 2017,
            cerealReview: "OMG I am in love with this. Best cereal ever man!"
        }
    
};

database.ref('cereals').set(cereals)
