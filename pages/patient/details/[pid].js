import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getPatientData, addPatient } from "../../api";

export default function PatientDetails() {
  const [patient, setPatient] = useState({});
  const router = useRouter();
  const { pid } = router.query;
  useEffect(async () => {
    const data = await getPatientData(pid);
    await addPatient();
    if (data) {
      setPatient(data);
      console.log(patient);
    } else {
      router.push("/");
    }
  }, []);
  return (
    <div className="flex space-between p-5 w-full mx-10 rounded-md shadow-lg bg-slate-200 max-h-fit">
      <div>
        <div className="flex mb-2">
          <h1 className="font-bold text-gray-600 text-lg">Name: </h1>
          <p className="font-bold ml-1 mt-1 text-gray-800">{patient.name}</p>
        </div>
        <div className="flex mb-2">
          <h1 className="font-bold text-gray-600 text-lg">Gender: </h1>
          <p className="font-bold ml-1 mt-1 text-gray-800">{patient.gender}</p>
        </div>
        <div className="flex mb-2">
          <h1 className="font-bold text-gray-600 text-lg">DOB: </h1>
          <p className="font-bold ml-1 mt-1 text-gray-800">{patient.dob}</p>
        </div>
        <div className="flex mb-2">
          <h1 className="font-bold text-gray-600 text-lg">Address: </h1>
          <p className="font-bold ml-1 mt-1 text-gray-800">{patient.Address}</p>
        </div>
      </div>
    </div>
  );
}
