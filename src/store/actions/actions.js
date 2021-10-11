import { DATA } from "../../data"
import { LOAD_POSTS, TOGGLE_BOOKED } from "../types"

export const LoadPosts = () => {
	return { type: LOAD_POSTS, payload: DATA }
}
export const TogglBooked = (id) => {
	return { type: TOGGLE_BOOKED, payload: id }
}