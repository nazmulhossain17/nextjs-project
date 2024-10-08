"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avater";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRentModal from "@/app/hooks/useRentModal";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const rentModal = useRentModal();
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
    rentModal.onOpen();
  }, [rentModal]);
  const onRent = useCallback(() => {
    rentModal.onOpen();
  }, [rentModal]);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="hidden px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-100"
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm"
          onClick={toggleOpen}
        >
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem label="Login" onClick={() => {}} />
              <MenuItem label="Sign up" onClick={() => {}} />
              <MenuItem label="Airbnb my home" onClick={rentModal.onOpen} />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
