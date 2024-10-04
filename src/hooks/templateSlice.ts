import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TemplateState {
 selectedTemplateId: string | null;
}

const initialState: TemplateState = {
 selectedTemplateId: null,
}

export const templateSlice = createSlice({
 name: 'template',
 initialState,
 reducers: {
  setTemplate: (state, action: PayloadAction<string>) => {
   state.selectedTemplateId = action.payload;
  }
 }
});

export const { setTemplate } = templateSlice.actions;

export default templateSlice.reducer;