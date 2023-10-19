import React, {useState} from 'react';
import Input from "../UI-UX/Input/Input";
import Button from "../UI-UX/Button/Button";
const Form = ({addNewPost, setModalOpened}) => {
    const [params, setParams] = useState({title: '', body: ''})
    const doAll = () => {
        addNewPost(params)
        setModalOpened(false)
        setParams({title: '', body: ''})
    }
    return (
        <div>
            <h2 style={{margin:'0'}} >Add User</h2><br/>
            <Input value={params.title} onChange={e => setParams({...params, title: e.target.value})} placeholder='Title' type='search' /><br/>
            <Input value={params.body} onChange={e => setParams({...params, body: e.target.value})} placeholder='Description' type='search' /><br/>
            <Button onClick={doAll} >Add</Button>
        </div>
    );
};

export default Form;