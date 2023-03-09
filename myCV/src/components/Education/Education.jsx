
import "./Education.css";

const Education = ({ education }) => {
  return (
    <div>
     <h2> Education</h2>
      <div className="educationCard">
        {education.map((item) => {
          return (
            <div className="name" key={JSON.stringify(item)}>
           
              <h3>📕 {item.name}</h3>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;