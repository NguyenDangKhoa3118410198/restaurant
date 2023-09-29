import React, { useState, useEffect } from "react";
import axios from "axios";
import CrudModal from "../../components/ReactModal/CrudModal";
import ActionsCell from "../../components/ReactModal/ActionsCell/ActionsCell";
import Table from "../../components/Table/Table";
function Customers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [records, setRecords] = useState([]);
  const [currentRecord, setCurrentRecord] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "First name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Maiden Name",
      selector: (row) => row.maidenName,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Action",
      sortable: false,
      cell: (record) => (
        <ActionsCell
          record={record}
          handleEditClick={handleEditClick}
          handleAddClick={handleAddClick}
          handleDelete={handleDelete}
        />
      ),
    },
  ];

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        const data = response.data;

        const infoCustomers = data.users.map((user) => {
          return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            maidenName: user.maidenName,
            age: user.age,
            gender: user.gender,
            email: user.email,
            phone: user.phone,
          };
        });
        setRecords(infoCustomers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddClick = () => {
    setCurrentRecord(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (record) => {
    setCurrentRecord(record);
    setIsModalOpen(true);
  };

  const handleSave = (record) => {
    if (record.id) {
      setRecords(
        records.map((r) => (r.id === record.id ? { ...r, ...record } : r))
      );
    } else {
      const newRecord = { ...record, id: Date.now() };
      setRecords([...records, newRecord]);
    }
  };

  const handleDelete = (record) => {
    if (records.length === 0) {
      console.log("No records to delete");
      return;
    }
    setRecords(records.filter((r) => r.id !== record.id));
  };

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  function filterData(records) {
    return records.filter((row) =>
      Object.values(row).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }

  return (
    <main className="Orders">
      <div className="add-filter-wrapper">
        <button
          className="btn btn-success btn-add"
          onClick={() => handleAddClick()}
        >
          Add
        </button>
        <input
          className="searchBox"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <CrudModal
        record={currentRecord}
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        shouldCloseOnOverlayClick={false}
        onSave={handleSave}
        onDelete={handleDelete}
      />

      <Table columns={columns} data={filterData(records)} />
    </main>
  );
}

export default Customers;