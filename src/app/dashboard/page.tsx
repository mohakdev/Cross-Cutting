"use client";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/StatCard";
import { assessments, patients } from "@/lib/mockData";
import ActionButton from "@/components/ActionButton";

export default function DashboardPage() {
	return (
		<div className="min-h-screen bg-background text-slate-900">
			<div className="mx-auto flex w-full max-w-6xl gap-4 p-4">
				<Sidebar />
				<div className="flex-1 space-y-4">
					<div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
						<div>
							<p className="text-xs uppercase tracking-[0.2em] text-slate-400">
								Good morning
							</p>
							<h1 className="text-2xl font-semibold text-slate-900">
								Dr. Priya Sharma
							</h1>
							<p className="mt-1 text-sm text-slate-500">
								Hospital Mental Health Assessment
							</p>
						</div>
						<div className="flex gap-2">
							<Link href="/assessment">
								<ActionButton
									text="Start New Assessment"
									onClick={() => {}}
								/>
							</Link>
							<ActionButton
								text="Generate Report"
								variant="ghost"
								onClick={() => {}}
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-3 md:grid-cols-3">
						<StatCard
							title="Patients Today"
							value={`${patients.length}`}
							detail="All patients scheduled for today"
						/>
						<StatCard
							title="Assessments"
							value={`${assessments.length}`}
							detail="Recent questionnaires completed"
						/>
						<StatCard
							title="Avg. Score"
							value="12.7"
							detail="Overall average severity"
						/>
					</div>

					<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-xs uppercase tracking-[0.2em] text-slate-400">
									Quick Actions
								</p>
								<h2 className="text-lg font-semibold text-slate-900">
									Workflow shortcuts
								</h2>
							</div>
							<Link
								href="/history"
								className="text-sm text-primary font-semibold"
							>
								View all records
							</Link>
						</div>
						<div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-3">
							<button className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-left hover:border-primary hover:text-primary">
								Patient search
							</button>
							<button className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-left hover:border-primary hover:text-primary">
								New test entry
							</button>
							<button className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-left hover:border-primary hover:text-primary">
								Reports archive
							</button>
						</div>
					</div>

					<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-xs uppercase tracking-[0.2em] text-slate-400">
									Recent assessments
								</p>
								<h3 className="text-lg font-semibold text-slate-900">
									Latest completed sessions
								</h3>
							</div>
							<Link
								href="/results"
								className="text-sm text-primary font-semibold"
							>
								Open dashboard
							</Link>
						</div>
						<div className="mt-3 space-y-2">
							{assessments.slice(0, 3).map((item) => (
								<div
									key={item.id}
									className="flex items-center justify-between rounded-xl border border-slate-200 p-3"
								>
									<div>
										<div className="text-sm font-semibold text-slate-800">
											{item.patient}
										</div>
										<div className="text-xs text-slate-500">
											{item.test} • {item.date}
										</div>
									</div>
									<div className="text-right">
										<p className="font-semibold text-slate-700">
											Score {item.score}
										</p>
										<p className="text-xs text-slate-500">
											{item.severity}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
