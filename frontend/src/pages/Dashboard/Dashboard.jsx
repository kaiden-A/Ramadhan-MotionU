import Footer from "./components/Footer";
import Header from "./components/Header";
import Hadiths from "./Hadiths/Hadiths";

function Dashboard(){

    return(
        <>
            <Header/>

            <div className="app-container px-4 sm:px-6 md:px-0 py-6">

                <Hadiths/>

            </div>

            <Footer/>
        </>
    )
}

export default Dashboard;