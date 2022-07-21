import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import caiyi from "../assets/img/caiyizhang.jpg";
import zimeng from "../assets/img/zimengtang.jpg";
import ziyi from "../assets/img/ziyi.jpg";
import zhongwen from "../assets/img/zhongwenyan.jpg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Intro To Our Project</h2>
                        <p>How to better your portfolio selection? This is an algo-trading system based on ML-optimized Black-Litterman Model. <br/>  Github link: </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={caiyi} alt="Image" />
                                <h5>Zhang Caiyi</h5>
                            </div>
                            <div className="item">
                                <img src={zimeng} alt="Image" />
                                <h5>Tang Zimeng</h5>
                            </div>
                            <div className="item">
                                <img src={ziyi} alt="Image" />
                                <h5>Zhu Zikang</h5>
                            </div>
                            <div className="item">
                                <img src={zhongwen} alt="Image" />
                                <h5>Yan Zhongwen</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
