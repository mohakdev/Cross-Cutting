export default function StatCard({
	title,
	value,
	detail,
}: {
	title: string;
	value: string;
	detail: string;
}) {
	return (
		<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
			<p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
				{title}
			</p>
			<p className="mt-2 text-3xl font-semibold text-slate-900">
				{value}
			</p>
			<p className="mt-2 text-xs text-slate-500">{detail}</p>
		</div>
	);
}
