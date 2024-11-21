import React, { useState } from 'react';
import { useAdoptContext } from './adoptcontext'; // Import AdoptContext

const CurrentAdoptions = () => {
  const { adoptArray, setAdoptArray } = useAdoptContext(); // Access context
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Cancel adoption
  const cancelAdoption = (id) => {
    const updatedArray = adoptArray.filter((adoption) => adoption.Id !== id);
    setAdoptArray(updatedArray);
    alert('Adoption canceled.');
  };

  // Filter paid adoptions and apply search query
  const filteredAdoptions = adoptArray.filter(
    (adoption) =>
      adoption.paid && // Ensure only paid adoptions appear
      (adoption.breed.toLowerCase().includes(searchQuery) ||
        adoption.temp.toLowerCase().includes(searchQuery))
  );

  return (
    <div className="App">
    
      <div className="form-container alt">
        <div className="alt_page_images img">
          <h1>Current Adoptions</h1>
        </div>
      </div>
      <div className='showlist'>
      <div>
        <input
          className="searchbar"
          type="text"
          placeholder="Search by breed or temperament..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className="cats-list">
          {filteredAdoptions.length > 0 ? (
            filteredAdoptions.map((adoption) => (
              <div className="cards2" key={adoption.Id}>
                <div className="flipping">
                  <div className="catimg">
                    <img
                      className="img adopt"
                      src={adoption.url}
                      alt="adopted animal img"
                    />
                    <p>
                      <strong>Breed:</strong> {adoption.breed}
                    </p>
                  </div>
                  <div className="text">
                    <p>
                      <strong>Breed:</strong> {adoption.breed}
                    </p>
                    <p>
                      <strong>Temperament:</strong> {adoption.temp}
                    </p>
                    <p>
                      <strong>Type:</strong> {adoption.type}
                    </p>
                    <button
                      type="button"
                      onClick={() => cancelAdoption(adoption.Id)}
                    >
                      Cancel Adoption
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No paid adoptions</p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default CurrentAdoptions;
