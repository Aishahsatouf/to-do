import React, { useContext } from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import { SettingsContext } from '../../context/settings';
import './todo.scss';


function Settings(props) {

  const context = useContext(SettingsContext);
  return (
    <div id='settings'>
      <h3>Settings</h3>
      <h6>Sort based on: </h6>

      <InputGroup className="mb-3">
        <label>
          Completed
        <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Completed" onChange={context.toggleIncomplete} />
          </InputGroup.Prepend>
        </label>
      </InputGroup>

      <InputGroup className="mb-3">
        <label>
          Difficulty
        <InputGroup.Prepend>
            <InputGroup.Radio aria-label="Difficulty" name='sort' onChange={context.toggleDifficulty} />
          </InputGroup.Prepend>
        </label>
      </InputGroup>


      <InputGroup className="mb-3">
        <h6 id='numPP'>
          Number of tasks per page
        <InputGroup.Prepend>
            <form onSubmit={(e) => {
              e.preventDefault();
              context.numberPages(e.target.num.value)
            }} >
              
                <input type='number' min="1" name="num" />
                <button type="submit">Sort</button>
             
            </form>
            {/* <input type='number' onChange={(e) => context.numberPages(e.target.value)} /> */}
          </InputGroup.Prepend>
        </h6>
      </InputGroup>

    </div>
  )
}


export default Settings;


