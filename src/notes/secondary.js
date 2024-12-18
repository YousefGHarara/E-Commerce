import React from 'react';
import Card from './card';
import { useLocation, useSearchParams } from 'react-router-dom';

var data = require("./items.json")

const Secondary = (props) => {

  const [serachParams, setSerachParams] = useSearchParams();

  const id = serachParams.get("id");

  // const locatoin = useLocation();
  // const newId = locatoin.state.id;

  // console.log(newId);
  // console.log(locatoin);

  console.log(id);

  return (
    <div className='secondary'>
      
      {/* {data.filter((e, i) => {
        return e.id === Number(id);
      })} */}
      
      <header>
      {data.filter((e, i) => {
        return e.id === Number(id);
      }).map((e, i) => {
        return <Card key={i} itemName = {e.itemName} passport = {e.passport}/>
      })}

      </header>
    </div>
  );
}

export default Secondary;
