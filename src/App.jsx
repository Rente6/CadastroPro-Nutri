import './Pop.css'
import Logo from "./assets/Logo.svg"
function App() {
  return (
    <>
     <div className="fundo">
      {/* <h1 className='pop'>Profissionais</h1> */}
      <div className="bloco">
      <img src={Logo} alt="" width="70px" height="46px"/>
        <h2>Nome Completo:</h2>
        <input type="text" id="nome"/>
        <h2>Idade:</h2>
        <input type="number" id="idade"/>
        <h2>Email:</h2>
        <input type="email" id="peso"/>
        <h2>Senha:</h2>
        <input type="password" id="objetivo"/>
        <h2>N° de telefone:</h2>
        <input type="number" id="oqg"/>
        <h2>Formação academica:</h2>
        <input type="text" id="oqng"/>
        <h2>CRN/CRM:</h2>
        <input type="text" id="oqng"/>
        <h2>LinkedIn/Outra rede social:</h2>
        <input type="text" id="oqng"/>
        <h2>Adicione seu diploma:</h2>
        <input type="file" id="foto" />
        <button>Criar</button>
      </div>
    </div> 
    </>
  )
}

export default App
