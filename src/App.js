import './App.css';
import Post from './Post.js';
const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const Vitali_Klitschko = "https://pbs.twimg.com/profile_images/378800000752748507/f01319bd8c8fd7f248eda40faa78c3f0.jpeg";
const k = "https://i.ytimg.com/vi/jMA4eqKbhro/hqdefault.jpg";


function App() {
  return (
    <div className="App">
      <Post author={{
        name: "Anakin Skywalker",
        photo: ANAKIN_IMAGE,
        nickname: "@dart_vader"
      }}
        content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
        image={RAY_IMAGE}
        date={"26 февраля"}
      />
      <Post author={{
        name: "Vitali Klitschko",
        photo: Vitali_Klitschko,
        nickname: "@Vitalic_Klitschko"
      }}
        content="Лишь все, мало кто может єто делать."
        image={k}
        date={"1 января"} 
        />
    </div>
  );
}

export default App;
