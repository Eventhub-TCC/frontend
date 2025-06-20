import { NavLink } from "react-router"
import "./ItemBarraLateral.css"
import { useEffect, useState } from "react";

const ItemBarraLateral = ({minimizado = false, texto, icone, caminho, corSelecionado = "var(--purple-700)", corIconeTextoSelecionado="white", children}: any) => {
    const [larguraTela, setLarguraTela] = useState(window.innerWidth);
    
    useEffect(() => {
    const redimensionarTela = () => setLarguraTela(window.innerWidth);

    window.addEventListener('resize', redimensionarTela);

    return () => window.removeEventListener('resize', redimensionarTela);
    }, []);
    
    return (
      <li className="item-barra">
          <NavLink 
              to={caminho} 
              className={({isActive}: any) => (`item-barra__link ${isActive ? "item-barra__link--ativo" : ''}`)} 
              style={{'--cor-barra-lateral': corSelecionado, '--cor-icone-texto-barra': corIconeTextoSelecionado} as React.CSSProperties}
          >
              <div className="item-barra__icone-container">
                  {
                      icone ? <i className={`${icone} item-barra__icone`}></i> : ''
                  }
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      {children ? children : ''}
                  </svg>
              </div>
              {
                !minimizado || larguraTela <= 1024 ? <span className="item-barra__texto">{texto}</span> : ''
              }
          </NavLink>
      </li>
    )
}

export default ItemBarraLateral