const { response } = require('express');

express = require('express');
eobj = express();
port = 5100;

function MarvellousConnect(request, response)
{
    console.log("Marvellous Server is live at port 5100");
}
eobj.listen(port, MarvellousConnect);

function MarvellousRoot(request, response)
{
    response.json({ "Status": "Success" });
}
eobj.get('/', MarvellousRoot);

function MarvellousBatches(request, response)
{
    response.json({ "PPA": "4 months", "Python": "3 months", "Angular": "5 months" });
}
eobj.get('/getBatches', MarvellousBatches);

function MarvellousAdmin(request, response)
{
    response.json({ "Mobile": "907519437", "Website": "www.marvellousinfosytems.com" });
}

eobj.get('/getAdminDetails', MarvellousAdmin);