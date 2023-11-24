import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="max-w-7xl mx-auto px-5 mb-10 md:mb-14 lg:mb-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 border-t-2 py-10">
        <div className="mb-3">
          <h1 className="text-lg font-bold mb-5">Kulineri</h1>
          <p className="mb-2 text-slate-600">Tentang Kulineri</p>
          <p className="mb-2 text-slate-600">Blog</p>
          <p className="mb-2 text-slate-600">Kemitraan</p>
        </div>
        <div className="mb-3">
          <h1 className="text-lg font-bold mb-5">Butuh Bantuan</h1>
          <p className="mb-2 text-slate-600">Kulineri Care</p>
          <p className="mb-2 text-slate-600">Kebijakan Privasi</p>
        </div>
        <div className="mb-3">
          <h1 className="text-lg font-bold mb-5">Ikuti Kami</h1>
          <div className="flex gap-5">
            <a href="#">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#">
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="md:col-span-2">
          <h1 className="text-xl font-bold mb-5">Powered By</h1>
          <div className="flex items-center flex-wrap gap-5">
            <img
              src="logo/kulineri-logo.png"
              alt="kulineri-logo-brand"
              className="w-16 md:w-36"
            />
            <img
              src="logo/skilvul-logo.png"
              alt="skilvul-logo-brand"
              className="w-24 md:w-48"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
