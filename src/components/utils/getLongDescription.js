export const getLongDescription = (recipe) => {
  let descriptionString = "";
  for (const description of recipe.description) {
    if (description.display_text) {
      descriptionString += description.display_text + ",";
    }
    if (description.text) {
      descriptionString += description.text + ",";
    }
  }
  return descriptionString;
};
