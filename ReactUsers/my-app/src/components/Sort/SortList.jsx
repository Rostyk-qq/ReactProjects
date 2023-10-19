import React from 'react';

const SortList = ({options, disabledName, sortKey, setSortKey}) => {
    return (
        <select value={sortKey}
                onChange={e => setSortKey(e.target.value)}>
            <option disabled value="">{disabledName}</option>
            {
                options.map((element, idx) => (
                    <option key={idx} value={element.value}>{element.screenName}</option>
                ))
            }
        </select>
    );
};

export default SortList;