import {useState} from "react";

// @ts-ignore
const UnderConstruction = ({setShowApp}) => {
  const styles = {
    container: {
      backgroundColor: '#333',
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      letterSpacing: "1px",
      backgroundImage: `url("https://unsplash.it/1920/1080?random")`,
      backgroundSize: "cover",
      color: "#fff",
    },
  }
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setInputValue(value);
    if (value === "123") {
      setShowApp(true);
    }
  }


  return (
    // @ts-ignore
    <div style={styles.container}>
      <h1>Estamos trabajando en el campo</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter code"
      />
    </div>
  )
}


export default UnderConstruction