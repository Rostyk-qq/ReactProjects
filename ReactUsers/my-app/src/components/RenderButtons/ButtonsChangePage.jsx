import React from 'react';
import Button from "../UI-UX/Button/Button";

const ButtonsChangePage = ({page, massive, PageNew}) => {
    return (
        <div style={{textAlign:"center"}} >
            {massive.map(el =>
               <span key={el} >
                     <Button className={page === el ? 'lite' : 'darken'} onClick={() => PageNew(el)}>{el}</Button>
               </span>
            )}
        </div>
    );
};

export default ButtonsChangePage;