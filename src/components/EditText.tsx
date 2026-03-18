import {
	MailIcon,
	HospitalIcon,
	UserIcon,
	LockIcon,
	SearchIcon,
} from "lucide-react";

export enum IconType {
	mail,
	hospital,
	person,
	lock,
	search,
	none,
}

interface EditTextProps {
	name: string;
	icon: IconType;
	placeholder: string;
	value: string;
	onChange: (newValue: string) => void;
	type?: "text" | "email" | "password";
}

function EditText(props: EditTextProps) {
	return (
		<div className="flex flex-col my-2 w-full">
			<label className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
				{props.name}
			</label>
			<div className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-2 py-2">
				{props.icon === IconType.mail && (
					<MailIcon className="w-4 h-4 text-slate-400" />
				)}
				{props.icon === IconType.hospital && (
					<HospitalIcon className="w-4 h-4 text-slate-400" />
				)}
				{props.icon === IconType.person && (
					<UserIcon className="w-4 h-4 text-slate-400" />
				)}
				{props.icon === IconType.lock && (
					<LockIcon className="w-4 h-4 text-slate-400" />
				)}
				{props.icon === IconType.search && (
					<SearchIcon className="w-4 h-4 text-slate-400" />
				)}
				<input
					className="w-full bg-transparent text-slate-800 placeholder:text-slate-400 focus:outline-none"
					type={props.type ?? "text"}
					placeholder={props.placeholder}
					value={props.value}
					onChange={(e) => props.onChange(e.target.value)}
				/>
			</div>
		</div>
	);
}

export default EditText;
