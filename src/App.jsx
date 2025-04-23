import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  //llamar a la api
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = "https://api.nasa.gov/planetary/apod?api_key=" + NASA_KEY;

      //persist data so we dont have to fetch it again
      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        return;
      }

      localStorage.clear();

      try {
        const resul = await fetch(url);
        const apiData = await resul.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log(apiData);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="flex justify-center items-center h-screen w-screen text-8xl text-gray-700 font-extrabold">
          <i className="fa-solid fa-gear animate-spin"></i>
        </div>
      )}
      {showModal && <SideBar data={data} handleModal={handleModal} />}
      <Footer data={data} handleModal={handleModal} />
    </>
  );
}

export default App;
