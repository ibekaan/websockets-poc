declare type NotificationEvent = {
  event: "notification";
};

declare type UserDataEvent = {
  event: "sessionStart";
  payload: {
    user: string;
  };
};
