import React, { useEffect } from 'react';
import { inject } from 'mobx-react';


const Item = inject('itemList')(({ item }) => {
  return (
    <article className="Item">
      <label htmlFor={item.id}>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={item.toggle}
          id={item.id}
        />
        {item.value}
      </label>
      <button className="Item-remove" onClick={() => {
        console.log(itemList())
      }}>
        Remove
      </button>
    </article>
  );
})

export default Item;
