import "../App.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAdoptContext } from './adoptcontext';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../components/isLoggedInContext'; // Import LoginContext

// Resource Component to handle data fetching
const Resource = ({ path, render }) => {
  const initialState = {
    trans: [],
    loading: true,
    error: null,
  };

  const [state, setState] = useState(initialState);

  const getData = async () => {
    try {
      const result = await axios.get(path);
      // Assuming you want to fetch dog details (breeds) for each dog after getting the initial list
      const dogData = result.data;

      // Fetch breed details for each dog using their dogId
      const updatedDogs = await Promise.all(
        dogData.map(async (dog) => {
          const dogDetails = await axios.get(`https://api.thedogapi.com/v1/images/${dog.id}`);
          // Assuming the breed info is in the response data under `breeds[0]?.name`
          const breedName = dogDetails.data.breeds?.[0]?.name || 'Breed not available';
          const breedTemperament = dogDetails.data.breeds?.[0]?.temperament || 'Temperament not available';
          return { ...dog, breed: breedName, breedTemperament: breedTemperament };
        })
      );

      const newData = {
        trans: updatedDogs,
        loading: false,
        error: null,
      };

      setState(newData);
    } catch (error) {
      console.log('Error in getData', error.message);
      setState({
        trans: [],
        loading: false,
        error: error.message,
      });
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="showlist">
      {render(state)}
    </div>
  );
};

// ShowDog Component to render the dog data
const ShowDog = () => {
  const webURL = "https://api.thedogapi.com/v1/images/search/?limit=15&page=9&has_breeds=1&order=DESC";

  // State to store additional dog details (like breed)
  const { adoptArray, setAdoptArray } = useAdoptContext();
  const [dogDetails, setDogDetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { isLoggedIn } = useLogin(); // Use the LoginContext here to get the login state

  // Function to fetch dog details using its ID
  const processDogData = async (dogId) => {
    try {
      const response = await axios.get(`https://api.thedogapi.com/v1/images/${dogId}`);
      return response.data; // Returns the data for a specific dog
    } catch (error) {
      console.error("Error fetching dog details", error);
      return null;
    }
  };

  // Fetch dog details for each dog
  const fetchDogDetails = async (dogId) => {
    const dogData = await processDogData(dogId);
    if (dogData) {
      setDogDetails((prevDetails) => ([ 
        ...prevDetails,
        { id: dogId, ...dogData, breed: dogData.breeds?.[0]?.name || 'Breed not available', breedTemperament: dogData.breeds?.[0]?.temperament || 'Temperament not available' }
      ]));
      console.log("Fetched dog details for ID:", dogData);
    }
  };

  // Fetch dog data and details
  useEffect(() => {
    const fetchAllDogDetails = async () => {
      const ids = new Set(); // A set to store unique dog ids
      const data = await axios.get(webURL);
      
      // Process each dog and fetch breed details
      data.data.forEach((dog) => {
        if (!ids.has(dog.id)) {
          ids.add(dog.id);
          fetchDogDetails(dog.id);
        }
      });
    };

    fetchAllDogDetails(); // Fetch details on component mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Function to handle search input
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const clickevent = (dog) => {
    setAdoptArray((prevList) => [
      ...prevList,
      {
        Id: dog.id,
        breed: dog.breed,
        url: dog.url,
        temp: dog.breedTemperament,
        type: 'dog',
        paid: false,
      },
    ]);
    console.log(adoptArray);
    if (isLoggedIn) {
      navigate('/payment');
    } else {
      navigate('/login');
    }
  };

  // Function to filter dogs based on breed or temperament
  const filteredDogs = dogDetails.filter((dog) =>
    dog.breed.toLowerCase().includes(searchQuery) ||
    dog.breedTemperament.toLowerCase().includes(searchQuery)
  );

  // Function to render the dogs with their details
  const render = (data) => {
    if (data.loading) return <p>Loading...</p>;
    if (data.error) return <p>Error: {data.error}</p>;

    return (
      <div>
        <input
          className="searchbar"
          type="text"
          placeholder="Search by breed or temperament..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className="cats-list">
          {filteredDogs.length > 0 ? (
            filteredDogs.map((dog) => (
              <div className="cards2" key={dog.id}>
                <div className="flipping">
                  <div className='catimg dogimg'>
                    <img className="img adopt" src={dog.url} alt="dog img" />
                    <p><strong>Breed:</strong> {dog.breed}</p>
                  </div>
                  <div className="text">
                    <p><strong>Breed:</strong> {dog.breed}</p>
                    <p><strong>Temperament:</strong> {dog.breedTemperament}</p>
                    <button type="button" onClick={() => clickevent(dog)}>Adopt Now</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No dogs found matching your search criteria.</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Resource path={webURL} render={render} />
    </div>
  );
};

// Main App component
export default function App() {
    const navigate = useNavigate();
  return (
    <div className="App">
      <div className="alt_page_images img">
        <h1>Adoption</h1>
      </div>
      <div className="selector">
        <div className="tab" onClick={() => navigate('/Cats')}>
            <h2>Cat</h2>
            </div>
        <div className="tab selected">
          <h2>Dog</h2>
        </div>
      </div>
      <ShowDog />
    </div>
  );
}
