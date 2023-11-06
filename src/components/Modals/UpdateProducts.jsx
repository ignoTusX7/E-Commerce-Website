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
import { FaEdit } from "react-icons/fa";

export default function UpdateModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };

  return (
    <>
      <div className="flex ">
        <Button
          variant="flat"
          onPress={() => handleOpen("blur")}
          className="bg-white"
        >
          <FaEdit size={20} />
        </Button>
      </div>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 justify-center text-center">
                Update Product
              </ModalHeader>
              <ModalBody>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <input
                      type="text"
                      name="title"
                      className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                      placeholder="Product title"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="price"
                      className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                      placeholder="Product price"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="imageurl"
                      className="  border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                      placeholder="Product imageUrl"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="category"
                      className="  border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                      placeholder="Product category"
                    />
                  </div>
                  <div>
                    <textarea
                      cols="30"
                      rows="4"
                      name="Product Description"
                      className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                      placeholder="Product Description"
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
                  Update
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
