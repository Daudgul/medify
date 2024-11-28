import { Box } from "@mui/material";
import React from "react";

import Slider from "react-slick";

// function MultipleItems() {

// import group1 from "../../assests";
import doc1 from "../../assests/images/docs/doc-1.png";
import doc2 from "../../assests/images/docs/doc-2.png";
import doc3 from "../../assests/images/docs/doc-3.png";
import doc4 from "../../assests/images/docs/doc-4.png";
import doc5 from "../../assests/images/docs/doc-5.png";

const items = [
  { src: doc1, name: "Dr. Lesley Hull", type: "Medicine" },
  { src: doc2, name: "Dr. Ahmad Khan", type: "Neurologist" },
  { src: doc3, name: "Dr. Heena Sachdeva", type: "Orthopadics" },
  { src: doc4, name: "Dr. Ankur Sharma", type: "Medicine" },
  { src: doc5, name: "Dr. Ahmad Stevens", type: "Medicine" },
];

function DocsInfo() {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box
      sx={{
        py: 6,
        background: "#fff",
      }}
    >
      <h2>Our Medical Specialist</h2>
      {/* {items.map((item, i) => (
        <Box>
          <Box>
            <img className="doc_img" src={item.src} alt="Doctor image" />
          </Box>
          <h4>{item.name}</h4>
          <h5>{item.type}</h5>
        </Box>
      ))} */}
      <div className="slider-container">
        <Slider {...settings}>
          {items.map((item, i) => (
            <Box key={i} className="main_container">
              <Box className="doc_container">
                <img className="doc_img" src={item.src} alt="Doctor image" />
              </Box>
              <h4>{item.name}</h4>
              <p>{item.type}</p>
            </Box>
          ))}
        </Slider>
      </div>
    </Box>
  );
}

export default DocsInfo;
