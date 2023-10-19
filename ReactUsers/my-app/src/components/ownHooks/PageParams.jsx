import {useMemo} from "react";

export class PageParams {
    static setPostsOnOnePage(totalCount, limit){
        return Math.ceil(totalCount / limit)
    }
    static createMassiveForButtons = (page, totalPage) => {
        const massiveNew = useMemo(() => {
            let newMassive = []
            for (let i = 1; i <= totalPage; i++) {
                newMassive[i] = i
            }
            return newMassive
        }, [page, totalPage])
        return massiveNew
    }
}