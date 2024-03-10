import './App.css'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {

  return (
    <div className="App">
           <SayMyName nome = 'Miqueias'/>
           <Frase/>
           <Pessoa
            nome = "Nathasha"
            genero= "Menine"
            idade="99"
            profissao="Policiaun Disfarçadan"
            foto = "https://portalpopline.com.br/wp-content/uploads/2019/02/pabllo-vittar-altas-horas.jpg"
            />
           
          
    </div>
  );
}

export default App;
