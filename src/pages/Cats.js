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
    error: null
  };

  const [state, setState] = useState(initialState);

  const getData = async () => {
    try {
      const result = await axios.get(path);
      // Assuming you want to fetch cat details (breeds) for each cat after getting the initial list
      const catData = result.data;

      // Fetch breed details for each cat using their catId
      const updatedCats = await Promise.all(
        catData.map(async (cat) => {
          const catDetails = await axios.get(`https://api.thecatapi.com/v1/images/${cat.id}`);
          // Assuming the breed info is in the response data under `breeds[0]?.name`
          const breedName = catDetails.data.breeds?.[0]?.name || 'Breed not available';
          const breedTemperament = catDetails.data.breeds?.[0]?.temperament || 'Temperament not available';
          return { ...cat, breed: breedName, breedTemperament: breedTemperament };
        })
      );

      const newData = {
        trans: updatedCats,
        loading: false,
        error: null
      };

      setState(newData);
    } catch (error) {
      console.log('Error in getData', error.message);
      setState({
        trans: [],
        loading: false,
        error: error.message
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

// ShowCat Component to render the cat data
const ShowCat = () => {
  const webURL = "https://api.thecatapi.com/v1/images/search/?limit=15&page=9&has_breeds=1&order=DESC";

  // State to store additional cat details (like breed)
  const { adoptArray, setAdoptArray } = useAdoptContext();
  const [catDetails, setCatDetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { isLoggedIn } = useLogin(); // Use the LoginContext here to get the login state

  // Function to fetch cat details using its ID
  const processCatData = async (catId) => {
    try {
      const response = await axios.get(`https://api.thecatapi.com/v1/images/${catId}`);
      return response.data; // Returns the data for a specific cat
    } catch (error) {
      console.error("Error fetching cat details", error);
      return null;
    }
  };

  // Fetch cat details for each cat
  const fetchCatDetails = async (catId) => {
    const catData = await processCatData(catId);
    if (catData) {
      setCatDetails((prevDetails) => ([ 
        ...prevDetails,
        { id: catId, ...catData, breed: catData.breeds?.[0]?.name || 'Breed not available', breedTemperament: catData.breeds?.[0]?.temperament || 'Temperament not available' }
      ]));
      console.log("Fetched cat details for ID:", catData);
    }
  };

  // Fetch cat data and details
  useEffect(() => {
    const fetchAllCatDetails = async () => {
      const ids = new Set(); // A set to store unique cat ids
      const data = await axios.get(webURL);
      
      // Process each cat and fetch breed details
      data.data.forEach((cat) => {
        if (!ids.has(cat.id)) {
          ids.add(cat.id);
          fetchCatDetails(cat.id);
        }
      });
    };

    fetchAllCatDetails(); // Fetch details on component mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Function to handle search input
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const clickevent = (cat) => {
    setAdoptArray((prevList) => [
      ...prevList,
      {
        Id: cat.id,
        breed: cat.breed,
        url: cat.url,
        temp: cat.breedTemperament,
        type: 'cat',
        paid: false,
      },
    ]);
    console.log(adoptArray);
    if(isLoggedIn){
      navigate('/payment');
    } else {
      navigate('/login');
    }
  };


  // Function to filter cats based on breed or temperament
  const filteredCats = catDetails.filter((cat) =>
    cat.breed.toLowerCase().includes(searchQuery) ||
    cat.breedTemperament.toLowerCase().includes(searchQuery)
  );

  // Function to render the cats with their details
  const render = (data) => {
    if (data.loading) return <p>Loading...</p>;
    if (data.error) return <p>Error: {data.error}</p>;

    return (
      <div>
        
        <input className="searchbar"
          type="text"
          placeholder="Search by breed or temperament..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className="cats-list">
          {filteredCats.length > 0 ? (
            filteredCats.map((cat) => (
                <div className="cards2" key={cat.id}>
                    <div className="flipping">
                        <div className='catimg'>
                            <img className="img adopt" src={cat.url} alt="cat img" />
                            <p><strong>Breed:</strong> {cat.breed}</p>
                        </div>
                        <div className="text">
                            <p><strong>Breed:</strong> {cat.breed}</p>
                            <p><strong>Temperament:</strong> {cat.breedTemperament}</p>

                            <button type="button" onClick={() => clickevent(cat)}>Adopt Now</button>
                        </div>
                    </div>
                </div>
            ))
          ) : (
            <p>No cats found matching your search criteria.</p>
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
      <div className='alt_page_images img'>
                <h1>Adoption</h1>
            </div>
        <div className="selector">
            <div className="tab selected">
            <h2>Cat</h2>
            </div>
            <div className="tab" onClick={() => navigate('/dogs')}>
            <h2>Dog</h2>
            </div>
        </div>
      <ShowCat />
    </div>
  );
}
