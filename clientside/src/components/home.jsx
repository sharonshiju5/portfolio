
import "@fontsource/poppins"; // Defaults to 400 weight
import "@fontsource/poppins/700.css"; // Load bold weight


import "../css/home.css"




export default function Home(){
    return(
        <>
        <div className="container1">
            <div className="ctr-section">
                <div className="section1">
                    <h1>hi iam sharon</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quia nisi nemo deleniti molestias, totam eligendi inventore molestiae dolores commodi quos! Odio, vel sed quas explicabo corporis aut fugiat ducimus!</p>
                </div>
            </div>
            <div className="ctr-section">
                <div className="profile">
                    <img id="id" src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg" alt="" />
                </div>
            </div>
        </div>
        </>
    )
}