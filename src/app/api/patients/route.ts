import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabaseServer";
import { requireDoctorAuth } from "@/lib/routeAuth";

export async function GET(request: NextRequest) {
  try {
    const doctor = await requireDoctorAuth(request);
    const supabase = getSupabaseServerClient();

    const { data, error } = await supabase
      .from("patients")
      .select("id, full_name, uhid, dob, sex, created_at")
      .eq("doctor_id", doctor.doctorId)
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ patients: data ?? [] });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unauthorized";
    return NextResponse.json({ error: message }, { status: 401 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const doctor = await requireDoctorAuth(request);
    const payload = (await request.json().catch(() => ({}))) as Record<string, unknown>;

    const fullName = typeof payload.fullName === "string" ? payload.fullName.trim() : "";
    const uhid = typeof payload.uhid === "string" ? payload.uhid.trim() : "";

    if (!fullName) {
      return NextResponse.json({ error: "Patient full name is required" }, { status: 400 });
    }

    if (!uhid) {
      return NextResponse.json({ error: "Patient UHID is required" }, { status: 400 });
    }

    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase
      .from("patients")
      .insert({
        full_name: fullName,
        uhid,
        dob: null,
        sex: null,
        doctor_id: doctor.doctorId,
      })
      .select("id, full_name, uhid, dob, sex, created_at")
      .single();

    if (error || !data) {
      return NextResponse.json({ error: error?.message ?? "Failed to create patient" }, { status: 500 });
    }

    return NextResponse.json({ patient: data });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unauthorized";
    return NextResponse.json({ error: message }, { status: 401 });
  }
}
