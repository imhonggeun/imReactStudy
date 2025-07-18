import {createContext, useContext, useState} from 'react'
export const ThemeContext = createContext()

const MyProvider = ({Children}) => {
    const [show, setShow] = useState(false)
    return(
        <ThemeContext.Provider value={{show, setShow}}>
            {Children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)

export default MyProvider