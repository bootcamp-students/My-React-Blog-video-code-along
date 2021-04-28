import React from 'react'

function Grid() {
  let arr = Array(16).fill().map((x, i) => i)
  let grid = []
  let subArr = []
  for (let j = 0; j < arr.length; j++) {
    let col = <div className='col'>{j}</div>
    subArr.push(col)
    if ((j + 1) % 4 === 0) {
      console.log("in if")
      let row = <div className='row'>{subArr}</div>
      grid.push(row)
      subArr = []
    }
  }

  console.log(grid, subArr)
  return (
    <div className='container'>
      {grid}
    </div>
  )
}

function GridUsingMap() {
  let arr = Array(16).fill().map((x, i) => i)
  let grid = arr.map((y, j) => {

    return (
      (j + 1) % 4 === 0 &&
      <div className='row'>
        {arr.slice(j + 1 - 4, j + 1).map((x, i) => (
          <div className='col'>
            {/* inner for loop */}
            {x}
          </div>
        ))}
      </div>
    )
  })

  console.log(grid)

  return (
    <div className='container'>
      {grid}
    </div>
  )
}

export default function GridWithRows() {

  return (
    <div className='container'>
      {/* outer for loop */}
      {Array(4).fill().map((y, j) => (
        <div className='row'>
          {Array(4).fill().map((x, i) => (
            <div className='col'>
              {/* inner for loop */}
              {(4 * (j + 1)) - (4 - i)}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
