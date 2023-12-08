'use client'

import EditModal from "@/components/EditModal"
import { CLINIC_RECORDS } from "@/constants"
import { Divider } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

const Record = () => {
  const params = useParams();
  const record = CLINIC_RECORDS.find((r) => r.key === params.key);

  if (!record) {
    return <div>Record not found</div>;
  }
  
  return (
    <section>
      <div className="ml-[55rem] flex items-center gap-2">
        <EditModal />
        <Link href="/dashboard/records">
          <button className="w-[8rem] mt-3 py-[10px] rounded-lg bg-blue-900 flex flexCenter gap-2">
            <Image src="/images/x.svg" alt="close" width={22} height={22} />
            <p className="text-white font-normal text-base">Close</p>
          </button>
        </Link>
      </div>
      
      <div className="flex mt-4">
        <div className="bg-blue-500 w-2 rounded-l-md h-100vh"></div>
        <div className="flex flex-col w-[150vh] bg-gray-100">
          <div className="flex items-center gap-5 px-16 py-4">
            <div>
              <Image src={record.image} alt="profile-picture" width={100} height={100} />
            </div>
            <div>
              <p className="text-blue-500 font-bold text-2xl">{record.name} ({record.sid})</p>
              <p className="font-bold">Year level: {record.yearlevel}</p>
              <p className="font-bold">Department: {record.department}</p>
              <p className="font-bold">Course: {record.course}</p>
            </div>
          </div>
          <div className="bg-blue-900 text-white pl-16 py-5 flex gap-10 justify-start">
            <div className="w-5/12">
              <p className="font-bold">Patient Information</p><br/>
              <div className="text-sm">
                <p>Birthdate: {record.birthdate}</p>
                <p>Gender: {record.gender}</p>
                <p>Phone Number: {record.phone}</p>
                <p>Emergency Contact: {record.emergency_num}</p>
              </div>
            </div>
            <Divider orientation="vertical" className="bg-white ml-[-8rem]" />
            <div className="w-4/12 pl-5">
              <p className="font-bold">Vitals</p><br/>
              <div className="text-sm">
                <p>Height: {record.height}</p>
                <p>Weight: {record.weight}</p>
                <p>BMI: {record.bmi}</p>
                <p>Blood Type: {record.bloodtype}</p>
              </div>
            </div>
            <Divider orientation="vertical" className="bg-white ml-[-8rem]" />
            <div className="w-3/12 pl-5">
              <p className="font-bold">Medical Background</p><br/>
              <div className="text-sm">
                <p>Allergies: {record.allergies}</p>
                <p>Chronic Conditions: {record.chronic_conds}</p>
              </div> 
            </div>
          </div>
          <div className="px-16 pt-4 pb-[6%]">
            <p className="text-blue-900 font-bold text-xl">Visit Details</p>
            <p className="font-bold text-sm">Date and Time of Visit: <span className="font-normal">{record.date}</span></p>
            <p className="font-bold text-sm">Reason for Visit: <span className="font-normal">{record.reason}</span></p>
            <p className="font-bold text-sm">Chief Complaint: <span className="font-normal">{record.complaint}</span></p>
            <p className="font-bold text-sm">Details of Complaint: <span className="font-normal">{record.details}</span></p>
            <br/>
            <p className="text-blue-900 font-bold text-xl">Assessment and Treatment</p>
            <p className="font-bold text-sm">Vital Signs:</p>
            <ul className="list-disc font-bold text-sm pl-6">
              <li>Blood Pressure: <span className="font-normal">{record.bp} mm Hg</span></li>
              <li>Temperature: <span className="font-normal">{record.temp} °F</span></li>
              <li>Heart Rate: <span className="font-normal">{record.hr} bpm</span></li>
            </ul>
            <p className="font-bold text-sm">Diagnosis: <span className="font-normal">{record.diagnosis}</span></p>
            <p className="font-bold text-sm">Treatment Provided:</p>
            <ul className="list-disc font-bold text-sm pl-6">
              <li>Counseling: <span className="font-normal">{record.counseling}</span></li>
              <li>Over-the-Counter (OTC) Medication: <span className="font-normal">{record.otc_med}</span></li>
              <li>Rest: <span className="font-normal">{record.rest}</span></li>
              <li>Reassessment: <span className="font-normal">{record.reassessment}</span></li>
            </ul>
            <p className="font-bold text-sm">Referrals: <span className="font-normal">{record.referrals}</span></p>
            <br/>
            <p className="text-blue-900 font-bold text-xl">Prescriptions and Medications</p>
            <p className="font-bold text-sm">Medication Name: <span className="font-normal">{record.med_name}</span></p>
            <p className="font-bold text-sm">Administration Instructions: <span className="font-normal">{record.instructions}</span></p>
            <p className="font-bold text-sm">Prescription Date: <span className="font-normal">{record.pres_date}</span></p>
            <br/>
            <p className="text-blue-900 font-bold text-xl">Review</p>
            <p className="text-sm">{record.review}</p>
            <br/>
            <p className="text-blue-900 font-bold text-xl">Credentials</p>
            <p className="font-bold text-sm">Healthcare Provider: <span className="font-normal">{record.attendee}</span></p>
            <p className="font-bold text-sm flex">Signature: <span><Image src={record.signature} alt="signature" width={50} height={40} /></span></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Record