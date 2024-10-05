import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";

export const TEMPLATE_GEN_KEY = "templateGenerator";

const getRootState = (state: T) => state[TEMPLATE_GEN_KEY];

const baseSelectors = {
  getSelectedTemplateId: createSelector(
    getRootState,
    (state) => state.selectedTemplateId
  ),
};

const baseActions = {
  setSelectedTemplateId: (state: T, action: PayloadAction) => {
    state.selectedTemplateId = action.payload;
  },
};

const templateGeneratorSlice = createSlice({
  name: TEMPLATE_GEN_KEY,
  initialState: {
    selectedTemplateId: 'TEMPLATE_01'
  },
  reducers: {
    ...baseActions,
  },
});

export const TemplateGeneratorActions = templateGeneratorSlice.actions;
export const TemplateGeneratorSelector = { ...baseSelectors };

export default templateGeneratorSlice.reducer;
