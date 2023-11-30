"use client";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "./Table.css";
import React, { useEffect, useState } from "react";
import Store from "../../../store/store";

const CallsTable = ({ calls }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const latest_calls = Store((state) => state.calls);
  const change_calls_data = Store((state) => state.change_calls);

  useEffect(() => {
    change_calls_data(latest_calls);
  }, [latest_calls]);

  const indexOfLastCall = currentPage * pageSize;
  const indexOfFirstCall = indexOfLastCall - pageSize;
  const currentCalls = (latest_calls.length > 0 ? latest_calls : calls)?.slice(
    indexOfFirstCall,
    indexOfLastCall
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="min-w-[100vw]">
      <Table id="table_calls">
        <Thead id="table-header">
          <Tr>
            <Th style={{ textAlign: "center" }}>Phone Number</Th>
            <Th style={{ textAlign: "center" }}>Campaign Name</Th>
            <Th style={{ textAlign: "center" }}>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentCalls?.map((call) => (
            <>
              <Tr key={call._id} id="table-row">
                <Td id="tabledata" className="text-center">
                  {call.phoneNumber}
                </Td>

                <Td id="tabledata1" className="text-center">
                  {call.campaignName}
                </Td>
                <Td id="tabledata2" className="text-center">
                  {call.status}
                </Td>
              </Tr>
            </>
          ))}
        </Tbody>
      </Table>
      <div className="flex flex-row justify-evenly pt-10">
        <button
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span> Page {currentPage} </span>
        <button
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={!currentCalls || currentCalls.length < pageSize}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CallsTable;
