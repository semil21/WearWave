"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { HiOutlineHome } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const router = useRouter();

  useEffect(() => {
    const sessionId = localStorage.getItem("session_id");
    if (!sessionId) {
      router.push("/");
    }
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <aside
        className={`fixed z-30 inset-y-0 left-0 transform bg-neutral-50		 text-black w-64 p-4 transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:inset-0`}
      >
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <Link href="/dashboard">
              <li className="flex items-center gap-3 text-black hover:bg-blue-600 hover:text-white p-2	">
                <HiOutlineHome className="text-2xl" />

                <span className="block text-xl font-bold">Home</span>
              </li>
            </Link>

            <li>Log out</li>
          </ul>
        </nav>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <main className="flex-1 lg:ml-2 bg-gray-100 p-6 overflow-y-auto">
        <button
          onClick={toggleSidebar}
          className="p-2 text-gray-600 bg-gray-200 rounded-md lg:hidden"
        >
          {isSidebarOpen ? "Close" : "Menu"}
        </button>
        {children}
      </main>
    </div>
  );
}
