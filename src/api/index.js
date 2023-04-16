import axios from 'axios'
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw,ne) => {
    try {
        const { data: { data } } = await axios.get(URL, {
                params: {
                  bl_latitude: sw.lat,
                  tr_latitude: ne.lat,
                  bl_longitude:sw.lng,
                  tr_longitude: ne.lng,
                
                },
                headers: {
                  'X-RapidAPI-Key': '85f21379f3mshf7d7a5cd7f475f2p18f180jsn43b4792c0f30',
                  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }
            
        })
        return data
    } catch (error) {
       console.log(error)
    }
}

