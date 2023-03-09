const Figure = ({ data }) => {
    return (
      <figure>
        <img src={data.url} alt={data.title} />
        <div className="window">
          <div className="details-bar">
          <div>
            <h1 className="title">{data.title}</h1>
          </div>
            <span>{data.date}</span>
            <span>{data.copyright}</span>
          </div>
          <div className="window-pane">{data.explanation}</div>
        </div>
      </figure>
    );
  };
export default Figure;