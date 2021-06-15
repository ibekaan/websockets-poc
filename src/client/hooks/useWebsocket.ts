export const websocket = new WebSocket("ws://localhost:3001");

export const useWebsocket = () => {
  websocket.onopen = () => {
    console.log("[Client] Connected with WebSocket");
  };
};

export const useSend = () => {
  return (message: any) => websocket.send(JSON.stringify(message));
};
