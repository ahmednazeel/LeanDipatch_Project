import React from "react";
import "../css/plans.css";
import img_plan from "../images/Ellipse 2.svg";
import img_plan_2 from "../images/Ellipse 27.svg";
const Plans = () => {
  return (
    <div className="plans overflow-hidden">
      <h1 className="text-center fs_3 mb-2 c-primary font-weight">Prices</h1>
      <p className="c-primary fs_2 mb-2 mx-auto">
        Solutions fit for your needs
      </p>
      <p className="background-secondary rounded c-white fs_2 p-2 mx-auto">
        Contact us for a quote
      </p>

      <div className="plans-content">
        <div className="plans-scroll d-flex justify-content-between gap-5">
          <ul className=" plan-desc p-0">
            <div className="plan-title"></div>
            <li>Issuing and managing your Bayan Naql waybills.</li>
            <li>
              Trips, orders, drivers, vehicles and maintenance management.
            </li>
            <li>
              Your customer’s portal to raise and schedule orders (Long term
              contracts).
            </li>
            <li>
              Your customer’s portal to raise and schedule orders allowing you
              to negotiate rates.
            </li>
            <li>Dispatching to own fleet or contracted fleet.</li>
            <li>Eagle eye tracking.</li>
            <li>Reordering capability</li>
            <li>Extract reports.</li>
            <li>Upload bulk driver data via excel</li>
            <li>Upload bulk vehicle data via excel</li>
            <li>Invoice, receipts, debit and credit notes management</li>
            <li>Issuing ZATCA compliant invoices</li>
            <li>
              Inventory, suppliers, warehouses, purchasing, sales and expenses
              management
            </li>
          </ul>
          <ul className="text-center plan-list shadow">
            <div className="background-primary plan-title">
              <h4 className="c-secondary fs_1-8">LeanDispatcher Premium</h4>
              <p className="c-white fs-medium">
                online transport fleet management software with e-Invoicing &
                inventorying services.
              </p>
            </div>
            <li>
              <img src={img_plan} width={15} />
            </li>
            <li>
              <img src={img_plan} width={15} />
            </li>
            <li>
              <img src={img_plan} width={15} />
            </li>
            <li>
              <img src={img_plan} width={15} />
            </li>
            <li>
              <img src={img_plan} width={15} />
            </li>
            <li>
              <img src={img_plan} width={15} />
            </li>
            <li>
              <img src={img_plan} width={15} />
            </li>
            <li>
              <img src={img_plan} width={15} />
            </li>
            <li>
              <img src={img_plan} width={15} />
            </li>
            <li>
              <img src={img_plan} width={15} />
            </li>
            <li>
              <img src={img_plan} width={15} />
            </li>{" "}
            <li>
              <img src={img_plan} width={15} />
            </li>{" "}
            <li>
              <img src={img_plan} width={15} />
            </li>
          </ul>
          <ul className="text-center plan-list shadow">
            <div className="background-primary plan-title">
              <h4 className="c-secondary fs_1-8">LeanDispatcher Premium</h4>
              <p className="c-white fs-medium">
                online transport fleet management software with e-Invoicing &
                inventorying services.
              </p>
            </div>
            <li>
              <img src={img_plan} width={15} />
            </li>
            <li>
              <img src={img_plan} width={15} />
            </li>
            <li>
              <img src={img_plan} width={15} />
            </li>
            <li>
              <img src={img_plan} width={15} />
            </li>
            <li>
              <img src={img_plan} width={15} />
            </li>
            <li>
              <img src={img_plan} width={15} />
            </li>
            <li>
              <img src={img_plan} width={15} />
            </li>
            <li>
              <img src={img_plan} width={15} />
            </li>
            <li>
              <img src={img_plan} width={15} />
            </li>
            <li>
              <img src={img_plan} width={15} />
            </li>
            <li>
              <img src={img_plan_2} width={15} />
            </li>{" "}
            <li>
              <img src={img_plan_2} width={15} />
            </li>{" "}
            <li>
              <img src={img_plan_2} width={15} />
            </li>
          </ul>
          <ul className="text-center plan-list shadow">
            <div className="background-primary plan-title">
              <h4 className="c-secondary fs_1-8">LeanDispatcher Premium</h4>
              <p className="c-white fs-medium">
                online transport fleet management software with e-Invoicing &
                inventorying services.
              </p>
            </div>
            <li>
              <img src={img_plan} width={15} />
            </li>
            <li>
              <img src={img_plan} width={15} />
            </li>
            <li>
              <img src={img_plan_2} width={15} />
            </li>
            <li>
              <img src={img_plan_2} width={15} />
            </li>
            <li>
              <img src={img_plan_2} width={15} />
            </li>
            <li>
              <img src={img_plan_2} width={15} />
            </li>
            <li>
              <img src={img_plan_2} width={15} />
            </li>
            <li>
              <img src={img_plan_2} width={15} />
            </li>
            <li>
              <img src={img_plan_2} width={15} />
            </li>
            <li>
              <img src={img_plan_2} width={15} />
            </li>
            <li>
              <img src={img_plan} width={15} />
            </li>{" "}
            <li>
              <img src={img_plan} width={15} />
            </li>{" "}
            <li>
              <img src={img_plan} width={15} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Plans;
