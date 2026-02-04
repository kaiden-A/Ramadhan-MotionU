import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import ScrollToTop from "./ScrollToTop";


function LandingPage(){



    return(
        <>
            <Header/>

            <main className="max-w-6xl mx-auto pb-24 geometric-bg px-4 md:px-8">
                <Hero/>
                <Features/>
            </main>
            <Footer/>
            <ScrollToTop/>
        </>
    )
}

export default LandingPage;