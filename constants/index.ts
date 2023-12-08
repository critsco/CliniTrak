// LOGIN HEADER
export const LOGIN_LINKS = [
  { href: '/', key: 'personnel_portal', label: 'Personnel Portal' },
  { href: '/', key: 'student_portal ', label: 'Student Portal' },
];

// NAVIGATION
export const P_NAV_LINKS = [
  { href: '/', key: 'dashboard', label: 'Dashboard', icon: '' },
  { href: '/', key: 'messages ', label: 'Messages', icon: '' },
  { href: '/', key: 'records', label: 'Records', icon: '' },
  { href: '/', key: 'analytics', label: 'Analytics', icon: '' },
];
 
export const S_NAV_LINKS = [
  { href: '/', key: 'dashboard', label: 'Dashboard' },
  { href: '/', key: 'records', label: 'Records' }, 
];

// FEATURES
export const P_FEATURES = [
  {
    title: 'Efficient Health Record Management',
    icon: '/images/leaf.svg',
    description:
      'Simplify and centralize the storage and retrieval of student health records, making it easy for both students and healthcare providers to access essential information.',
  },
  {
    title: 'Accessibility and Convenience',
    icon: '/images/accessible.svg',
    description:
      'Ensure that students have easy access to their health records and can communicate with healthcare professionals conveniently.',
  },
  {
    title: 'Data Security and Compliance',
    icon: '/images/shield-checkered.svg',
    description:
      'Maintain the highest standards of data security and compliance with healthcare regulations to protect sensitive medical information.',
  },
  {
    title: 'Data Analysis and Research',
    icon: '/images/chart-histogram.svg',
    description:
      'Maintain the highest standards of data analysis and research with healthcare regulations to provide statistical data.',
  },
]

// FOOTER
export const FOOTER_LINKS = [
  { href: '/', key: 'privacy', label: '• Privacy' },
  { href: '/', key: 'terms ', label: '• Terms' },
];

// RECORDS
export const RECORDS_COLUMNS = [
  { key: 'name', label: 'Name', },
  { key: 'sid', label: 'ID Number', },
  { key: 'date', label: 'Date', },
  { key: 'reason', label: 'Reason of Visit', },
  { key: 'complaint', label: 'Chief Complaint', },
  { key: 'attendee', label: 'Attendee', },
]

