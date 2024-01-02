import React, { useEffect, useState } from "react";
import styles from "../UsersPaginator/UsersPaginator.module.css"
import clsx from "clsx";

const UsersPaginator = ({TotalUsersCount, pageSize, currentPage, onChangedPage, portionSize = 10}) => {
    let createPagesSelectRow = Math.ceil(TotalUsersCount / pageSize);

    let placementPagesRow = [];
    for (let i = 1; i <= createPagesSelectRow; i++) {
        placementPagesRow.push(i)
    }

    let portionCount = Math.ceil(createPagesSelectRow / portionSize) //250 порций
    const [portionNumber, setPortionNumber] = useState(1);
    let leftBorderNumber = (portionNumber - 1) * portionSize + 1;
    let rightBorderNumber = portionNumber * portionSize;
    
    useEffect(() => {
        return setPortionNumber(Math.ceil(currentPage / portionSize)
        )}, [currentPage])

    return (
        <>  
            {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>&#60;</button>}
            {portionNumber > 5 && <button onClick={() => {setPortionNumber(1)}}>&#60;&#60;</button>}
            {placementPagesRow.filter((p) => ((p >= leftBorderNumber) && (p <= rightBorderNumber))).map(page => (
                <span className={clsx(currentPage === page ? styles.placementPagesSelectRow_currentSpan : undefined, styles.pageElement)}
                    onClick={() => {onChangedPage(page) }}>{page}</span>
            ))}
            {portionNumber < portionCount && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>&#62;</button>}
            {portionNumber < portionCount && <button onClick={() => {setPortionNumber(portionCount)}}>&#62;&#62;</button>}
        </>
    )
}

export default UsersPaginator;