import axios from "axios";

// import { getPostsReq } from "./toolkitReducer";
import { getPostsReq } from "./toolkitSlice";

axios.defaults.baseURL = "http://localhost:7000/api";

export const getAllPosts = () => async (dispatch) => {
  //   dispatch(getPostsReq());

  try {
    const response = await axios.get("/posts");
    console.log("response", response.data.rows);
    if (response.data) {
      dispatch(getPostsReq(response.data.rows));
    }
    return response.data.rows;
  } catch (error) {
    console.error("err", error);
  }
};
