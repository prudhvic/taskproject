import React from "react";
import { FaPencilRuler } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
const Landingpage = () => {
  return (
    <div className="landing">
      <img
        src="https://media.istockphoto.com/photos/lost-to-the-books-picture-id517364357?b=1&k=20&m=517364357&s=170667a&w=0&h=zN476VVWgtMiEo9oZWBzk48saLNV-O6I3O0fPeAjcLw="
        alt="landing img"
      />
      <div className="content">
        <h3 className="text-red">Easy way to build perfect websites</h3>
        <h2>Beautifully handcrafted templates for your website</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the 's standard dummy text. Lorem Ipsum
          has been the industry's standard dummy text ever since. Lorem Ipsum is
          simply dummy text.
        </p>
        <div className="panel">
          <div className="panel-1">
            <span>
              <FaPencilRuler />
            </span>
            <h3>Modern Framework</h3>
            <p>
              Lorem Ipsum is simply text the printing and typesetting standard
              industry.
            </p>
          </div>
          <div className="panel-2">
            <span>
              <BsStack />
            </span>
            <h3>Live Website Builder</h3>
            <p>
              Lorem Ipsum is simply text the printing and typesetting standard
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
