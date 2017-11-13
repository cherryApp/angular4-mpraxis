const app = require("express")();
const http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", (req, res) => {
    res.send(`<script src="/socket.io/socket.io.js"></script>
    <script>
      var socket = io();
      socket.emit("message", "George Michael is dead. :(");
      socket.on("serverMessage", function(data) {
          console.log(data);
      });
    </script>`);
});

io.on("connection", (socket) => {
    socket.on("message", (data) => {
        socket.broadcast.emit("serverMessage", data);
    });

    /*
    setInterval( () => {
        let m = `${Math.random()}: Dani how are you?`;
        socket.emit("serverMessage", JSON.stringify(
            {
                title: "Hello",
                message: m
            }
        ));
    }, 1000);
    */
});

http.listen(3100, () => {
    console.log("Server running :3100");
});