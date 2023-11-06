// import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { AiFillShopping, AiOutlineDelete } from "react-icons/ai";
import AddProduct from "../../../components/Modals/AddProducts";
import UpdateModal from "../../../components/Modals/UpdateProducts";

function DashboardTab() {
  //   let [isOpen, setIsOpen] = useState(false);

  //   function closeModal() {
  //     setIsOpen(false);
  //   }

  //   function openModal() {
  //     setIsOpen(true);
  //   }
  return (
    <>
      <div className="container mx-auto">
        <div className="tab container mx-auto ">
          <Tabs defaultIndex={0} className=" ">
            <TabList className="md:flex md:space-x-8  grid grid-cols-2 text-center gap-4  md:justify-center mb-10 ">
              <Tab>
                <button
                  type="button"
                  className="font-medium border-1 hover:shadow-violet-700 border-violet-500 text-violet-500 rounded-lg text-xl px-5 py-1.5 text-center bg-[#605d5d12] "
                >
                  <div className="flex gap-2 items-center">
                    <MdOutlineProductionQuantityLimits />
                    Products
                  </div>{" "}
                </button>
              </Tab>
              <Tab>
                <button
                  type="button"
                  className="font-medium border-1 hover:shadow-violet-700 border-violet-500 text-violet-500 rounded-lg text-xl px-5 py-1.5 text-center bg-[#605d5d12] "
                >
                  <div className="flex gap-2 items-center">
                    <AiFillShopping /> Order
                  </div>
                </button>
              </Tab>
              <Tab>
                <button
                  type="button"
                  className="font-medium border-1 hover:shadow-violet-700 border-violet-500 text-violet-500 rounded-lg text-xl px-5 py-1.5 text-center bg-[#605d5d12] "
                >
                  <div className="flex gap-2 items-center">
                    <FaUser /> Users
                  </div>
                </button>
              </Tab>
            </TabList>
            {/* product  */}

            <TabPanel>
              <div className="  px-4 md:px-0 mb-16">
                <h1 className=" text-center mb-5 text-3xl font-semibold underline">
                  Product Details
                </h1>
                <div className=" flex justify-end">
                  <button
                    type="button"
                    className="focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                  >
                    {" "}
                    <div className="flex gap-2 items-center">
                      <AddProduct />
                    </div>
                  </button>
                </div>
                <div className="relative overflow-x-auto ">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
                    <thead className="text-xs border border-gray-600 text-black uppercase bg-gray-200">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          S.No
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr className="bg-gray-50 border-b  dark:border-gray-700">
                        <td className="px-6 py-4 text-black ">1.</td>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-black whitespace-nowrap"
                        >
                          <img
                            className="w-16"
                            src="https://dummyimage.com/720x400"
                            alt="img"
                          />
                        </th>
                        <td className="px-6 py-4 text-black ">Title</td>
                        <td className="px-6 py-4 text-black ">₹100</td>
                        <td className="px-6 py-4 text-black ">pots</td>
                        <td className="px-6 py-4 text-black ">12 Aug 2019</td>
                        <td className="px-6 py-4">
                          <div className=" flex gap-2">
                            <div className=" flex cursor-pointer text-black ">
                              <div className="flex items-center">
                                <AiOutlineDelete size={20} />
                              </div>
                              <div>
                                <UpdateModal />
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              {/* <Order order={order} setOrder={setOrder} setLoading={setLoading} /> */}
              <div className="relative overflow-x-auto mb-16">
                <h1 className=" text-center mb-5 text-3xl font-semibold underline">
                  Order Details
                </h1>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-black uppercase bg-gray-200 ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Payment Id
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Pincode
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Phone Number
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50 border-b  dark:border-gray-700">
                      <td className="px-6 py-4 text-black ">3393939</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-black whitespace-nowrap"
                      >
                        <img
                          className="w-16"
                          src="https://dummyimage.com/720x400"
                          alt="img"
                        />
                      </th>
                      <td className="px-6 py-4 text-black ">Title</td>
                      <td className="px-6 py-4 text-black ">₹100</td>
                      <td className="px-6 py-4 text-black ">pots</td>

                      <td className="px-6 py-4 text-black ">name</td>
                      <td className="px-6 py-4 text-black ">india</td>
                      <td className="px-6 py-4 text-black ">82828</td>
                      <td className="px-6 py-4 text-black ">929929929929</td>
                      <td className="px-6 py-4 text-black ">
                        kkakka@gmail.com
                      </td>
                      <td className="px-6 py-4 text-black ">12 Aug 2019</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>
            <TabPanel>
              {/* <User addressInfo={addressInfo} setAddressInfo={setAddressInfo} setLoading={setLoading} /> */}
              <div className="relative overflow-x-auto mb-10">
                <h1 className=" text-center mb-5 text-3xl font-semibold underline">
                  User Details
                </h1>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-black uppercase bg-gray-200 ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        S.No
                      </th>

                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Pincode
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Phone Number
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-50 border-b  dark:border-gray-700">
                      <td className="px-6 py-4 text-black ">1.</td>
                      <td className="px-6 py-4 text-black ">Name</td>
                      <td className="px-6 py-4 text-black ">Address</td>
                      <td className="px-6 py-4 text-black ">181919</td>
                      <td className="px-6 py-4 text-black ">1991818818</td>
                      <td className="px-6 py-4 text-black ">kkk@gmail.com</td>
                      <td className="px-6 py-4 text-black ">12 Aug 2019</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default DashboardTab;
