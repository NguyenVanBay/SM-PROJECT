import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/Auth/authSlice";
import alertReducer from "../features/Alert/alertSlice";
import rootSaga from "./rootSaga";

export const history = createBrowserHistory();

const rootReducer = (history: any) =>
  combineReducers({
    counter: counterReducer,
    auth: authReducer,
    notifications: alertReducer,
    router: connectRouter(history)
  });

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer(history),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
