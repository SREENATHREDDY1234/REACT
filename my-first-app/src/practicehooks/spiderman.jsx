import './index.css'
const spidermansuits = [
    {
        suitname : "Tobey original suit",
        url : "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/tobeymaguiresuit-1.jpg",
        desc : "After his Uncle Ben's death, the famous words, with great power comes great responsibility, floated into Peter's mind. Wanting to use his newfound powers for good, he replaced his wrestling costume and took those important words from his uncle into the next iteration of his superhero look. Parker's ultimate goal was to help rid New York City of crime and become a symbol of hope that people could look up to. Spider-Man's iconic suit appeared in both Spider-Man and Spider-Man 2. For the sequel, however, director Sam Raimi made subtle changes to the costume, such as making the reds and blues appear more vibrant.",
    },
    {
        suitname : "Black Symbiote Suit",
        url : "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/blackspidermansuit.jpg",
        desc : "In Sam Raimi's Spider-Man 3, Peter learns of his uncle's true killer. Frustrated, Parker slowly turned into the opposite of Spider-Man; he became overconfident, desperate for revenge, and increasingly violent. During a painful nightmare, a piece of dark symbiote goo attached itself to Spidey's original suit and transformed it into one with an all-black appearance. His new suit provided him with improved strength and durability, which enabled him to overpower Sandman, a.k.a. Flint Marko, quickly. After noticing the suit was causing his mental state to deteriorate, Parker managed to get rid of it, only to fall.",
    },
    {
        suitname : "Andrew Suit",
        url : "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/andrewgarfieldspiderman.jpg",
        desc : "Now with actor Andrew Garfield playing Peter Parker in this adaptation of Spider-Man, Sony attempted to reboot the franchise entirely. Their main goal was to make Spider-Man appear different from the previous films, which was evident in the suit's design. The new look brought a fresh feel to both movies, with one of the main differences being the tinted yellow eyes. Also, the black interwoven striations on Parker's suit were less prominent this time. For The Amazing Spider-Man 2, Andrew Garfield's Peter Parker wore a suit that resembled a more classic look that was much closer   Sam Raimi's Spider-Man trilogy.",
    
    },
    {
        suitname : "Tony Strak Suit",
        url : "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/tonystarksuit.jpg",
        desc : "In Captain America: Civil War, Tony Stark gave Peter his first real Spider-Man suit with a built-in AI system. This suit could summon a drone—formed from the spider symbol on his chest—which could attack and stun nearby enemies. Also, a special triangular webbing attached to his torso enabled Peter to glide through the air as if wing suiting. In addition, Stark gave the suit GPS tracking, which Peter could use to project a holographic map of his surroundings from his wrists. Even his web shooter settings were enhanced, allowing Peter to choose how he wanted to use them, such as the 'web-snare' move, w targets.",
    },
    {
        suitname : "Miles Morales suit",
        url : "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/spider-verse-suit-in-miles-morales-game.jpg?q=50&fit=crop&w=800&dpr=1.5",
        desc :"This version of Miles Morales' suit provided more depth to the character, being a definitive improvement over his first one. Instead of using Spider-Man's traditional red and blue colors, Morales gave the suit a red and black design, changing the public's perception of the web-slinger. Additionally, the Spidey logo on his chest has less of a standard look as it resembles graffiti, which was one of Miles Morales' interests throughout the story in the film. As far as perks go, this suit allowed Miles to listen to crime reports, and the eye lenses enabled him to analyze the environment, spot enemies through walsd."
    }
]
function PrintName(props){
    return(
        <div className="container">
            <img src={props.url} alt="" className='image'/>
            <h1 className='heading'>{props.suitname}</h1>
            <p className='para'>{props.desc}</p>
        </div> 
    ) 
}
function Hello(){
    return(
        <section className="bg-container">
            {
                spidermansuits.map((eachObj,index)=>{
                    return <PrintName key = {index} url = {eachObj.url} suitname = {eachObj.suitname} desc = {eachObj.desc}/>
                })
            }
        </section>
    )
}
export default Hello;