import "./FQA.css";
import * as React from "react";
// import Accordion, { AccordionSlots } from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Frequent from "../../assets/FQA-img.png";
import Phone from "../../assets/Phone-icon.png";
import Client1 from "../../assets/Client-img1.png";
import Client2 from "../../assets/Client-img2.png";
import Client3 from "../../assets/Client-img3.png";
import Client4 from "../../assets/Client-img4.png";

const FQA = () => {
  return (
    <div>
      <div className="frequently-question">
        <div className="frequently-question-leftcol">
          <div className="frequently-question-heading">
            <h6>FQA</h6>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="enquiry">
            <h6>How can I pay for your logistics services?</h6>
            <p>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. Organically grow the holistic world view of
              disruptive.
            </p>
          </div>
          {/* <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion> */}
        </div>

        <div className="frequently-question-rightcol">
          <img src={Frequent} alt="" className="frequent-img" />
          <div className="frequent-box">
            <h5>Let's Talk</h5>
            <h3>You Need Any Help? Get From Consultation</h3>
            <div className="number-display">
              <img src={Phone} alt="" />
              <p>
                Have Any Question <br />
                (00) 112 365 489
              </p>
            </div>
            <button className="contact-us1">Contact Us</button>
          </div>
        </div>
      </div>
      <div className='bottom-img '>
        <img src={Client1} alt=''/>
        <img src={Client2} alt=''/>
        <img src={Client3} alt=''/>
        <img src={Client4} alt=''/>

      </div>
    </div>
  );
};

export default FQA;
