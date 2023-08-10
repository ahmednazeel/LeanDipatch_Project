import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import "../css/commonly.css";
import "../css/featureSec.css";
import img_feat1 from "../images/features/أثناء التنقل.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { features } from "../components/data";
const FeatureSec = () => {
  const [state, setState] = useState(features);
  const [result, SetResult] = useState([]);

  const filterItems = (i) => {
    const result = features.filter((item) => i.id === item.id);
    SetResult(result);
  };
  const elementRef = useRef(null);
  const slideNext = () => {
    elementRef.current.scrollLeft += 100;
  };
  const slidePrev = () => {
    elementRef.current.scrollLeft -= 50;
  };
  return (
    <div id="features">
      <div className="p-section feat-section background-primary">
        <div className="title-sec text-center">
          <h1 className="c-white">Key Features</h1>
          <p className="c-secondary fs-medium">
            To elevate your business to new heights
          </p>
        </div>

        <div className="feature-wrapper">
          <Container
            className="rounded p-5 feature-content shadow"
            style={{ backgroundColor: "white" }}
          >
            <ul className="rounded filter-links-content position-relative">
              <div
                ref={elementRef}
                className="filter-links d-flex align-items-center justify-content-between gap-3"
              >
                <FontAwesomeIcon
                  className="fs_3 c-primary feat-icon left"
                  icon={faCircleArrowLeft}
                  onClick={slidePrev}
                />
                <FontAwesomeIcon
                  className="fs_3 c-primary feat-icon right"
                  icon={faCircleArrowRight}
                  onClick={slideNext}
                />
                {state.map((link) => {
                  return (
                    <li
                      key={link.id}
                      className="position-relative c-gray fs_1-8 item-feat"
                    >
                      <button
                        className="border-none"
                        onClick={() => filterItems(link)}
                      >
                        {link.link}
                      </button>
                    </li>
                  );
                })}
              </div>
            </ul>

            <div className="filter-results">
              {result.length < 1 ? (
                <div className="d-flex gap-5 align-items-center justify-content-between filter-content">
                  <div>
                    <h1 className="c-primary mb-4">
                      Effortlessly manage all aspects of your operation
                    </h1>
                    <button className="button background-primary">
                      Start now
                    </button>
                  </div>
                  <div>
                    <img className="img-feature" src={img_feat1} />
                  </div>
                </div>
              ) : (
                result.map((i) => {
                  return (
                    <div
                      key={i.id}
                      className="d-flex gap-5 align-items-center justify-content-between filter-content"
                    >
                      <div>
                        <h1 className="c-primary mb-4">{i.desc}</h1>
                        <button className="button background-primary">
                          Start now
                        </button>
                      </div>
                      <div>
                        <img className="img-feature" src={i.ImgUrl} />
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </Container>
        </div>
      </div>
      <Container>
        <div className="quote d-flex align-items-center justify-content-between rounded">
          <p className="c-primary fs_2">
            This is what our clients have to say about Lean Dispatcher
          </p>
          <div className="item-quote d-flex align-items gap-5">
            <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft} />
            <div>
              <p className="fs-medium font-weight mb-4">
                Lean Dispatcher is a great software that helped us improve our
                customer experience, efficiency and reduced our overheads.
              </p>
              <p className="fs-medium font-weight mb-4">
                Recommend everyone to try it and see for themselves.
              </p>
              <p className="fs-medium font-weight mb-4 c-primary">
                Mohammad Zat, CEO Priceless Logtisitcs
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeatureSec;
