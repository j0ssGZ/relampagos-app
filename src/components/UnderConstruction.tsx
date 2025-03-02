const UnderConstruction = () => {
  const styles = {
    container: {
      backgroundColor: '#333',
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      letterSpacing: "1px",
      backgroundImage: `url("https://unsplash.it/1920/1080?random")`,
      backgroundSize: "cover",
    },
  }
  return (
    <>
      <div style={styles.container}>
        <h1>Estamos trabajando en el campo</h1>
      </div>
    </>
  )
}



export default UnderConstruction