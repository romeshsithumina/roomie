"use client";

import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";

function RentModal() {
  const rentModal = useRentModal();
  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      actionLabel="Submit"
      title="Add your property!"
    />
  );
}

export default RentModal;
