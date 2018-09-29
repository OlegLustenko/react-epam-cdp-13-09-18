const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(
        (subscribedListener) => subscribedListener !== listener
      );
    };
  };

  const dispatch = (action) => {
    const newState = reducer(state, action);

    if (state !== newState) {
      state = newState;

      listeners.forEach((listener) => {
        listener();
      });
    }
  };

  return {
    getState,
    subscribe,
    dispatch
  };
};

const reducer = (state = 0, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }

  return state;
};

const store = Redux.createStore(reducer);

const incButton = document.getElementById('inc');
const decButton = document.getElementById('dec');
const counter = document.getElementById('counter');

incButton.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'});
});

const unsubsdcibeUpdateView = store.subscribe(updateView);

function updateView() {
  counter.innerHTML = store.getState();
}
