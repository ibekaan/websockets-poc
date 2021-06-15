import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Form } from "../components/Form";
import { Spacer } from "../components/Spacer";
import { useSend, useWebsocket } from "../hooks/useWebsocket";

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
  width: 100vw;
`;

export const EnterUsernamePage: FC = () => {
  const [value, setValue] = useState("User 1");
  const { push } = useHistory();
  const send = useSend();

  useEffect(() => {
    useWebsocket();
  });

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    send({
      event: "sessionStart",
      payload: {
        user: value,
      },
    });
    push("/welcome");
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Wrapper>
      <Form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          onChange={changeHandler}
          type="text"
          value={value}
        />
        <Spacer height={20} />
        <button>Start session</button>
      </Form>
    </Wrapper>
  );
};
