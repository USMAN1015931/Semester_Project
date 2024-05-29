// // Hardcoded data
// const foodCardData = [
//     // Your hardcoded food card data...
//     {
//         price: "Rs. 2000",
//         rate: 2000,

        
//         image: require("../../assets/3.jpg"),
//         AvrgReview: 4.1,
//         NoOfReview: 27,
//         cordinates: { lat: 20.342, Long: 12.432 },
//         category: "Fast Food",
//         description: " Chicken Fast Food",

//        name: "Drumsticks",
      
//     },
//     {
//         price: " Rs. 1900",
//         rate: 1900,

//         image: require("../../assets/2.jpg"),
//         AvrgReview: 4.9,
//         NoOfReview: 270,
//         cordinates: { lat: 20.342, Long: 12.432 },

//        name: "Fish and Fries",
//        category: "Fast Food",
   
//         id: 1,
//     },
//     {
//         price: "Rs. 300",
//         rate: 300,

//         image: require("../../assets/1.jpg"),
//         AvrgReview: 4.9,
//         NoOfReview: 270,
//         cordinates: { lat: 20.342, Long: 12.432 },
//         category:"Vegetables",

//        name: "Russian Vegetables",
      
//         id: 2,
//     },
//     {
//         price: " Rs. 1200",
//         rate: 1200,

//         image: require("../../assets/4.jpg"),
//         AvrgReview: 4.9,
//         NoOfReview: 270,
//         cordinates: { lat: 20.342, Long: 12.432 },

//        name: "Chicken Charga and Kabab",
//        category: "Fast Food",
  
//         id: 3,
//     },
//     {
//         price: "Rs. 800",
//         rate: 800,
//         image: require("../../assets/5.jpg"),
//         AvrgReview: 4.9,
//         NoOfReview: 270,
//         cordinates: { lat: 20.342, Long: 12.432 },

//         price: "Chicken Tikka",
//         category: "Bar B Q Fast Food",
    
//         id: 4,
//     },
//     {
//         price: "Rs. 800",
//         rate: 800,

//         image: require("../../assets/6.jpg"),
//         AvrgReview: 4.9,
//         NoOfReview: 270,
//         cordinates: { lat: 20.342, Long: 12.432 },
//         category: "Fast Food",
//        name: "Nuggets and Fries",
      
//         id: 5,
//     },



// ];

// const Starterdata = [
//     // Your hardcoded starter data...

//     {
//         id: '1',
//         name: 'Nan Chana',
//         reviewsCount: 50,
//         averageReviews: 4.2,
//         image: require("../../assets/9a.webp"),
//         price: "Rs. 240",
//         category: "Breakfast Food",
//         description: "",
//         rate: 240
//     },
//     {
//         id: '2',
//         name: 'Paratha Chai',
//         image: require("../../assets/9k.jpg"),
//         price: "Rs. 120",
//         reviewsCount: 75,
//         category: "Breakfast Food",
//         averageReviews: 4.7,
//         rate: 120
//     },
//     {
//         id: '3',
//         name: 'Lassi',
//         reviewsCount: 120,
//         price: "Rs. 150",
//         averageReviews: 4.9,
//         category: "Breakfast Drink",
//         image: require("../../assets/9d.jpg"),
//         rate: 150
//     },
    
//     {
//         id: '4',
//         name: 'Halwa Puri',
//         reviewsCount: 95,
//         price: "Rs. 80",
//         image: require("../../assets/9o.jpg"),
//         category: "Breakfast Food",
//         averageReviews: 4.6,
//         rate: 80
//     },
    
// ];

// const Lunchdata1 = [
//     // Your hardcoded lunch data...

//     {
//         id: '1',
//         name: 'Palaq Ghosht',
//         image: require("../../assets/9c.jpg"),
//         reviewsCount: 50,
//         averageReviews: 4.2,
//         category:"Dasi khana",
//         price: "Rs. 250",
//         rate: 250
//     },
//     {
//         id: '2',
//         name: 'Chicken Quorama',
//         image: require("../../assets/9h.jpg"),
//         reviewsCount: 75,
//         price: "Rs. 200",
//         category:"Dasi khana",
//         averageReviews: 4.7,
//         rate: 200
//     },
//     {
//         id: '3',
//         name: 'Chicken Biryani',
//         price: "Rs. 250",
//         reviewsCount: 120,
//         image: require("../../assets/9f.jpg"),
//         averageReviews: 4.9,
//         category:"Dasi khana",
//         rate: 250
//     },
//     {
//         id: '4',
//         name: 'Dal Mash',
//         price: "Rs. 150",
//         image: require("../../assets/9y.jpeg"),
//         reviewsCount: 95,
//         category:"Dasi khana",
//         averageReviews: 4.6,
//         rate:150
//     },
//     {
//         id: '5',
//         name: 'Vegetable',
//         price: "Rs. 120",
//         image: require("../../assets/9z.jpeg"),
//         reviewsCount: 80,
//         category:"Dasi khana",
//         averageReviews: 4.3,
//         rate: 120
//     },
//     {
//         id: '6',
//         name: 'Bief Keema',
//         price: "Rs. 250",
//         image: require("../../assets/9g.jpg"),
//         reviewsCount: 90,
//         category:"Dasi khana",
//         averageReviews: 4.5,
//         rate: 250
//     },
// ];

// // Function to upload hardcoded data
// function uploadData(data, node) {
//     database.ref(node).set(data, (error) => {
//         if (error) {
//             console.error("Data could not be saved." + error);
//         } else {
//             console.log("Data saved successfully.");
//         }
//     });
// }

// // Upload the hardcoded data
// uploadData(foodCardData, 'foodCardData');
// uploadData(Starterdata, 'Starterdata');
// uploadData(Lunchdata1, 'Lunchdata1');
