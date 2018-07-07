const allFilms = async data => {
  const films = data.map(async film => {
    const title = film.title;
    const releaseDate = film.release_date;
    const openingCrawl = film.opening_crawl;

    return {
      title,
      releaseDate,
      openingCrawl
    };
  });
  const resolvedFilms = await Promise.all(films);
  return resolvedFilms;
};

export default allFilms;
