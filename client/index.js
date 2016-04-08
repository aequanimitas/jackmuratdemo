import 'milligram/dist/milligram.css';
require('../scss/main.scss');

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, Link } from 'react-router'

let App = React.createClass({
  render() {
    return(
      <div className="container main">
        <a href="/"><img src="/static/jmc.png" alt="" className="img" /></a>
        <Nav />
        { this.props.children }
      </div>)
  }
})

let Nav = React.createClass({
  render() {
    return (
      <ul role="nav" className="nav">
        <li className="nav-item">
          <Link to="/about" activeClassName="active">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/roasting" activeClassName="active">Roasting</Link>
        </li>
        <li className="nav-item">
          <Link to="/brewing" activeClassName="active">Brewing</Link>
        </li>
      </ul>
    )
  }
})

let About = React.createClass({
  render() {
    return (<div className="container sub-panels about-container">
      Australia's finest Turkish coffee. Serving you with a cup of love for 100 years 
    </div>)
  }
})


class Brewing extends React.Component {
  render() {
    return (<div className="container sub-panels">
      <p>
        <h4>1. Cold Water</h4>
Measure the amount of cold water you will need.
        </p>
<p>
  <h4>2. Heat Water</h4>

Place your pot of water on the stove and turn the heat to medium-high (just until the water heats up).
</p>
<p>
  <h4>3. Coffee</h4>

Add about 1-2 heaping tea spoons (or 1 tablespoon) of coffee per demitasse cup (3 oz). Do not stir it yet. Just let the coffee "float" on the surface because if you stir it now you might cause it to clump up.
</p>
<p>
  <h4>4. Sugar</h4>

Add sugar to taste. Do not stir it yet, Let the water warm up little bit as above.
</p>
<p>
  <h4>5. Stir</h4>

 When the coffee starts to sink into the water and the water is warm enough to dissolve your sugar, stir it several times and then turn down the heat to low. You should stir it several times, up until your brew starts to foam (you can also vigorously move your spoon side to side to encourage to start the foaming).
</p>
<p>
  <h4>6. Bubbles</h4>

When you see the bubble "ring" forming on the surface, turn down the heat a little bit more or move your pot away from the heat source. Pay attention to the bubbles that are forming at this stage. Bubbles should be very small in size.
</p>
<p>
  <h4>7. Wait for Frothing </h4>

From this point on watch your coffee carefully. Do not let the temperature get hot enough to start boiling. (NEVER LET IT BOIL - many instructions on how to make Turkish coffee use the term "boiling" but this is totally inaccurate) The key idea here is to let the coffee build a thick froth and that occurs approximately around 158 F or 70 C (i.e., much cooler than the boiling point of water which is 212 F or 100 C at standard pressure. If your brew comes to a boil, you will not have any foam because it will simply evaporate!).
</p>
<p>
  <h4>8. Foaming</h4>

Keep it at the "foaming" stage as long as you can without letting it come to a boil. You might even gently stir your brew a little bit at this stage. The more froth, the better it will taste. Also your coffee must be fresh or it will not foam as well. If your brew gets too hot and begins to "rise", then move it away from the heat or just turn it down. You are almost done. Repeat this process until your foam has "raised" and "cooled" at the most couple of times (NOT 3-4 times like some instructions. Even once is enough). Then pour in to your cups (quickly at first to get out the foam, then slowly) while making sure that each cup has equal amount of foam! If you are serving several cups then you might be better off spooning the foam into each cup.
</p>

    </div>)
  }
}

class Roasting extends React.Component {
  render() {
    return (<div className="container sub-panels">
      <p> 
        <h4>Step 1: Choose a roaster </h4>
         There are many ways to roast coffee. The method you choose should be influenced by: <br />&nbsp;

          <h6>1) how much roasted coffee you need and:</h6>
          <h6>2) how much money you want to spend. </h6>
         Whether you choose a D.I.Y. approach or a small appliance matters depends mostly on how you like to approach things, and if you want more or less automation.
      
