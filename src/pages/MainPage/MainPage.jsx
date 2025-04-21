import Products from "../../components/Product";
import Slider from "../../components/Slider";
import Search from "../../features/Search/Search"


const MainPage = () => {

  return (
    <div>
      <Search />
      <button>Omurbek</button>
      <Products />
    </div>
  )
}

export default MainPage;