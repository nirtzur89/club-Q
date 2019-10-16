//get filtered object
const getVisibleClubs = (clubs, filter) => {
  return clubs
    .filter(club => {
      const textMatch = club.toLowerCase().includes(filter.club.toLowerCase());

      return textMatch;
    })
    .sort((a, b) => {
      return a.createdAt < b.createdAt ? 1 : -1;
    });
};
export default getVisibleClubs;
