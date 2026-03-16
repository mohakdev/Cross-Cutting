"use client";
import { useMemo, useState } from "react";
import Sidebar from "@/components/Sidebar";
import QuestionCard from "@/components/QuestionCard";
import ActionButton from "@/components/ActionButton";
import { questions } from "@/lib/mockData";
import Link from "next/link";

export default function QuestionnairePage() {
	const [answers, setAnswers] = useState<Record<number, number>>({});
	const totalScore = useMemo(
		() => Object.values(answers).reduce((acc, v) => acc + v, 0),
		[answers],
	);

	const updateAnswer = (id: number, score: number) => {
		setAnswers((prev) => ({ ...prev, [id]: score }));
	};

	return (
		<div className="min-h-screen bg-background text-slate-900">
			<div className="mx-auto flex w-full max-w-6xl gap-4 p-4">
				<Sidebar />
				<div className="flex-1 space-y-4">
					<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
						<div className="flex items-start justify-between gap-2">
							<div>
								<p className="text-xs uppercase tracking-[0.2em] text-slate-400">
									Questionnaire
								</p>
								<h1 className="text-2xl font-semibold">
									PHQ-9 Assessment
								</h1>
								<p className="text-sm text-slate-500">
									Complete each question quickly with large
									click targets.
								</p>
							</div>
							<div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-right">
								<p className="text-xs uppercase tracking-[0.15em] text-slate-400">
									Current total
								</p>
								<p className="mt-1 text-xl font-bold text-slate-800">
									{totalScore}
								</p>
							</div>
						</div>
						<div className="mt-4 space-y-3">
							{questions.map((q) => (
								<QuestionCard
									key={q.id}
									question={q.text}
									value={answers[q.id] ?? 0}
									onChange={(score) =>
										updateAnswer(q.id, score)
									}
								/>
							))}
						</div>
						<div className="mt-4 flex gap-2">
							<Link href="/results">
								<ActionButton
									text="Review Results"
									onClick={() => {}}
								/>
							</Link>
							<ActionButton
								text="Save Progress"
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
