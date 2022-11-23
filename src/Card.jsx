import React from "react";
import styled from "styled-components";
import coachImage from "./coach.jpg";
import star from "./star.png";

const CoachCard = () => {
  return (
    <HoveredCard className="card inline-block pb-5 mt-12 transition-transform duration-700 bg-white rounded-md shadow overflow-hidden hover:-translate-y-4">
      <a href="/">
        <div className="img h-72 w-72 mb-2">
          <img
            src={coachImage}
            alt=""
            className="inline-block align-baseline"
          />
        </div>
        <div className="body flex flex-col items-center">
          <div className="status inline-block mb-3">
            <p className="rounded text-white bg-[#79b872] p-1 text-base font-semibold">
              Available
            </p>
          </div>
          <div className="name text-center">
            <h5>Kubra Ozturk</h5>
          </div>
          <div className="rate">
            <div className="stars flex flex-row justify-center text-orange-600 text-xl">
              {Array(5)
                .fill(true)
                .map((sth, index) => {
                  return (
                    <span key={index} className="my-2">
                      <img src={star} alt="" className="h-5" />
                    </span>
                  );
                })}
            </div>
          </div>
          <div className="time flex text-sm text-[#828282] font-light">
            <span className="pl-1">30 min</span>
            <span className="pl-1">|</span>
            <span className="pl-1">Istanbul time</span>
          </div>
          <div className="languages text-[11px] my-4">
            <ul className="flex flex-row justify-between">
              <li className="mr-3">
                <span className="text-[#a0a0a0] hover:text-white hover:bg-[#a0a0a0] border px-3 py-2 transition-all duration-200">
                  English
                </span>
              </li>
              <li className="pr-2">
                <span className="text-[#a0a0a0] hover:text-white hover:bg-[#a0a0a0] border px-3 py-2 transition-all duration-200">
                  Spanish
                </span>
              </li>
            </ul>
          </div>
          <div className="price text-[#e66553] text-sm">
            <span>899 TL/Monthly</span>
          </div>
        </div>
      </a>
    </HoveredCard>
  );
};

const HoveredCard = styled.div``;

export default CoachCard;
