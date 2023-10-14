import React , {useState} from "react";

const Task1 = () => {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
  };

  const wordCount = text.split(/\s+/).filter((word) => word !== "").length;

  return (
    <>
    <div className="shadow rounded-5 mx-auto d-flex flex-column align-items-center p-5 mt-5 task1Div">
    <div>
      <h3 className="text-center">Responsive Paragraph Word Counter</h3>
      <textarea
        placeholder="Enter your text here..."
        onChange={handleTextChange}
        value={text}
        className="ps-3 mt-3 w-100 task1TextArea"
      />
      <p className="pt-5">Word Count: {wordCount}</p>
      </div>
      </div>
    </>
  );
};

export default Task1;
