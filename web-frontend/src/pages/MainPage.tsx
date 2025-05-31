
import MostPopular from "../components/MostPopular";
import '../App.css';
import Banner from "../components/Banner";
import { useProducts } from "../hooks/UseProduct";


function MainPage() {  
   const { products, loading, error } = useProducts();

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  return (
    <div className="Page //aspect-square bg-gray-800 rounded-4xl">
      <div className="Page content // sm:p-[30px] md:p-[60px] flex flex-col gap-8">
        <Banner/>
        <MostPopular products={products} />
      </div>
    </div>  
  );
}

export default MainPage;
