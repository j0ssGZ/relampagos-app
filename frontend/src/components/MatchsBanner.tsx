const MatchDay = () => {
  return (
    <div className="match-day">
      <div className="match-day__container">
        <div className="match-day__container__title">
          <h1>Match Day</h1>
        </div>
      </div>
    </div>
  )
}

const matchsBanner = () => {
  return (
    <div className="matchs-banner">
      <div className="matchs-banner__container">
        <div className="matchs-banner__container__content">
          <MatchDay />
        </div>
      </div>
    </div>
  )
}

export default matchsBanner