import React, { useState, useContext, useEffect } from 'react';
import { Card, Badge } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { ThemesContext } from '../context/themeContext';

function TodoList(props) {
  const [offset, setoffset] = useState(0);
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrent] = useState(1);
  const context = useContext(ThemesContext);
    console.log(context.notePerPage)
  const receivedData = () => {
    const list = props.list;
    let slice = list.slice(offset, offset + context.notePerPage)
    let newCount = Math.ceil(list.length / context.notePerPage)
    setPageCount(newCount);
    setData(slice);

  }
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const newoffset = selectedPage * context.notePerPage;
    setCurrent(selectedPage);
    setoffset(newoffset);
    receivedData();
  }
  const setVariation = (complete) => {
    console.log(complete);
    return complete ? 'danger' : 'success';
  };
  const handleValue = (complete) => {
    return complete ? 'Complete' : 'Pending';
  };
  
  // const handleNoteNum = (e) => {
  //   e.preventDefault();
  //   e.target.reset();
  //   let num = e.target.num.value;
  //   setPagenation(num);
  // }

  // useEffect(()=> {
  //   console.log("in use effect !!")
    
  //   if(data.length==0) {
  //     receivedData ()
     
  //   } else {
  //     setData(props.list);
  //   }
  // }, [data]);
    
    useEffect(receivedData, [data]);

  return (
    <>
      <form onSubmit={e=>{context.setPagenation(e.target.num.value); }} >
        <input type="number" name="num" />
        <button type="submit">OK</button>
      </form>
      {data.map((item) => (
        <Card key={item._id}>
          <Card.Header as="h5">
            <Badge
              className="badge-padding"
              pill
              onClick={() => props.handleComplete(item._id)}
              variant={setVariation(item.complete)}
            >
              {handleValue(item.complete)}{' '}
            </Badge>
            {item.assignee}
            <span
              onClick={() => props.handleDelete(item._id)}
              className="delete-btn"
              variant="outline-secondary"
            >

            </span>{' '}
            <button onClick={() => props.handleDelete(item._id)}> X</button>
          </Card.Header>
          <Card.Body>
            <Card.Title>{item.text}</Card.Title>
            <Card.Text className="right-text">
              Difficulty: {item.difficulty}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}

      <section>
        <div>
          {/* {this.state.postData} */}
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"} />
        </div>
      </section>
    </>
  );
}

export default TodoList;