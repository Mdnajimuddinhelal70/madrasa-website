"use client";

import { useState } from "react";

const initialNotices = [
  {
    title: "Admission Open for 2026 Session",
    date: "2026-01-10",
    type: "Admission",
    important: true,
  },
  {
    title: "Annual Exam Routine Published",
    date: "2026-02-15",
    type: "Exam",
    important: false,
  },
  {
    title: "New Hafiz Graduation Ceremony",
    date: "2026-03-05",
    type: "Event",
    important: true,
  },
];

export default function NoticeSection() {
  const [notices] = useState(initialNotices);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Latest Notices</h2>
          <p className="text-gray-500 mt-2">
            Stay updated with our latest announcements
          </p>
        </div>

        {/* Notices */}
        <div className="space-y-5">
          {notices.map((notice, index) => (
            <div
              key={index}
              className={`p-5 rounded-xl shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-3 transition hover:shadow-xl
              ${notice.important ? "bg-green-50 border-l-4 border-green-600" : "bg-white"}`}
            >
              {/* Left Content */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {notice.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">{notice.date}</p>
              </div>

              {/* Right Badge */}
              <div className="flex gap-2 items-center">
                <span className="text-xs px-3 py-1 rounded-full bg-gray-200 text-gray-700">
                  {notice.type}
                </span>

                {notice.important && (
                  <span className="text-xs px-3 py-1 rounded-full bg-red-100 text-red-600">
                    Important
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
