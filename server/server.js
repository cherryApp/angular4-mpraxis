const sql = require('mssql');
const http = require('http');

// Connect to MSSQL database.
sql.connect(connectionString, err => {
    if (err) {
        console.log(err);
        return;
    }
});

// Start http server.
const server = http.createServer( (req, res) => {
    res = setCors(res);
    switch (req.method.toLowerCase()) {
        case "get": 
            handleGet(req, res);
            break;
        case "post": 
            handlePost(req, res);
            break;
        case "delete": 
            handleDelete(req, res);
            break;
        default: 
            res.end(JSON.stringify({title: "Hiba", message: "Invalid method!"}));
            break;
    }
});
server.listen(3000, (err) => {
    if (err) {
        return console.error(err);
    }
    console.log("Server running in localhost:3000");
});

// Process url variables.
const processUrl = (url) => {
    url = url.split("/");
    return url;
};

const setCors = (res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return res;
};

// Handle get requests.
const handleGet = (req, res) => {
    // Query 
    let urlVars = processUrl(req.url);
    console.dir(urlVars);
    let table = urlVars[1];
    let id = urlVars[2];

    new sql.Request().query(`SELECT * FROM ${table}`, (err, result) => {
        if (err) {
            let obj = {
                title: "Hiba a lekérdezésben",
                message: err
            };
            return res.end( JSON.stringify(obj) );
        }
 
        res.end( JSON.stringify(result.recordset) );
    });
};

// Handle delete requests.
const handleDelete = (req, res) => {
    // Query 
    let urlVars = processUrl(req.url);
    console.dir(urlVars);
    let table = urlVars[1];
    let id = urlVars[2];

    new sql.Request().query(`DELETE FROM ${table} WHERE UserID = ${id}`, (err, result) => {
        if (err) {
            let obj = {
                title: "Hiba a lekérdezésben",
                message: err
            };
            return res.end( JSON.stringify(obj) );
        }
 
        res.end( JSON.stringify({affected: result.rowsAffected}) );
    });
};

// Handle post requests.
const handlePost = (req, res) => {
    // Query 
    let urlVars = processUrl(req.url);
    console.dir(urlVars);
    let table = urlVars[1];
    let id = urlVars[2];

    var body = "";
    req.on("data", (chunk) => {
        body += chunk;
    });
    req.on("end", () => {
        body = JSON.parse(body);
        let query = `UPDATE ${table} SET 
                    Lastname = '${body.Lastname}', 
                    Firstname = '${body.Firstname}', 
                    Email = '${body.Email}', 
                    BirthDate = '${body.BirthDate}'
                    WHERE UserID = ${id}`;
    
        new sql.Request().query(query, (err, result) => {
            if (err) {
                let obj = {
                    title: "Hiba a lekérdezésben",
                    message: err
                };
                return res.end( JSON.stringify(obj) );
            }
     
            res.end( JSON.stringify(body) );
        });
    });

};