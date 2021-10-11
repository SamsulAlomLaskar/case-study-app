import "./Search.css";
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import ReactPaginate from 'react-paginate';

// import './Search.css'
function Search() {
     const [displayData, setdisplayData] = useState([{
         question:'Success is not final, failure is not fatal: it is the courage to continue that counts.',
         answer:'Success is not final, failure is not fatal: it is the courage to continue that counts.'   },
     {
        answer:'Determining what exactly defines a short story has been recurrently problematic.[2] A classic definition of a short story is that one should be able to read it in one sitting, a point most notably made in Edgar Allan Poe s essay"The Philosophy of Composition 1846 HG Wells described the purpose of the short story as The jolly art, of making something very bright and moving; it may be horrible or pathetic or funny or profoundly illuminating, having only this essential, that it should take from fifteen to fifty minutes to read aloud According to William,',
        question:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it'
    },
    {
      question:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it',
      answer:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it'
  }, {
    question:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it',
    answer:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it'},
{
  question:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it',
  answer:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it'}, 
  {
  question:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it',
  answer:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it'}, 
  {
  question:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it',
  answer:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it'
},
{
  question:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it',
  answer:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it'
}, {
question:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it',
answer:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it'},
{
question:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it',
answer:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it'}, 
{
question:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it',
answer:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it'}, 
{
question:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it',
answer:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it'
}])

const [pageNumber, setPageNumber] = useState(0);

const usersPerPage = 4;
const pagesVisited = pageNumber * usersPerPage;
const pageCount = Math.ceil(displayData.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


const displayDatas = displayData
.slice(pagesVisited, pagesVisited + usersPerPage)
.map((data,index) => {
  return (
    <div className="user">
     <Card xs={3} md={6} ls={3} >
  <Card.Body>
    <Card.Text className= "m-5 mt-1 mb-1">
    <h5 class="card-title" style={{color:'#707070'}}>Question {index + 1}</h5>
      {/* <p key={index}  id="question" style={{color:''#707070'}}>{data.question}</p> */}

    <i class="fas fa-check answer pr-3 m-100" style={{float:'left',color:'green', marginBottom:"3px"}}  ></i>
    <diV> <p key={index} id="question" style={{color:'#707070',justifyContent:'center',marginLeft:'20px'}}>{data.answer}</p></diV>
     
    </Card.Text>
  
  </Card.Body>
</Card>

    </div>
  );
});


    return <div className="">
      {displayDatas}
      <ReactPaginate 
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
        </div>
}

export default Search
