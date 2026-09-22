import Link from "next/link";

const files = [
  {
    name: "Sample.zip",
    size: "25 MB",
    url: "/files/sample.zip",
  },
  {
    name: "Document.pdf",
    size: "5 MB",
    url: "/files/document.pdf",
  },
  {
    name: "Tools.rar",
    size: "120 MB",
    url: "/files/tools.rar",
  },
];

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-5xl mx-auto">
        /
          ← กลับหน้าหลัก
        </Link>

        <h1 className="text-4xl font-bold mt-6 text-cyan-400">
          Download Center
        </h1>

        <p className="text-gray-400 mt-2">
          ดาวน์โหลดไฟล์จาก Wzs_file
        </p>

        <div className="grid gap-6 mt-10">
          {files.map((file) => (
            <div
              key={file.name}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <h2 className="text-2xl font-bold">
                📁 {file.name}
              </h2>

              <p className="text-gray-400 mt-2">
                ขนาดไฟล์: {file.size}
              </p>

              {file.url}
                ดาวน์โหลด
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
