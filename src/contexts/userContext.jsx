import React from 'react';

export const UserContext = React.createContext({
  user: {},
  updateUser: () => {},
});
export const UserConsumer = UserContext.Consumer;
export const UserProvider = UserContext.Provider;