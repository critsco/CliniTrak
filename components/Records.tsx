'use client'

import CreateModal from "@/components/CreateModal";
import { CLINIC_RECORDS, RECORDS_COLUMNS } from "@/constants";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Records = () => {
  const [query, setQuery] = useState('');

  const searchFilter = (array:any) => {
    return array.filter(
      (el:any) => Object.keys(el).some((parameter) => el[parameter].toString().toLowerCase().includes(query.toLowerCase()))
    )
  }
  const filtered = searchFilter(CLINIC_RECORDS);
  const handleChange = (e:any) => {
    setQuery(e.target.value);
  } 

  return (
    <section className="h-full w-[1320px] py-[3%] px-[6%] flex flex-col justify-center gap-4">
      <div className="mt-5 overflow-auto">
        <form id="listrec" method="post" autoComplete="off" className="flex items-center gap-3">
          <div className="flex flex-auto items-center gap-0.5">
            <input
              id="search"
              name="search"
              type="text"
              placeholder="Search record"
              className="block w-full rounded-l-md mt-3 py-2 pl-3 text-gray-900 bg-white shadow-sm placeholder:text-gray-400 ring-2 ring-gray-300 sm:text-sm sm:leading-6"
              onChange={handleChange}
            />
            <button id="search-btn" className="w-[5rem] mt-3 py-[11px] rounded-r-lg bg-blue-900 flex items-center justify-center">
              <Image src="/images/search.svg" alt="search" width={22} height={22} />
            </button>
          </div>
          <CreateModal />
          <button id="delete-btn" className="w-[8rem] mt-3 py-[10px] rounded-lg bg-blue-900 flex justify-center gap-2">
            <Image src="/images/trash.svg" alt="delete" width={22} height={22} />
            <p className="text-white font-normal text-base">Remove</p>
          </button>
        </form>
      </div>

      <div className="h-[476px] mt-10 overflow-auto">
        <div className="flex bg-gray-100">
          <div className="bg-blue-500 w-1.5 h-100vh"></div>
          <Table 
            selectionMode="single" 
            defaultSelectedKeys={[""]} 
            aria-label="Records table"
          >
            <TableHeader columns={RECORDS_COLUMNS} className="text-left">
              {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody>
              {filtered.map((record:any) => (
                <TableRow key={record.key}>
                  <TableCell><Link href={`/dashboard/records/${record.key}`}>{record.name}</Link></TableCell>
                  <TableCell>{record.sid}</TableCell>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{record.reason}</TableCell>
                  <TableCell>{record.complaint}</TableCell>
                  <TableCell>{record.attendee}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}

export default Records