import Link from "next/link";

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-background">
			<div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-md">
				<h1 className="text-2xl font-semibold text-slate-900">
					Hospital Assessment Platform
				</h1>
				<p className="mt-2 text-slate-600">
					Use the secure doctor workflow to administer questionnaires
					and save records.
				</p>
				<Link
					href="/login"
					className="mt-4 inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-[#0f6dd3]"
				>
					Go to Login
				</Link>
			</div>
		</div>
	);
}
