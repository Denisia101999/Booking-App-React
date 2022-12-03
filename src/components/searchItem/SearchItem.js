import { useNavigate } from "react-router-dom";
import "./SearchItem.scss";

const SearchItem = () => {
  const navigate = useNavigate();
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square200/304814513.webp?k=afaff8c379f653747245de050b73e8307d265f45df51ed34bde069e13448db0f&o=&s=1"
        alt=""
        className="searchItemImg"
        onClick={() => navigate("/hotel/:id")}
      ></img>
      <div className="searchItemDesc">
        <h1 className="searchItemTitle">Hotel Paxton Barcelona</h1>
        <span className="searchItemDistannce">2.9 km from the center</span>
        <span className="searchItemTaxiOp"> Free airport taxi</span>
        <span className="searchItemSubtitle">
          {" "}
          Located in the 160 Carrer de Llull, Sant Martí, 08005 Barcelona,
          Spania
        </span>
        <span className="searchItemFeatures">
          {" "}
          Offers free WiFi and a washing machine.
        </span>
        <span className="searchItemCancelOp"> Free cancellation</span>
        <span className="searchItemCancelOpSubtitle">
          {" "}
          You can cancell later, so lock in this great price today!
        </span>
      </div>
      <div className="searchItemDetails">
        <div className="searchItemRating">
          <span>Excellent</span>
          <button>8.5</button>
        </div>
        <div className="searchItemDetailText">
          <span className="price">$245</span>
          <span className="taxes">Includes taxes and fees</span>
          <button className="availabilityButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
