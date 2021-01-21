const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

const klichkoPowerImage = "https://pbs.twimg.com/profile_images/378800000752748507/f01319bd8c8fd7f248eda40faa78c3f0.jpeg";
const goodNewsPhoto = "https://i.ytimg.com/vi/jMA4eqKbhro/hqdefault.jpg";

const Posts = [
    {
        author: {
            name: "Anakin Skywalker",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader"
        },
        content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
        image: RAY_IMAGE,
        date: "26 февраля",
    },
    {
        author: {
            name: "Vitali Klitschko",
            photo: klichkoPowerImage,
            nickname: "@Vitalic_Klitschko"
        },
        content: "Лишь все, мало кто может єто делать.",
        image: goodNewsPhoto,
        date: "1 января",
    }
    
]
export default Posts;