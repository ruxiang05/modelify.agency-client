/* Uses methods and/or components from react */
import React from 'react';

export const SelectModel = React.createContext({
  selectModel: () => {},
});
export const SelectModelConsumer = SelectModel.Consumer;
export const SelectModelProvider = SelectModel.Provider;
