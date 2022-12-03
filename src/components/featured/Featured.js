import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/xphoto/800x640/140042207.jpg?k=3b0805568ee89be2864453b418e85d3fb3d52628698abfe7168d3cb58fbb68db&o="
          className="featuredImg"
          alt="Roma-Coloseum"
        ></img>
        <div className="featuredTitle">
          <h1>Roma, Italy</h1>
          <h2>159 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/xphoto/800x640/140026622.jpg?k=5dddc4cabdbdf1459a8ae377f721bf47976e9ed92a1e9625456aa7faf18637df&o="
          className="featuredImg"
          alt="Paris"
        ></img>
        <div className="featuredTitle">
          <h1>Paris, France</h1>
          <h2>598 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/xphoto/800x640/140043635.jpg?k=fb945a64ef8fd00f4f931cca793cef97a3662e5712664f9e3c9fc39b0907ae2a&o="
          className="featuredImg"
          alt="Florence"
        ></img>
        <div className="featuredTitle">
          <h1>Florence, Italy</h1>
          <h2>159 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/xphoto/800x640/140018444.jpg?k=89bbd794f183ec292cc6a29998e2b50a0abf380849dfe056abc67f7f31810357&o="
          className="featuredImg"
          alt="Viena"
        ></img>
        <div className="featuredTitle">
          <h1>Vienna, Austria</h1>
          <h2>674 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
