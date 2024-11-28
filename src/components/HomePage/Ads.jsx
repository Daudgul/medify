import { Box, Container } from "@mui/material";
import React from "react";
import img1 from "../../assests/images/banners/ads-1.png";
import img2 from "../../assests/images/banners/ads-2.png";
import Slider from "react-slick";

function Ads() {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <Box bgcolor={"#fff"} pt={22} pb={6}>
      <Container maxWidth="xl">
        <Slider {...settings}>
          <div>
            <img src={img2} alt="Ads img" />
          </div>
          <div>
            <img src={img1} alt="Ads img" />
          </div>
          <div>
            <img src={img2} alt="Ads img" />
          </div>
          <div>
            <img src={img1} alt="Ads img" />
          </div>
        </Slider>
      </Container>
    </Box>
  );
}

export default Ads;
