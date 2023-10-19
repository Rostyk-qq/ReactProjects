import React, { useState } from 'react';

export const UseFetching = (callback) => {
    const [params, setParams] = useState({ loading: false, error: '' });

    const FetchPost = async () => {
        try {
            setParams({ ...params, loading: true });
            await callback();
        } catch (error) {
            setParams({ ...params, error: error.message });
        } finally {
            setParams({ ...params, loading: false });
        }
    };

    return [FetchPost, params];
};

export default UseFetching;