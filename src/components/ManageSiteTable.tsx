

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

  return (
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
        </tr>
      </thead>
      <tbody className="bg-white">
        {data.map((row, index) => (
          <tr
            key={row.key}
            className={index % 2 === 0 ? "bg-gray-200" : "bg-black"}
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

          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ManageSiteTable;
