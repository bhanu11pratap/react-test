import image from "./logo.png";
import image2 from "./logo2.png";
import PhoneIcon from "@mui/icons-material/Phone";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import { Step, StepLabel, Stepper } from "@mui/material";

export default function Card({ details }) {
  return (
    <div className="container">
      {details.map((item) => (
        <div key={item.id} className="card">
          <div className="header">
            <img src={image2} alt="icici logo" />
            <span id="span1">ICICI LOMBARD</span>
            <span id="span2">Pre Auth</span>
          </div>
          <div className="content">
            <div id="all">
              <div id="img">
                <img src={image} alt="Avatar" />
              </div>
              <div id="name">
                <strong>{item.name}</strong>
                <span id="span3">Al No:{item.alNo}</span>
              </div>
              <div id="amount">
                <span>Amount</span>
                <span>{item.amount}</span>
              </div>
            </div>

            <div id="dates">
              <div id="adate">
                <span>Admission Date</span>
                <span>{item.admissionDate}</span>
              </div>
              <div id="ddate">
                <span>Discharge Date</span>
                <span>{item.dischargeDate}</span>
              </div>
              <div>
                <PhoneIcon style={{ fontSize: "30px" }} />
                <DoNotDisturbAltIcon style={{ fontSize: "30px" }} />
              </div>
            </div>
            <div id="stepper">
              <Stepper activeStep={item.condition} alternativeLabel>
                <Step>
                  <StepLabel StepIconProps={{ style: { color: "orange" } }}>
                    Pending
                  </StepLabel>
                  <span>{item.pending}</span>
                </Step>
                <Step>
                  <StepLabel>On Recovery</StepLabel>
                  <span>{item.onRecovery}</span>
                </Step>
                <Step>
                  <StepLabel
                    StepIconProps={{ style: { color: "mediumspringgreen" } }}
                  >
                    Recovered
                  </StepLabel>
                  <span>{item.recovered}</span>
                </Step>
              </Stepper>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
