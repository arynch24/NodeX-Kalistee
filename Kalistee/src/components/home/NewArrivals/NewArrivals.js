import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16 my-20" >
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={'https://ik.imagekit.io/Jivan/DetoxClayMask.png?updatedAt=1735339160791'}
            productName="Detox Clay Mask"
            price="349.00"
            badge={true}
            des="A purifying clay mask with Kaolin, Bentonite, and Turmeric to detoxify, exfoliate, and brighten the skin for a radiant complexion."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={'https://ik.imagekit.io/durgeshsh/NodeX_images/conditioner_spray_outdoor.png?updatedAt=1735338725981'}
            productName="Leaf-Conditioner Spray"
            price="349.00"
            badge={true}
            des="A hydrating conditioner spray with Aloe Vera, Coconut Oil, and Vitamin E to detangle, soften, and nourish hair for a smooth, shiny finish."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={'https://ik.imagekit.io/durgeshsh/NodeX_images/scalp_detox_scrub.png?updatedAt=1735338729117'}
            productName="Scalp Detox Scrub"
            price="349.00"
            badge={true}
            des="A revitalizing scalp scrub with Sea Salt, Tea Tree Oil, and Peppermint to exfoliate, cleanse, and soothe the scalp for healthy, lustrous hair."
          />
        </div>
        <div className="px-2">
        <Product
          _id="1013"
          img={'https://ik.imagekit.io/Jivan/GlowBoost.png?updatedAt=1735339160659'}
          productName="RadiantWash"
          price="399.00"
          badge={true}
          des="A gentle daily cleanser with Turmeric, Neem, and Aloe Vera to combat acne, reduce inflammation, and cleanse impurities for a clear, glowing complexion."
        />
          
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={'https://ik.imagekit.io/Jivan/SpotCorrectingPatches.png?updatedAt=1735335883071'}
            productName="Spot Correcting Patches"
            price="399.00"
            badge={false}
            des="A pack of 12 spot-correcting patches with Salicylic Acid, Tea Tree Oil, and Vitamin C to reduce blemishes, redness, and inflammation for clear, smooth skin."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
