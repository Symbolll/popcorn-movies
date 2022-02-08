import React, { Component } from 'react';
import './Card.css'
import iciboskalpp from '../components/iciboskalpp.png'
import dolukalp from '../components/dolukalp.png'
import çöp from '../components/kırmızıçöp.png'
import çarpı from '../components/carpı.png'
import Modal from 'react-modal';


class Card extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      liked: false,
      icon: iciboskalpp,
      icon1: çöp,
      visibility: 'hidden',
      isOpen: false,
      title:  'e.currentTarget.parentElement.parentElement.children[1].children[0].children[0].textContent',
      imageUrl: null,
      body: null,
      close: çarpı,


    }
  }


  modalContentSetter = (e) => {

    this.setState({
      title: e.currentTarget.parentElement.parentElement.children[1].children[0].children[0].textContent,
      imageUrl: e.currentTarget.parentElement.parentElement.children[0].children[0].attributes.src.textContent,
      body: e.currentTarget.parentElement.parentElement.children[1].children[1].children[0].textContent,

    });

    this.modalToggler();
  }

  modalToggler = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }



  MouseOver = () => {
    this.setState({ visibility: 'visible' })
  }
  MouseOut = () => {
    this.setState({
      visibility: 'hidden'
    })
  }

  favorited = (e) => {
    if (this.state.liked) {
      this.setState({
        liked: !this.state.liked,
        icon: iciboskalpp
      })


      this.props.deleteTop({
        id: Math.random(),
        imageUrl: e.target.parentElement.parentElement.children[0].children[0].attributes.src.textContent,
        title: e.target.parentElement.parentElement.children[1].children[0].children[0].textContent,
        body: e.target.parentElement.parentElement.children[1].children[1].children[0].textContent,

        btnText: 'View more'
      }
      )
    } else {
      this.setState({
        liked: !this.state.liked,
        icon: dolukalp
      })


      this.props.passTop({
        id: Math.random(),
        imageUrl: e.target.parentElement.parentElement.children[0].children[0].attributes.src.textContent,
        title: e.target.parentElement.parentElement.children[1].children[0].children[0].textContent,
        body: e.target.parentElement.parentElement.children[1].children[1].children[0].textContent,

        btnText: 'View more',
      })

    }

  }



  render() {
    return (


      <div className='card-container'
        onMouseOver={() => this.MouseOver()}
        onMouseOut={() => this.MouseOut()}
      >

        <div className='image-container'>
          <img className="foto" src={this.props.imageUrl} />
        </div>
        <div className='card-content'>
          <div className='card-title'>
            <h3 className="font"> {this.props.title} </h3>
          </div>
          <div className='card-body'>
            <p> {this.props.body} </p>

          </div>
        </div>


        <div className='btn' >
          <button style={{cursor:'pointer'}} onClick={(e) => this.modalContentSetter(e)}><a> View more </a></button>

        </div>


        <div className="likeContainer" style={{ visibility: this.state.visibility }}>
          <img id="like" onClick={(e) => this.favorited(e)} src={this.state.icon} style={{ width: '20px' }} />
          <img id="likeicon1" src={this.state.icon1} onClick={(e) => this.props.delete(e.target.parentElement.parentElement.children[0].children[0].attributes.src.textContent)} style={{ width: '110px' }} />
        </div>

        <Modal
          isOpen={this.state.isOpen}
          style={{
            content: {
              top: '50%',
              left: '50%',
              right: '10%',
              bottom: '10%',
              width: '55%',
              height:'68%',
              padding: '0',
              marginLeft: '-390px',
              marginTop: '-250px',
              backgroundColor: '#07111a',
              borderRadius: '5px',
              boxShadow: ' 0px 0px 15px -5px   white',
              border: '1px solid',
              borderStyle: 'inset',
            },
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'null',
            },
          }}
        >
          <div>
           
            <span style={{position:'absolute', color: 'whitesmoke',fontStyle:'italic', fontSize: '40px', textShadow: '1px 1px 2px white, 0 0 15px white, 0 0 15px white', width:'35%',marginLeft:'35.3%',marginTop:'7%' }}>  {this.state.title}</span>
          
            <img src={this.state.close} style={{ cursor: 'pointer', position: 'absolute', top: 5, right: 10, width: '35px', height: '35px' }} onClick={() => this.modalToggler()}></img>
            
            <div style={{paddingLeft:'20px', paddingTop:'8%'}}>
            <img style={{ width: '250px' }} src={this.state.imageUrl} />
            </div>


            <div style={{ color: 'white', position: 'absolute', top: '39%', paddingLeft: '75%'  }}> 
            <em style={{color:'gray'}}>Type: </em> {this.state.body} 
            <br></br> 
            <em style={{color:'gray'}}> Cast:</em> </div>

           
            <p  style={{ color: 'white', position: 'absolute', top: '39%', paddingLeft: '35%', height:'auto', width:'33%' }}>
              {(() => {
                switch (this.props.title) {
                  case "Avatar": return "On a newly discovered planet called Pandora, there is an abundance of an element that is rare on earth but very valuable. However, the owners and nature of this planet are not the kind to allow mining. The biggest threat are creatures whose 3-meter race is called the Na'vi.";
                  case "The Unholy": return "A hearing-impaired girl is visited by the Virgin Mary and can suddenly hear, speak, and heal the sick. As people flock to witness her miracles, terrifying events unfold. Are they the work of the Virgin Mary or something much more sinister?";
                  case "Pixie": return "To avenge her mother's death, Pixie masterminds a heist but must flee across Ireland from gangsters, take on the patriarchy, and choose her own destiny.";
                  case "The Last Rite": return "A medical student suffering from sleep paralysis finds herself plagued by a demonic entity, after moving in with her boyfriend.";
                  case "Hideout": return "Evading police at a remote farmhouse after fumbling a robbery, four criminals discover that the family living there is not who they appear to be.";
                  case "Antlers": return "In an isolated Oregon town, a middle-school teacher and her sheriff brother become embroiled with her enigmatic student, whose dark secrets lead to terrifying encounters with an ancestral creature.";
                  case "The Feast": return "Filmed in Welsh, the picture follows a young woman serving privileged guests at a dinner party in a remote house in rural Wales. The assembled guests do not realize they are about to eat their last supper.";
                  case "Devil Came Home": return "A family is torn apart when the stepfather's PTSD appears to develop into something far more sinister...and possibly even supernatural.";
                  case "Motherly": return "Kate (Lora Burke) and her daughter Beth live alone in an isolated farmhouse in the woods, but when Kate slowly begins to suspect that something sinister is happening, her motherly instincts are put to the test.";
                  case "Lair": return "A fractured family are forced to face their demons, metaphorically and literally, as they unwittingly become embroiled in a man's attempt to prove the existence of the supernatural in order to overturn a friend's murder conviction.";
                  case "Relic": return "A daughter, mother and grandmother are haunted by a manifestation of dementia that consumes their family's home.";
                  case "Lanterns Lane": return "A recent college graduate and her estranged high school friends return to Lantern's Lane, the location of an evil urban legend and must fight to survive the night.";
                  case "Isolation": return "Nine tales of terror weave together the story of isolated citizens around the world as they confront their darkest fears in an attempt to survive an increasingly deadly outbreak.";
                  case "The Spore": return "The lives of ten strangers intersect through a terrifying chain of events as a mutating fungus begins to spread through a small town wiping out everyone that comes into contact with it.";
                  case "Hide and Seek": return "When a wealthy businessman follows a lead to find his missing brother, he dives headlong into a twisted underworld of squatters and vagrants that threatens to tear apart his family as he struggles to maintain his sanity.";
                  case "Horror Noire": return "Presents together six horror stories from Black directors and screenwriters in a single film: Daddy, Bride Before You, Brand of Evil, The Lake, Sundown and Fugue State.";
                  case "The Deep House": return "A young and modern couple who go to France to explore an underwater house and share their findings on social media undergoes a serious change of plans when the couple enters the interior of a strange house located at the bottom of a lake and their presence awakens a dark spirit that haunts the house.";
                  case "Margin Call": return "Follows the key people at an investment bank over a 24-hour period during the early stages of the 2008 financial crisis.";
                  case "Passing": return "'Passing' follows the unexpected reunion of two high school friends, whose renewed acquaintance ignites a mutual obsession that threatens both of their carefully constructed realities.";
                  case "Nine Days": return "A reclusive man conducts a series of interviews with human souls for a chance to be born.";
                  case "Good Joe Bell": return "The true story of a small town, working class father who embarks on a solo walk across the U.S. to crusade against bullying after his son is tormented in high school for being gay.";
                  case "Time Now": return "A young mother returns to her estranged hometown of Detroit after the sudden death of her twin brother and immerses herself in his friend group, soon discovering that his death is not what it seems.";
                  case "Not to Forget": return "After a life of little scams, a self-centered millennial is sentenced to take care of his grandmother, who is affected by Alzheimer's. As he realizes the extent of her wealth, the protagonist gets closer to the treasure he's been looking for.";
                  case "Atlantis": return "An international team of scientists and military personnel discover a Stargate network in the Pegasus Galaxy and come face-to-face with a new, powerful enemy, The Wraith.";
                  case "Supernova": return "Sam and Tusker are traveling across England in their old RV to visit friends, family and places from their past. Since Tusker was diagnosed with dementia two years ago, their time together is the most important thing they have.";
                  case "Zeros and Ones": return "An American soldier stationed in Rome with the Vatican blown up, embarks on a hero's journey to uncover and defend against an unknown enemy threatening the entire world.";
                  case "The Deep House": return "A young and modern couple who go to France to explore an underwater house and share their findings on social media undergoes a serious change of plans when the couple enters the interior of a strange house located at the bottom of a lake and their presence awakens a dark spirit that haunts the house.";
                  case "Bruised": return "A disgraced MMA fighter finds redemption in the cage and the courage to face her demons when the son she had given up as an infant unexpectedly reenters her life.";
                  case "Miami Heat": return "A retired Spetsnaz agent relies on his old skills to save his beloved daughter, who has been kidnapped while working in South Beach.";
                  case "Mixtape": return "When a young girl accidentally destroys the mixtape that belonged to her mother, she sets out to track down each of the obscure songs on the cassette.";
                  case "David and Elfs": return "A jaded, overworked elf runs off to the real world where he tries to experience the magic of Christmas with the help of a newly befriended young boy.";
                  case "Undergods": return "An otherworldly journey through a Europe in decline - a collection of darkly humorous, fantasy tales about ill-fated characters and doomed fortune.";
                  case "Wanton Want": return "An affectless writer is lured to a couples weekend getaway by his wife and friends, only to uncover a tumultuous secret and a perilous obsession that threaten to change the course of his life in intense and surprising ways.";
                  case "Black Adam": return "Plot unknown. A spin-off from 'Shazam!' centering on the film's anti-hero, Black Adam.";
                  case "The Flash": return "After being struck by lightning, Barry Allen wakes up from his coma to discover he's been given the power of super speed, becoming the Flash, fighting crime in Central City.";
                  case "Dune World": return "A deep space crew takes a job on a mysterious remote planet. A crash landing strands them on the hostile surface. Soon they find out what creatures live there, and the hidden fate of the crew before them.";
                  case "Lucky": return "Lucky follows the spiritual journey of a 90-year-old atheist and the quirky characters that inhabit his off the map desert town.";
                  case "Steel": return "A scientist for the military turns himself into a cartoon-like superhero when a version of one of his own weapons is being used against enemies.";
                  case "Injustice": return "On an alternate Earth, the Joker tricks Superman into killing Lois Lane, which causes a rampage in the hero. Superman decides to take control of Earth; Batman and his allies will have to attempt to stop him.";
                  case "Jungle Cruise": return "Based on Disneyland's theme park ride where a small riverboat takes a group of travelers through a jungle filled with dangerous animals and reptiles but with a supernatural element.";
                  case "Hocus Pocus 2": return "Three young women accidentally bring back the Sanderson Sisters to modern day Salem and must figure out how to stop the child-hungry witches from wreaking havoc on the world.";
                  case "The Show": return "A man's search for a stolen artifact leads him to the haunted town filled with Voodoo gangsters, masked adventurers, Depression-era private eyes and violent chiaroscuro women.";
                  case "Siberia": return "An exploration into the language of dreams.";
                  case "47 Ronin": return "A band of samurai set out to avenge the death and dishonor of their master at the hands of a ruthless shogun.";
                  case "John Wick 4": return "The movie is the fourth sequel to the John Wick movie about the adventures of an ex-assassin who got involved in the underworld after his dog was killed. Keanu Reeves, who gives life to the character of John Wick, is once again in front of the camera for the fourth sequel.";
                  case "Infinite": return "A man discovers that his hallucinations are actually visions from past lives.";
                  case "Red Notice": return "An Interpol agent tracks the world's most wanted art thief.";
                  case "Doctor": return "When his fiancee's niece is kidnapped, a stoic army doctor and his motley team launch a rescue operation in which they need both wit and their wits.";
                  case "Fast & Furious 9": return "Dom and the crew must take on an international terrorist who turns out to be Dom and Mia's estranged brother.";
                  case "Venom": return "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.";
                  case "Nobody": return "A docile family man slowly reveals his true character after his house gets burgled by two petty thieves, which, coincidentally, leads him into a bloody war with a Russian crime boss.";
                  case "No Time to Die": return "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.";
                  case "Deadlock": return "An ex-military man working at a Georgia power plant has to spring into action to prevent disaster when a group of rogue soldiers gain control of the plant and take the employees hostage.";
                  case "Castle Falls": return "Rival gangs seek out millions of dollars hidden inside a luxury condominium that's scheduled to be demolished, but first they have to deal with the janitor who found the loot first.";
                  case "Alley Cats": return "When bike courier Chris witnesses what looks like a murder, his first instinct is to cut and run. But when his curiosity draws him back in, he's soon embroiled in a world of corruption, political power, and illegal bike racing.";
                  case "Black Widow": return "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.";
                  case "Ida Red": return "Ida 'Red' Walker may not survive her terminal illness while incarcerated for armed robbery. She turns to her son, Wyatt, for one last job and a chance to regain her freedom.";
                  case "Bigfoot Famous": return "When a viral video of Bigfoot emerges, a once popular influencer goes on a mission to film a vlog with Bigfoot and regain her fame.";
                  case "One Shot": return "An elite squad of Navy SEAL's, on a covert mission to transport a prisoner off a CIA black site island prison, are trapped when insurgents attack while trying to rescue the same prisoner.";
                  case "The Croods": return "The prehistoric family the Croods are challenged by a rival family the Bettermans, who claim to be better and more evolved.";
                  case "Robin Robin": return "In this stop-motion short film, a bird raised by mice begins to question where she belongs and sets off on a daring journey of self-discovery.";
                  case "Extinct": return "Op and Ed accidentally time-travel from the Galapagos Islands in 1835 to present-day Shanghai. They make their way through the city in confusion and make the horrifying discovery that the species to which they belong became extinct shortly after.";
                  case "Familie Claus": return "After discovering his grandfather is Santa Claus, Jules has to help him deliver his presents all around the world. But Jules' hatred for Christmas might make that more difficult than Santa thought.";
                  case "Honey Girls": return "Mega pop star, Fancy G (Ashanti), hosts a contest to find the next big solo artist. But the young contestants realize they are better together and secretly form a band called Honey Girls and become a huge hit cloaked in mystery.";
                  case "Black Easter": return "An Extremist group travels back in time to assassinate Christ before the Crucifixion. The fate of the world now depends on a genius with no faith...and a man who has lost his.";
                  case "Don Quixote": return "With his noble squire by his side, a retired country gentleman sets out on an adventure to right the wrongs of the world.";
                  case "Storm Boys": return "When Michael Kingley, a successful retired businessman starts to see images from his past that he can't explain, he's forced to remember his childhood and how, as a boy, he rescued and raised an extraordinary orphaned pelican, Mr Percival.";
                  case "Water Man": return "A boy sets out on a quest to save his ill mother by searching for a mythic figure said to have magical healing powers.";
                  case "Tom and Jerry": return "A chaotic battle ensues between Jerry Mouse, who has taken refuge in the Royal Gate Hotel, and Tom Cat, who is hired to drive him away before the day of a big wedding arrives.";
                  case "Skater Girl": return "When a teen in rural India discovers a life-changing passion for skateboarding, she faces a rough road as she follows her dream to compete.";
                  case "Garabet": return "Hendrik is sixteen, a big city kid, and vexed to learn that his mother is moving with him and his little brother Eddi to a village in the south of Austria. To make matters worse, the locals shun the new rustic family home. They say it has been haunted ever since a mother poisoned her two sons in there many decades ago. When a sleep- walking Eddi starts carving strange symbols into the walls, Hendrik and his friends set off on a quest to lift the secret of the spooky house.";
                  case "Real Steel": return "In the near future, robot boxing is a top sport. A struggling ex-boxer feels he's found a champion in a discarded robot.";
                  case "Casper": return "An afterlife therapist and his daughter meet a friendly young ghost when they move into a crumbling mansion in order to rid the premises of wicked spirits.";
                  case "Week Away": return "With nowhere left to go, Will Hawkins finds himself at camp for the first time. His instinct is to run, but he finds a friend, a father figure, and even a girl who awakens his heart. Most of all, he finally finds a home.";
              
                  default: return "No text";
                }
              })()}
            </p>

            <p style={{ color: 'white', position: 'absolute', top: '43.3%', paddingLeft: '80%', height:'auto', width:'17%' }}>
            {(() => {
                switch (this.props.title) {
                  case "Avatar": return "Sam Worthington, Zoe Saldana, Sigourney Weaver";
                  case "The Unholy": return "Jeffrey Dean Morgan, Katie Aselton, William Sadler";
                  case "Pixie": return "Olivia Cooke, Fra Fee, Rory Fleck-Byrne";
                  case "The Last Rite": return "Bethan Waller, Johnny Fleming, Tara Hoyos-Martinez";
                  case "Hideout": return " Audrey Kovar, Janice LaFlam, Bryan Enright";
                  case "Antlers": return "Keri Russell, Jesse Plemons, Jeremy T. Thomas";
                  case "The Feast": return "Annes Elwy, Nia Roberts, Julian Lewis Jones";
                  case "Devil Came Home": return "Greg Hobbs, Jade Callender, Diane Ellis";
                  case "Motherly": return "Lora Burke, Tessa Kozma , Kristen MacCulloch";
                  case "Lair": return "Oded Fehr, Corey Johnson, Emily Haigh";
                  case "Relic": return "Emily Mortimer, Robyn Nevin, Bella Heathcote";
                  case "Lanterns Lane": return "Brooke Butler, Andy Cohen (II), Ashley Doris";
                  case "Isolation": return "Fine Belger, Jack Fessenden, Larry Fessenden";
                  case "The Spore": return "Jeanie Jefferies, Haley Heslip, Peter Tell";
                  case "Hide and Seek": return "Jonathan Rhys-Meyers, Joe Pantoliano, Jacinda Barrett";
                  case "Horror Noire": return "Lesley-Ann Brandt, Luke James, Erica Ash";
                  case "The Deep House": return "Camille Rowe, James Jagger, Eric Savin";
                  case "Margin Call": return "Kevin Spacey, Paul Bettany, Jeremy Irons";
                  case "Passing": return "Tessa Thompson, Ruth Negga, Andre Holland";
                  case "Nine Days": return "Winston Duke, Zazie Beetz, Bill Skarsgård";
                  case "Good Joe Bell": return "Mark Wahlberg, Reid Miller, Connie Britton";
                  case "Time Now": return "Lisa Henni, Pia Halvorsen, Karin Bertling";
                  case "Not to Forget": return "Karen Grassle, Louis Gossett Jr., Tatum O'Neal";
                  case "Atlantis": return "Joe Flanigan, Rachel Luttrell, David Hewlett";
                  case "Supernova": return "Colin Firth, Stanley Tucci, Pippa Haywood";
                  case "Zeros and Ones": return "Ethan Hawke, Valerio Mastandrea, Babak Karimi";
                  case "The Deep House": return "Camille Rowe, James Jagger, Eric Savin";
                  case "Bruised": return "Halle Berry, Adan Canto, Sheila Atim";
                  case "Miami Heat": return "Oleg Prudius, Shannon Murray, Gabriela Wong";
                  case "Mixtape": return "Gemma Brooke Allen, Audrey Hsieh, Julie Bowen";
                  case "David and Elfs": return "Cyprian Grabowski, Jakub Zajac, Cezary Zak";
                  case "Undergods": return "Johann Myers, Géza Röhrig, Michael Gould";
                  case "Wanton Want": return "Nicholas Brendon, Jackie Moore, Phillip Andre Botello";
                  case "Black Adam": return " Dwayne Johnson, Aldis Hodge, Noah Centineo";
                  case "The Flash": return "Ezra Miller, Sasha Calle, Michael Keaton";
                  case "Dune World": return "Timothée Chalamet, Rebecca Ferguson, Oscar Isaac";
                  case "Lucky": return "Brea Grant, Leith M. Burke, Dhruv Uday Singh";
                  case "Steel": return "Shaquille O'Neal, Annabeth Gish, Judd Nelson";
                  case "Injustice": return "Émilie Caen, Jean-Baptiste Puech, Yann Duffas";
                  case "Jungle Cruise": return "Emily Blunt, Dwayne Johnson, Jesse Plemons";
                  case "Hocus Pocus 2": return "Bette Midler, Sarah Jessica Parker, Kathy Najimy";
                  case "The Show": return "Tom Burke, Ellie Bamber, Christopher Fairbank";
                  case "Siberia": return "Willem Dafoe, Dounia Sichov, Simon McBurney";
                  case "47 Ronin": return "Keanu Reeves, Hiroyuki Sanada, Kô Shibasaki";
                  case "John Wick 4": return "Keanu Reeves, Rina Sawayama, Donnie Yen";
                  case "Infinite": return "Mark Wahlberg, Chiwetel Ejiofor, Sophie Cookson";
                  case "Red Notice": return "Dwayne Johnson, Ryan Reynolds, Gal Gadot";
                  case "Doctor": return "Sivakarthikeyan, Priyanka Arul, Yogi Babu";
                  case "Fast & Furious 9": return "Vin Diesel, Michelle Rodriguez, Jordana Brewster";
                  case "Venom": return "Tom Hardy, Michelle Williams, Riz Ahmed";
                  case "Nobody": return "Bob Odenkirk, Aleksey Serebryakov, Connie Nielsen";
                  case "No Time to Die": return "Daniel Craig, Léa Seydoux, Rami Malek";
                  case "Deadlock": return "Bruce Willis, Patrick Muldoon, Matthew Marsden";
                  case "Castle Falls": return "Dolph Lundgren, Scott Adkins, Dave Halls";
                  case "Alley Cats": return "Eleanor Tomlinson, John Lynch, Sam Keeley";
                  case "Black Widow": return "Scarlett Johansson, Florence Pugh, Rachel Weisz";
                  case "Ida Red": return "Melissa Leo, Frank Grillo, Josh Hartnett";
                  case "Bigfoot Famous": return "Steph Barkley, Chris Kleckner, Sam Milman";
                  case "One Shot": return "Scott Adkins, Ashley Greene Khoury, Ryan Phillippe";
                  case "The Croods": return "Aslı Tandoğan, Nicolas Cage, Ryan Reynolds";
                  case "Robin Robin": return "Bronte Carmichael, Gillian Anderson, Richard E. Grant";
                  case "Extinct": return "Adam Devine, Rachel Bloom, Ken Jeong";
                  case "Familie Claus": return "Jan Decleir, Mo Bakker, Stefaan Degand";
                  case "Honey Girls": return "Ashanti, Ava Grace, Aliyah Mastin";
                  case "Black Easter": return "Jordyn Barrera, Christina Birdsong, Donny Boaz";
                  case "Don Quixote": return "John Lithgow, Bob Hoskins, Isabella Rossellini";
                  case "Storm Boys": return "Finn Little, Jai Courtney, Geoffrey Rush";
                  case "Water Man": return "David Oyelowo, Amiah Miller, Lonnie Chavis";
                  case "Tom and Jerry": return "William Hanna, Joseph Barbera";
                  case "Skater Girl": return "Rachel Saanchita Gupta, Waheeda Rehman, Jonathan Readwin";
                  case "Garabet": return "León Orlandianyi, Benno Rosskopf, Julia Koschitz";
                  case "Real Steel": return "Hugh Jackman, Dakota Goyo, Evangeline Lilly";
                  case "Casper": return "Devon Sawa, Christina Ricci, Bill Pullman";
                  case "Week Away": return "Kevin Quinn, Bailee Madison, Sherri Shepherd";
              
                  default: return "No text";
                }
              })()}

            </p>
          </div>

        </Modal>
       
      </div>

    )
  }

}
export default Card;