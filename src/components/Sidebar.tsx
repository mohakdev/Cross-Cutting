"use client";
import Link from "next/link";
import {
	Home,
	ClipboardList,
	FileText,
	Folder,
	LogOut,
	Search,
	BookOpen,
	Users,
} from "lucide-react";

const items = [
	{ href: "/dashboard", label: "Dashboard", icon: Home },
	{ href: "/assessment", label: "Start Assessment", icon: ClipboardList },
	{
		href: "/assessment/questionnaire",
		label: "Questionnaire",
		icon: BookOpen,
	},
	{ href: "/results", label: "Results", icon: FileText },
	{ href: "/history", label: "Patient Records", icon: Users },
	{ href: "/report", label: "Report", icon: Folder },
];

export default function Sidebar() {
	return (
		<aside className="hidden xl:flex xl:w-72 xl:flex-col xl:gap-3 border-r border-slate-200 bg-white p-4">
			<div className="flex items-center gap-2 border-b border-slate-100 pb-4 mb-4">
				<div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center text-white font-bold">
					H
				</div>
				<div>
					<p className="text-xs uppercase tracking-[0.2em] text-slate-400">
						Hospital Suite
					</p>
					<p className="text-sm font-semibold">Mental Health</p>
				</div>
			</div>
			<div className="space-y-1">
				{items.map((item) => {
					const Icon = item.icon;
					return (
						<Link
							key={item.href}
							href={item.href}
							className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900"
						>
							<Icon className="w-4 h-4" />
							<span className="text-sm font-medium">
								{item.label}
							</span>
						</Link>
					);
				})}
			</div>
			<div className="mt-auto pt-4 border-t border-slate-100">
				<button className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700">
					<LogOut className="w-4 h-4" /> Sign out
				</button>
			</div>
		</aside>
	);
}
