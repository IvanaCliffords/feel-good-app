// reducer is a function that accepts the state and accepts the action 
import { FETCH_ALL_POSTS, CREATE_POST, UPDATE_POST, DELETE_POST, LIKE_POST } from "../actions/actionTypes"


export default (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL_POSTS:
            return action.payload;
        case CREATE_POST:
            return [...posts, action.payload];
        case UPDATE_POST:
        case LIKE_POST:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case DELETE_POST:
            return posts.filter((post) => post._id !== action.payload)
        default:
            return posts;

    }
}