"use client";
import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import { patients } from "@/lib/mockData";
import ActionButton from "@/components/ActionButton";

const tests = ["PHQ-9", "GAD-7", "DASS-21", "PTSD Checklist"];

export default function AssessmentPage() {
	const [patientId, setPatientId] = useState(patients[0].id);
	const [testType, setTestType] = useState(tests[0]);
	const [doctorNote, setDoctorNote] = useState("");

	return (
		<div className="min-h-screen bg-background text-slate-900">
			<div className="mx-auto flex w-full max-w-6xl gap-4 p-4">
				<Sidebar />
				<div className="flex-1 space-y-4">
					<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-xs uppercase tracking-[0.2em] text-slate-400">
									Assessment
								</p>
								<h1 className="text-2xl font-semibold text-slate-900">
									Start New Patient Assessment
								</h1>
								<p className="mt-1 text-sm text-slate-500">
									Fast digital questionnaire setup for
									clinical sessions
								</p>
							</div>
							<Link
								href="/dashboard"
								className="text-sm text-primary font-semibold"
							>
								Back to dashboard
							</Link>
						</div>

						<div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
							<div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
								<label className="text-xs font-semibold uppercase text-slate-500">
									Patient
								</label>
								<select
									value={patientId}
									onChange={(e) =>
										setPatientId(e.target.value)
									}
									className="mt-1 w-full rounded-lg border border-slate-300 bg-white p-2"
								>
									{patients.map((item) => (
										<option key={item.id} value={item.id}>
											{item.name} ({item.id})
										</option>
									))}
								</select>
							</div>
							<div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
								<label className="text-xs font-semibold uppercase text-slate-500">
									Test Type
								</label>
								<select
									value={testType}
									onChange={(e) =>
										setTestType(e.target.value)
									}
									className="mt-1 w-full rounded-lg border border-slate-300 bg-white p-2"
								>
									{tests.map((t) => (
										<option key={t} value={t}>
											{t}
										</option>
									))}
								</select>
							</div>
							<div className="md:col-span-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
								<label className="text-xs font-semibold uppercase text-slate-500">
									Doctor notes (optional)
								</label>
								<textarea
									value={doctorNote}
									onChange={(e) =>
										setDoctorNote(e.target.value)
									}
									rows={4}
									className="mt-1 w-full rounded-lg border border-slate-300 bg-white p-2 text-sm"
									placeholder="Add quick clinical observations..."
								></textarea>
							</div>
						</div>

						<div className="mt-4 flex flex-wrap gap-2">
							<Link href="/assessment/questionnaire">
								<ActionButton
									text="Proceed to Questionnaire"
									onClick={() => {}}
								/>
							</Link>
							<ActionButton
								text="Save Draft"
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
