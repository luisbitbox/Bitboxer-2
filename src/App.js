import './App.css';
import { MiContexto } from './helpers/MiContexto';
import { AppRouter } from './router/AppRouter';

function App() {
  const valorContexto = true;

  return (
      <MiContexto.Provider value={valorContexto}>
        <div className="App">

            <AppRouter></AppRouter> 

        </div>
      </MiContexto.Provider>
  );
}

export default App;
