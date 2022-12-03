import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import EmailList from "../../components/emailList/EmailList";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./Hotel.scss";

const Hotel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = (i) => {
    setSlideIndex(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideIndex;
    if (direction === "l") {
      newSlideIndex = slideIndex === 0 ? 5 : slideIndex - 1;
    } else {
      newSlideIndex = slideIndex === 5 ? 0 : slideIndex + 1;
    }

    setSlideIndex(newSlideIndex);
  };
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/304546360.jpg?k=4240e44731efc140c19fc651e1ef3f6c6ed1b22dc093b381e255def5c664d1e0&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/304545656.jpg?k=5f666b4e30ad3f5d907874660e8a26b5f5da6226cf087e3667ad608a0cc09c0f&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/304546256.jpg?k=e78fd0df5cac94a84626ce0bdee885e4231cac53fddec9d1789970567e1b5658&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/320410696.jpg?k=46790e91043e4666aaf0b5c5171beb08f59f56ecd6e3a24f281fa10245c05293&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/304546789.jpg?k=667cc7bd3fa6a1dd450936a9128ec8d9910b137ba34599b122adf93d194a6f9f&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/304546345.jpg?k=5e01c1d55801b955155e9572ee4efb33e35bd2aa77a4aed6b47ddde673df9e42&o=&hp=1",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            ></FontAwesomeIcon>
            <div className="sliderWrapper">
              <img
                src={photos[slideIndex].src}
                alt=""
                className="sliderImg"
              ></img>
            </div>

            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            ></FontAwesomeIcon>
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Book now</button>
          <h1 className="hotelTitle">Hotel Paxton Barcelona</h1>
          <div className="hotelAdress">
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            <span>
              {" "}
              160 Carrer de Llull, Sant Martí, 08005 Barcelona, Spania
            </span>
          </div>
          <span className="hotelDistance">2.9 km from the center</span>
          <span className="hotelPriceHighlight">
            Book a stay over $290 at this property and get a free taxi ride from
            the airport
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  src={photo.src}
                  onClick={() => handleOpen(i)}
                  alt=""
                  className="hotelImg"
                ></img>
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <p className="hotelDesc">
                Hotel Paxton Barcelona features a restaurant, seasonal outdoor
                swimming pool, a fitness center and bar in Barcelona. This
                4-star hotel offers a shared lounge and a concierge service. The
                accommodation features a 24-hour front desk, a shuttle service,
                room service and free WiFi throughout the property. The hotel
                rooms are equipped with air conditioning, desk, coffee maker,
                safe, flat screen TV and private bathroom with shower. Each room
                at Hotel Paxton Barcelona includes bed linen and towels. Guests
                at the property can enjoy a continental breakfast. Hotel Paxton
                Barcelona offers a terrace. Popular points of interest near the
                hotel include Bogatell Beach, Mar Bella Beach and Nova Icaria
                Beach. The nearest airport is El Prat Barcelona Airport, located
                20 km from Hotel Paxton Barcelona. This is the favorite place
                for tourists in Barcelona, ​​according to independent reviews.
                Couples especially appreciate this location. They gave it a
                score of 8.3 for a stay for 2 people.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 3 night stay!</h1>
              <span>
                Situated in the best rated area in Barcelona, ​​this hotel has
                an excellent location score of 8.3
              </span>
              <h2>
                <strong>$1000</strong>
                (3 nights)
              </h2>
              <button>Book now</button>
            </div>
          </div>
        </div>
        <EmailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
