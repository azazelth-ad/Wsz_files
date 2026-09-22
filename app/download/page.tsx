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
  }
];

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-cyan-400">
          Download Center
        </h1>

        <div className="mt-8 space-y-4">
          {files.map((file) => (
            <div
              key={file.name}
              className="bg-slate-900 rounded-xl p-6 border border-slate-700"
            >
              <h2 className="text-xl font-bold">
                📁 {file.name}
              </h2>

              <p className="text-gray-400">
                ขนาด: {file.size}
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
