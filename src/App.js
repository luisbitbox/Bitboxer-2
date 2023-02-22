import './App.css';
import { AppRouter } from './router/AppRouter';
import { ItemProvider } from './helpers/ItemContext'
import { SupplierProvider } from './helpers/SupplierContext';
import { PriceReductionProvider } from './helpers/PriceReductionContext';

function App() {

  return (
        <div className="App">
          <ItemProvider>
          <SupplierProvider>
          <PriceReductionProvider>

            <AppRouter></AppRouter> 

          </PriceReductionProvider>
          </SupplierProvider>
          </ItemProvider>

        </div>
  );
}

export default App;
