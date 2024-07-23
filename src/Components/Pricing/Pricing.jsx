import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-1 container ">
      <div className="pricing">
        <h3>Pricing</h3>
        <h1>Our Best Pricing</h1>
      </div>

      <div className="basic-flex">
        <div className="basic">
          <h4>Basic</h4>
          <div className="month-span">
            <h1>$39</h1>
            <span>/month</span>
          </div>
          <div className="basic-flex-text">
            <hr />
            <p>Single Truck</p>
             <hr />
            <p>Full Insurance</p>
             <hr />
            <p>500km</p> <hr />
            <p>Real-Time rate Shopping</p> <hr />
          </div>
          <button className='learn-more'>Choose Plan</button>
        </div>


        <div className="basic2">
          <h4>Standard</h4>
          <div className="month-span2">
            <h1>$59</h1>
            <span>/month</span>
          </div>
          <div className="basic-flex-text2">
            <hr className="text-line"/>
            <p>Single Truck</p>
             <hr />
            <p>Full Insurance</p>
             <hr />
            <p>500km</p> <hr />
            <p>Real-Time rate Shopping</p> <hr />
          </div>
          <button className='learn-more2'>Choose Plan</button>
        </div>

        <div className="basic">
          <h4>Premium</h4>
          <div className="month-span">
            <h1>$89</h1>
            <span>/month</span>
          </div>
          <div className="basic-flex-text">
            <hr />
            <p>Double Truck</p>
             <hr />
            <p>Full Insurance</p>
             <hr />
            <p>Unlimited</p> <hr />
            <p>Real-Time rate Shopping</p> <hr />
          </div>
          <button className='learn-more'>Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
