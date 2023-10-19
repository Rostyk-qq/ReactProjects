import React, {useEffect, useMemo, useRef, useState} from "react";
import IteratePostList from "../components/ListComponents/IteratePostList";
import Form from "../components/Modal/Form";
import Modal from "../components/Modal/Modal";
import Button from "../components/UI-UX/Button/Button";
import SortList from "../components/Sort/SortList";
import Input from "../components/UI-UX/Input/Input";
import {AllActionsWithPosts} from "../components/ownHooks/usePosts";
import useFetching from "../components/ownHooks/useFetching";
import {getPosts} from "../Api/getPosts";
import {PageParams} from "../components/ownHooks/PageParams";
import ButtonsChangePage from "../components/RenderButtons/ButtonsChangePage";
function Posts() {
    const [posts, setPosts] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [modalOpen, setModalOpen] = useState(false)
    const [sortedKey, setSortedKey] = useState('')
    const [input, setInput] = useState('')
    const lastPost = useRef()
    const obser = useRef()
    console.log(lastPost)
    const sortedAndFiltered = AllActionsWithPosts(sortedKey, posts, input)
    const [FetchPost, params] = useFetching( async () => {
        const response = await getPosts(limit, page)
        if (page === 1) {
            setPosts(response.data);
        } else {
            setPosts((prevPosts) => [...prevPosts, ...response.data]);// нові додаються до вже існуючих
        }
        const totalCount = response.headers['x-total-count']
        setTotalPages(PageParams.setPostsOnOnePage(totalCount, limit))
    })
        useEffect(() => {
            FetchPost(limit,page)
        }, [page, limit]);

    useEffect(() => {
        if (params.loading)return
        if (obser.current) obser.current.disconnect()
        let callback = (entries, observer) => {
            // entries містить в собі обєкт через який ми можемо регулювати зону видимості також це то за чим ми дивимось може бути масив або 1ел
            console.log(entries)
            if (entries[0].isIntersecting && page < totalPages){
                setPage(page + 1)
                console.log(page)
            }
        }
        obser.current = new IntersectionObserver(callback);
        obser.current.observe(lastPost.current)
    }, [params.loading])

    const newMassive = PageParams.createMassiveForButtons(908, totalPages)
    const Delete = (currentEl) => {
        setPosts(posts.filter(el => el.id !== currentEl.id))
    }
    const addNew = (postNew) => {
        let id = posts.length + 1
        setPosts([...posts, {id, ...postNew}])
    }
    const openModal = () => {
        setModalOpen(true)
    }
    const newPage = (page) => {
        setPage(page)
    }
    return (
        <div className="app">
            <div className="post__area">
                <Input style={{width:'100%'}} placeholder='What you want to find?' value={input} onChange={e => setInput(e.target.value)} /><br/><br/>
                <Button onClick={openModal}>Add Post</Button><br/>
                <SortList sortKey={sortedKey} setSortKey={(value) => setSortedKey(value)} options={[{name: 'title', screenName: 'За заголовком'}, {name: 'body', screenName: 'За описом'}]} disabledName='Сортувати'/>

                <Modal modalOpen={modalOpen} setModalOpened={(el) => setModalOpen(el)}>
                    <Form addNewPost={addNew} setModalOpened={setModalOpen} />
                </Modal>

                <SortList disabledName='Рендерити по:' sortKey={limit} setSortKey={val => setLimit(val)} options={[
                    {value: 5, screenName:'5'},
                    {value: 10, screenName:'10'},
                    {value: 25, screenName:'25'},
                    {value: -1, screenName:'All'},
                ]} /><br/><br/>

                {params.loading && <h1 style={{textAlign:'center'}} >Loading...</h1>}
                <IteratePostList error={params.error} deletePost={Delete} post={sortedAndFiltered} mainTitle='Post List'/>
                <div ref={lastPost} style={{width:'100%', backgroundColor:'transparent', color:'transparent'}}>Last</div>
                <ButtonsChangePage massive={newMassive} page={page} PageNew={newPage}/>
            </div>
        </div>
    );
}
export default Posts;


