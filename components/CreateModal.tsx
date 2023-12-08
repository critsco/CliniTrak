// @ts-nocheck
'use client'

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import DropdownComp from "./Dropdown";

export default function CreateModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [selectedReason, setSelectedReason] = useState({ id: '', name: ''});

  const handleSelectedValueChange = (selectedValue:any) => {
    setSelectedReason(selectedValue);
    console.log('Selected value:', selectedValue);
  }

  return (
    <>
      <Button onPress={onOpen} className="w-[8rem] mt-3 py-[22px] rounded-lg bg-blue-900 flex justify-center gap-2">
        <Image src="/images/plus.svg" alt="create" width={22} height={22} />
        <p className="text-white font-normal text-base">Create</p>
      </Button>
      <Modal isOpen={isOpen} backdrop="blur" onOpenChange={onOpenChange} size="2xl" className="px-3 pt-2"
      placement="top">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-bold text-2xl">Create Record
              <div className="bg-gray-300 w-full h-[1px]"></div></ModalHeader>
              <ModalBody>
                <form>
                  <div className="flex items-center gap-2 -mt-3">
                    <Image src="/images/info-circle.svg" alt="info" width={22} height={22} />
                    <p className="font-bold text-lg">General Information</p>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <div className="sm:col-span-4">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900">
                        Name
                      </label>
                      <div className="mt-1">
                        <div className="record-form w-[215px]">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sm:col-span-4">
                      <label htmlFor="sid" className="block text-sm font-semibold text-gray-900">
                        ID Number
                      </label>
                      <div className="mt-1">
                        <div className="record-form w-[165px]">
                          <input
                            type="text"
                            name="sid"
                            id="sid"
                            autoComplete="sid"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            // disabled
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sm:col-span-4">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                        Email
                      </label>
                      <div className="mt-1">
                        <div className="record-form w-[200px]">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            // disabled
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 ml-8 font-bold text-lg">Visit Details</p>
                  <div className="flex gap-8">
                    <div>
                      <p className="text-sm mt-2 font-semibold">Reason</p>
                      <DropdownComp onChange={handleSelectedValueChange} />
                      <div className="sm:col-span-4">
                        <label htmlFor="complaint" className="block text-sm font-semibold">
                          Chief Complaint
                        </label>
                        <div className="mt-1">
                          <div className="record-form w-[200px]">
                            <input
                              type="text"
                              name="complaint"
                              id="complaint"
                              className="block flex-1 border-0 bg-transparent py-1.5 pl-4 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">                  
                      <label htmlFor="details" className="block mb-2 text-sm font-semibold">details of Complaint</label>
                      <textarea 
                        id="details" 
                        name="details"
                        rows={4}
                        className="block py-2 px-4 w-[372px] border-0 text-sm bg-gray-100 rounded-md focus:ring-2" 
                        placeholder="Write the details here...">
                      </textarea>
                    </div>
                  </div>
                  <p className="mt-4 ml-8 font-bold text-lg">Assessment and Treatment</p>
                  <div className="mt-3">
                    <p className="font-bold text-sm">Vital Signs:</p>
                    <div className="flex gap-[20%]">
                      <div className="flex-col flex">
                        <div className="sm:col-span-4">
                          <div className="mt-1">
                            <div className="input-label w-[200px] items-center">
                              <label htmlFor="bp" className="text-xs font-medium pr-[39px]">
                                Blood Pressure
                              </label>
                              <input
                                type="text"
                                name="bp"
                                id="bp"
                                className="record-input w-[75px]"
                              />
                              <span className="ml-1 text-xs whitespace-nowrap">mm Hg</span>
                            </div>
                          </div>
                        </div>
                        <div className="sm:col-span-4">
                          <div className="mt-1">
                            <div className="input-label w-[200px] items-center">
                              <label htmlFor="temp" className="text-xs font-medium pr-[11px]">
                                Temperature
                              </label>
                              <input
                                type="text"
                                name="temp"
                                id="temp"
                                className="record-input w-[75px]"
                              />
                              <span className="ml-1 text-sm whitespace-nowrap">°F</span>
                            </div>
                          </div>
                        </div>
                        <div className="sm:col-span-4">
                          <div className="mt-1">
                            <div className="input-label items-center">
                              <label htmlFor="hr" className="text-xs font-medium pr-[26px]">
                                Heart Rate
                              </label>
                              <input
                                type="text"
                                name="hr"
                                id="hr"
                                className="record-input w-[75px]"
                              />
                              <span className="ml-1 text-xs whitespace-nowrap">bpm</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="w-[295px] ml-[-10px]">
                          <div className="sm:col-span-4">
                            <div className="mt-1">
                              <div className="input-label items-start">
                                <label htmlFor="diagnosis" className="text-xs font-medium pr-[42px]">
                                  Diagnosis
                                </label>
                                <textarea 
                                  id="diagnosis" 
                                  name="diagnosis"
                                  rows={4}
                                  className="block py-2 px-4 w-full border-0 text-sm bg-gray-100 rounded-md focus:ring-2">
                                </textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="font-bold mt-2 text-sm">Treatment Provided:</p>
                    <div className="flex gap-[3%] items-center">
                      <div className="flex-col gap-2">
                        <div className="sm:col-span-4">
                          <div className="mt-1">
                            <div className="input-label sm:max-w-md w-[295px] items-start">
                              <label htmlFor="counseling" className="text-xs font-medium pr-[20px]">
                                Counseling
                              </label>
                              <textarea 
                                id="counseling" 
                                name="counseling"
                                rows={4}
                                className="block py-2 px-4 w-full border-0 text-sm bg-gray-100 rounded-md focus:ring-2 scrollbar-hide" >
                              </textarea>
                            </div>
                          </div>
                        </div>
                        <div className="sm:col-span-4">
                          <div className="mt-2">
                            <div className="input-label w-[295px] items-start">
                              <label htmlFor="otc_med" className="text-xs font-medium pr-[20px]">
                                OTC Medication
                              </label>
                              <textarea 
                                id="otc_med" 
                                name="otc_med"
                                rows={4}
                                className="block py-2 px-4 w-full border-0 text-sm bg-gray-100 rounded-md focus:ring-2 scrollbar-hide" >
                              </textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[295px]">
                        <div className="sm:col-span-4">
                          <div className="mt-1">
                            <div className="input-label w-full items-start">
                              <label htmlFor="rest" className="text-xs font-medium pr-[74px]">
                                Rest
                              </label>
                              <textarea 
                                id="rest" 
                                name="rest"
                                rows={4}
                                className="block py-2 px-4 w-full border-0 text-sm bg-gray-100 rounded-md focus:ring-2 scrollbar-hide" >
                              </textarea>
                            </div>
                          </div>
                        </div>
                        <div className="sm:col-span-4">
                          <div className="mt-2">
                            <div className="input-label w-full items-start">
                              <label htmlFor="reassessment" className="text-xs font-medium pr-3">
                                Reassessment
                              </label>
                              <textarea 
                                id="reassessment" 
                                name="reassessment"
                                rows={4}
                                className="block py-2 px-4 w-full border-0 text-sm bg-gray-100 rounded-md focus:ring-2 scrollbar-hide" >
                              </textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 ml-8 font-bold text-lg">Prescription and Medications</p>
                  <div className="flex-col gap-2">
                    <div className="sm:col-span-4">
                      <div className="mt-1">
                        <div className="input-label w-[200px] items-center">
                          <label htmlFor="med_name" className="text-xs font-medium pr-[47.5px]">
                            Medication Name
                          </label>
                          <input
                            type="text"
                            name="med_name"
                            id="med_name"
                            className="record-input w-[385px]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sm:col-span-4">
                      <div className="mt-1">
                        <div className="input-label w-[200px] items-center">
                          <label htmlFor="instructions" className="text-xs font-medium pr-[25.5px]">
                            Administration Instructions
                          </label>
                          <input
                            type="text"
                            name="instructions"
                            id="instructions"
                            className="record-input w-[385px]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sm:col-span-4">
                      <div className="mt-1">
                        <div className="input-label items-center">
                          <label htmlFor="date" className="text-xs font-medium pr-[12px]">
                            Prescription Date
                          </label>
                          <input
                            type="text"
                            name="date"
                            id="date"
                            className="record-input w-[85px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 ml-8 font-bold text-lg">Overall Review</p>
                  <textarea 
                    id="review" 
                    name="review"
                    rows={5}
                    className="block py-2 px-4 w-full border-0 text-sm bg-gray-100 rounded-md focus:ring-2" 
                    placeholder="Write the visit review here...">
                  </textarea>
                  <p className="mt-4 ml-8 font-bold text-lg">Credentials</p>
                  <div className="flex gap-[20%] items-center">
                    <div className="sm:col-span-4">
                      <div className="mt-1">
                        <div className="input-label sm:max-w-md w-[200px] items-center">
                          <label htmlFor="attendee" className="text-xs font-medium pr-[32px]">
                            Healthcare Provider
                          </label>
                          <input
                            type="text"
                            name="attendee"
                            id="attendee"
                            className="record-input w-[160px]"
                            placeholder="Name"
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <p className="text-xs font-medium">Signature</p>
                      <Image
                        src=""
                        alt="signature"
                        width={100}
                        height={50}
                      />
                    </div>
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button type="submit" color="primary" onPress={onClose}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
