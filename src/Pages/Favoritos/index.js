import './favoritos.css';
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'

function Favoritos(){

    const [filmes, setfilmes] = useState([])


    useEffect(()=>{
        const minhalista = localStorage.getItem("@filmeFlix");
        setfilmes(JSON.parse(minhalista)|| [])

    },[])

    /* função exclusao de filmes */
    function excluirFilme(id){
      let filtroFilmes = filmes.filter( (item)=>{
          
         return( item.id !== id)
        

      }) 
      toast.info("filme exlcluido com sucesso")
        setfilmes(filtroFilmes);
        localStorage.setItem("@filmeFlix", JSON.stringify(filtroFilmes))
    }
    return(
        <div className="meusFilmes">
            <h1>Meus filmes</h1>
            {filmes.length === 0 &&<span>Não existem filmes salvos na lista</span>}
            <ul>
                {filmes.map((item)=>{
                    return(
                        <li  key={item.id}>
                            <span className="tituloFilme">{item.title}</span>
                            <div>
                            <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                            <button onClick={()=> excluirFilme(item.id)}>Exclur</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos