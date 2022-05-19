import {useEffect, useState} from 'react'
import api from '../../Services/api'

import './home.css'
import {Link} from 'react-router-dom'


function Home(){
 const [filmes, setFilmes] = useState([]);
 const [loading, setLoading]=useState(true)

 useEffect(() =>{
     async function loadFilmes(){
         const response = await api.get("movie/now_playing",{
             params:{
                 api_key: "8a88848547fdab812b6b63cdf712e5fb", 
                 language: "pt-BR", 
                 page: 1,
                }
            })

                
            setFilmes(response.data.results.slice(0, 10))
            setLoading(false)

     }
loadFilmes();

 },[])

 if(loading){
     return(
         <div className='loading'>
             <h2>Carregando filmes...</h2>
         </div>
     )
 }
    return(
        
        < div className='container'>
            <div className='lista_Filmes'>
                {filmes.map((filme)=>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path }`} alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                            </article>
                    )
                })}
            </div>
        </div>
            
        
    )
}

export default Home;