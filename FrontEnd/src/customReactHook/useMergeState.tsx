import React from "react";

const useMergeState = (initialState = {}) => {
  const [value, setValue] = React.useState(initialState);

  const mergeState = (newState: any) => {
    if (typeof newState === "function") newState = newState(value);
    setValue({ ...value, ...newState });
  };

  return [value, mergeState];
};

export default useMergeState;
