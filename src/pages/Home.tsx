import backgroundBall from "../assets/img/ball-top-background.png"
import '../assets/style/_app.scss';
import MatchsBanner from "../components/MatchsBanner.tsx";

const Home = () => {
  return (
    <div className="home layout" style={{ backgroundImage: `url(${backgroundBall})` }}>
      <section className="hero">
        <p className={"text-hero-lg"}>
          {`"Playing baseball for 
          a living is like having a 
          license to steal"`}
          <span>Pete Rose</span>
        </p>
        <MatchsBanner />
      </section>
    </div>
  )
}

export default Home