import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {postRecipes, getDiets} from '../../redux/actions'
import {useDispatch, useSelector} from 'react-redux'
import s from './recipeCreate_modules.css'

const RecipeCreate = () => {
    const dispatch = useDispatch()
    const diets = useSelector((state) => state.diets)
    const history = useHistory()
    const [error, setError] = useState({})
    const [input, setInput] = useState({
      name : "",
      image : "",
      healthScore : "",
      stepByStep : "",
      dishSummary : "",
      diets : [],
      
    })

    const validacionName = (input) => {
      const error = {}
      if (!input.name) {
        error.name = "Se requiere un nombre"
      } 
      if (!input.dishSummary) {
        error.dishSummary = "Se require escribir"
      }
      return error
    }



      const handleInput = (e) => {
          setInput({
            ...input,
            [e.target.name ] : e.target.value
          })
          setError(validacionName({
            ...input,
            [e.target.name] : e.target.value
          }))

      }

      const handleCheck = (e) => {
         
        if(e.target.checked) {
          setInput({
            ...input,
          diets : [...input.diets, e.target.value]
          })
        }
        console.log(input);
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postRecipes(input))
        alert("Receta Creada !!")
        setInput({
          name : "",
          image : "",
          healthScore : "",
          stepByStep : "",
          dishSummary : "",
          diets : [],
          
        })
        history.push("/home")
      }




    useEffect(() => {
      dispatch(getDiets())
    },[dispatch])


    


    

    return (
    <div className='recipeCreate_container' >
        <div className='recipe_card' >
        <h2 className='Titulo' >Crea tu receta !!</h2>
      <form onSubmit={(e) => handleSubmit(e)} >
        <div>
          <label>Nombre:</label>
          <input type='text' placeholder='Escribí tu nombre acá...' value={input.name} name='name' onChange={handleInput} />
          {error.name && (<p className='error' >{error.name}</p>)}
        </div>
        <div>
          <label >Imagen:</label>
          <input type='text' placeholder='Pega tu imagen acá...' value={input.image} id='imagen'  name='image'  onChange={(e) => handleInput(e)} />
        </div>
        <div>
          <label>healthScore:</label>
          <input defaultValue={0} type='range' placeholder='Escribí tus puntos de salud..' value={input.healthScore} name='healthScore' onChange={handleInput} />
          <p className='numeroHS' defaultValue={0} >{input.healthScore}</p>
        </div>
        <div>
          <label>Step By Step:</label>
          <input type='text' placeholder='Escribí tus pasos acá...' value={input.stepByStep} name='stepByStep' onChange={handleInput} />
        </div>
        <div>
          <label>dishSummary:</label>
          <textarea  name='dishSummary' cols='40' rows='3' value={input.dishSummary} onChange={handleInput} placeholder="Ingrese una Description de la Receta" />
          {error.dishSummary && (<p>{error.dishSummary}</p>)}
        </div>

        <h2>Tipos de Dieta: </h2>
        {diets.map((e) => <div>
          <label>{e.name}</label>
          <input type='checkbox' value={e.name} name={e.name} onChange={(e) => handleCheck(e)} />
        </div>)}

          <div className='container_buttons'>
        <Link to='/Home'><button className='Volver' >Volver</button></Link>
            <button className='Crear_Receta'>Crear Receta</button>
            </div>
        
        
      </form>
             </div>
      </div>

      
    )
}



export default RecipeCreate
