import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      animals : [
        { id: 1, name: "Fat-tailed dunnart", species: "Smithopsis crassicaudata" },
        { id: 2, name: "Macaw, blue and gold", species: "Ara ararauna" },
        { id: 3, name: "Robin, kalahari scrub", species: "Certotrichas paena" },
        { id: 4, name: "Fox, crab-eating", species: "Dusicyon thous" },
        { id: 5, name: "Polar bear", species: "Ursus maritimus" },
        { id: 6, name: "Heron, green-backed", species: "Butorides striatus" },
        { id: 7, name: "Greater sage grouse", species: "Centrocercus urophasianus" },
        { id: 8, name: "Lorikeet, scaly-breasted", species: "Trichoglossus chlorolepidotus"  },
        { id: 9, name: "Avocet, pied", species: "Recurvirostra avosetta" },
        { id: 10, name: "Water legaan", species: "Varanus salvator" },
        { id: 11, name: "Cormorant, flightless", species: "Nannopterum harrisi" },
        { id: 12, name: "Common genet", species: "Genetta genetta" },
        { id: 13, name: "Andean goose", species: "Chloephaga melanoptera" },
        { id: 14, name: "Blue duck", species: "Hymenolaimus malacorhynchus" },
        { id: 15, name: "Sloth, two-toed", species: "Choloepus hoffmani" },
        { id: 16, name: "Vulture, oriental white-backed", species: "Gyps bengalensis"   },
        { id: 17, name: "Cat, jungle", species: "Felis chaus" },
        { id: 18, name: "Red-tailed cockatoo", species: "Calyptorhynchus magnificus"  },
        { id: 19, name: "Lion, asian", species: "Panthera leo persica" },
        { id: 20, name: "Pacific gull", species: "Gabianus pacificus" },
        { id: 21, name: "Crane, stanley", species: "Anthropoides paradisea" },
        { id: 22, name: "Eastern boa constrictor", species: "Acrantophis madagascariensis" },
        { id: 23, name: "Crane, stanley", species: "Anthropoides paradisea" },
        { id: 24, name: "Pine siskin", species: "Carduelis pinus" },
        { id: 25, name: "Badger, american", species: "Taxidea taxus" },
        { id: 26, name: "Chuckwalla", species: "Sauromalus obesus" },
        { id: 27, name: "Francolin, coqui", species: "Francolinus coqui" },
        { id: 28, name: "Red-tailed cockatoo", species: "Calyptorhynchus magnificus"},
        { id: 29, name: "Eastern dwarf mongoose", species: "Helogale undulata" },
        { id: 30, name: "African lynx", species: "Felis caracal" },
        { id: 31, name: "Kite, black", species: "Milvus migrans" },
        { id: 32, name: "Dog, raccoon", species: "Nyctereutes procyonoides" },
        { id: 33, name: "Heron, yellow-crowned night", species: "Nyctanassa violacea"  },
        { id: 34, name: "Brown lemur", species: "Lemur fulvus" },
        { id: 35, name: "White-fronted bee-eater", species: "Merops bullockoides" },
        { id: 36, name: "Puna ibis", species: "Plegadis ridgwayi" },
        { id: 37, name: "Australian masked owl", species: "Tyto novaehollandiae" },
        { id: 38, name: "Raccoon, crab-eating", species: "Procyon cancrivorus" },
        { id: 39, name: "Otter, small-clawed", species: "Aonyx cinerea" },
        { id: 40, name: "Long-billed corella", species: "Cacatua tenuirostris" },
        { id: 41, name: "Owl, great horned", species: "Bubo virginianus" },
        { id: 42, name: "Sage grouse", species: "Centrocercus urophasianus" },
        { id: 43, name: "Ringtail cat", species: "Bassariscus astutus" },
        { id: 44, name: "Dunnart, fat-tailed", species: "Smithopsis crassicaudata" },
        { id: 45, name: "Stork, marabou", species: "Leptoptilos crumeniferus" },
        { id: 46, name: "Asiatic wild ass", species: "Equus hemionus" },
        { id: 47, name: "Penguin, little blue", species: "Eudyptula minor" },
        { id: 48, name: "Radiated tortoise", species: "Geochelone radiata" },
        { id: 49, name: "Common zorro", species: "Dusicyon thous" },
        { id: 50, name: "White spoonbill", species: "Platalea leucordia" }
      ],
    }
  }
  render() {
    // dummyData.forEach(item =>
    // console.log(item))
    // dummyData.forEach(item =>
    // console.log(typeof item))
    console.log(dummyData);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Animals: by Luisan</h1>
        </header>
        <SearchBar />
          {dummyData.map(entry =>
          <PostContainer entry={entry}/>
        )}

      </div>


    );
  }
}

// App.propTypes = {
//   entry: PropTypes.shape({
//     comments: PropTypes.array.isRequired,
//     imageUrl: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//     thumbnailUrl: PropTypes.string.isRequired,
//     timestamp: PropTypes.string.isRequired,
//     username: PropTypes.string.isRequired,
//   }).isRequired
// }

export default App;
