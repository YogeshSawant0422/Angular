express = require('express');
mongoose = require('mongoose');
batchesRouter = require("./routes/batchesRoutes.js");
var bodyParser = require('body-parser')

eobj = express();
eobj.use(bodyParser.urlencoded({extended : false}))
eobj.use(bodyParser.json());

//eobj.use(express.json());

eobj.use(batchesRouter);

eobj.listen(4000, (request,responce) => {
  console.log("Server is running at 4000");
});

eobj.get('/', (request, responce) =>{
  responce.send("Marvellous server is running");
});

Database = 'mongodb+srv://marvellous:marvellous@batches.cw4k98s.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(Database).then(()=> {
  console.log("Database connection is succesful");
}).catch((err)=>{
  console.log("Connection failed");
});