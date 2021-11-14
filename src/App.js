
import './App.css';
import Datafetch from './Datafetch';
import Pagination from './Pagination';
import DataFetchButton from './DataFetchButton';
   
function App() {
  return (
   <div className="container">
     <h2 className="text-primary display-7 mb-4">Dummy API</h2>
      <Datafetch />
      {/* <DataFetchButton /> */}
     <Pagination />
   </div>
  );
}

export default App;
