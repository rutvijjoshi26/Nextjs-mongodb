"use client";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import Store from "../../../store/store";

const Searchbar = () => {
  const change_calls = Store((state) => state.change_calls);
  const [searchtext, Setsearchtext] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  useEffect(() => {
    try {
      const fetchdata = async () => {
        let response = await axios.get(`/api/calls/${selectedStatus}`);
        change_calls(response.data.calls);
      };
      fetchdata();
    } catch (error) {
      console.log(error);
    }
  }, [selectedStatus]);

  const handlesearchsubmit = async () => {
    try {
      let response = await axios.get(`/api/calls/${searchtext}`);
      Setsearchtext("");
      change_calls(response.data.calls);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="pt-16 max-w-[100vw] min-h-[20vh]
     flex flex-row justify-center items-center gap-4"
    >
      <input
        value={searchtext}
        onChange={(e) => Setsearchtext(e.target.value)}
        type="text"
        placeholder="Search call logs"
        className="bg-transparent min-w-[30%]
       text-black p-2 rounded-lg outline-offset-1 outline-black border-2 border-black"
      />
      <select
        value={selectedStatus}
        onChange={(e) => setSelectedStatus(e.target.value)}
        className="bg-transparent text-black p-2 rounded-lg outline-offset-1 outline-black border-2 border-black"
      >
        <option value="">All Status</option>
        <option value="completed">Completed</option>
        <option value="in progress">In Progress</option>
      </select>
      <button
        className="p-2 bg-purple-950 rounded-lg"
        onClick={handlesearchsubmit}
      >
        <CiSearch color="white" size={23} />
      </button>
    </div>
  );
};

export default Searchbar;
