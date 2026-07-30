import type { JournalModule } from '@/types/journal';

export const sscPmt4022: JournalModule = {
  moduleId: 'ssc-pmt-4022',
  moduleCode: 'SSC-PMT-4022-1.1',
  moduleName: 'Social Service Programme Development',
  moduleNumber: 'M6',
  theme: {
    primary: 'from-blue-600 to-cyan-500',
    accent: 'blue',
    knowledgeBadgeClass: 'bg-blue-100 text-blue-800 border border-blue-200',
    abilitiesBadgeClass: 'bg-cyan-100 text-cyan-800 border border-cyan-200',
    luHeaderBgClass: 'bg-gradient-to-r from-slate-800 via-blue-900 to-cyan-800',
    luIconClass: 'text-cyan-300',
    promptCardClass: 'bg-blue-50 border border-blue-200',
    reflectionCardClass: 'bg-cyan-50 border border-cyan-200',
    sidebarActiveClass: 'bg-blue-100 text-blue-800',
    buttonPrimaryClass:
      'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white',
    coverTitleClass:
      'bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent',
  },
  coverSheet: {
    institution: 'Hua Mei Training Academy',
    program: 'Diploma in Social Service',
    moduleCode: 'SSC-PMT-4022-1.1',
    moduleName: 'Social Service Programme Development',
    moduleNumber: 'Module 6 (M6)',
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
      label: 'Original M6 reflective journal PDF',
      href: '/assets/M6-SSC-PMT-4022-1.1-Social-Service-Program-Development-v1.1-RJ.pdf',
      filename: 'M6-SSC-PMT-4022-1.1-Social-Service-Program-Development-v1.1-RJ.pdf',
    },
  ],
  learningUnits: [
    {
      id: 'lu1',
      title:
        'LO1: Conduct needs assessment for clients or community stakeholders to determine the scope of services or programmes to be provided to meet their needs.',
      shortTitle: 'Learning Unit 1',
      subSections: [
        {
          id: 'lu1-k1',
          type: 'knowledge',
          label: 'Knowledge (K1)',
          performanceCriteriaTitle:
            'K1 - Community development frameworks, principles and models.',
          entries: [
            {
              id: 'lu1-k1-e1',
              prompts: [
                {
                  id: 'lu1-k1-p1',
                  promptText: 'What is a community needs assessment?',
                },
                {
                  id: 'lu1-k1-p2',
                  promptText:
                    'How does it link to the needs-based community development model and the Principle of Felt Needs?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'A community needs assessment is a structured way to review what services a community already has, what it lacks, and what must be strengthened so people can receive support that fits their real concerns.',
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Purpose of the assessment',
                      description:
                        'The assessment helps practitioners identify service gaps and create a clear plan to build or adapt programmes that respond to community needs.',
                      bulletPoints: [
                        'Identify areas where services are lacking or not meeting needs.',
                        'Use findings to plan suitable services and programme scope.',
                        'Prioritise expressed community needs instead of externally assumed needs.',
                      ],
                    },
                  },
                  {
                    kind: 'paragraph',
                    content:
                      'The needs-based community development model provides the structure for identifying challenges, service gaps, and improvement areas. The Principle of Felt Needs keeps the process grounded in what community members recognise and express as important in their own lives.',
                  },
                  {
                    kind: 'info-table',
                    title: 'Needs Assessment Linkage',
                    headers: ['Concept', 'Application'],
                    rows: [
                      {
                        Concept: 'Needs-based community development',
                        Application:
                          'Uses systematic assessment to design targeted programmes and interventions.',
                      },
                      {
                        Concept: 'Principle of Felt Needs',
                        Application:
                          'Prioritises needs recognised by community members themselves.',
                      },
                      {
                        Concept: 'Combined practice',
                        Application:
                          'Ensures programmes are both structured and genuinely relevant to the community.',
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
      id: 'lu2',
      title:
        'LO2: Adapt and incorporate best practices and trends to develop innovative social services programmes that meet the needs of clients or community stakeholders.',
      shortTitle: 'Learning Unit 2',
      subSections: [
        {
          id: 'lu2-a7',
          type: 'abilities',
          label: 'Abilities (A7)',
          performanceCriteriaTitle:
            'A7 - Adapt and incorporate best practices and trends in programmes.',
          entries: [
            {
              id: 'lu2-a7-e1',
              prompts: [
                {
                  id: 'lu2-a7-p1',
                  promptText:
                    'How does the AAC incorporate best practices and trends in its social service programmes?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Programme context',
                      description:
                        'The selected programme is a half-day morning workshop for residents aged 60 and above at risk of social isolation around 123 Bukit Merah View.',
                      bulletPoints: [
                        'Target population: seniors aged 60 and above.',
                        'Problem: increasing risk of social isolation, with possible long-term health and mental health effects.',
                        'Goal: encourage seniors to participate in activities at the Active Ageing Centre.',
                        'Interventions: befriending, buddying, staff and volunteer engagement, and senior participation in AAC activities.',
                      ],
                    },
                  },
                  {
                    kind: 'info-table',
                    title: 'Programme Fit and Best Practices',
                    headers: ['Area', 'Reflection'],
                    rows: [
                      {
                        Area: 'Good fit',
                        Reflection:
                          'The half-day workshop matches the demographic profile and characteristics of the target community.',
                      },
                      {
                        Area: 'Root cause',
                        Reflection:
                          'The workshop addresses social isolation and can support lower admission rates and higher AAC participation.',
                      },
                      {
                        Area: 'Resources',
                        Reflection:
                          'Full-time staff, volunteers, venue, budget, and timeline were available and approved.',
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },
        {
          id: 'lu2-k4',
          type: 'knowledge',
          label: 'Knowledge (K4)',
          performanceCriteriaTitle:
            'K4 - Trends and best practices in social service programmes.',
          entries: [
            {
              id: 'lu2-k4-e1',
              prompts: [
                {
                  id: 'lu2-k4-p1',
                  promptText:
                    'What best practices were adopted when implementing the half-day workshop?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Programme evaluation',
                      description:
                        'The AAC used evaluation to monitor effectiveness, feasibility, satisfaction, resources, budget, and implementation timeline.',
                      bulletPoints: [
                        'Feasibility was reviewed through the pilot run and early roadblock identification.',
                        'Effectiveness was reflected by 50% of participants reporting lower isolation and activity registrations increasing by more than 25%.',
                        'Cost-effectiveness was shown by completing the programme within the approved budget and one-month timeline.',
                      ],
                    },
                  },
                  {
                    kind: 'info-table',
                    title: 'Evaluation Questions',
                    headers: ['Question', 'Purpose'],
                    rows: [
                      {
                        Question: 'How effective was the programme?',
                        Purpose: 'Check whether the needs of target seniors were met.',
                      },
                      {
                        Question: 'How satisfied were the seniors?',
                        Purpose: 'Capture participant experience and programme relevance.',
                      },
                      {
                        Question: 'Were resources and budget sufficient?',
                        Purpose: 'Confirm feasibility and cost-effectiveness.',
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
      id: 'lu3',
      title:
        'LO3: Develop strategies to engage programme stakeholders in the social service sector to garner support for social service programmes or services.',
      shortTitle: 'Learning Unit 3',
      subSections: [
        {
          id: 'lu3-k8',
          type: 'knowledge',
          label: 'Knowledge (K8)',
          performanceCriteriaTitle: 'K8 - Strategies to engage programme stakeholders.',
          entries: [
            {
              id: 'lu3-k8-e1',
              prompts: [
                {
                  id: 'lu3-k8-p1',
                  promptText:
                    'What strategies can be used to engage programme stakeholders?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'description-block',
                    content: {
                      title: '4Cs stakeholder engagement strategy',
                      description:
                        'Stakeholder engagement is built around communicating, collaborating, controlling quality, and committing to the project.',
                      bulletPoints: [
                        'Communicate a shared vision so partners align around purpose and coordination.',
                        'Collaborate as a team and share responsibility for leading initiatives.',
                        'Commit through clear agreements, delegated responsibilities, and task lists.',
                        'Control quality with structured leadership and accountability.',
                      ],
                    },
                  },
                  {
                    kind: 'bullet-list',
                    heading: 'Implementation Best Practices',
                    content: [
                      'Map and prioritise stakeholders with power and interest grids.',
                      'Use two-way communication that listens and adapts.',
                      'Follow up consistently to build trust with difficult stakeholders.',
                      'Document interactions and use feedback to improve strategies.',
                    ],
                  },
                  {
                    kind: 'paragraph',
                    content:
                      'Effective stakeholder engagement often needs to move beyond informing or consulting toward involving and collaborating for higher impact.',
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
