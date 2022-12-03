import "./FeaturedProperties.scss";

const FeaturedProperties = () => {
  return (
    <div className="fp">
    <div className="fpItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/74045548.jpg?k=7a281f524b933de3e3b2dd8bb1c9b55ba0091a0c515fdb728272b757cdbe6bf2&o=&hp=1"
        alt=""
        className="fpImg"
      ></img>
      <span className="fpName">Sugar Loft Apartments</span>
      <span className="fpCity">Rio de Janeiro</span>
      <span className="fpPrice">Starting from $189</span>
      <div className="rating">
        <button>8.7</button>
        <span>Excellent</span>
        </div>
      </div>

      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/45976851.jpg?k=7bd839dd07e1384ebfde004069e25090a4a901728e9bdc8e200f411ed243999d&o=&hp=1"
          alt=""
          className="fpImg"
        ></img>
        <span className="fpName">
          LivinParis - Luxury 3 Bedrooms Le Louvre I
        </span>
        <span className="fpCity">Paris</span>
        <span className="fpPrice">Starting from $250</span>
        <div className="rating">
          <button>8.2</button>
          <span>Very good</span>
        </div>
      </div>

      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/74594395.jpg?k=d5a71c0578774c302d2b8854482beaa8785077c616f956aac74766124023a319&o=&hp=1"
          alt=""
          className="fpImg"
        ></img>
        <span className="fpName">Sun Spalato Views</span>
        <span className="fpCity">Split</span>
        <span className="fpPrice">Starting from $500</span>
        <div className="rating">
          <button>9.1</button>
          <span>Superb</span>
        </div>
      </div>

      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/85257658.jpg?k=4492528f7ee3f1cf80d7415491d106d923dbfabb21e0361d7a0d003f70939492&o=&hp=1"
          alt=""
          className="fpImg"
        ></img>
        <span className="fpName">Lehman Locke</span>
        <span className="fpCity">London</span>
        <span className="fpPrice">Starting from $309</span>
        <div className="rating">
          <button>8.9</button>
          <span>Fabulous</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
