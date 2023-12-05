import React from "react";
import {
  RiInstagramFill,
  RiFacebookCircleFill,
  RiTwitterXFill,
} from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="max-w-7xl m-auto px-4 py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5">
      <ul className="mb-8">
        <li className="font-bold text-sm mb-2">Kulineri</li>
        <li className="mb-1 text-slate-600 text-sm">Tentang Kulineri</li>
        <li className="mb-1 text-slate-600 text-sm">Karir</li>
        <li className="mb-1 text-slate-600 text-sm">Cerita Mitra</li>
        <li className="mb-1 text-slate-600 text-sm">Blog</li>
      </ul>
      <ul className="mb-8">
        <li className="font-bold text-sm mb-2">Bantuan dan Panduan</li>
        <li className="mb-1 text-slate-600 text-sm">Kulineri Care</li>
        <li className="mb-1 text-slate-600 text-sm">Syarat & Ketentuan</li>
        <li className="mb-1 text-slate-600 text-sm">Kebijakan Privasi</li>
        <li className="mb-1 text-slate-600 text-sm">Mitra</li>
      </ul>
      <ul className="mb-8">
        <li className="font-bold text-sm mb-3">Ikuti Kami</li>
        <li className="flex items-center gap-2">
          <a href="instagram.com">
            <RiInstagramFill className="text-2xl" />
          </a>
          <a href="facebook.com">
            <RiFacebookCircleFill className="text-2xl" />
          </a>
          <a href="twitter.com">
            <RiTwitterXFill className="text-xl" />
          </a>
        </li>
      </ul>
      <div className="col-span-2">
        <p>Powered By :</p>
        <img
          src="../logo/skilvul-logo.png"
          alt="skilvul-logo"
          className="w-96"
        />
      </div>
    </footer>
  );
}
