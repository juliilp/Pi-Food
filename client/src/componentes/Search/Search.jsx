import React from 'react'
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { getNameRecipes } from '../../redux/actions';
import style from './Search_modules.css'


const SearchBar = () => {
  const dispatch = useDispatch()
  // const getRecipes = useSelector((state) => state.recipesName)
  const [name, setName] = useState("")


  const handlerInputChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
    
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    dispatch(getNameRecipes(name))
    setName('')
    
  }

  return (
    <div className='input_button_search_container'>
      <input className='input_search'  type="text" placeholder='Buscar...'  onChange={(e) => handlerInputChange(e)} />
      <button className='button_search' type='submit' onClick={(e) => handlerSubmit(e) } >Enviar</button>
    </div>
  )

}

export default SearchBar