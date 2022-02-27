const textbox = [
  "Bespoke snackwave crucifix, knausgaard microdosing yr selvage hot chicken hexagon YOLO vinyl subway tile sustainable quinoa. Scenester authentic gentrify iceland 8-bit small batch. Cardigan beard 8-bit tilde photo booth. Chambray gastropub tumeric poke mixtape +1 portland fixie freegan occupy chartreuse hexagon. Post-ironic wayfarers retro, messenger bag iPhone pabst disrupt vaporware man bun. Sartorial offal polaroid, vexillologist street art YOLO cornhole banh mi raw denim tousled small batch neutra.",
  "Cliche meditation la croix blog ugh, coloring book gluten-free. Mixtape shabby chic normcore gastropub fashion axe sartorial. Hoodie la croix PBR&B, snackwave food truck poutine hexagon yr four dollar toast thundercats. Brooklyn distillery mustache seitan meggings. Trust fund enamel pin narwhal poutine chambray. Paleo raclette kale chips cray actually helvetica.",
  "Occupy VHS readymade ethical kitsch, food truck chartreuse vexillologist tattooed keffiyeh. Keytar prism adaptogen, stumptown franzen bitters 3 wolf moon next level banh mi williamsburg slow-carb readymade poutine whatever subway tile. Vinyl cornhole yuccie woke waistcoat, chia tote bag literally umami keytar sriracha pop-up readymade. Tilde godard ugh, air plant kogi +1 thundercats cornhole keytar snackwave brooklyn sartorial polaroid crucifix bitters. 8-bit microdosing pop-up edison bulb, twee gentrify skateboard.",
  "Yr swag lumbersexual godard leggings kogi vinyl photo booth jean shorts drinking vinegar blue bottle kitsch neutra. YOLO keffiyeh kale chips, intelligentsia cliche cold-pressed tousled unicorn locavore. Pour-over asymmetrical master cleanse poutine raclette yr heirloom. Sriracha neutra intelligentsia palo santo actually pok pok glossier vice. Flannel chartreuse narwhal pickled, bushwick jianbing schlitz ethical chillwave cray lyft typewriter. Migas distillery tote bag church-key gluten-free edison bulb pok pok authentic health goth vape hashtag readymade adaptogen coloring book cloud bread.",
  "Craft beer fam edison bulb sustainable occupy VHS vape glossier lyft bespoke PBR&B quinoa irony portland banjo. Pug deep v forage hashtag, roof party bicycle rights dreamcatcher vinyl 8-bit semiotics kogi hammock twee. Lumbersexual adaptogen cornhole single-origin coffee chartreuse fanny pack. Post-ironic coloring book sustainable tattooed drinking vinegar YOLO man bun snackwave cold-pressed cliche chillwave asymmetrical bitters fixie. Freegan selfies messenger bag, distillery XOXO brunch seitan austin meditation yr fam. Gentrify etsy shabby chic XOXO chartreuse four loko fixie, scenester polaroid selvage green juice.",
  "Cloud bread mixtape everyday carry, poutine raw denim letterpress next level cray street art yuccie yr. Craft beer quinoa pug gluten-free brunch air plant kombucha, jianbing chambray green juice. Raw denim palo santo ramps, tousled narwhal fixie kale chips XOXO pitchfork ethical snackwave. Locavore DIY lyft microdosing mumblecore palo santo yr. Squid skateboard meditation celiac, food truck taxidermy vegan craft beer.",
  "Squid mixtape cronut vice asymmetrical. Shaman flexitarian kombucha, kale chips cardigan PBR&B farm-to-table ugh selfies literally kitsch. Hot chicken fingerstache everyday carry echo park flexitarian affogato sartorial humblebrag retro brooklyn kinfolk post-ironic tumeric kitsch copper mug. Occupy chillwave waistcoat, prism put a bird on it crucifix letterpress skateboard wayfarers bespoke.",
  "Brooklyn fam iceland tote bag. Meh green juice yuccie readymade synth small batch tattooed try-hard locavore edison bulb. Gastropub skateboard cronut, craft beer 3 wolf moon chambray wolf farm-to-table. Authentic health goth blog, cronut meditation mixtape adaptogen hashtag shabby chic beard raclette yr echo park. Typewriter beard pabst bushwick knausgaard direct trade food truck salvia +1 hot chicken irony selfies thundercats fashion axe. 8-bit ennui tote bag, cliche pitchfork ethical salvia occupy swag thundercats.",
  "Bicycle rights art party gochujang, flannel distillery squid hexagon bespoke tumblr. Flexitarian PBR&B lo-fi thundercats affogato bitters beard, twee tofu forage aesthetic woke VHS tacos. Cronut swag brooklyn authentic fanny pack, twee blog XOXO bushwick cornhole aesthetic jean shorts tumeric stumptown PBR&B. Farm-to-table street art affogato, sartorial austin heirloom iPhone bespoke williamsburg chia vegan. Flexitarian keytar tacos mustache, farm-to-table cred +1 microdosing tilde you probably haven't heard of them thundercats waistcoat. Raw denim succulents neutra chia, yr single-origin coffee XOXO disrupt narwhal aesthetic.",
];

document.addEventListener("DOMContentLoaded", () => {
  const number = document.getElementById("number");
  const para = document.querySelector(".paragraph");
  const btn = document.querySelector(".button");

  btn.addEventListener("click", () => {
    if (number.value == "") {
      para.innerHTML = textbox[0];
    } else if (number.value <= textbox.length) {
      let noOfPara = textbox.slice(0, number.value);
      noOfPara = noOfPara.join("<br /><br />");
      para.innerHTML = noOfPara;
    } else {
      para.innerHTML = textbox[getRandomNum()];
    }
  });

  function getRandomNum() {
    return Math.floor(Math.random() * textbox.length);
  }
});
