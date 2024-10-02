import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";

const client = axios.create({
  baseURL: "https://bytehive-assignment-theta.vercel.app/",
  responseType: "json",
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(axiosMiddleware(client), sagaMiddleware),
);

sagaMiddleware.run(rootSaga);
