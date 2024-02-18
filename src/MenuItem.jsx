import React from 'react'

const MenuItem = ({item}) => {
    const {title, price, img, desc} = item;
    //console.log(item);
    
    return (
        <article className="menu-item">
            <img className='menu-item-image' src={img} alt={title}/>
            <div className="menu-item-info">
                <h5 className='menu-item-title'>{title}</h5>
                <h6 className='menu-item-price'>${price}</h6>
            </div>
            <p className='menu-item-description'>{desc}</p>
        </article>
    )
}

export default MenuItem
