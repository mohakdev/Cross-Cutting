"use client";
import ActionButton from "@/components/ActionButton";
import EditText, { IconType } from "@/components/EditText";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, isSignedIn } from "@/lib/auth";

export default function page() {
	const [isLogin, setIsLogin] = useState(true);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [hospitalId, setHospitalId] = useState("");
	const router = useRouter();

	useEffect(() => {
		if (isSignedIn()) router.replace("/");
	}, [router]);

	const handleSubmit = () => {
		signIn();
		router.push("/");
		console.log("Form submitted:", { name, email, hospitalId });
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-background p-4">
			<div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
				<div className="mb-4 flex items-center gap-2">
					<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
						H
					</div>
					<div>
						<p className="text-xs uppercase tracking-[0.2em] text-slate-500">
							Hospital Portal
						</p>
						<p className="text-lg font-semibold text-slate-900">
							Mental Health Assessment
						</p>
					</div>
				</div>
				<h1 className="text-2xl font-semibold text-slate-900">
					{isLogin ? "Welcome Back" : "Create Account"}
				</h1>
				<p className="mt-1 text-sm text-slate-500">
					{isLogin
						? "Secure sign in for doctors and clinicians."
						: "Create your account to begin assessments."}
				</p>

				<div className="mt-4 space-y-2">
					{!isLogin && (
						<EditText
							name="Full Name"
							icon={IconType.person}
							placeholder="Dr. Name"
							value={name}
							onChange={setName}
						/>
					)}
					<EditText
						name="Email"
						icon={IconType.mail}
						placeholder="you@hospital.org"
						value={email}
						onChange={setEmail}
						type="email"
					/>
					<EditText
						name="Hospital ID"
						icon={IconType.hospital}
						placeholder="H-12345"
						value={hospitalId}
						onChange={setHospitalId}
					/>
				</div>

				<div className="mt-4">
					<ActionButton
						text={isLogin ? "Sign In" : "Register"}
						onClick={handleSubmit}
					/>
					{/* <Link href="/dashboard">
					</Link> */}
				</div>
				<p className="mt-3 text-center text-sm text-slate-500">
					{isLogin ? "Don't have an account?" : "Already registered?"}{" "}
					<span
						className="text-primary cursor-pointer"
						onClick={() => setIsLogin(!isLogin)}
					>
						{isLogin ? "Create one" : "Sign in"}
					</span>
				</p>
				<div className="mt-4 flex justify-center text-xs text-slate-400">
					For demo only · No backend connected
				</div>
			</div>
		</div>
	);
}
