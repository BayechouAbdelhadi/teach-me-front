export const haversineDistance=(start, end) =>{
    const R = 3958.8, // Radius of the Earth in miles
        rlat1 = start.lat* (Math.PI/180), // Convert degrees to radians
        rlat2 = end.lat * (Math.PI/180), // Convert degrees to radians
        difflat = rlat2-rlat1, // Radian difference (latitudes)
        difflon = (end.lng-start.lng )* (Math.PI/180),// Radian difference (longitudes)
        d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
        return d*1.60934;
}