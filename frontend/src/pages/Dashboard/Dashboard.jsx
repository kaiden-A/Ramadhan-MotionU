import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hadiths from "./Hadiths/Hadiths";
import Juzu from "./Juzu/Juzu";

function Dashboard(){

    const [choose , setChoose] = useState("hadiths")

    return(
        <>
            <Header/>

            <div className="app-container px-4 sm:px-6 md:px-0 py-6 pb-22">

                {choose === "hadiths" && <Hadiths/>}
                {choose === "juzu"  && <Juzu/>}

            </div>

            <Footer
                choose={choose}
                setChoose={setChoose}
            />
        </>
    )
}

export default Dashboard;