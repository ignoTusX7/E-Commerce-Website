import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import { FaCartPlus } from "react-icons/fa6";

export default function OrderModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button
          variant="flat"
          onPress={() => handleOpen("blur")}
          className="capitalize bg-violet-700 text-white"
        >
          <FaCartPlus size={20} /> Add Products
        </Button>
      </div>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 justify-center text-center">
                Add Product
              </ModalHeader>
              <ModalBody>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <input
                      type="Product title"
                      name="Product title"
                      id="Product title"
                      placeholder="Product title"
                      className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="Product title"
                      name="Product title"
                      id="Product title"
                      placeholder="Product title"
                      className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                      required
                    />
                  </div>
                 
                  <div>
                    <input
                      type="text"
                      name="Product imageUrl"
                      id="Product imageUrl"
                      placeholder="Product imageUrl"
                      className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="Product category"
                      id="Product category"
                      placeholder="Product category"
                      className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      name="Product Description"
                      id="Product Description"
                      placeholder="Product Description"
                      className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                      required
                      rows="2"
                    ></textarea>
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={onClose}
                  className="
                  bg-violet-700 text-white"
                >
                  Add Product
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
