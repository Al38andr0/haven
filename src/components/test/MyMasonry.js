import React from "react";
import { nanoid } from 'nanoid'
import './MyMasonry.scss'

const MyMasonry = ({children, isShuffled, nthColumns, columnClassName, containerClassName}) => {
  const result = children.reduce((resultArray, item, index) => {
    const columnIndex = Math.floor(index % nthColumns)
    if(!resultArray[columnIndex]) {
      resultArray[columnIndex] = []
    }
    resultArray[columnIndex].push(item)
    if (isShuffled) {
      resultArray.forEach(a => a.sort(() => Math.random() - 0.5))
    }
    return resultArray
  }, [])
  return (
    <div className={containerClassName}>
      {
        result.map(r =>
          <div
            key={nanoid()}
            className={columnClassName}
            style={{width: `calc(100% / ${nthColumns})`}}
          >
            {r.map(e => e)}
          </div>)
      }
    </div>
  )
}

export default MyMasonry
