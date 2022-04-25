import React from "react";
import { useEffect, useState } from "react";

import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
   display:grid;
   grid-template-columns:200px 200px 200px;
   margin-left:300px;
   gap:20px;
`;

const Books = () => {
  const [data1, setData] = useState([]);
  useEffect(() => {
     const getData = async()=>{
       try {
        let res = await fetch(` http://localhost:8000/books`);
        let data = await res.json();
        setData(data)
       }
       catch (e){
           console.log(e)
       }
       
     }
     getData()
    // make a GET request to http://localhost:8080/books to get all the books data
  }, []);
console.log(data1)
  return (
    <>
      <h1>Books</h1>
      
        {data1.map(item=>{
           return (
            <Grid data-testid="books-container">
                
                   <img src ={item.thumbnailUrl}/>
                   <h4>{item.title}</h4>
                   <p>{item.isbn}</p>
                
            </Grid>
                
           )
        })}
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
     
    </>
  );
};
export default Books;