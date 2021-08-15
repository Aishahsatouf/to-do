import { useState } from 'react';


const useForm = (callback) => {
  const [values, setValues] = useState({});
  const handleSubmit = (e) => {
      e.preventDefault();
      callback(values);
      setValues({});   
  }

  const handleChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
  }

  return [
      handleSubmit,
      handleChange,
  ];
}
export default useForm;