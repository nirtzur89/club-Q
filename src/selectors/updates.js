//get filtered object
const getVisibleUpdates = (updates, { club }) => {
  return updates
    .filter(update => {
      const textMatch = update.club.includes(club);

      return textMatch;
    })
    .sort((a, b) => {
      return a.createdAt < b.createdAt ? 1 : -1;
    });
};
export default getVisibleUpdates;
