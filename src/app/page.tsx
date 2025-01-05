import Featured from "./components/featured";
import Offer from "./components/offer";
import Slider from "./components/slider";

export default function Home() {
  return (
    <main>
      <Slider />
      <Featured />
      <Offer />
    </main>
  );
}
