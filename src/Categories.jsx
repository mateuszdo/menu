import React from 'react'

const Categories = ({categories, filterMenu}) => {
    //console.log(categories)
    return (
        <div className='btn-container'>
            {categories.map((category) => {
                return <button 
                    key={category} 
                    type='button' 
                    className='btn' 
                    onClick={() => {filterMenu(category)}}
                    >
                    {category}
                </button>
            })}
        </div>
    )
}

export default Categories
