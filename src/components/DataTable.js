import React from "react";
import DataBody from "./DataBody";
import "../styles/DataTable.css";

function DataTable({ headings, users, handleSort }) {
  return (
    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {
              /* ADD A LINE OF CODE TO LOOP THROUGH HEADINGS WITH .map METHOD
                DESTRUCTURE INPUT ARGUMENT TO EXTRACT NAME and WIDTH */
              headings.map(({ name, width }) => {
                return (
                  <th
                    className="col"
                    // ADD KEY AND ASSIGN IT WITH NAME PASSED IN
                    key={name}
                    // ADD STYLE FOR WIDTH WITH WIDTH PASSED IN
                    style={{ width }}
                    // ADD ONCLICK EVENT TO CALL CALLBACK PASSED IN
                    onClick={() => {
                      handleSort(name.toLowerCase());
                    }}
                  >
                    {/* / ADD HEADING NAME PASSED IN HERE / */}
                    {name}
                    <span className="pointer"></span>
                  </th>
                );
              })
            }
            {/* })} */}
          </tr>
        </thead>
        {/* ADD CODE TO CALL COMPONENT DATABODY PASSING USERS AS INPUT ARGUMENT */}
        <DataBody users={users}></DataBody>
      </table>
    </div>
  );
}

export default DataTable;
