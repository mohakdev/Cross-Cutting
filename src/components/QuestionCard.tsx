"use client";

interface QuestionCardProps {
	question: string;
	value: number;
	onChange: (value: number) => void;
}

const options = [
	{ score: 0, label: "0 - Not at all" },
	{ score: 1, label: "1 - Several days" },
	{ score: 2, label: "2 - More than half days" },
	{ score: 3, label: "3 - Nearly every day" },
];

export default function QuestionCard({
	question,
	value,
	onChange,
}: QuestionCardProps) {
	return (
		<div className="rounded-xl border border-slate-200 bg-white p-4">
			<p className="font-semibold text-slate-700">{question}</p>
			<div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-2">
				{options.map((opt) => (
					<button
						key={opt.score}
						type="button"
						className={`rounded-lg border px-3 py-2 text-left text-sm ${
							value === opt.score
								? "border-primary bg-primary/10 text-primary"
								: "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300"
						}`}
						onClick={() => onChange(opt.score)}
					>
						<div className="flex items-center justify-between gap-3">
							<span>{opt.label}</span>
							<span className="text-xs font-semibold text-slate-500">
								{opt.score}
							</span>
						</div>
					</button>
				))}
			</div>
		</div>
	);
}
