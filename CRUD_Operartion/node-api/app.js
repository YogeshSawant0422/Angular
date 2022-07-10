const { response, request } = require('express');
const express = require('express');

const app = express();
app.use(express.json());

app.listen(3000, Marvellous);
function Marvellous(request, response)
{
    console.log("Marvellous Server is started.....");
}

app.get('/',Start);
function Start(request,response)
{
    response.send("Hello from the Marvellous Server");
}

const batches = [
    {id: 1, name : "PPA", Duration : "3.5 months"},
    {id: 2, name : "LB", Duration : "3 months"},
    {id: 3, name : "PYTHON",  Duration : "4 months"}
];

app.get('/getBatches',MarvellousBatches);
function MarvellousBatches(request, response)
{
    response.send(batches);
}

app.get('/getBatches/:id',MarvellousBatcheswithID);

function MarvellousBatcheswithID(request, response)
{
    var i = 0;

    for(i = 0; i < batches.length; i++)
    {
        if (batches[i].id == request.params.id)
            break;
    }
    
    if(i ==  batches.length)
    {
        response.status(404).send("There is no such batch");
   }
    else
    {
        response.send(batches[i])
    }
}

app.post('/batches', (request, response) => {
    const batch = {
        id: batches.length+1,
        name : request.body.name,
        Duration : "5 months"
    }

    batches.push(batch);

    response.send(batch);
});

app.put('/getBatches/:id', (request, response) => {
    var i = 0;

    for(i = 0; i < batches.length; i++)
    {
        if (batches[i].id == request.params.id)
            break;
    }
    
    if(i ==  batches.length)
    {
        response.status(404).send("There is no such batch");
   }
    else
    {
        batches[i].name = request.body.name;
        response.send(batches[i]);
    }
});

app.delete('/getBatches/:id', (request, response) => {
    var i = 0;

    for(i = 0; i < batches.length; i++)
    {
        if (batches[i].id == request.params.id)
            break;
    }
    
    if(i ==  batches.length)
    {
        response.status(404).send("There is no such batch");
   }
    else
    {
        batches.splice(i,1);
        response.send(batches);
    }
});
