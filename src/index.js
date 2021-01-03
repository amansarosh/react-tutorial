import React from 'react'; // Must be used for every component
import ReactDom from 'react-dom'; // Need this import for displaying
import './index.css' // css import

// setup variables
  const firstBook = {
    img: "https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._SX327_BO1,204,203,200_.jpg",
    title: 'A Promised Land',
    author: 'Barack Obama'
  }

  const secondBook = {
    img: "https://images-na.ssl-images-amazon.com/images/I/51Tlm0GZTXL._SX329_BO1,204,203,200_.jpg",
    title: 'Atomic Habits',
    author: 'James Clear'
  }

function BookList() {
  return( 
  <section className="booklist">
  <Book
  img={firstBook.img}
  title={firstBook.title}
  author={firstBook.author}
  >

<p>Lorem ipsum dolor sit amet consectetur 
adipisicing elit. Accusamus sequi vel quod,
veniam distinctio ex reiciendis totam praesentium 
ullam assumenda!
</p>

  </Book>

  <Book 
  img = {secondBook.img}
  title = {secondBook.title}
  author = {secondBook.author}
  />

  </section>
  )};

const Book = (props) => {

  const { img, title, author, children } = props

  return (
  <article className='book'>

    <img src={img} alt="A Promised Land"/>
    <h1>{title}</h1>
    <h4>{author}</h4>
    {children}

  </article>
  )}
 
// This looks for what we want to render and where we want to render it.
// In this case we want to render BookList and we want to render in the root.
ReactDom.render(<BookList/>, document.getElementById('root'));