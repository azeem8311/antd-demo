import React from "react";
import { Rnd } from "react-rnd";

const RndLayout = () => {
  return (
    <div>
      <div>
        <table className="custom-table ">
          {[100, 75, 50, 25, 0].map((item) => (
            <tr className="table-row">
              <td className="table-element">
                <Rnd
                  ref={(c) => console.log("rnd elemet ", c)}
                  className="draggable-element"
                  bounds="custom-table"
                  default={{
                    x: 0,
                    y: 0,
                    width: 320,
                    height: 200,
                  }}
                >
                  Rnd
                </Rnd>
                <span className="table-point">{item}</span>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default RndLayout;
