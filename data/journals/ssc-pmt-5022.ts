import type { JournalModule } from '@/types/journal';

export const sscPmt5022: JournalModule = {
  moduleId: 'ssc-pmt-5022',
  moduleCode: 'SSC-PMT-5022-1.1',
  moduleName: 'Social Service Programme Development',
  moduleNumber: 'M7',
  theme: {
    primary: 'from-purple-600 to-sky-500',
    accent: 'purple',
    knowledgeBadgeClass: 'bg-purple-100 text-purple-800 border border-purple-200',
    abilitiesBadgeClass: 'bg-sky-100 text-sky-800 border border-sky-200',
    luHeaderBgClass: 'bg-gradient-to-r from-slate-800 via-purple-900 to-sky-800',
    luIconClass: 'text-sky-300',
    promptCardClass: 'bg-purple-50 border border-purple-200',
    reflectionCardClass: 'bg-sky-50 border border-sky-200',
    sidebarActiveClass: 'bg-purple-100 text-purple-800',
    buttonPrimaryClass:
      'bg-gradient-to-r from-purple-600 to-sky-600 hover:from-purple-700 hover:to-sky-700 text-white',
    coverTitleClass:
      'bg-gradient-to-r from-purple-400 to-sky-300 bg-clip-text text-transparent',
  },
  coverSheet: {
    institution: 'Hua Mei Training Academy',
    program: 'Diploma in Social Service',
    moduleCode: 'SSC-PMT-5022-1.1',
    moduleName: 'Social Service Programme Development',
    moduleNumber: 'Module 7 (M7)',
    assignmentTitle: 'Reflective Practice - Industrial Attachment Journal',
    studentName: '',
    studentId: '',
    intakeCohort: '',
    submissionDate: '',
    supervisorName: '',
    placementCenter: '',
    assessorName: '',
    contactDetails: '',
  },
  downloadResources: [
    {
      label: 'Original M7 reflective journal PDF',
      href: '/assets/M7-SSC-PMT-5022-1.1-Social-Service-Program-Development-M7-RJ.pdf',
      filename: 'M7-SSC-PMT-5022-1.1-Social-Service-Program-Development-M7-RJ.pdf',
    },
  ],
  learningUnits: [
    {
      id: 'lu2',
      title:
        'LU2: Reframe programme planning and development in community and social service settings.',
      shortTitle: 'Learning Unit 2',
      subSections: [
        {
          id: 'lu2-a5',
          type: 'abilities',
          label: 'Abilities (A5)',
          performanceCriteriaTitle:
            'A5 - Determine senior leadership and multi-disciplinary team support for programme planning and development.',
          entries: [
            {
              id: 'lu2-a5-e1',
              prompts: [
                {
                  id: 'lu2-a5-p1',
                  promptText:
                    'What are the learning points from AAC or day care centre meetings such as debriefs, roll-calls, multi-disciplinary team meetings, team meetings, and meetings with volunteers?',
                },
                {
                  id: 'lu2-a5-p2',
                  promptText:
                    'Reflect on meeting details such as agenda items and other important factors to take note of.',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Responsibilities of the Multi-Disciplinary Team',
                      description:
                        'In Active Ageing Centres, the MDT bridges clinical healthcare and community-based social support so seniors receive holistic bio-psycho-social care.',
                      bulletPoints: [
                        'A manager or practice leader oversees and facilitates the MDT.',
                        'A single access process and joint meetings help workers share insights and concerns.',
                        'Electronic records provide a common view of contacts, assessments, and interventions.',
                        'A key worker coordinates support packages for complex cases.',
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Meeting structure',
                      description:
                        'The MDT meeting structure clarifies objectives, rules, agenda items, case discussion, and next steps.',
                      bulletPoints: [
                        'Clarify ageing-in-place goals, risk mitigation priorities, and resource optimisation.',
                        'Set leadership, facilitation, recording, timekeeping, and psychological safety norms.',
                        'Prioritise complex cases and transitions such as hospital discharge or bereavement.',
                        'Use integrated records and joint problem-solving to formulate social prescribing responses.',
                        'Assign key workers and schedule review cycles for tracked follow-up.',
                      ],
                    },
                  },
                  {
                    kind: 'info-table',
                    title: 'MDT Composition in AAC Settings',
                    headers: ['Role', 'Primary Contribution to AAC'],
                    rows: [
                      {
                        Role: 'Doctor/Specialist',
                        'Primary Contribution to AAC':
                          'Clinical oversight and chronic disease management.',
                      },
                      {
                        Role: 'Nurse',
                        'Primary Contribution to AAC':
                          'Health monitoring and medication adherence.',
                      },
                      {
                        Role: 'PT / OT',
                        'Primary Contribution to AAC':
                          'Mobility assessments and home safety modifications.',
                      },
                      {
                        Role: 'Medical Social Worker',
                        'Primary Contribution to AAC':
                          'Navigating financial aid and family dynamics.',
                      },
                      {
                        Role: 'AAC Staff',
                        'Primary Contribution to AAC':
                          'Daily social observations and community engagement.',
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 'lu4',
      title: 'LU4: Devise strategic plan and framework in programme evaluation.',
      shortTitle: 'Learning Unit 4',
      subSections: [
        {
          id: 'lu4-a4',
          type: 'abilities',
          label: 'Abilities (A4)',
          performanceCriteriaTitle:
            'A4 - Plan strategic directions in programme evaluations and methods.',
          entries: [
            {
              id: 'lu4-a4-e1',
              prompts: [
                {
                  id: 'lu4-a4-p1',
                  promptText:
                    'Reflect and document in detail the use of a planning triangle to plan and evaluate your participated or initiated programme or activity.',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'The Charities Evaluation Services planning triangle helps the MDT align service delivery with long-term quality-of-life improvements for seniors. The representative programme is Steady Steps: An Integrated Falls Prevention and Social Engagement Initiative.',
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Apex: Impact',
                      description:
                        'The long-term impact is improved effectiveness of eldercare through sustained benefits over one to three years.',
                      bulletPoints: [
                        'Sustainable ageing-in-place and reduced premature nursing home admissions.',
                        'Enhanced quality of life through functional independence and purpose.',
                        'Improved integration between healthcare systems and community AAC services.',
                      ],
                    },
                  },
                  {
                    kind: 'info-table',
                    title: 'Outcomes and Indicators',
                    headers: ['Outcome', 'Outcome Indicator'],
                    rows: [
                      {
                        Outcome: 'Increased functional independence',
                        'Outcome Indicator':
                          'Improved Timed Up and Go or Berg Balance Scale scores; successful independent transfers.',
                      },
                      {
                        Outcome: 'Enhanced health literacy and self-management',
                        'Outcome Indicator':
                          'Seniors identify fall risks and adhere to medication regimes verified by the MDT nurse.',
                      },
                      {
                        Outcome: 'Social re-integration',
                        'Outcome Indicator':
                          'Lower social isolation scores and movement from at-risk status to active AAC participation.',
                      },
                    ],
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Base: Outputs and Activities',
                      description:
                        'Outputs are the tangible MDT services delivered through clinical, social, environmental, and engagement work.',
                      bulletPoints: [
                        'Physiotherapist-led strength and balance sessions.',
                        'Nurse-led chronic disease screenings.',
                        'Occupational therapist home safety assessments.',
                        'Medical social worker financial counselling for home modifications.',
                        'AAC staff-led interest groups and volunteer-led befriending.',
                      ],
                    },
                  },
                  {
                    kind: 'paragraph',
                    content:
                      'For complex seniors, a key worker coordinates outputs across disciplines so rehabilitation plans, transport subsidies, social support, and follow-up actions remain connected.',
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
