import React, { useRef, useEffect, useState } from "react";
import Draggable from "react-draggable";

const arr = [100, 75, 50, 25, 0];

const Chart = () => {
  const [stop, setStop] = useState(false);

  const eventLogger = (e, data) => {
    console.log("Event: ", e);
    console.log("Data: ", data);
  };

  const handleStart = (e) => {
    console.log("start ", e);
  };

  const handleDrag = (e) => {
    console.log("drag ", e);
  };
  const handleStop = (e) => {
    console.log("stop ", e);
    setStop(true);
  };

  const ref = useRef(null);

  const parentRef = useRef(null);

  console.log("parent Ref ", parentRef);

  console.log("useRef ", ref);

  useEffect(() => {
    console.log("useref called ", ref);
    setStop(false);
  }, [stop]);

  return (
    <div>
      <Draggable>
        <div>I can now be moved around!</div>
      </Draggable>
      <table ref={parentRef} className="custom-table">
        {arr.map((item) => (
          <tr className="table-row">
            <td className="table-element">
              <Draggable
                // nodeRef={ref}
                nodeRef={React.Ref < typeof React.Component}
                // offsetParent={<table />}
                // offsetParent="custom-table"
                defaultClassName="draggable-element"
                onStart={handleStart}
                handle=".handle"
                onDrag={handleDrag}
                allowAnyClick={true}
                scale={1}
                onStop={handleStop}
              >
                <div className="handle" ref={ref}>
                  I can now be moved around!
                </div>
              </Draggable>
              <span className="table-point">{item}</span>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Chart;
