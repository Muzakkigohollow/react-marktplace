
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerOne from "../assets/banner_1.jpeg"
import bannerTwo from "../assets/banner_2.jpeg"
import bannerThree from "../assets/banner_3.jpeg"
import bannerFour from "../assets/banner_4.jpeg"
import Slider from "react-slick";
import CardProducts from "../components/CardProduct";
import { useSelector } from "react-redux";

const Home = () => {
    const { product } = useSelector(root => root)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <div className="container mt-4">
            <Slider {...settings}>
                <img src={bannerOne} className="img-fluid" alt="/banner/banner_1.jpeg" />
                <img src={bannerTwo} className="img-fluid" alt="/banner/banner_2.jpeg" />
                <img src={bannerThree} className="img-fluid" alt="/banner/banner_3.jpeg" />
                <img src={bannerFour} className="img-fluid" alt="/banner/banner_4.jpeg" />
            </Slider>
            <div className="row mt-5">
                {
                    product?.map((p, idx) => <CardProducts product={p} key={idx} />)
                }
            </div>
        </div>
    )
}

export default Home