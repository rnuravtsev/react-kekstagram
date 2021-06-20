import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

import { URLS } from "../util"

// eslint-disable-next-line import/prefer-default-export
export const fetchPictures = createAsyncThunk(
  "pictures/fetchPictures",
  async () => {
    try {
      const response = await axios.get(URLS.GET)
      return response.data
    } catch (e) {
      // console.log();
    }
    return null
  }
)
