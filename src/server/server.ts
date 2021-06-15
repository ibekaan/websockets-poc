import * as WebSocket from "ws";

const log = (args: any) => console.log("[Server]", args);
const webSocketServer = new WebSocket.Server({ port: 3001 });

webSocketServer.on("listening", () => {
  log("Connected on port 3001");
});
webSocketServer.on("connection", (ws) => {
  log(`Connected clients: ${webSocketServer.clients.size}`);

  ws.on("message", (data) => {
    log(`Received ${data}`);
    const receivedData: UserDataEvent | NotificationEvent = JSON.parse(
      data.toString()
    );
    if (receivedData.event === "sessionStart") {
      ws.send(JSON.stringify(receivedData));
    }
    if (receivedData.event === "notification") {
      webSocketServer.clients.forEach((client) => {
        if (client !== ws && client.readyState) {
          client.send(JSON.stringify({ event: "notification" }));
        }
      });
    }
  });
});

webSocketServer.on("close", () => {
  log("Connection closed");
});
