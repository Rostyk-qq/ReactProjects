import {useMemo} from "react";

const usePosts = (sortedKey, posts) => {
    const sortedPosts = useMemo(() => {
        if (sortedKey !== ''){
            return [...posts].sort((a, b) => a[sortedKey].localeCompare(b[sortedKey]))
        }
        else{
            return posts
        }
    }, [sortedKey, posts])

    return sortedPosts
}
export const AllActionsWithPosts = (sortedKey, posts, input) => {
    const sortedPosts = usePosts(sortedKey, posts)
    const sortedAndFiltered = useMemo(() => {
        return sortedPosts.filter(el => el.title.includes(input))
    }, [sortedPosts, input])

    return sortedAndFiltered
}