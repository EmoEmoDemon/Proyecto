export const CatchMov = ({ show }) => {
  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <div className="catch-mov-container">
      {show.image && (
        <div className="image-container">
          <a href={show.url} target="_blank" rel="noopener noreferrer">
            <img src={show.image.medium} alt={show.name} />
          </a>
        </div>
      )}
      <div className="details-container">
        <div className="details-content">
          <h2 className="show-name">{show.name}</h2>
          <p><b>Genres:</b> {show.genres[0]}, {show.genres[1]}</p>
          <p><b>Status:</b> {show.status}</p>
          <p><b>Summary:</b></p>
          <div
            className="summary"
            dangerouslySetInnerHTML={createMarkup(show.summary)}
          ></div>
        </div>
      </div>
    </div>
  );
};
