import { useEffect, useState } from "react"

export default function Main() {

  const [memeData, setMemeData] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg"
  });

  function handleChange(event){
    const {value, name} = event.currentTarget;

    setMemeData(prevData => {
      return {...prevData, [name]: value};
    });
  }

  function getNewMeme(){
    //console.log(memeArray);
    const randomMeme = memeArray[Math.floor(Math.random() * memeArray.length)];
    const newMemeUrl = randomMeme.url;
    setMemeData(prevData => {
      return {...prevData, imageUrl: newMemeUrl};
    });
  }

  const [memeArray, setMemeArray] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setMemeArray(data.data.memes))
  }, []);
  
  //console.log(memeArray);
  
  return (
      <main>
          <div className="form">
              <label>Top Text
                  <input
                      type="text"
                      placeholder="One does not simply"
                      name="topText"
                      onChange={handleChange}
                      value={memeData.topText}
                  />
              </label>

              <label>Bottom Text
                  <input
                      type="text"
                      placeholder="Walk into Mordor"
                      name="bottomText"
                      onChange={handleChange}
                      value={memeData.bottomText}
                  />
              </label>
              <button onClick={getNewMeme}>Get a new meme image 🖼</button>
          </div>
          <div className="meme">
              <img src={memeData.imageUrl} />
              <span className="top">{memeData.topText}</span>
              <span className="bottom">{memeData.bottomText}</span>
          </div>

          {/* <div>
            <pre>{JSON.stringify(starWarsData)}</pre>
          </div>
          <button onClick={() => setCount(prev => prev + 1)}>Get next Character</button> */}
      </main>
  )
}