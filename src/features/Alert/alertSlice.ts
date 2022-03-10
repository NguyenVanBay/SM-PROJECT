import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface AlertState {
  severity: "error" | "info" | "success" | "warning";
  color: "error" | "info" | "success" | "warning";
  message: string;
  position: string;
  timeHidden: number;
  [propName: string]: any;
}

export interface States {
  notifications: AlertState[];
}

const initialState: States = {
  notifications: []
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,

  reducers: {
    createAlert: (state, action: PayloadAction<AlertState>) => {
      state.notifications.push({
        severity: action.payload.severity,
        color: action.payload.color,
        message: action.payload.message,
        position: action.payload.position,
        timeHidden: 2000
      });
    }
  }
});

export const selectAlert = (state: RootState) => state.notifications;

export const alertActions = alertSlice.actions;

export default alertSlice.reducer;
