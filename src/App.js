import './App.css';
import { AppRouter } from './router/AppRouter';
import { ItemProvider } from './helpers/ItemContext'
import { SupplierProvider } from './helpers/SupplierContext';
import { PriceReductionProvider } from './helpers/PriceReductionContext';
import { UserProvider } from './helpers/UserContext';

function App() {

  return (
        <div className="App">
          <UserProvider>

          <ItemProvider>
          <SupplierProvider>
          <PriceReductionProvider>

            <AppRouter></AppRouter> 

          </PriceReductionProvider>
          </SupplierProvider>
          </ItemProvider>

          </UserProvider>
        </div>
  );
}

export default App;
