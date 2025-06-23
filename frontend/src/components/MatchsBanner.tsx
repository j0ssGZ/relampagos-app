import { useState } from "react";

type Match = {
  time: string;
  teams: string;
  highlight?: string;
}

type MatchDayProps = {
  date: string;
  day: string;
  matches: Match[];
}

const MatchDay = ({ date, day, matches }: MatchDayProps) => (
  <div className="match-day">
    <div className="match-day__container">
      <div className="match-day__container__title">
        <h1>
          <span className="match-day__date">{date}</span> · <span className="match-day__day">{day}</span>
        </h1>
      </div>
      <div className="match-day__container__matches">
        {matches.map((match, i) => (
          <div className="match-day__row" key={i}>
            <span className="match-day__time">{match.time}</span>
            <span className="match-day__teams">
              {match.highlight
                ? match.teams.split(match.highlight).map((part, idx, arr) =>
                    idx < arr.length - 1 ? (
                      <span key={idx}>
                        {part}
                        <span className="highlight">{match.highlight}</span>
                      </span>
                    ) : (
                      part
                    )
                  )
                : match.teams}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// Datos de ejemplo
const matchDays = [
  {
    date: "03/06/23",
    day: "SÁBADO",
    matches: [
      { time: "15:00 H", teams: "CBS. CAMBRE VS RELÁMPAGOS PONTEVEDRA", highlight: "RELÁMPAGOS PONTEVEDRA" },
      { time: "16:45 H", teams: "RELÁMPAGOS PONTEVEDRA VS ATLANTA SHOCKS", highlight: "RELÁMPAGOS PONTEVEDRA" }
    ]
  },
  {
    date: "04/06/23",
    day: "DOMINGO",
    matches: [
      { time: "15:00 H", teams: "CBS. CAMBRE VS RELÁMPAGOS PONTEVEDRA", highlight: "RELÁMPAGOS PONTEVEDRA" },
      { time: "16:45 H", teams: "RELÁMPAGOS PONTEVEDRA VS ATLANTA SHOCKS", highlight: "RELÁMPAGOS PONTEVEDRA" }
    ]
  },
]

const MatchsBanner = () => {
  const [start, setStart] = useState(0);
  const visible = 2;

  const handlePrev = () => setStart((prev) => Math.max(prev - visible, 0));
  const handleNext = () => setStart((prev) => Math.min(prev + 1, matchDays.length - (window.innerWidth >= 840 ? 2 : 1)));

  return (
    <div className="matchs-banner">
      <div className="matchs-banner__container">
        <div className="matchs-banner__container__content" style={{ display: "flex", alignItems: "stretch" }}>
          {start > 0 && (
            <button className="carousel-arrow left" onClick={handlePrev}>
              &#8592;
            </button>
          )}
          {matchDays.slice(start, start + visible).map((day, idx) => (
            <MatchDay key={day.date + idx} {...day} />
          ))}
          {start + visible < matchDays.length && (
            <button className="carousel-arrow right" onClick={handleNext}>
              &#8594;
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchsBanner
