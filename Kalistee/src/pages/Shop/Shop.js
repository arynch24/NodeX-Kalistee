import React, { useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Pagination from "../../components/pageProps/shopPage/Pagination";
import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
import ShopSideNav from "../../components/pageProps/shopPage/shopBy/Category";
import { paginationItems } from "../../constants/index"; // Import your dataset here

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products based on selected category
  const filteredItems =
    selectedCategory === "All"
      ? paginationItems
      : paginationItems.filter((item) => item.category === selectedCategory);

  const handleItemsPerPage = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Products" />
      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={[
              { id: 1, title: "All" },
              { id: 2, title: "Skin" },
              { id: 3, title: "Hair" },
              { id: 4, title: "Gummies" },
            ]}
          />
        </div>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          <ProductBanner itemsPerPageFromBanner={handleItemsPerPage} />
          <Pagination items={filteredItems} itemsPerPage={itemsPerPage} />
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </div>
  );
};

export default Shop;
