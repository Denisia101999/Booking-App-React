import "./EmailList.scss";

const EmailList = () => {
  return (
    <div className="email">
    <h1 className="emailTitle">Save time and money!</h1>
    <span className="emailDesc">Subscribe and we'll send you the best offers</span>
    <div className="emailInputContainer">
        <input type="email" placeholder="Your email.."></input>
        <button>Subscription</button>
    </div>
      
    </div>
  )
}

export default EmailList;


