import { configureStore } from "@reduxjs/toolkit";
import { templateGeneratorReducer, TEMPLATE_GEN_KEY } from "../slices";

const store = configureStore({
  reducer: {
    [TEMPLATE_GEN_KEY]: templateGeneratorReducer,
  },
});

export default store;
