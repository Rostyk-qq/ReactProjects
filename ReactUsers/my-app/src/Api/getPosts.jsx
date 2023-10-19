import axios from "axios";
export const getPosts = async (limit, page) => {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
            _limit: limit,
            _page: page
        }
    })
    return posts
}
export const getPostById = async (id) => {
    const p = await axios.get(`https://jsonplaceholder.typicode.com/posts/` + id)
    return p
}