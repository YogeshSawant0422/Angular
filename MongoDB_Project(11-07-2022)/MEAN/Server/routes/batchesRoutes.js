const express = require("express");
const batchesModel = require("../models/batches.js");
var bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json());

app.get("/batches", async (request, response) => {
  const batches = await batchesModel.find({});
  try 
  {
    response.send(batches);
  } 
  catch (error) 
  {
    response.status(500).send(error);
  }
});

app.post("/batches", async (request, response) => {
    const batches = new batchesModel(request.body);
    try 
    {
      await batches.save();
      response.send(batches);
    }
     catch (error) 
     {
      response.status(500).send(error);
    }
  });

  app.delete("/batches/:id", async(request, response) =>{
    try
    {
        batches = await batchesModel.findByIdAndDelete(request.params.id);
        if(!batches)
        { 
            response.status(404).send("There is no such batch");
        }
    }
    catch(error)
    {
        response.status(500).send(error);
    }
  })

  app.patch("/batches/:id", async(request, response)=>{
    try
    {
        await batchesModel.findByIdAndUpdate(request.params.id, request.body);
        await batchesModel.save();
    }
    catch(err)
    {
      response.status(500).send("Failure in update");
    }
  })

module.exports = app;