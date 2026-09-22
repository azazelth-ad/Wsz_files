import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-cyan-400">
            Wzs_file
          </h1>

          <p className="mt-4 text-gray-300 text-lg">
            เว็บไซต์ดาวน์โหลดไฟล์ โปรแกรม เอกสาร และทรัพยากรต่าง ๆ
          </p>

          <div className="mt-8">
            /download
              ดาวน์โหลดไฟล์
            </Link>
          </div>
        </div>

        {/* Menu */}
        <div className="grid md:grid-cols-4 gap-4 mt-12">

          /about
            <h2 className="text-xl font-bold">📖 About</h2>
          </Link>

          /contact
            <h2 className="text-xl font-bold">📞 Contact</h2>
          </Link>

          /download
            <h2 className="text-xl font-bold">📁 Download</h2>
          </Link>

          /admin
            <h2 className="text-xl font-bold">⚙️ Admin</h2>
          </Link>

        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-white/10 rounded-2xl p-6">
            <h3 className="text-cyan-400 text-xl font-bold">
              ⚡ ดาวน์โหลดเร็ว
            </h3>

            <p className="mt-2 text-gray-300">
              รองรับการดาวน์โหลดไฟล์ตลอด 24 ชั่วโมง
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-6">
            <h3 className="text-green-400 text-xl font-bold">
              🔒 ปลอดภัย
            </h3>

            <p className="mt-2 text-gray-300">
              ไฟล์ผ่านการตรวจสอบก่อนเผยแพร่
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-6">
            <h3 className="text-purple-400 text-xl font-bold">
              📦 อัปเดตตลอด
            </h3>

            <p className="mt-2 text-gray-300">
              เพิ่มไฟล์ใหม่อย่างสม่ำเสมอ
            </p>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-400">
          © 2026 Wzs_file. All Rights Reserved.
        </footer>

      </div>
    </main>
  );
}
