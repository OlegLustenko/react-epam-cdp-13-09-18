const fakeServerRequest = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

export const incrementAsync = (payload) => {
  const webSocket = new WebSocket();

  websco
  return (dispatch, getState) => {
    fakeServerRequest().then((response) => {
      const state = getState();
      dispatch({
        type: 'ASYNC_INCREMENT',
        payload: 0
      });

      const newState = getState();
    });
  };
};

export const increment = (payload) => {
  return {
    type: 'INCREMENT',
    payload
  };
};
