import './App.css';
import { AppRouter } from './router/AppRouter';
import { ItemProvider } from './helpers/ItemContext'

function App() {

  return (
        <div className="App">
          <ItemProvider>

            <AppRouter></AppRouter> 

          </ItemProvider>

        </div>
  );
}

export default App;
