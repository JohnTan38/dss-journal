import type { JournalModule } from '@/types/journal';

export const sscPve4010: JournalModule = {
  moduleId: 'ssc-pve-4010',
  moduleCode: 'SSC-PVE-4010-1.1',
  moduleName: 'Ethics, Values & Legislation',
  moduleNumber: 'M1',
  theme: {
    primary: 'from-blue-600 to-teal-500',
    accent: 'blue',
    knowledgeBadgeClass: 'bg-blue-100 text-blue-800 border border-blue-200',
    abilitiesBadgeClass: 'bg-purple-100 text-purple-800 border border-purple-200',
    luHeaderBgClass: 'bg-gradient-to-r from-slate-800 via-blue-900 to-teal-800',
    promptCardClass: 'bg-teal-50 border border-teal-200',
    reflectionCardClass: 'bg-amber-50 border border-amber-200',
    sidebarActiveClass: 'bg-blue-100 text-blue-800',
    buttonPrimaryClass:
      'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white',
  },
  coverSheet: {
    institution: 'Hua Mei Training Academy',
    program: 'Social Service — Clinical Attachment',
    moduleCode: 'SSC-PVE-4010-1.1',
    moduleName: 'Ethics, Values & Legislation',
    moduleNumber: 'Module 1 (M1)',
    assignmentTitle: 'Reflective Practice — Clinical Attachment Journal',
    studentName: '',
    studentId: '',
    intakeCohort: '',
    submissionDate: '',
    supervisorName: '',
    placementCenter: '',
    assessorName: '',
    contactDetails: '',
  },
  learningUnits: [
    {
      id: 'lu4',
      title:
        'LU4: Establish incident reporting process, legal, regulatory and ethical compliance in client care.',
      shortTitle: 'Learning Unit 4',
      headerPromptEntry: {
        id: 'lu4-header-entry',
        prompts: [
          {
            id: 'prompt-1',
            promptText:
              '1. Show a brief sample or derive a sample of incident report writing. Comment on why incident report writing and follow up is important and to add in examples from your experiences (if any).',
          },
        ],
        studentReflection: {
          type: 'composite',
          components: [
            {
              kind: 'paragraph',
              content:
                'Here is a sample Objective Narrative drafted according to the SMC Ethical Guidelines and the AIC reporting standards.',
            },
            {
              kind: 'incident-narrative',
              content: `Incident Report Narrative

Date of Incident: 23 October 2025
Time of Incident: 10:15 AM
Location: Level 2 North Wing Hallway, adjacent to Room 204
Persons Involved: Mdm. Tan (Client), Sarah Lim (Nursing Aide/Witness)

Factual Description of Event:
At 10:15 AM, Mdm. Tan was ambulating with her walker along the Level 2 North Wing hallway. A stack of four diaper carton boxes, positioned against the left wall, tilted and made contact with Mdm. Tan's right shoulder and arm. Mdm. Tan remained upright but ceased walking.

Staff Nurse (SN) Arul arrived at the scene at 10:17 AM. Upon arrival, SN Arul observed three carton boxes lying on the floor and Mdm. Tan leaning against her walker.

Client and Witness Statements:
• Mdm. Tan stated: "I was walking to the dining hall when the boxes just slid and hit my side. It gave me a fright."
• Sarah Lim (Witness) stated: "I was coming out of Room 205 when I saw the top two boxes slide off the stack. They struck Mdm. Tan on her right side."

Actions Taken:
1. Immediate Assessment: SN Arul performed a physical assessment. No bruising, skin tears, or swelling were noted on the right shoulder or arm at 10:20 AM. Mdm. Tan reported a pain scale of 2/10.
2. Safety Measures: Mdm. Tan was assisted to her room for a period of rest and further monitoring.
3. Medical Review: Dr. Wong was notified at 10:45 AM and scheduled a review for 2:00 PM to rule out delayed musculoskeletal injury.
4. Environmental Correction: The boxes were immediately moved to the secured Level 2 supply closet. The hallway was cleared of all remaining obstructions.
5. Notification: The Director of Nursing (DON) was briefed at 11:00 AM.

Corrective Actions & Follow-up:
The floor supervisor has initiated a review of the "Supply Delivery SOP" to ensure all vendors and staff transport items directly to storage zones. A hazard report was submitted to the Facilities Management team to mark "Keep Clear" zones in high-traffic hallways.`,
            },
            {
              kind: 'ethic-model',
              content: {
                rows: [
                  {
                    criterion: 'Objectivity',
                    evaluation:
                      'The report avoids words like "careless" or "negligent." It describes the physical movement of the boxes and the specific actions of the staff.',
                  },
                  {
                    criterion: 'Documentation Standards',
                    evaluation:
                      'It fulfils the 2016 ECEG B3 Requirement by being contemporaneous and detailed.',
                  },
                  {
                    criterion: 'Rights-Based',
                    evaluation:
                      "By including Mdm. Tan's direct quotes, the report respects her autonomy and voice in the investigation process.",
                  },
                ],
              },
            },
            {
              kind: 'signature',
              content: `Final Signature and Verification
To finalise the report in compliance with SMC documentation standards and AIC quality protocols, the document must be formally verified.

Reporting Officer:
Signature: ____________________
Name/Designation: [Your Name/Investigator]
Date/Time: 23 Oct 2025, 4:00 PM

Witness Verification:
Signature: ____________________
Name/Designation: Sarah Lim (Nursing Aide)
Date/Time: 23 Oct 2025, 4:10 PM`,
            },
            {
              kind: 'bullet-list',
              heading: 'Why is incident reporting important?',
              content: [
                'To inform facility administrators of incidents that allow the risk management team to consider changes that might prevent similar incidents in future.',
                'To alert administration and the facility insurance company of potential claims or need for further investigation.',
              ],
            },
          ],
        },
      },
      subSections: [
        // ── Knowledge (K5) ─────────────────────────────────────────────────
        {
          id: 'lu4-k5',
          type: 'knowledge',
          label: 'Knowledge (K5)',
          performanceCriteriaTitle:
            'Incident reporting requirements and resolution procedures.',
          entries: [
            {
              id: 'lu4-k5-entry-2a',
              prompts: [
                {
                  id: 'prompt-2a',
                  promptText:
                    '2a) Any ethical practices / issues arise you observed in the center you attached?',
                },
              ],
              studentReflection: {
                type: 'text',
                text: 'There were no ethical breaches at the center.',
              },
            },
            {
              id: 'lu4-k5-entry-2b',
              prompts: [
                {
                  id: 'prompt-2b',
                  promptText:
                    '2b) Any informed/written consent practice applied in the center you attached? Please illustrate the examples you observed and comments.',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'A nurse, prior to taking vital health readings (e.g. blood pressure) of an elderly client:',
                  },
                  {
                    kind: 'bullet-list',
                    content: [
                      'Nurse greeted client politely and asked how was the client feeling that morning.',
                      'The nurse then informed the client she was going to take readings of the elderly\'s blood pressure. Nurse sought the elderly client\'s consent as the process might cause slight discomfort to the elderly client. The nurse also asked if the client has any preference which arm be used to measure her blood pressure.',
                      'The elderly client indicated she understood the process and consented. She then offered her left arm for the nurse to get blood pressure readings.',
                    ],
                  },
                ],
              },
            },
          ],
        },

        // ── Abilities (A4) ─────────────────────────────────────────────────
        {
          id: 'lu4-a4',
          type: 'abilities',
          label: 'Abilities (A4)',
          performanceCriteriaTitle:
            'Monitor compliance to ethical practices, legal and regulatory requirements.',
          entries: [
            {
              id: 'lu4-a4-entry-2b',
              prompts: [
                {
                  id: 'prompt-2b-a4',
                  promptText:
                    '2b) Any informed/written consent practice applied in the center you attached? Please illustrate the examples you observed and comments.',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'A nurse, prior to taking vital health readings (e.g. blood pressure) of an elderly client:',
                  },
                  {
                    kind: 'bullet-list',
                    content: [
                      'Nurse greeted client politely and asked how was the client feeling that morning.',
                      'The nurse then informed the client she was going to take readings of the elderly\'s blood pressure. Nurse sought the elderly client\'s consent as the process might cause slight discomfort to the elderly client. The nurse also asked if the client has any preference which arm be used to measure her blood pressure.',
                      'The elderly client indicated she understood the process and consented. She then offered her left arm for the nurse to get blood pressure readings.',
                    ],
                  },
                ],
              },
            },
          ],
        },

        // ── Abilities (A5) ─────────────────────────────────────────────────
        {
          id: 'lu4-a5',
          type: 'abilities',
          label: 'Abilities (A5)',
          performanceCriteriaTitle:
            'Monitor, review and address incidents and complaints.',
          entries: [
            {
              id: 'lu4-a5-entry-3a',
              prompts: [
                {
                  id: 'prompt-3a',
                  promptText:
                    '3a) Reflect on any client complaint feedback protocols in the center you attached, any examples you observed or learnt during your internship?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'During the clinical attachment, there were no reports of adverse client feedback. Staff at the center gather feedback from clients after each activity (e.g. morning stretching exercises, afternoon sing-along sessions) and constantly seek improvements.',
                  },
                  {
                    kind: 'aac-feedback-form',
                    content: {
                      formTitle: 'AAC Client Feedback Form',
                      intro:
                        'In Singapore, AACs are frontline providers, so the form must adhere to PDPA (Personal Data Protection Act) requirements to prevent legislative breaches regarding confidentiality.',
                      sections: [
                        {
                          sectionNumber: 1,
                          sectionTitle: 'Client Information',
                          fields: [
                            { label: 'Name', value: '', type: 'text' },
                            { label: 'NRIC/FIN (Last 4 digits)', value: '', type: 'text' },
                            { label: 'Contact Number', value: '', type: 'text' },
                            { label: 'Date of Visit/Activity', value: '', type: 'text' },
                          ],
                        },
                        {
                          sectionNumber: 2,
                          sectionTitle: 'Nature of Feedback',
                          intro: 'Please select the category that best describes your feedback:',
                          fields: [
                            {
                              label: 'Feedback Category',
                              value: '',
                              type: 'checkboxes',
                              checkboxOptions: [
                                'Compliment: To recognise excellent service or a positive experience.',
                                'Suggestion: Ideas to improve our activities or facility.',
                                'Complaint/Incident: To report a specific issue or concern regarding care or safety.',
                              ],
                            },
                          ],
                        },
                        {
                          sectionNumber: 3,
                          sectionTitle: 'Feedback Details',
                          fields: [
                            {
                              label: 'Description of the Experience',
                              value: '(Please include what happened, where it happened, and who was involved)\n\nReflective Practice Note: Be as objective as possible. Avoid emotional language and focus on factual descriptions of the event.',
                              type: 'textarea',
                            },
                          ],
                        },
                        {
                          sectionNumber: 4,
                          sectionTitle: 'Service Quality Indicators',
                          intro: 'Please rate the following on a scale of 1 to 5 (1 = Poor, 5 = Excellent):',
                          fields: [
                            {
                              label: 'Service Quality Ratings',
                              value: '',
                              type: 'rating-table',
                              ratingIndicators: [
                                'Staff Professionalism & Politeness',
                                'Safety and Cleanliness of the Centre',
                                'Clarity of Information/Communication',
                                'Responsiveness to your needs',
                              ],
                            },
                          ],
                        },
                        {
                          sectionNumber: 5,
                          sectionTitle: 'Consent and Declaration',
                          fields: [
                            {
                              label: 'Consent',
                              value: '',
                              type: 'checkboxes',
                              checkboxOptions: [
                                'I consent to the collection and use of my personal data by this AAC for the purpose of investigating and resolving this feedback, in accordance with the PDPA.',
                                'I would like a follow-up regarding this matter via: [ ] Phone [ ] Email [ ] Not required.',
                              ],
                            },
                          ],
                        },
                      ],
                      signatureBlock: 'Signature: ____________________ Date: ____________________',
                      internalUseBlock: `Internal Use Only (Administrative Follow-up)\nTo be completed by the Centre Manager/Supervisor\n\n• Date Received: ____________\n• Assigned Investigator: ____________\n• Root Cause Analysis: (Identify why the issue occurred)\n• Corrective Actions Taken: (Steps to prevent recurrence)\n• Date Client Notified of Outcome: ____________`,
                    },
                  },
                  {
                    kind: 'resolution-protocol',
                    content: {
                      title: 'Behind-the-Scenes: Resolution Protocol (A5)',
                      intro:
                        'Once the form is submitted, the backend (e.g., a linked Google Sheet) should trigger the following Governance Practices:',
                      steps: [
                        {
                          stepNumber: 1,
                          stepTitle: 'Triage',
                          action: 'Categorise the feedback as a minor complaint or a reportable incident.',
                          responsibility: 'Center Manager',
                        },
                        {
                          stepNumber: 2,
                          stepTitle: 'Investigation',
                          action: 'Analyse data collected and identify the root cause.',
                          responsibility: 'Risk Management Team / Center Manager',
                        },
                        {
                          stepNumber: 3,
                          stepTitle: 'Rectification',
                          action:
                            'Recommend and implement corrective measures (e.g., clearing hallway hazards).',
                          responsibility: 'Facilities/Staff',
                        },
                        {
                          stepNumber: 4,
                          stepTitle: 'Closing',
                          action: 'Update the incident report and notify the client of the resolution.',
                          responsibility: 'Center Manager',
                        },
                      ],
                    },
                  },
                ],
              },
            },
            {
              id: 'lu4-a5-entry-3b',
              prompts: [
                {
                  id: 'prompt-3b',
                  promptText:
                    '3b) Reflect and discuss on the organisation culture e.g. how they engage positively with co-workers and/or team mates.',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Service Culture',
                      description:
                        'Built on elements of leadership principles, norms, work habits and vision, mission and values.',
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Employee Engagement',
                      description:
                        'Includes employee attitude, activities, purpose driven leadership and HR processes.',
                      bulletPoints: [
                        'Afternoon tea breaks for all staff on every Friday.',
                        'Coffee / tea and snacks are served and staff gather for quick team bonding over coffee.',
                      ],
                    },
                  },
                ],
              },
            },
            {
              id: 'lu4-a5-entry-3c',
              prompts: [
                {
                  id: 'prompt-3c',
                  promptText:
                    '3c) Reflect on what kind of service quality checks the center currently using and discuss.',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Service Quality / Checks',
                      description:
                        'Includes strategies, audit processes, transparency and performance management systems. Helping the client fulfil their mission and supporting them in the pursuit of their purpose and needs, must be the foundation of any social service provider partnership.',
                      bulletPoints: [
                        'Example of 0% incidents in eldercare facilities in a year.',
                        'Comprehensive and robust audit processes to ensure compliance with all regulations within social service sector for eldercare.',
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Client Experience',
                      description:
                        "Includes elements of clients' feedbacks, case management process and continuous improvements of care.",
                    },
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
};
