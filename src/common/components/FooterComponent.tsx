const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-primary py-8 text-white md:px-4">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Link</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Thông Tin Chương Trình
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Đối Tượng Và Tiêu Chí
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Thời Gian Học Bổng
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cơ Hội Nghề Nghiệp
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Nộp Hồ Sơ
                </a>
              </li>
            </ul>
          </div>

          {/* Về Chương Trình Học Bổng VSDP */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              1. Về chương trình học bổng VSDP:
            </h3>
            <ul className="space-y-2">
              <li>Hotline: 03-0485362</li>
              <li>
                Email:{" "}
                <a href="mailto:info@viethope.org" className="hover:underline">
                  info@viethope.org
                </a>
              </li>
              <li>Fanpage: Acecook Career</li>
              <li>Group: ACECOOK HAPPY SCHOLARSHIP</li>
            </ul>
          </div>

          {/* Về VIETHOPE VIETNAM */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">2. Về VIETHOPE:</h3>
            <ul className="space-y-2">
              <li>VietHope is a 501(c)(3) non-profit organization.</li>
              <li>USA: 440 N Barranca Ave #9666 Covina, CA 91723</li>
              <li>
                VIETNAM: 11 Le Ngo Cat St., Dist. 3 Ho Chi Minh City, Vietnam
              </li>
              <li>Số điện thoại: 03-0485362</li>
              <li>
                Email:{" "}
                <a href="mailto:info@viethope.org" className="hover:underline">
                  info@viethope.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white pt-4 text-center">
          <p>© 2024 VietHope. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
