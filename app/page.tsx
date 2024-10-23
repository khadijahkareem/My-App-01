import Links from "next/link";
import Header from "./components/Header";
import Herosection from "./components/Herosection";
import Footer from "./components/Footer";

export default function Home () {

  return (
    <div> <Header/> 
      <h1 className="bg-pink-600 text-pink-950 font-serif">This is Khadija Kareem's World </h1>
      <p className="text-pink-600 "> Home Page </p>
       <Herosection/> <Footer/>
       <Links href = "/about">  Go to about </Links>
       <Links href = "/contact"> Contact Us </Links>
       </div>
    
  ); 
}