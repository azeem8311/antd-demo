import React from "react";

const CustomDraggable = () => {
  const handleStart = (e) => {
    console.log("start ", e);
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrag = (e) => {
    console.log("drag ", e);
    e.preventDefault();
    e.stopPropagation();
  };
  const handleStop = (e) => {
    console.log("stop ", e);
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e) => {
    console.log("stop ", e);
    e.preventDefault();
    e.stopPropagation();
  };

  function onDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);

    event.currentTarget.style.backgroundColor = "yellow";
  }

  function onDragOver(event) {
    event.preventDefault();
  }

  function onDrop(event) {
    const id = event.dataTransfer.getData("text");

    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);

    event.dataTransfer.clearData();
  }
  return (
    <div>
      <table
        className="custom-table "
        ondragover={(e) => onDragOver(e)}
        ondrop={(event) => onDrop(event)}
      >
        {[100, 75, 50, 25, 0].map((item) => (
          <tr className="table-row">
            <td className="table-element">
              <div
                className="draggable-element"
                onDrop={(e) => handleStart(e)}
                onDrag={(e) => handleDragEnter(e)}
                onDragOver={(e) => handleDrag(e)}
                draggable="true"
                onDragstart={(e) => onDragStart(e)}
                onDragLeave={(e) => handleStop(e)}
              >
                <div>I can now be moved around!</div>
              </div>
              <span className="table-point">{item}</span>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default CustomDraggable;
