import React from 'react'
import MenuItem from './MenuItem'

const Menu = (menu) => {
    //console.log(menu);
    return (
        <div className='menu-container'>
            {menu.menu.map((item) => {
                
                return <MenuItem item={item} key={item.id}/>
            })}
        </div>
    )
}


export default Menu
