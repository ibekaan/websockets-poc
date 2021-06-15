import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSend, websocket } from "../hooks/useWebsocket";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SendNotificationPage: FC = () => {
  const [userName, setUserName] = useState("");
  const ws = websocket;
  const send = useSend();

  ws.onmessage = (event) => {
    const eventData: UserDataEvent | NotificationEvent = JSON.parse(event.data);
    if (eventData.event === "sessionStart") {
      setUserName(eventData.payload.user);
    }
    if (eventData.event === "notification") {
      alert("Received notification");
    }
  };

  const clickHandler = () => {
    send({ event: "notification" });
  };

  return (
    <Wrapper>
      <Stack>
        <h1>Welcome {userName}</h1>
        <button onClick={clickHandler}>
          Trigger notification for other users
        </button>
        <Link to="/">Back</Link>
      </Stack>
    </Wrapper>
  );
};
