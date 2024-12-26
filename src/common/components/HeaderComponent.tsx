import React, { useState } from "react";
import BackToTop from "./BackToTop";
import logo from "../../assets/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const HeaderComponent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border border-b-2 border-t-8 border-b-gray-300 border-t-primary bg-white text-[14px] shadow-md">
      <BackToTop />
      <div className="flex items-center justify-between space-x-2 px-4 py-2">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <img src={logo} alt="VSDP LOGO" className="h-16" />
          <span className="text-2xl font-semibold text-primary">VSDP</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden space-x-4 uppercase lg:flex lg:space-x-6">
          <a href="#" className="text-gray-700 hover:text-primary">
            Trang Chủ
          </a>
          <a href="#" className="text-gray-700 hover:text-primary">
            Thông Tin Học Bổng
          </a>
          <a href="#" className="text-gray-700 hover:text-primary">
            Đối Tượng Và Tiêu Chí
          </a>
          <a href="#" className="text-gray-700 hover:text-primary">
            Thời Gian Học Bổng
          </a>
          <a href="#" className="text-gray-700 hover:text-primary">
            Tra Cứu Học Bổng
          </a>
          <a href="#" className="text-gray-700 hover:text-primary">
            Nộp Hồ Sơ Học Bổng
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-gray-700 focus:outline-none lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <IoMdClose className="text-2xl" />
          ) : (
            <HiOutlineMenuAlt3 className="text-2xl" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="absolute -left-2 top-20 w-full bg-white uppercase shadow-md lg:hidden">
            <ul className="flex w-full flex-col space-y-4 px-6 py-4">
              <li>
                <a href="#" className="text-gray-700 hover:text-primary">
                  Trang Chủ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-primary">
                  Thông Tin Học Bổng
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-primary">
                  Đối Tượng Và Tiêu Chí
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-primary">
                  Thời Gian Học Bổng
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-primary">
                  Tra Cứu Học Bổng
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-primary">
                  Nộp Hồ Sơ Học Bổng
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;