export const CLINIC_RECORDS = [
  { image: '/man.png', 
    key: '5', 
    name: 'Oliver Wendell Ceniza', 
    sid: '21100001011', 
    email: 'oliver.ceniza@urios.edu.ph',
    yearlevel: 'Third Year', 
    department: 'Computer Studies Program', 
    course: 'Diploma in Information Technology', 
    birthdate: '2001 June 4', 
    gender: 'Male', 
    phone: '09672599956',
    emergency_num: '09271880144',
    height: '5"4',
    weight: '52kg',
    bmi: '19.7 (Normal)', 
    bloodtype: 'Type A', 
    allergies: 'N/A', 
    chronic_conds: 'N/A', 
    date: '11/18/2023', 
    reason: 'Injury', 
    complaint: 'Broken Leg',
    details: 'The student has complained of a moderate, throbbing stomach ache. No associated symptoms such as nausea or vomiting were reported.',
    bp: '120/80',
    temp: '98.6',
    hr: '75',
    diagnosis: 'Tension-type stomach ache',
    counseling: 'The student was advised on stress management techniques, adequate hydration, and proper sleep.',
    otc_med: 'Acetaminophen 500 mg was administered for headache relief.',
    rest: 'The student was allowed to rest in the clinic for 30 minutes.',
    reassessment: 'After resting, vital signs were rechecked and reported as stable.',
    referrals: `No referrals were made as the student's headache was resolved with OTC medication and rest.`,
    med_name: `N/A`,
    instructions: `N/A`,
    pres_date: `N/A`,
    review: `The student was provided with guidance on managing stress through relaxation techniques and maintaining a healthy lifestyle. The importance of staying hydrated and ensuring regular sleep patterns was emphasized. The student was advised to return if headaches persist or worsen.`,
    attendee: 'Nurse Christine',
    signature: '/christine-signature.png'
  },
  { image: '/woman.png', 
    key: '4', 
    name: 'Jona Mae Gitalada', 
    sid: '21100001053', 
    email: 'jona.gitalada@urios.edu.ph',
    yearlevel: 'Third Year', 
    department: 'Computer Studies Program', 
    course: 'Diploma in Information Technology', 
    birthdate: '2002 December 20', 
    gender: 'Female', 
    phone: '09271880144',
    emergency_num: '09672599956',
    height: '4"10',
    weight: '42kg',
    bmi: '20.0 (Normal)', 
    bloodtype: 'Type A', 
    allergies: 'Pollen Allergy', 
    chronic_conds: 'N/A', 
    date: '10/21/2023', 
    reason: 'Check-Up', 
    complaint: 'Headache',
    details: 'The student has complained of a moderate, throbbing headache localized to the front of the head. No associated symptoms such as nausea or vomiting were reported.',
    bp: '120/80',
    temp: '98.6',
    hr: '75',
    diagnosis: 'Tension-type headache',
    counseling: 'The student was advised on stress management techniques, adequate hydration, and proper sleep.',
    otc_med: 'Acetaminophen 500 mg was administered for headache relief.',
    rest: 'The student was allowed to rest in the clinic for 30 minutes.',
    reassessment: 'After resting, vital signs were rechecked and reported as stable.',
    referrals: `No referrals were made as the student's headache was resolved with OTC medication and rest.`,
    med_name: `N/A`,
    instructions: `N/A`,
    pres_date: `N/A`,
    review: `The student was provided with guidance on managing stress through relaxation techniques and maintaining a healthy lifestyle. The importance of staying hydrated and ensuring regular sleep patterns was emphasized. The student was advised to return if headaches persist or worsen.`,
    attendee: 'Nurse April',
    signature: '/april-signature.png'
  },
  { image: '/man.png', 
    key: '3', 
    name: 'Oliver Wendell Ceniza', 
    sid: '21100001011', 
    email: 'oliver.ceniza@urios.edu.ph',
    yearlevel: 'Third Year', 
    department: 'Computer Studies Program', 
    course: 'Diploma in Information Technology', 
    birthdate: '2001 June 4', 
    gender: 'Male', 
    phone: '09672599956',
    emergency_num: '09271880144',
    height: '5"4',
    weight: '52kg',
    bmi: '19.7 (Normal)', 
    bloodtype: 'Type A', 
    allergies: 'N/A', 
    chronic_conds: 'N/A', 
    date: '10/18/2023', 
    reason: 'Check-Up', 
    complaint: 'Stomach Ache',
    details: 'The student has complained of a moderate, throbbing stomach ache. No associated symptoms such as nausea or vomiting were reported.',
    bp: '120/80',
    temp: '98.6',
    hr: '75',
    diagnosis: 'Tension-type stomach ache',
    counseling: 'The student was advised on stress management techniques, adequate hydration, and proper sleep.',
    otc_med: 'Acetaminophen 500 mg was administered for headache relief.',
    rest: 'The student was allowed to rest in the clinic for 30 minutes.',
    reassessment: 'After resting, vital signs were rechecked and reported as stable.',
    referrals: `No referrals were made as the student's headache was resolved with OTC medication and rest.`,
    med_name: `N/A`,
    instructions: `N/A`,
    pres_date: `N/A`,
    review: `The student was provided with guidance on managing stress through relaxation techniques and maintaining a healthy lifestyle. The importance of staying hydrated and ensuring regular sleep patterns was emphasized. The student was advised to return if headaches persist or worsen.`,
    attendee: 'Nurse Christine',
    signature: '/christine-signature.png'
  },
  { image: '/man.png', 
    key: '2', 
    name: 'Vee Jay Marquez', 
    sid: '20100000349', 
    email: 'vee.marquez@urios.edu.ph',
    yearlevel: 'Fourth Year', 
    department: 'Nursing Program', 
    course: 'Bachelor of Science in Nursing', 
    birthdate: '2002 February 14', 
    gender: 'Male', 
    phone: '09672599956',
    emergency_num: '09271880144',
    height: '5"4',
    weight: '52kg',
    bmi: '19.7 (Normal)', 
    bloodtype: 'Type A', 
    allergies: 'N/A', 
    chronic_conds: 'N/A', 
    date: '10/15/2023', 
    reason: 'Emergency', 
    complaint: 'Unconscious',
    details: 'The student has complained of a moderate, throbbing stomach ache. No associated symptoms such as nausea or vomiting were reported.',
    bp: '120/80',
    temp: '98.6',
    hr: '75',
    diagnosis: 'Tension-type stomach ache',
    counseling: 'The student was advised on stress management techniques, adequate hydration, and proper sleep.',
    otc_med: 'Acetaminophen 500 mg was administered for headache relief.',
    rest: 'The student was allowed to rest in the clinic for 30 minutes.',
    reassessment: 'After resting, vital signs were rechecked and reported as stable.',
    referrals: `No referrals were made as the student's headache was resolved with OTC medication and rest.`,
    med_name: `N/A`,
    instructions: `N/A`,
    pres_date: `N/A`,
    review: `The student was provided with guidance on managing stress through relaxation techniques and maintaining a healthy lifestyle. The importance of staying hydrated and ensuring regular sleep patterns was emphasized. The student was advised to return if headaches persist or worsen.`,
    attendee: 'Nurse Bryle',
    signature: '/bryle-signature.png'
  },
  { image: '/man.png', 
    key: '1', 
    name: 'Roland Sala II', 
    sid: '21100000065', 
    email: 'roland.sala@urios.edu.ph',
    yearlevel: 'Third Year', 
    department: 'Business Administration Program', 
    course: 'Bachelor of Science in Nursing', 
    birthdate: '2001 October 13', 
    gender: 'Male', 
    phone: '09672599956',
    emergency_num: '09271880144',
    height: '5"4',
    weight: '52kg',
    bmi: '19.7 (Normal)', 
    bloodtype: 'Type A', 
    allergies: 'N/A', 
    chronic_conds: 'N/A', 
    date: '10/14/2023', 
    reason: 'Injury', 
    complaint: 'Broken Arm',
    details: 'The student has complained of a moderate, throbbing stomach ache. No associated symptoms such as nausea or vomiting were reported.',
    bp: '120/80',
    temp: '98.6',
    hr: '75',
    diagnosis: 'Tension-type stomach ache',
    counseling: 'The student was advised on stress management techniques, adequate hydration, and proper sleep.',
    otc_med: 'Acetaminophen 500 mg was administered for headache relief.',
    rest: 'The student was allowed to rest in the clinic for 30 minutes.',
    reassessment: 'After resting, vital signs were rechecked and reported as stable.',
    referrals: `No referrals were made as the student's headache was resolved with OTC medication and rest.`,
    med_name: `N/A`,
    instructions: `N/A`,
    pres_date: `N/A`,
    review: `The student was provided with guidance on managing stress through relaxation techniques and maintaining a healthy lifestyle. The importance of staying hydrated and ensuring regular sleep patterns was emphasized. The student was advised to return if headaches persist or worsen.`,
    attendee: 'Nurse Bryle',
    signature: '/bryle-signature.png'
  },
]