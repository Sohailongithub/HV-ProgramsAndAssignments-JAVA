import './App.css';
import Products from './Products';

function App() {
  const products = [
    {"sr":"1","title":"SamsungS23"},
    {"sr":"2","title":"IPhone 15"},
    {"sr":"3","title":"Mi10"},
    {"sr":"4","title":"RealMe 15"}
  ]
  return (
    <div classname="App">
    {
      products.map((Product) => {
        return(
          <Products serial={Product.sr} name={Product.title} key={Product.sr}></Products> 
        )
      })
    }
    
    </div>
  )

}


export default App;