     <p>
     <h5>Do-It-Yourself Methods</h5>     
     The D.I.Y. approach is a great way to get started, especially if you can re-purpose an electric hot air Popcorn Popper that you have in a cupboard, or can find second-hand. You can even find them cheaply in a hardware store, Target or Wal-Mart usually. You can also use a skillet, a stovetop popper, or a cookie sheet in the oven. These latter methods roast less evenly and require some technique to get good results, that is why we recommend the air popper method.
    </p>   
    <p>
     <h5>Home Coffee Roasting Appliances</h5>
    
     An appliance gives you a built-in timer, a way to collect chaff, and (depending on the model) some control over the temperature and air flow. Some models have smoke suppression. Air roasters take less than 10 minutes, roast very evenly without scorching, and are better for small amounts of coffee. The advantages of drum roasting are a larger batch size and an even roast, but these machines require more attention and generate more smoke.
     </p>
     </p>
     <p> 
       <h4>Step 2: Choose green coffee</h4>
       We suggest the 4 lb. Sampler as a starting place. We select coffees that help you learn the major differences in flavor between regions and provide a relatively even roast. From there, browse our region information and coffee offerings to narrow down which coffees you'd like to try next. If you need more help, our Green Coffee FAQ will help take the mystery out of selecting.
     </p>


<h4>     Step 3: The Roast Process</h4>
<p>
     Understanding the different stages of the roast will help you control the flavor of your cup and appreciate how different roasts result in different cup flavors.

     <li>
       <h5>Yellowing:</h5>
       <p>
     For the first few minutes the bean remains greenish, then turn lighter yellowish and emit a grassy smell.
       </p>
     </li>
    <li>
      <h5>Steam:</h5>
      <p> The beans start to steam as their internal water content dissipates. </p>
    </li>
    <li>
      <h5>First Crack: </h5>
      <p>The steam becomes fragrant. Soon you will hear the first crack, an audible cracking sound as the real roasting starts to occur: sugars begin to caramelize, bound-up water escapes, the structure of the bean breaks down and oils migrate from their little pockets outward. </p>
    </li>
    <li>
      <h5>First Roasted Stage: </h5>
      <p>After the first crack, the roast can be considered complete any time according to your taste. The cracking is an audible cue, and, along with sight and smell, tells you what stage the roast is at. This is what is called a City roast.</p>
    </li>
    <li>
      <h5>Caramelization: </h5>
      <p>Caramelization continues, oils migrate, and the bean expands in size as the roast becomes dark. As the roast progresses, this is a City + roast. Most of our roast recommendations stop at this point. When you are on the verge of second crack, that is a Full City roast.</p>
    </li>
    <li>
      <h5>Second Crack: </h5>
      <p>At this point a second crack can be heard, often more volatile than the first. The roast character starts to eclipse the origin character of the beans at this point and is also known as a Vienna roast. A few pops into second crack is a Full City + roast. Roasting all the way through second crack may result in small pieces of bean being blown away like shrapnel!</p>
    </li>
    <li>
      <h5>Darkening Roast</h5>
      <p>As the roast becomes very dark, the smoke is more pungent as sugars burn completely, and the bean structure breaks down more and more. As the end of second crack approaches you will achieve a French roast.</p>
    </li>
</p>
   <p>  After cooling, allow the coffee to rest for 4-8 hours in a loosly closed container or Coffee Storage. Then seal the container tight, or store in valve bag for up to a week. Of course you can drink your coffee at any time after you have roasted it but for peak flavor and body resting, letting the coffee off gas CO2, is best. A lot of folks ask about the freezer, you can store roasted coffee in the freezer if you will not be using it for a week or more, after you start using it keep it at room temperature. Green coffee is best stored in the plastic bags they we ship them in, in a cool dry place.</p>

    </div>)
  }
}

render(
  <Router history={hashHistory}>
   <Route path="/" component={App}>
     <Route path="/about" component={About} /> 
     <Route path="/brewing" component={Brewing} /> 
     <Route path="/roasting" component={Roasting} /> 
   </Route>
  </Router>,
  document.getElementById('root')
)
