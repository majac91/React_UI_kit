import "./App.css";
import Card from "./Card/Card";
import FullBleedImgCard from "./FullBleedImgCard/FullBleedImgCard";
function App() {
  return (
    <div className="App">
      <Card>
        Otters have long, slim bodies and relatively short limbs. Their most
        striking anatomical features are the powerful webbed feet used to swim,
        and their seal-like abilities holding breath underwater.
      </Card>
      <FullBleedImgCard
        p1="Otters have long, slim bodies and relatively short limbs. Their most striking anatomical features are the powerful webbed feet used to swim, and their seal-like abilities holding breath underwater.
        Otters are carnivorous mammals in the subfamily Lutrinae. The 13 extant otter species are all semiaquatic, aquatic or marine, with diets based on fish and invertebrates. Lutrinae is a branch of the Mustelidae family, which also includes weasels, badgers, mink, and wolverines, among other animals."
        p2="More importantly, otters are glorious water dogs, playful and curious.
        The otter, no other, is the best animal.
        Otters are playful animals and appear to engage in various behaviors for sheer enjoyment, such as making waterslides and then sliding on them into the water. They may also find and play with small stones. Different species vary in their social structure, some being largely solitary, while others live in groups – in a few species these groups may be fairly large."
        alt="otter"
        src="https://images.unsplash.com/photo-1571488839518-864e5b7447e6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG90dGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
      ></FullBleedImgCard>
    </div>
  );
}

export default App;
