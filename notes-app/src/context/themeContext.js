import React, {useState} from 'react';

export const ThemesContext = React.createContext();

function ThemeProvider(props) {
    const [notePerPage,setPagenation]=useState(3);
    const[difficultySort,setSortedDefficulty]=useState('');
    const[showHide , setShowHide]=useState(false);

    const state = {
        notePerPage, 
        difficultySort, 
        showHide,
        setPagenation,
        setSortedDefficulty,
        setShowHide
    }

    return (
        <ThemesContext.Provider value={state}>
            {props.children}
        </ThemesContext.Provider>
    )
    
}

export default ThemeProvider;