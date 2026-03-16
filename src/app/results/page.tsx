"use client";
import Sidebar from "@/components/Sidebar";
import ActionButton from "@/components/ActionButton";
import { severityMap } from "@/lib/mockData";
import Link from "next/link";

const total = 18;
const severity = "Moderately Severe";

export default function ResultsPage() {
	return (
		<div className="min-h-screen bg-background text-slate-900">
			<div className="mx-auto flex w-full max-w-6xl gap-4 p-4">
				<Sidebar />
				<div className="flex-1 space-y-4">
					<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
						<div className="flex flex-wrap items-start justify-between gap-2">
							<div>
								<p className="text-xs uppercase tracking-[0.2em] text-slate-400">
									Assessment results
								</p>
								<h1 className="text-2xl font-semibold text-slate-900">
									PHQ-9 Summary
								</h1>
								<p className="text-sm text-slate-500">
									Review score interpretation and save medical
									record.
								</p>
							</div>
							<Link
								href="/assessment/questionnaire"
								className="text-sm text-primary font-semibold"
							>
								Edit answers
							</Link>
						</div>

						<div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
							<div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
								<p className="text-xs uppercase text-slate-500">
									Total Score
								</p>
								<p className="mt-1 text-4xl font-bold text-primary">
									{total}
								</p>
							</div>
							<div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
								<p className="text-xs uppercase text-slate-500">
									Severity
								</p>
								<p className="mt-1 text-xl font-bold text-slate-700">
									{severity}
								</p>
							</div>
							<div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
								<p className="text-xs uppercase text-slate-500">
									Next action
								</p>
								<p className="mt-1 text-sm text-slate-600">
									Discuss care plan and follow-up within 1
									week.
								</p>
							</div>
						</div>

						<div className="mt-4 rounded-xl border border-slate-200 bg-white p-3">
							<p className="text-sm font-semibold text-slate-700">
								Domain Breakdown
							</p>
							<div className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2">
								{severityMap.slice(0, 3).map((item) => (
									<div
										key={item.label}
										className="rounded-lg border border-slate-200 p-2"
									>
										<div className="flex items-center justify-between text-xs text-slate-500">
											<span>{item.label}</span>
											<span className="font-semibold text-slate-700">
												{item.meaning}
											</span>
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3">
							<p className="text-sm font-semibold text-slate-700">
								Doctor Notes
							</p>
							<p className="mt-1 text-sm text-slate-600">
								Patient reported worsening sleep and
								concentration issues. Recommend behavioral
								activation and follow-up in 2 weeks.
							</p>
						</div>

						<div className="mt-4 flex gap-2">
							<ActionButton
								text="Generate PDF"
								onClick={() => {}}
							/>
							<ActionButton
								text="Save Record"
								variant="ghost"
								onClick={() => {}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
