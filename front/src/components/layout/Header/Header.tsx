import { useState } from "react";
import HeaderView from "./Header.view";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HeaderView
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen} />
  );
}
