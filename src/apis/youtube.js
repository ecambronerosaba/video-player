import axios from "axios";
const KEY = "AIzaSyBiglA2JnbgTdubzoja88lFJVQe_S8Jotk";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 5,
		key: KEY,
	},
});
