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

// const cereals = {
    
//         bbPancakeCrunch: {
//             cerealName: "Blueberry Pancake Crunch",
//             cerealImage:
//                 "https://firebasestorage.googleapis.com/v0/b/placebowl-f7a12.appspot.com/o/blueberrypancakecrunch.jpg?alt=media&token=a0e7c32c-f010-4392-9772-770c814e0ced",
//             cerealRating: "🥄🥄🥄🥄🥄",
//             cerealYear: 2017,
//             cerealReview: "OMG I am in love with this. Best cereal ever man!"
//         },

//         fruityPebbles: {
//             cerealName: "Fruity Pebbles",
//             cerealImage:
//                 "https://i5.walmartimages.com/asr/12d76547-beff-4c4c-9d03-47127e8660ec_1.fb023687d116035e39128ac1b3f12b01.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
//             cerealRating: "🥄🥄🥄🥄🥄",
//             cerealYear: 2017,
//             cerealReview: "OMG I am in love with this. Best cereal ever man!"
//         }
    
// };

database.ref('cereals')
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val)
    })
    .catch((e) => {
        console.log('error fetching data', e);
    })