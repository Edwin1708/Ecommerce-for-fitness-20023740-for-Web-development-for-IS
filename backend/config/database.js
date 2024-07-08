const mongoose = require("mongoose");
const connectDatabase = () => {
    mongoose.connect('mongodb+srv://anujkurmi199:8pnKtuIs5QW80kJO@cluster0.38bwibw.mongodb.net/Ecommerce', {
         useNewUrlParser: true, 
         useUnifiedTopology: true })
         .then((data) => {
        console.log(`mongodb connected with server: ${data.connection.host}`);
    });

}
module.exports =connectDatabase;
