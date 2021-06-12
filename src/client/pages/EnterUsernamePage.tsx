import React, { FC, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
  width: 100vw;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Spacer = styled.div<{ height: number }>`
  height: ${({ height }) => height || "10px"}px;
`;

export const EnterUsernamePage: FC = () => {
  const [value, setValue] = useState("User 1");

  return (
    <Wrapper>
      <Form onSubmit={() => alert("Submitted")}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          onChange={(e) => setValue(e.target.value)}
          type="text"
          value={value}
        />
        <Spacer height={20} />
        <button type="submit">Start session</button>
      </Form>
    </Wrapper>
  );
};
