import './App.css';
import { AppRouter } from './router/AppRouter';
import { ItemProvider } from './helpers/ItemContext'
import { SupplierProvider } from './helpers/SupplierContext';
import { PriceReductionProvider } from './helpers/PriceReductionContext';
import { UserProvider } from './helpers/UserContext';
import { DesactivationProvider } from './helpers/DesactivationContext';

function App() {

  return (
        <div className="App">
          <UserProvider>

          <ItemProvider>
          <SupplierProvider>
          <PriceReductionProvider>
          <DesactivationProvider>

            <AppRouter></AppRouter> 

          </DesactivationProvider>
          </PriceReductionProvider>
          </SupplierProvider>
          </ItemProvider>

          </UserProvider>
        </div>
  );
}

export default App;
