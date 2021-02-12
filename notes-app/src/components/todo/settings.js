import React, { useContext } from 'react';

import { SettingsContext } from '../../context/settings';

function Settings(props) {

  const context = useContext(SettingsContext);
  return (
    <>
      <h1>Settings</h1>
      <label>
        Completed sort
        <input type='checkbox' onChange={context.toggleIncomplete} />
      </label>
      <br />
      <label>
        {/* Date sort
        <input type='radio' defaultChecked name='sort' onChange={context.toggleDifficulty} /> */}
        Difficulty sort
        <input type='radio' name='sort' onChange={context.toggleDifficulty} />
      </label>
      <br />
      <form onSubmit={(e)=>{
        e.preventDefault();
        context.numberPages(e.target.num.value)}} >
       <label>
        Number of tasks
        <input type='number' min="1" name="num"/>
       <button type="submit">Sort</button>
      </label>
      </form>
    </>
  )
}


export default Settings;