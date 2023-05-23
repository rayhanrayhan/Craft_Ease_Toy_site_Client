import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ShopCategoryCard from "./ShopCategoryCard";

const ShopCategory = () => {
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("Decorate & Design");

  useEffect(() => {
    fetch("https://craft-ease-main-server.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          const filterData = data.filter((toy) => toy.subCategory === category);
          setToys(filterData.slice(0, 3));
        }
      });
  }, [category]);

  return (
    <div className="w-9/12 mx-auto">
      <div>
        <h2 className="text-5xl text-center font-bold py-4 mt-4">
          Shop Category
        </h2>
        <h4 className="text-2xl text-center font-bold  mb-4">
          Creativity for Kids
        </h4>
      </div>
      {/* Category  */}
      <div>
        <Tabs>
          <TabList>
            <Tab onClick={() => setCategory("Decorate & Design")}>
              Decorate & Design
            </Tab>
            <Tab onClick={() => setCategory("Build & Construct")}>
              Build & Construct
            </Tab>
            <Tab onClick={() => setCategory("Art & Expression")}>
              Art & Expression
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {toys.map((toy) => (
                <ShopCategoryCard key={toy._id} toy={toy} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {toys.map((toy) => (
                <ShopCategoryCard key={toy._id} toy={toy} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {toys.map((toy) => (
                <ShopCategoryCard key={toy._id} toy={toy} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopCategory;
