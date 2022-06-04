/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "A Batch Normalized Inference Network Keeps this awake",
    authors:
      "Praanav",
    conferences:
      "once upon a  time it was on meet",
    researchYr: 2020,
    citebox: "popup1",
    image: "assets/images/research-page/inteferenceNetwork.png",
    citation: {
      vancouver:
        "hein matab har chiz padhna jarori hai??//",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 1",
    absbox: "absPopup1",
  },

  {
    title: "JUST A PLACEHOLDER",
    authors:
      "COMMING SOON",
    conferences:
      "COMMING SOON",
    researchYr: 2022,
    citebox: "popup2",
    image: "assets/images/research-page/crossLingual.png",
    citation: {
      vancouver:
        "KK BYE BYE",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 2",
    absbox: "absPopup2",
  },

  {
    title:
      "COMMING SOON",
    authors: "..........",
    conferences:
      "WTF U EXPECT FROM 14 Y.O KID??/ I AM BUSY ALWAYS CAN'T WORK ON THESE SHIT PROJECTS",
    researchYr: 2020,
    citebox: "popup3",
    image: "assets/images/research-page/wordRepresentation.png",
    citation: {
      vancouver:
        "UHHH",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 3",
    absbox: "absPopup3",
  },

  {
    title:
      "HI DUMMY DATA 4",
    authors:
      "SERVERLESS",
    conferences:
      "OWO",
    researchYr: 2020,
    citebox: "popup4",
    image: "assets/images/research-page/dialogueState.png",
    citation: {
      vancouver:
        "KEK THNX BYE BYE",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 4",
    absbox: "absPopup4",
  },

  {
    title: "JUST ONE MORE PLACEHOLDER",
    authors: "OWO",
    conferences:
      "HUH",
    researchYr: 2020,
    citebox: "popup5",
    image: "assets/images/research-page/semanticSegmentation.png",
    citation: {
      vancouver:
        "JUST DIE I DON'T CARE THNX",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 5",
    absbox: "absPopup5",
  },

  {
    title: "HI",
    authors: "HLO",
    conferences:
      "IMAO",
    researchYr: 2020,
    citebox: "popup6",
    image: "assets/images/research-page/deepNetwork.png",
    citation: {
      vancouver:
        "HMMM THNX BYYE",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 6",
    absbox: "absPopup6",
  },

  {
    title:
      "HM OP",
    authors: "KEK",
    conferences:
      "BBYE)",
    researchYr: 2020,
    citebox: "popup7",
    image: "assets/images/research-page/imageDecomposition.png",
    citation: {
      vancouver:
        "Li",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 7",
    absbox: "absPopup7",
  },
  {
    title:
      "K THNKX",
    authors:
      "MADE FOR FLEX",
    conferences:
      ":0",
    researchYr: 2020,
    citebox: "popup8",
    image: "assets/images/research-page/neuralNetworks.jpg",
    citation: {
      vancouver:
        "SOJAO",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 8",
    absbox: "absPopup8",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
