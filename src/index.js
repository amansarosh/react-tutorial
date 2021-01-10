import React from 'react'; // Must be used for every component
import ReactDom from 'react-dom'; // Need this import for displaying
import './index.css' // css import

// setup variables
const books = [  // Every item in array is an object
{   id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._SX327_BO1,204,203,200_.jpg",
    title: 'A Promised Land',
    author: 'Barack Obama'
  }
,
 {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/51Tlm0GZTXL._SX329_BO1,204,203,200_.jpg",
    title: 'Atomic Habits',
    author: 'James Clear'
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/41czXAfMbDL._SX324_BO1,204,203,200_.jpg",
    title: 'Upstream: The Quest to Solve Problems Before They Happen',
    author: 'Dan Heath'
  }
,
];


function BookList() {
  return( <section className="booklist"> {books.map((book) => { // Now using the .map function we loop over the whole Book component.
    return (
  <Book key={book.id} {...book}></Book>
    );
  })} </section>
  )
};

const Book = ({img, title, author}) => {
  //attribute and eventHandler
  //onClick, onMouseOver

  const clickHandler = () => {
    alert('Hello World')
  }

  const complexExample = (author) => {
    console.log(author);
  }

  return (
  <article className='book'>

    <img src={img} alt="A Promised Land"/>
    <h1 onClick={() => console.log(title)}>{title}</h1>
    <h4>{author}</h4>
    <button type="button" onClick={clickHandler}>Ref Example</button>
    <button type="button" onClick={() => complexExample(author)}>Complex Example</button>
  </article>
  )}
 
// This looks for what we want to render and where we want to render it.
// In this case we want to render BookList and we want to render in the root.
ReactDom.render(<BookList/>, document.getElementById('root'));