import { useSelector } from "react-redux";
import EmployeeCard from "./EmployeeCard";
import Searchbar from "../ui/Searchbar";
import Metadata from "../ui/Metadata";
import Navbar from "../ui/Navbar";
import data from "./Data";
import Header from "../ui/Header";

const Home = () => {
  const searchData = useSelector((state) => state.data.searchData);
  return (
    <div className="employee-list">
      <Metadata title="Employees List" />
      <Header />

      <Searchbar />
      <div className="card-holder">
        {data.map((item) => (
          <EmployeeCard key={item.empid} data={item} name={searchData} />
        ))}
      </div>
      <Navbar />
    </div>
  );
};

export default Home;
