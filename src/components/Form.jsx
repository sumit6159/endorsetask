import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [name, setName] = useState([]);
  const [stage, setStage] = useState([]);
  const [idea, setIdea] = useState("");
  const [age, setAge] = useState([]);
  const [service, setService] = useState();
  const [offer, setOffer] = useState([]);
  const nameHandler = (e) => {
    setName([e.target.value]);
  };
  const ideaHandler = (e) => {
    setIdea(e.target.value);
  };
  const selectHandler = (e) => {
    setStage(e.target.value);
  };

  const ageHandler = (e) => {
    e.preventDefault();
    if (e.target.value < 1 || e.target.value > 100) {
      alert("age of establishment must be between 0 to 101");
      return;
    }
    setAge([e.target.value]);
  };
  const selectHandler1 = (e) => {
    setService(e.target.value);
  };
  const offerHandler = (e) => {
    setOffer([e.target.value]);
  };

  return (
    <div className="container">
      <div className="formbox">
        <form>
          <label htmlFor="name">Name:</label>
          <br></br>
          <input
            type="text"
            placeholder="enter your name"
            onInput={nameHandler}
          />
          <br></br>
          <label htmlFor="business_stage">Stage of business:</label>
          <br></br>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={selectHandler}
            style={{ width: "50%" }}
          >
            <option></option>
            <option value="Start-up">Start-up</option>
            <option value="Scale-up">Scale-up</option>
          </select>
          <label htmlFor="businessIdea">Idea:</label>
          <br></br>
          <input
            type="text"
            placeholder="enter your business_idea"
            onInput={ideaHandler}
          />
          <br></br>
          <hr />
          <label htmlFor="ageOfEstablishment">
            Age of establishment (years) (Enter 0 if it is yet to start-up):
          </label>
          <br></br>
          <input
            type="number"
            placeholder="age of establishment"
            max="100"
            min="0"
            onChange={ageHandler}
            style={{ width: "50%" }}
          />
          <br></br>
          <hr />
          <label htmlFor="ageOfEstablishment">
            Primary Products/Services offfered:
          </label>
          <br></br>
          <input
            type="text"
            placeholder="branded mobile phones, repair of laptop batteries, fresh kadak tea, authentic Indian cuisine, full-fat milk, fresh vegetables and fruits, stitching and alteration of garments, ladies wear (like salwar kurta, banarasi saree, nightsuites, etc.), facial, massage, high quality seeds, etc."
            onChange={offerHandler}
            style={{ width: "100%", height: "8vh" }}
          />
          <br></br>
          <label htmlFor="Offered to">Offered_to:</label>
          <br></br>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={selectHandler1}
            style={{ width: "50%" }}
          >
            <option></option>
            <option value="End customers">End customers</option>
            <option value="Wholesalers">Wholesalers</option>
            <option value="Distributers">Distributers</option>
            <option value="Retailers">Retailers</option>
          </select>
        </form>
      </div>
      <div className="sentence-Box">
       {name.map((e)=>(
         <p>
         {name} is looking to {stage} their business of {idea}
       </p>
       ))}
        {age.map((e) => (
          <p>
            This enterprise has been operational since {e}  years and has been
            serving its customers since then.
          </p>
        ))}
      {offer.map((e)=>  (<p>
        This establishment offers products/services like- {offer} to {service}.
      </p>
      ))}
      </div>
      
    </div>
  );
};

export default Form;
