import { useEffect,useState } from "react";
import {  useParams, useNavigate} from 'react-router-dom'
import api from '../../Services/api' 
import './filme.css'
import {toast} from 'react-toastify'
function Filme(){

    const {id} = useParams();
    const [filme, setfilme] = useState({});
    const [loading, setLoading]= useState(true);
    const navigate = useNavigate();
    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key: "8a88848547fdab812b6b63cdf712e5fb", 
                 language: "pt-BR"
                }
            })

            .then((response)=>{
                setfilme(response.data)
                setLoading(false)
            })
            .catch(()=>{
              
                navigate("/",{replace: true});
                return;
            })
        }
        loadFilme();

        return()=>{
          
            

        }
    }, [navigate,id])
    /* função para salvar filmes */
    function salvarFilme(){
        const minhaLsita = localStorage.getItem("@filmeFlix");

        let filmesSalvos = JSON.parse(minhaLsita) || [];

        /* verificando se tem filmes duplicados */
        const ResFilmes = filmesSalvos.some((filmesSalvos)=> filmesSalvos.id === filme.id)

        if(ResFilmes){
            toast.warning("Filme ja se encontra na lista")
            return;
        }
        filmesSalvos.push(filme);
        localStorage.setItem("@filmeFlix", JSON.stringify(filmesSalvos))
        toast.success("Filme salvo com sucesso")


    }

    if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando detalhes</h1>
            </div>
        )
    }
    return(
        
            <div className="filme-info">
                <h1>{filme.title}</h1>
                <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path }`} alt={filme.title} className="img" />
                <h3>Sinopise</h3>
                <span>{filme.overview}</span>
                <strong>avaliação: {filme.vote_average} /10</strong>
                <strong> Quantidade de votos: {filme.vote_count}</strong>


                <div className="area-button">
                <button onClick={salvarFilme}>salvar</button>
                <button><a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} trailler`}>trailer</a></button>
                </div>
            </div>
            
        
    )
}

export default Filme;