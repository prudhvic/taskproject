import React from "react";
import { FaPencilRuler } from "react-icons/fa";
import { BsStack, BsScissors, BsFillBagFill } from "react-icons/bs";

const Pricingpanel = () => {
  return (
    <div className="pricing-section">
      <h2>
        Beautiful and easy to use UI, professional animations and drag & drop
        feature
      </h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div className="cards">
        <div className="card">
          <h3>
            <FaPencilRuler />
          </h3>
          <h4>Pixel Perfect Design</h4>
          <p>
            Lorem Ipsum is simply text of the printing and typesetting industry.
            Lorem Ipsum has been standard dummy.
          </p>
        </div>
        <div className="card">
          <h3>
            <BsStack />
          </h3>
          <h4>Full Documentation</h4>
          <p>
            Lorem Ipsum is simply text of the printing and typesetting industry.
            Lorem Ipsum has been standard dummy.
          </p>
        </div>
        <div className="card">
          <h3>
            <BsScissors />
          </h3>
          <h4>Reasonable Pricing</h4>
          <p>
            Lorem Ipsum is simply text of the printing and typesetting industry.
            Lorem Ipsum has been standard dummy.
          </p>
        </div>
        <div className="card">
          <h3>
            <BsFillBagFill />
          </h3>
          <h4>User-friendly Admin</h4>
          <p>
            Lorem Ipsum is simply text of the printing and typesetting industry.
            Lorem Ipsum has been standard dummy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricingpanel;
