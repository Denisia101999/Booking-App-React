import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faBed,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOnClick = (name, operations) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operations === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state : {destination,date,options}});
  };
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
       { type !== "list" &&
       <> 
       <h1 className="headerTitle"> A lifetime of discounts ? It's Genius.</h1>
        <p className="headerDesc">
          Get rewarded for travels - unlock instant savings of 10% or more with
          a free ddBooking Account
        </p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
            onChange={e => setDestination(e.target.value)}
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
            ></input>
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
              className="headerSearchText"
              onClick={() => {
                setOpenDate(!openDate);
              }}
            >
              {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                minDate = {new Date ()}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span
              onClick={() => {
                setOpenOptions(!openOptions);
              }}
              className="headerSearchText"
            >{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
            {openOptions && (
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.adult <= 1}
                      className="optionCounterBtn"
                      onClick={() => {
                        handleOnClick("adult", "d");
                      }}
                    >
                      {" "}
                      -{" "}
                    </button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button
                      className="optionCounterBtn"
                      onClick={() => {
                        handleOnClick("adult", "i");
                      }}
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.children <= 0}
                      className="optionCounterBtn"
                      onClick={() => {
                        handleOnClick("children", "d");
                      }}
                    >
                      {" "}
                      -{" "}
                    </button>
                    <span className="optionCounterNumber">
                      {options.children}
                    </span>
                    <button
                      className="optionCounterBtn"
                      onClick={() => {
                        handleOnClick("children", "i");
                      }}
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.room <= 1}
                      className="optionCounterBtn"
                      onClick={() => {
                        handleOnClick("room", "d");
                      }}
                    >
                      {" "}
                      -{" "}
                    </button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button
                      className="optionCounterBtn"
                      onClick={() => {
                        handleOnClick("room", "i");
                      }}
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>Search</button>
          </div>
        </div></>}
      </div>
    </div>
  );
};

export default Header;
