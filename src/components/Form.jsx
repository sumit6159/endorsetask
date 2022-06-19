import React, { useState } from "react";

import Select from 'react-select'
import "./form.css";

const Form = () => {
  const options = [
    {label:"the entrepreneur's experience in this field,  ", value:1},
    {label:"inovative product service,  ", value:2},
    {label:"high profit margin,  ", value:3},
    {label:"high growth potential,  ", value:4},
    {label:"superior customer support,  ", value:5},
    {label:"frequency of customer visit,  ", value:6},
    {label:"abundant supply of raw material,  ", value:7},
  ]
  const locations = [
    {label:"Nearest to market,  ", value:1},
    {label:"good footfall,  ", value:2},
    {label:"Nearness to source of raw material,  ", value:3},
    {label:"lesser competition around,  ", value:4},
    {label:"Affordabilty,  ", value:5},
    {label:"no rental overheads,  ", value:6},
    {label:"Other such factors,  ", value:7},
  ]
  const avenues = [
    {label:"Distribution of marketing material,  ", value:1},
    {label:"storefront/business branding,  ", value:2},
    {label:"Seasonal discounts and offers,  ", value:3},
    {label:"Cross-promotion,  ", value:4},
    {label:"Digital marketing,  ", value:5},
    {label:"word of mouth,  ", value:6},
    {label:"Other such factors,  ", value:7},
  ]
  const scales = [
    {label:"increasing the variety of service/product,  ", value:1},
    {label:"expanding the current offering,  ", value:2},
    {label:"opening more outlets,  ", value:3},
    {label:"growing the scale of operations,  ", value:4},
    {label:"building value chain integration,  ", value:5},
    {label:"other allied revenue streams,  ", value:6},
    
  ]
  

  const [name, setName] = useState([]);
  const [stage, setStage] = useState([]);
  const [idea, setIdea] = useState("");
  const [age, setAge] = useState([]);
  const [service, setService] = useState();
  const [offer, setOffer] = useState([]);
  const [secondaryService, setsecondaryService] = useState([]);
  const [processedProduct, setProcessedProduct] = useState([]);
  const [exp, setExp] = useState([]);
  const [skill, setSkill] = useState([]);
  const [usps, getUsps] = useState()
  const [type, setType]= useState([])
  const [areaName, setAreaName] = useState([])
  const [owner, setOwner] = useState([])
  const [locality, setLocality] = useState([])
  const [area, setArea]= useState([])
  const [location, getLocation] = useState()
  const [market, setMarket] = useState([])
  const [primaryMarket, setPrimaryMarket]= useState([])
  const [customer, setCustomer] = useState([])
  const [ sale , setSale] = useState([])
  const [competition , setCompetition] = useState([])
  const [supplier, setSupplier] = useState([])
  const [avenue, getAvenue] = useState()
  const [scale, getScale] = useState()
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

  const secondaryServiceHandler = (e) => {
    setsecondaryService([e.target.value]);
  };
  const processedProductHandler = (e) => {
    setProcessedProduct([e.target.value]);
  };
  const experienceHandler = (e) => {
    setExp([e.target.value]);
  };
  const skillHandler = (e) => {
    setSkill([e.target.value]);
  };


  const uspHandler=(e)=>{
    getUsps(Array.isArray(e)?e.map(x=>x.label):[])
   
  }
  const locationHandler=(e)=>{
    getLocation(Array.isArray(e)?e.map(x=>x.label):[])
   
  }
  const avenueHandler=(e)=>{
    getAvenue(Array.isArray(e)?e.map(x=>x.label):[])
   
  }
  const scaleUpHandler=(e)=>{
    getScale(Array.isArray(e)?e.map(x=>x.label):[])
   
  }
  const infraHandler=(e)=>{
    setOwner([e.target.value])
  }
  const estabTypeHandler=(e)=>{
    setType([e.target.value])
  }
  const areaNameHandler=(e)=>{
    setAreaName([e.target.value])
  }
  const localityHandler=(e)=>{
    setLocality(e.target.value)
  }
  const areaHandler = (e) => {
    e.preventDefault();
    if (e.target.value < 1) {
      alert("area is irrelevant");
      return;
    }
    setArea([e.target.value]);
  };

  const researchHandler=(e)=>{
    setMarket([e.target.value])
  }
  const primaryMarketHandler=(e)=>{
    setPrimaryMarket([e.target.value])
  }
  const saleHandler=(e)=>{
    setSale([e.target.value])
  }
  const customerHandler=(e)=>{
    setCustomer([e.target.value])
  }
  const supplierHandler=(e)=>{
    setSupplier([e.target.value])
  }
  const competitionHandler=(e)=>{
    setCompetition([e.target.value])
  }

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
          <hr />

          <label htmlFor="secondary_product_service_offered">
            Secondary Products/Services offfered:
          </label>
          <br></br>
          <input
            type="text"
            placeholder="photocopy services, mobile recharge services, transportation of goods to customers, custom fitting of dresses, bridal makeup, agriculture equipments on rent, fish pickles, etc."
            onInput={secondaryServiceHandler}
            style={{ width: "100%", height: "8vh" }}
          />
          <br></br>
          <label htmlFor="processed_products">
            Processed products (Products you produce from the raw materials):
          </label>
          <br></br>
          <input
            type="text"
            placeholder="paneer, protein bars, juice, etc."
            onInput={processedProductHandler}
            style={{ width: "100%", height: "8vh" }}
          />
          <br></br>
          <label htmlFor="relevant_experience">
            Years of relevant experience in this field:
          </label>
          <br></br>
          <input
            type="number"
            placeholder="enter experience"
            onInput={experienceHandler}
          />
          <br></br>
          <hr />
          <label htmlFor="skill_training">Skill training:</label>
          <br></br>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={skillHandler}
            style={{ width: "50%" }}
          >
            <option></option>
            <option  value="No formal skill training">
              No formal skill training
            </option>
            <option value="Has formal skill training and certificate">
              Has formal skill training and certificate
            </option>
          </select>
          <hr />
          <label htmlFor="usp">Unique Selling Proposition:</label>
          <br></br>
         <Select isMulti onChange={uspHandler} options={options} ></Select>
         <hr />
         <label htmlFor="establishment_type">Establishment type:</label>
          <br></br>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={estabTypeHandler}
            style={{ width: "50%" }}
          >
            <option></option>
            <option value="Factory">Factory</option>
            <option value="Mill">Mill</option>
            <option value="Stall">Stall</option>
            <option value="Workshop">Workshop</option>
            <option value="Boutique">Boutique</option>
            <option value="vehicle">vehicle</option>
            <option value="Shop">Shop</option>
            <option value="Vending Cart">Vending Cart</option>
          </select>
          <label htmlFor="business_are">Name of the Area:</label>
          <br></br>
          <input
            type="text"
            placeholder="Sadar Bazar Colony, laxmi market"
            onInput={areaNameHandler}
          />
          <br></br>
          <label htmlFor="business_locality">locality of business:</label>
          <br></br>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={localityHandler}
            style={{ width: "50%" }}
          >
            <option></option>
            <option value="urban">urban</option>
            <option value="rural">rural</option>
            <option value="semi-urban">semi-urban</option>
            <option value="slum">slum</option>
          </select>
          <label htmlFor="infa_ownership">ownership of infrastructure:</label>
          <br></br>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={infraHandler}
            style={{ width: "50%" }}
          >
            <option></option>
            <option value="rented">rented</option>
            <option value="leased">leased</option>
            <option value="Self-owned">Self-owned</option>
            
          </select>
          <label htmlFor="establishmentarea">
          Establishment area (in square feet) (Enter 0 if the establishment area is irrelevant):
          </label>
          <br></br>
          <input
            type="number"
            placeholder="area in sq.feet"
           
            min="0"
            onChange={areaHandler}
            style={{ width: "50%" }}
          />
          <br></br>
          <hr />
          <label htmlFor="location">Reason for selecting this location:</label>
          <br></br>
         <Select isMulti onChange={locationHandler} options={locations} ></Select>
          <hr />
          <label htmlFor="market_research">Market research:</label>
          <br></br>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={researchHandler}
            style={{ width: "50%" }}
          >
            <option></option>
            <option value="Not conducted">Not conducted</option>
            <option value="Market research has been conducted">Market research has been conducted</option>
            
            
          </select>
          <label htmlFor="primarymarket">Primary Market:</label>
          <br></br>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={primaryMarketHandler}
            style={{ width: "50%" }}
          >
            <option></option>
            <option value="local">local</option>
            <option value="regional">regional</option>
            <option value="national">national</option>
            <option value="international">international</option>
            
          </select>
          <label htmlFor="customers">Customers:</label>
          <br></br>
          <input
            type="text"
            placeholder="School-going students, collge-going students, housewives, truck-drivers, etc."
            onInput={customerHandler}
          />
          <br></br>
          <label htmlFor="seasonality">Seasons of high sales:</label>
          <br></br>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={saleHandler}
            style={{ width: "50%" }}
          >
            <option></option>
            <option value="consistent sales across all season">consistent sales across all season</option>
            <option value="Higher sales in festive seasons">Higher sales in festive seasons</option>
            <option value="High sales in cropping seasons">High sales in cropping seasons</option>
            
          </select>
          <label htmlFor="competition">Competition:</label>
          <br></br>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={competitionHandler}
            style={{ width: "50%" }}
          >
            <option></option>
            <option value="No similar service provide in this locality">No similar service provide in this locality</option>
            <option value="only a few">only a few</option>
            <option value="Many">Many</option>
            
          </select>
          <label htmlFor="suppliers">List of Suppliers:</label>
          <br></br>
          <input
            type="text"
            placeholder="E.g. identfiied distributor in the district, Kolkata flea market, etc."
            onInput={supplierHandler}
          />
          <br></br>
          <label htmlFor="marketing_avenues">Marketing avenues:</label>
          <br></br>
          <Select isMulti onChange={avenueHandler} options={avenues} ></Select>
          <label htmlFor="scaleup_potential">Avenues of scaling up in future:</label>
          <br></br>
          <Select isMulti onChange={scaleUpHandler} options={scales} ></Select>
        </form>
      </div>
      <div className="sentence-Box">
        {name.map((e) => (
          <p>
            {name} is looking to {stage} their business of {idea}
          </p>
        ))}
        {age.map((e) => (
          <p>
            This enterprise has been operational since {e} years and has been
            serving its customers since then.
          </p>
        ))}
        {offer.map((e) => (
          <p>
            This establishment offers products/services like- {offer} to{" "}
            {service}.
          </p>
        ))}
        {secondaryService.map((e) => (
          <p>In addition, the enterprise shall also be involved in- {e}</p>
        ))}
        {processedProduct.map((e) => (
          <p>Other products of the enterprise shall include- {e}</p>
        ))}
        {exp.map((e) => (
          <p>
            {name} has relevant experience of {e} years in this field.{" "}
          </p>
        ))}
        {skill.map((e) => (
          <p>The entrepreneur {e} in this field of work.</p>
        ))}
        {skill.map((e)=>(
          <p>The enterprise is uniquely positioned because of its -{usps} </p>
        ))}
        {type.map((e)=>(
          <p>The {e} is located in {locality} area of {areaName} is a {owner} property.


          </p>
        ))}
        {area.map((e)=>(
          <p>The size of the establishment is {e} sq.ft.</p>
        ))}
         {area.map((e)=>(
          <p>This locality is selected because of {location}.</p>
        ))}
        {market.map((e)=>(
          <p>{e} and the range of products and target market has been identified after that.</p>
        ))}
          {primaryMarket.map((e)=>(
          <p>The enterprise shall focus on offering its products/services to {e} markets. </p>
        ))}
         {customer.map((e)=>(
          <p> Our customers shall include- {e}</p>
        ))}
          {sale.map((e)=>(
          <p>The nature of the business is such that we expect {e}. </p>
        ))}
           {competition.map((e)=>(
          <p>Regarding competition, there are {e}.</p>
        ))}
          {supplier.map((e)=>(
          <p>The enterprise shall procure goods/raw materials from {e}. </p>
        ))}
          {supplier.map((e)=>(
          <p>Our marketing avenues to reach the targeted customers shall include- {avenue}. </p>
        ))}
          {supplier.map((e)=>(
          <p>The various foreseeable avenues of scaling up and growing the business in the foreseeable future include- {scale}. </p>
        ))}
      </div>
    </div>
  );
};

export default Form;
