import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaGraduationCap, FaMapMarkerAlt, FaUser } from "react-icons/fa";

// Animasi CSS Manual agar lancar tanpa Framer Motion
const styles = `
  @keyframes slideIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-profile {
    animation: slideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
`;

export default function SofyanProfile() {
  return (
    <>
      <style>{styles}</style>
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans antialiased">
        
        <div className="max-w-2xl w-full animate-profile">
          
          {/* Tombol Back */}
          <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-all mb-8 group w-fit">
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">Kembali ke Beranda</span>
          </Link>

          {/* CARD UTAMA */}
          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden">
            
            {/* Banner Biru Gradient */}
            <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600 w-full"></div>

            <div className="px-8 pb-12 text-center">
              
              {/* FOTO PROFIL DENGAN ANIMASI */}
              <div className="relative -mt-16 mb-6 flex justify-center">
                <div className="relative group">
                  {/* Efek Bayangan di belakang foto */}
                  <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  
                  <img 
                    src="/sofyan.jpeg" 
                    alt="Sofyan Muzakki" 
                    className="relative w-36 h-36 rounded-3xl object-cover border-4 border-white shadow-2xl rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 ease-out bg-slate-200"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/150?text=Sofyan";
                    }}
                  />
                </div>
              </div>

              {/* Nama & Role */}
              <div className="mb-8">
                <h1 className="text-3xl font-black text-slate-800 tracking-tight">Sofyan Muzakki</h1>
                <p className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em] mt-2 bg-blue-50 w-fit mx-auto px-4 py-1 rounded-full">
                  Information Technology Student
                </p>
              </div>

              {/* Grid Info (Kelas, Prodi, Domisili) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-slate-600">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group">
                  <FaUser className="mx-auto text-blue-500 mb-2 text-lg group-hover:scale-110 transition-transform" />
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Kelas</p>
                  <p className="text-sm font-bold">T2F</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group">
                  <FaGraduationCap className="mx-auto text-blue-500 mb-2 text-lg group-hover:scale-110 transition-transform" />
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Prodi</p>
                  <p className="text-sm font-bold leading-tight">Teknologi Informasi</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group">
                  <FaMapMarkerAlt className="mx-auto text-blue-500 mb-2 text-lg group-hover:scale-110 transition-transform" />
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Domisili</p>
                  <p className="text-sm font-bold">Malang</p>
                </div>
              </div>

              {/* Deskripsi Teks */}
              <div className="relative max-w-lg mx-auto bg-slate-50/50 p-6 rounded-3xl border border-slate-50">
                <div className="absolute -left-2 -top-4 text-6xl text-blue-100 font-serif opacity-50 select-none">“</div>
                <p className="text-slate-500 leading-relaxed text-justify italic font-medium px-2 relative z-10 text-sm">
                  Saya adalah seorang mahasiswa yang memiliki minat dalam bidang teknologi, khususnya pengembangan web dan aplikasi. Saya senang mempelajari hal-hal baru dan terus mengembangkan kemampuan saya dalam dunia programming. Dengan semangat belajar yang tinggi, saya berharap dapat menjadi seorang developer profesional yang mampu memberikan solusi inovatif di masa depan. Selain itu, saya juga tertarik dalam desain UI/UX untuk menciptakan tampilan aplikasi yang menarik dan user-friendly.
                </p>
              </div>

            </div>
          </div>

          <p className="text-center text-slate-300 text-[9px] mt-8 uppercase tracking-[0.5em] font-bold">
            © 2026 Project Kelompok React
          </p>
        </div>
      </div>
    </>
  );
}
