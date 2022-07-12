express = require('express');

batchesModel = require('../models/batches.js');

eobj = express();

//eobj.use(bodyParser.urlencoded({ extended: false }));
//eobj.use(bodyParser.json());

// Read the data from database

eobj.get('/batches', async(request, response) => {
  batches = await batchesModel.find({});  //select * from ________;
  try {
    response.send(batches);
  }
  catch (error)
  {
    response.status(500).send(error);
  }
 
});


//Insert The Data into database
eobj.post('/batches', async (request, response) => {
  batches = new batchesModel(request.body);

  try {
    await batches.save();  //insert into batches values("PPA",3);
    response.send(batches);
  }
  catch (error) {
    response.status(500).send(error);
  }
  
});

eobj.delete("/batches/:id", async (request, response) => {
  try
  {
    batches = await batchesModel.findByIdAndDelete(request.params.id);

    if (!batches)
    {
      response.status(404).send("There is no such batch");
    }
  }
  catch (error) {
    response.status(500).send(error);
  }
});

eobj.patch("/batches/:id", async (request, response) => {
  try
  {
    await batchesModel.findByIdAndUpdate(request.params.id, request.body);
    await batchesModel.save();
  }
  catch (error) {
    response.status(500).send("Failure in update");
  }
});

module.exports = eobj;


