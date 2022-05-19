import './erro.css'
import {Link} from 'react-router-dom'
function erro(){
    return(
        <div className='not-Found'>
            <h1 className="erro">A pagina solicitada nao existe</h1>
        <h2 className='erro'>Paginas que talvez voce esteja buscando</h2>
        <Link to="/">Acesse aqui a pagina dos filmes</Link>
        </div>
        
    )
}
export default erro
