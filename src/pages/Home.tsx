import backgroundBall from "../assets/img/ball-top-background.png"
import '../assets/style/_app.scss'
import MatchsBanner from "../components/MatchsBanner.tsx"
import anime from "animejs/lib/anime.es.js"
import {useEffect} from "react"

const Home = () => {
  useEffect(() => {
    const quoteEl = document.querySelector(".text-hero-lg .quote")
    if (quoteEl && quoteEl.textContent) {
      quoteEl.innerHTML = quoteEl.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      )
    }
    const signWrapper = document.querySelector('.text-hero-lg .sign .letters');
    if (signWrapper && signWrapper.textContent) {
      signWrapper.innerHTML = signWrapper.textContent.replace(
        /([^\x00-\x80]|\w)/g,
        "<span class='letter'>$&</span>"
      )
    }

    anime.timeline()
      .add({
        targets: '.text-hero-lg .quote .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (_el, i) => 70 * i
      })
      .add({
        targets: '.text-hero-lg .sign .letter',
        scale: [14, 1],
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: 500,
        delay: (_el, i) => 35 * i
      })

  }, [])

  return (
    <div className="home layout" style={{backgroundImage: `url(${backgroundBall})`}}>
      <section className="hero">
        <p className={"text-hero-lg"}>
          <span className={"quote"}>
          {`"Playing baseball for 
          a living is like having a 
          license to steal"`}</span>
          <span className={"sign"}>
            <span className="letters">Pete Rose</span>
          </span>
        </p>
        <MatchsBanner/>
      </section>
    </div>
  )
}

export default Home