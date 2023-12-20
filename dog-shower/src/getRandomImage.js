const getRandomImage = async (setImageSrc) => {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((result) => {
      setImageSrc(result.message);
      return result.message;
    })
    .catch((error) => {
      console.log(error);
      return {};
    });
};

export default getRandomImage;
