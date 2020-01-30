import React, {
  Component
} from 'react';
// import DogSingle from './DogSingle';

class Dogs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
    };
  }

  componentDidMount() {
    const url = 'https://dog.ceo/api/breeds/list/all'

    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {

        const resultsArray = [];
        const breedList = data.message


        for (const breed in breedList) {
          if (breedList[breed].length === 0) {
            resultsArray.push(breed)
          } else {

            breedList[breed].forEach(subbreed => {
              resultsArray.push(`${subbreed} ${breed}`)

            });

          }
          // console.log(`${breed}: ${breedList[breed]}`)
        }
        this.setState(() => ({
          dogs: resultsArray
        }))
      })

      .catch((error) => console.log(error))
  }



  render() {
    return ( 
  <div>
    {this.state.dogs.map((dog) => {
      return (
        <div>
        {dog}
      </div>
      )
   
    })}
  </div>
    )
  }
}

export default Dogs;
