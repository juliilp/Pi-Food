import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import{ getRecipes, orderByName, orderByScore, filterByTypeDiet, getDiets} from '../../redux/actions'
import Card from '../Card/Card'
import Paginado from '../Paginado/Paginado'
import {Link} from 'react-router-dom'
import SearchBar from '../Search/Search'
import style from './Home_modules.css'


const Home = () => {

  const dispatch = useDispatch()
  const allRecipes = useSelector((state) => state.recipes) //mapStateToProps
  const diets = useSelector((state) => state.diets)

  const [currentPage, setCurrentPage ] = useState(1) // OK
  const [recipesPerPage, setRecipesPerPage] = useState(9) // OK
  const [diet, setDiet] = useState('all')
  const [order, setOrder] = useState(0)
  const [orderH, setOrderH] = useState(0)
  const indexOfLastRecipes = currentPage * recipesPerPage // OK
  const indexOfFirstRecipes = indexOfLastRecipes - recipesPerPage // OK
  const currentRecipes = allRecipes.slice(indexOfFirstRecipes, indexOfLastRecipes) // OK
  

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }


  useEffect(() => {
    dispatch(getRecipes())
    dispatch(getDiets())
  },[dispatch])



  const handleClick = (e) => {
    e.preventDefault()
    dispatch(getRecipes())
    dispatch(getDiets())
    }

    const handleSort = (e) => {
      e.preventDefault()
      dispatch(orderByName(e.target.value))
      setCurrentPage(1)
      setOrder(`Ordenardo ${e.target.value}`)
    }

    const handleSortScore = (e) => {
      e.preventDefault()
      dispatch(orderByScore(e.target.value))
      setCurrentPage(1)
      setOrder(e.target.value)
    }

    const handleFilterByTypeDiet = (e) => {
      e.preventDefault();
      // setCurrentPage(1);
      dispatch(filterByTypeDiet(e.target.value));
      // setDiet(e.target.value)
  }


  return (
    <div className='container_home'>
      <div className='container_navbar' >

      <div>
          <SearchBar />
       </div>

        <div>
      <select className='abecedario_container'   defaultValue={'DEFAULT'} onChange={(e) => handleSort(e)} >

      <option  className='options'value="DEFAULT" disabled>Order. Por Abecedario</option>
        <option className='options' value='asc'>A to Z</option>
        <option  className='options'value='desc'>Z to A</option>
      </select>
      </div>
               <div >
                    <select  className='Dietas_tipos'   onChange={e => handleFilterByTypeDiet(e)}>
                      <option value='all'>Diets types</option>
                        {diets && diets.map((e) => {
                          return(
                            <option key={e.id} value={e.name}>
                            {e.name}
                            </option>
                          )
                        })}

              </select>
                </div>

                <div className='max_min_container' >
                    <select className='select' defaultValue={'DEFAULT'} onChange={(e) => handleSortScore(e)} >
                        <option className='options' value="DEFAULT" >Order by Score</option>
                        <option  className='options' value="max">Min to Max</option>
                        <option className='options' value="min">Max to Min</option>
                    </select>
                </div>



                          <div>
      <Link to='/recipes/' ><button className='crear_recetas'  >Crear Receta</button></Link>
      {/* Aca estaba el paginado  */}
      <button  className='button_actualizar' onClick={e => handleClick(e)} >Actualizar</button>
                          </div>
    </div>


    <div className='container_card '> 
    { 
    currentRecipes.map((recipe) => 
    <div > 
      <Card 
      key={recipe.id}
      name={recipe.name} 
      id = {recipe.id}
      image={recipe.image}
       healthScore={recipe.healthScore}   
      diets= {recipe.diets.map((e) => e.name + ", ")}
      detail="Detail"
        />
        </div>
    )}      
    </div>
    <Paginado recipesPerPage ={recipesPerPage} allRecipes = {allRecipes.length} paginado = {paginado}    />

    </div>
  )
}



export default Home