import { useEffect, useState } from 'react';
import axios from "axios";
import cookie from 'react-cookies';
const todoAPI = 'https://backend-aisha.herokuapp.com';
const useAjax = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const _addItem = async (item) => {
    try {
      console.log("from add item====?",item)
      setLoading(true);
      const data = await axios({
        method: 'post',
        url:`${todoAPI}/todo`,
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookie.load('auth')}`
        },
        data: JSON.stringify(item)
      })
      setList([...list, data.data.toDo])
      setLoading(false);
    } catch (error) { console.log("from getting all data", error) };

  };
  const removeItem = async(id) => {
    try{
      setLoading(true);
     let obj={id:id}
     const data= await axios({
      method: 'delete',
      url:`${todoAPI}/deletelist`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${cookie.load('auth')}`
      },
      data: JSON.stringify(obj)
    });
    setList(list.filter(i => i._id !== id))
    setLoading(false);

    }catch(error){(console.log(error))};
    


  };
  
  const _getOneTodoItem = async (id) => {
    try{
      console.log(id)
     
       const data =await axios({
        method: 'get',
        url:`${todoAPI}/onetodo/${id}`,
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookie.load('auth')}`
        },
        params:{
          id:id
        }
      })
      setItem({...data.data.toDo[0]});
      console.log("from ajax",item)
    }catch(error){
      console.log(error)
    }
  };

  const updateItem =async (id,data) => {
    try{
      const obj={...data,id:id}
      setLoading(true);
      
      await axios({
      method: 'put',
      url:`${todoAPI}/editlist`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${cookie.load('auth')}`
      },
      data: JSON.stringify(obj)
    });
    await _getTodoItems()
    setLoading(false);

    }catch(error){(console.log(error))};

  };


  const _toggleComplete = async (id)=> {
     try{
      let item = list.filter(i => i._id === id)[0] || {};

      if (item._id) {
  
        item.complete = !item.complete;
  
        // let url = `${todoAPI}/${id}`;
        let obj={id:id}
        await axios({
          method: 'put',
          url:`${todoAPI}/complete`,
          headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
            Authorization: `Bearer ${cookie.load('auth')}`
          },
          data: JSON.stringify(obj)
        });
        await _getTodoItems()
      }
     }catch(error){(console.log(error))};
        // .then(response => response.json())
        // .then(savedItem => {
        //   setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
        // })
        // .catch(console.error);

  };

  const _getTodoItems = async () => {
    try{
      const data =await axios({
        method: 'get',
        url:`${todoAPI}/todo`,
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookie.load('auth')}`
        }
      })
      setList(data.data.toDo)
      setLoading(false);
    }catch(error){
      console.log(error)
    }
  };

  useEffect(_getTodoItems, []); // execute once only

  return [_addItem, removeItem, updateItem, _toggleComplete, _getTodoItems,_getOneTodoItem, loading, list,item];
};

export default useAjax