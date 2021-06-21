import React from 'react';
import { Categories, PizzaBlock, SortPopup } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/actions/filters';

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  const onSelectCategory = (index) => {
    dispatch(setCategory(index));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']}
        ></Categories>
        <SortPopup
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цена', type: 'price' },
            { name: 'алфавит', type: 'alhabet' },
          ]}
        ></SortPopup>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items &&
          items.map((obj) => <PizzaBlock key={obj.id} {...obj}></PizzaBlock>)}
      </div>
    </div>
  );
}

export default Home;
