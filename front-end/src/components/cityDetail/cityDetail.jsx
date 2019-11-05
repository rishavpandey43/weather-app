import React, { Component } from "react";

import "./cityDetail.css";

class CityDetail extends Component {
  render() {
    return (
      <div className="city-detail-container container-fluid pt-5 pb-5">
        <div className="detail-card-wrapper">
          <div className="detail-card city-detail">
            <div className="row">
              <div className="col-12 col-sm-6">
                <div className="weather-detail">
                  <div className="temp-detail pt-4">
                    <span className="temp-value">31°</span>
                    <br />
                    <span className="temp-type">Clear</span>
                  </div>
                  <div className="detail-insight">
                    <div className="insight-item">
                      <div className="insight-name">
                        <img src="" alt=""/>
                      </div>
                      <div className="insight-value"></div>
                    </div>
                    <div className="insight-item">
                      <div className="insight-name">
                        <img src="" alt=""/>
                      </div>
                      <div className="insight-value"></div>
                    </div>
                    <div className="insight-item">
                      <div className="insight-name">
                        <img src="" alt=""/>
                      </div>
                      <div className="insight-value"></div>
                    </div>
                    <div className="insight-item">
                      <div className="insight-name">
                        <img src="" alt=""/>
                      </div>
                      <div className="insight-value"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="city-name">
                  <div className="city-title">
                    <h2>New Delhi</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="detail-card"></div>
        </div>
      </div>
    );
  }
}

export default CityDetail;
