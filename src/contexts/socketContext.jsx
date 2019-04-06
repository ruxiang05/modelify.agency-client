/* Uses methods and/or components from react */
import React from 'react';

export const SocketContext = React.createContext({
  socket: {},
});
export const SocketConsumer = SocketContext.Consumer;
export const SocketProvider = SocketContext.Provider;
