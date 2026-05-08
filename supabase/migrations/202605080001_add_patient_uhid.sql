alter table patients
  add column if not exists uhid text;

alter table patients
  alter column dob drop not null,
  alter column sex drop not null;

create unique index if not exists patients_doctor_uhid_unique
  on patients (doctor_id, uhid)
  where uhid is not null;
