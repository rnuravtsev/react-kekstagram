import { createSlice } from "@reduxjs/toolkit"
import { fetchPictures } from "./actions"

const initialState = {
  fullImage: {},
  activeFilter: "",
  pictures: [],
  isAppReady: false,
  hasErrors: false,
}

const appData = createSlice({
  name: "appData",
  initialState,
  reducers: {
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload
    },
    openFullImage: (state, action) => {
      state.fullImage = action.payload
    },
    closeFullImage: (state) => {
      state.fullImage = {}
    },
  },
  extraReducers: {
    [fetchPictures.fulfilled]: (state, action) => {
      state.pictures = action.payload
    },
  },
})

export const { changeActiveFilter, openFullImage, closeFullImage } =
  appData.actions

const appReducer = appData.reducer

export default appReducer
