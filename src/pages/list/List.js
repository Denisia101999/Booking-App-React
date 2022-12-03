import "./List.scss";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar></Navbar>
      <Header type="list"></Header>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearchTitle">Search</h1>
            <div className="listSearchItem">
              <label>Destination</label>
              <input type="text"></input>
            </div>
            <div className="listSearchItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                ></DateRange>
              )}
            </div>
            <div className="listSearchItem">
              <label>Options</label>
              <div className="listSearchOptions">
                <div className="listSearchOptionItem">
                  <p className="listSearchOptionText">
                    Min price <small> per night</small>
                  </p>
                  <input
                    className="listSearchOptionInput"
                    type="number"
                  ></input>
                </div>

                <div className="listSearchOptionItem">
                  <p className="listSearchOptionText">
                    Max price <small> per night</small>
                  </p>
                  <input
                    className="listSearchOptionInput"
                    type="number"
                  ></input>
                </div>
                <div className="listSearchOptionItem">
                  <p className="listSearchOptionText">Adult</p>
                  <input
                    className="listSearchOptionInput"
                    type="number"
                    min={1}
                    placeholder={options.adult}
                  ></input>
                </div>
                <div className="listSearchOptionItem">
                  <p className="listSearchOptionText">Children</p>
                  <input
                    className="listSearchOptionInput"
                    type="number"
                    min={0}
                    placeholder={options.children}
                  ></input>
                </div>
                <div className="listSearchOptionItem">
                  <p className="listSearchOptionText">Room</p>
                  <input
                    className="listSearchOptionInput"
                    type="number"
                    min={1}
                    placeholder={options.room}
                  ></input>
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
