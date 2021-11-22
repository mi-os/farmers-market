import SimpleImageSlider from 'react-simple-image-slider';
import ricefield from '../images/ricefield.jpg';
import sunset from '../images/sunset.jpg';

const images = [
  { url: ricefield },
  { url: sunset },
];

export const HeroSlider = () => {
  return (
      <SimpleImageSlider
        width={"80vw"}
        height={"65vh"}
        images={images}
        showBullets={false}
        showNavs={false}
        autoPlay={true}
        autoPlayDelay={5.0}
      />
  );
}
