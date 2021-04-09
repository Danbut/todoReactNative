import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import columnsReducer from './columns/columnsSlice';
import prayersReducer from './prayers/prayersSlice';
import createSagaMiddleware from 'redux-saga';
import {watcherSaga} from './sagas/watcherSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    columns: columnsReducer,
    prayers: prayersReducer,
  },
  middleware: [...getDefaultMiddleware({thunk: true}), sagaMiddleware],
});

sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
