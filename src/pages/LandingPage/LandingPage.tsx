import Business from "./Business.tsx";
import Potential from "./Potential.tsx";
import Feature from "./Feature.tsx";
import Performance from "./Performance.tsx";
import Hero from "./Hero.tsx";
// import OrderLists from "../../components/Orders/OrderLists.tsx";
import StoresAnalytics from "../../components/Stores/StoresAnalytics.tsx";

const LandingPage = () => {
  return(
      <>
          <main className="pb-20 bg-[#151D26]">
              <Hero />
              <Feature />
              <Performance />
              <Business />
              <Potential />
              {/*<OrderLists />*/}
              <StoresAnalytics />
          </main>
      </>
  )
}

export default LandingPage;