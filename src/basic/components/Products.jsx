import React, { useEffect, useState } from "react";

export default function Products() {
  // const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);
  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("데이타가 왔당~!");
        setProducts(data);
      });
    return () => {
      console.log("정리 함 하자!");
    };
  }, [checked]);
  // fetch("data/products.json")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log("데이타를 받아왓땅");
  //     setProducts(data);
  //   });
  return (
    <>
      <input id="checkbox" type="checkbox" value={checked} onChange={handleChange} />
      <label htmlFor="checkbox">Show Only HotSale!</label>
      <ul>
        {products.map((product) => (
          // 고유한 key깂을 넣어줘야 워닝이 안뜬다
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      {/* <button onClick={() => setCount((prev) => prev + 1)}>{count}</button> */}
    </>
  );
}
