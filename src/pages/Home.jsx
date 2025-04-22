import Slide1 from "../assets/images/home/1.png";
import Slide2 from "../assets/images/home/2.png";
import Slide3 from "../assets/images/home/3.png";
import Slide4 from "../assets/images/home/4.png";
import Slide5 from "../assets/images/home/5.png";
import ProductList from "../components/Products/ProductList";

function Home(){
    return (
        <>
            <section class="block">
                <div class="container">
                    <h1 class="title">Добро пожаловать в Beauty&M!</h1>
                    <div class="stories-list">
                        <img src={Slide1} alt="1" />
                        <img src={Slide2} alt="2" />
                        <img src={Slide3} alt="3" />
                        <img src={Slide4} alt="4" />
                        <img src={Slide5} alt="5" />
                    </div>
                </div>
            </section>
            <section class="block">
                <div class="container">
                    <h1 class="title">Товары</h1>
                    <ProductList />
                </div>
            </section>
        </>
    );
}

export default Home;