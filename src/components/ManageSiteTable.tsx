import { Button, Input, Modal } from "antd";
import { useState } from "react";

interface DataType {
  key: React.Key;
  jurisdiction: string;
  organization: string;
  facilityName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

const data: DataType[] = [
  {
    key: "1",
    jurisdiction: "Michigan-JDI",
    organization: "CVS Pharmacy",
    facilityName: "Troy",
    address: "123 Main St",
    city: "Troy",
    state: "MI",
    zip: "48084",
  },
  {
    key: "2",
    jurisdiction: "Michigan-JDI",
    organization: "CVS Pharmacy",
    facilityName: "Rochester Hills",
    address: "123 Main St",
    city: "Rochester Hills",
    state: "MI",
    zip: "48099",
  },
  {
    key: "3",
    jurisdiction: "Michigan-JDI",
    organization: "CVS Pharmacy",
    facilityName: "Troy",
    address: "123 Main St",
    city: "Troy",
    state: "MI",
    zip: "48084",
  },
  {
    key: "4",
    jurisdiction: "Michigan-JDI",
    organization: "CVS Pharmacy",
    facilityName: "Troy",
    address: "123 Main St",
    city: "Troy",
    state: "MI",
    zip: "48084",
  },
  {
    key: "5",
    jurisdiction: "Michigan-JDI",
    organization: "CVS Pharmacy",
    facilityName: "Troy",
    address: "123 Main St",
    city: "Troy",
    state: "MI",
    zip: "48084",
  },
  {
    key: "6",
    jurisdiction: "Michigan-JDI",
    organization: "CVS Pharmacy",
    facilityName: "Troy",
    address: "123 Main St",
    city: "Troy",
    state: "MI",
    zip: "48084",
  },
  {
    key: "7",
    jurisdiction: "Michigan-JDI",
    organization: "CVS Pharmacy",
    facilityName: "Troy",
    address: "123 Main St",
    city: "Troy",
    state: "MI",
    zip: "48084",
  },
  {
    key: "8",
    jurisdiction: "Michigan-JDI",
    organization: "CVS Pharmacy",
    facilityName: "Troy",
    address: "123 Main St",
    city: "Troy",
    state: "MI",
    zip: "48084",
  },
  {
    key: "9",
    jurisdiction: "Michigan-JDI",
    organization: "CVS Pharmacy",
    facilityName: "Troy",
    address: "123 Main St",
    city: "Troy",
    state: "MI",
    zip: "48084",
  },
];

const ManageSiteTable: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Button type="primary" className="mb-5 bg-gray-900" onClick={showModal}>
        Add New
      </Button>

      {/* modal-------- */}
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <label>Jurisdiction</label>
        <Input
          placeholder="Enter Jurisdiction"
          className="mb-3 border-gray-900"
        />
        <label>Organization</label>
        <Input
          placeholder="Enter Organization"
          className="mb-3 border-gray-900"
        />
        <label>Facility Name</label>
        <Input
          placeholder="Enter Facility Name"
          className="mb-3 border-gray-900"
        />
        <label>Address</label>
        <Input placeholder="Enter Address" className="mb-3 border-gray-900" />
        <label>City</label>
        <Input placeholder="Enter City" className="mb-3 border-gray-900" />
        <label>State</label>
        <Input placeholder="Enter State" className="mb-3 border-gray-900" />
        <label>Zip</label>
        <Input placeholder="Enter Zip" className="mb-3 border-gray-900" />
      </Modal>
      {/* modal ---------- */}
      <table className="min-w-full">
        <thead className="bg-black text-gray-100 rounded-t-lg">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
              Jurisdiction
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
              Organization
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
              Facility Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
              Address
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
              City
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
              State
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
              Zip
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="bg-white text-white">
          {data.map((row, index) => (
            <tr
              key={row.key}
              className={index % 2 === 0 ? "bg-black/80" : "bg-black"}
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {row.jurisdiction}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {row.organization}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {row.facilityName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {row.address}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {row.city}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {row.state}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                {row.zip}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm ">
                <Button
                  type="primary"
                  className="bg-gray-900 mr-2"
                  onClick={showModal}
                >
                  Edit
                </Button>
                <Button type="primary" className="bg-red-900">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-end mt-4">
        <p className="border-solid rounded-lg border-gray-900 px-4 py-2">1</p>
      </div>
    </div>
  );
};

export default ManageSiteTable;
