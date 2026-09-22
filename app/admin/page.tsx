export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-red-400">
          Admin Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-xl font-bold">
              📁 Files
            </h2>

            <p className="text-gray-400 mt-2">
              จัดการไฟล์ทั้งหมด
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-xl font-bold">
              👥 Users
            </h2>

            <p className="text-gray-400 mt-2">
              จัดการสมาชิก
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-xl font-bold">
              📊 Statistics
            </h2>

            <p className="text-gray-400 mt-2">
              สถิติการดาวน์โหลด
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
