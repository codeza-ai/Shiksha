async function getLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'));
      return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        const { latitude, longitude } = position.coords;
        
        // Using reverse geocoding with OpenStreetMap's Nominatim API
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );
        
        const data = await response.json();
        
        resolve({
          state: data.address.state || '',
          country: data.address.country || ''
        });
      } catch (error) {
        reject(error);
      }
    }, (error) => {
      reject(error);
    });
  });
}

export default getLocation;