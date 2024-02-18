import { useState, useEffect } from 'react'
import Title from './Title'
import Menu from './Menu'
import data from './data'
import Categories from './Categories'

const App = () => {

  const uniqueCategories = [ 'all', ...new Set(data.map((item) => item.category))];
  const [menu, setMenu] = useState(data)
  const [categories, setCategories] = useState(uniqueCategories)

  //console.log(uniqueCategories);
  //console.log(categories)
  
  const filterMenu = (category) => {
    const newMenu = data.filter(item => item.category === category)
    category === 'all' ? setMenu(data) : setMenu(newMenu);
  }

  return (
    <div className="menu">
      <Title />
      <Categories categories={categories} filterMenu={filterMenu} />
      <Menu menu={menu}/>
    </div>
  );
};
export default App;
