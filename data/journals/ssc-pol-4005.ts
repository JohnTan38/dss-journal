import type { JournalModule } from '@/types/journal';

export const sscPol4005: JournalModule = {
  moduleId: 'ssc-pol-4005',
  moduleCode: 'SSC-POL-4005-1.1',
  moduleName: 'Social Policy Implementation',
  moduleNumber: 'M9',
  theme: {
    primary: 'from-indigo-600 to-rose-500',
    accent: 'indigo',
    knowledgeBadgeClass: 'bg-indigo-100 text-indigo-800 border border-indigo-200',
    abilitiesBadgeClass: 'bg-rose-100 text-rose-800 border border-rose-200',
    luHeaderBgClass: 'bg-gradient-to-r from-slate-800 via-indigo-900 to-rose-800',
    luIconClass: 'text-rose-300',
    promptCardClass: 'bg-indigo-50 border border-indigo-200',
    reflectionCardClass: 'bg-rose-50 border border-rose-200',
    sidebarActiveClass: 'bg-indigo-100 text-indigo-800',
    buttonPrimaryClass:
      'bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-700 hover:to-rose-700 text-white',
    coverTitleClass:
      'bg-gradient-to-r from-indigo-400 to-rose-300 bg-clip-text text-transparent',
  },
  coverSheet: {
    institution: 'Hua Mei Training Academy',
    program: 'Diploma in Social Service',
    moduleCode: 'SSC-POL-4005-1.1',
    moduleName: 'Social Policy Implementation',
    moduleNumber: 'Module 9 (M9)',
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
      label: 'Original M9 reflective journal PDF',
      href: '/assets/M9-SSC-POL-4005-1.1-Social-Policy-Implementation-RJ.pdf',
      filename: 'M9-SSC-POL-4005-1.1-Social-Policy-Implementation-RJ.pdf',
    },
  ],
  learningUnits: [
    {
      id: 'lu1',
      title:
        'LO1: Develop a realistic and feasible Social Policy Implementation Plan to achieve the goals and objectives of the social policy.',
      shortTitle: 'Learning Unit 1',
      subSections: [
        {
          id: 'lu1-a1',
          type: 'abilities',
          label: 'Abilities (A1)',
          performanceCriteriaTitle: 'A1 - Establish social policy implementation plans.',
          entries: [
            {
              id: 'lu1-a1-e1',
              prompts: [
                {
                  id: 'lu1-a1-p1',
                  promptText:
                    'What are the centre objectives, goals, and resources for the Baking for Inter-generational Bonding pilot programme?',
                },
                {
                  id: 'lu1-a1-p2',
                  promptText:
                    'How do you conduct programme risk assessment and formulate response strategies?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Baking for Inter-generational Bonding',
                      description:
                        'The programme enables three seniors to mentor six youths-at-risk in professional baking skills with at-sunrise Global Chef Academy.',
                      bulletPoints: [
                        'SMART goal: over 12 Saturdays from July to September 2026, equip six youths with baking skills in blueberry muffins, pandan chiffon cake, and chocolate swiss roll.',
                        'Human capital: project manager, project executive, two centre staff, three volunteers, senior mentors, and youth beneficiaries.',
                        'Partnership: adapt curriculum and training materials with Global Chef Academy.',
                        'Facilities: secure kitchen facilities and align workflows with workplace safety, food hygiene, and safety protocols.',
                        'Sponsorship: formalise support from NTUC and RedManShop for ingredients, tools, and resources.',
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Monitoring, Evaluation and Learning',
                      description:
                        'MEL activities create feedback loops before, during, and after the three-month pilot.',
                      bulletPoints: [
                        'Use weekly observations and feedback loops to assess chemistry, pacing, and engagement.',
                        'Facilitate focus groups with seniors and youths to collect lived experience.',
                        'Use Likert-scale survey questions for skill attainment, programme pace, and social confidence.',
                        'Prepare post-pilot analysis on intergenerational bonding and youth-parent relationships.',
                        'Collate feedback into a report for management, stakeholders, future enhancement, and scalability.',
                      ],
                    },
                  },
                  {
                    kind: 'info-table',
                    title: 'Risk Management - Assessment and Response Strategy',
                    headers: ['Type of Risk', 'Risk Level', 'Response Strategy'],
                    rows: [
                      {
                        'Type of Risk': 'Cost of baking ingredients',
                        'Risk Level': 'Medium Risk',
                        'Response Strategy':
                          'Provide additional budget to factor in cost inflation.',
                      },
                      {
                        'Type of Risk': 'Youths or seniors may fall sick or be absent',
                        'Risk Level': 'Medium Risk',
                        'Response Strategy':
                          'Maintain a wait list of youths and seniors after registration closes.',
                      },
                      {
                        'Type of Risk': 'Physical limitations',
                        'Risk Level': 'Low Risk',
                        'Response Strategy':
                          'Ensure the teaching environment is accessible with ramps and elevators.',
                      },
                      {
                        'Type of Risk': 'Food freezer breakdown',
                        'Risk Level': 'Low Risk',
                        'Response Strategy': 'Centre manager keeps standby freezer capacity.',
                      },
                      {
                        'Type of Risk': 'Teaching session failure',
                        'Risk Level': 'Medium Risk',
                        'Response Strategy':
                          'Provide seniors with teaching skills training and review conduct with Global Chef Academy and the manager.',
                      },
                      {
                        'Type of Risk': 'Management may not support the programme',
                        'Risk Level': 'Medium Risk',
                        'Response Strategy':
                          'Present clear goals aligned to mission and vision, stakeholder feedback, and industry best practices.',
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
        'LO2: Collaborate with the implementation team to execute the Social Policy Implementation Plan successfully.',
      shortTitle: 'Learning Unit 2',
      subSections: [
        {
          id: 'lu2-a7',
          type: 'abilities',
          label: 'Abilities (A7)',
          performanceCriteriaTitle:
            'A7 - Collaborate with implementation team to ensure plans are realistic and feasible.',
          entries: [
            {
              id: 'lu2-a7-e1',
              prompts: [
                {
                  id: 'lu2-a7-p1',
                  promptText:
                    'Describe the primary functions of the implementation team for Baking for Inter-generational Bonding.',
                },
                {
                  id: 'lu2-a7-p2',
                  promptText:
                    'Which community partners does your centre work closely with for successful implementation?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Implementation team functions',
                      description:
                        'The implementation team supports successful delivery through clear roles, feedback loops, outreach, volunteer engagement, training, counselling support, and management buy-in.',
                      bulletPoints: [
                        'Define roles and responsibilities through an organisational chart and transparent accountability framework.',
                        'Run weekly evaluation meetings to analyse feedback and make near-real-time refinements.',
                        'Use physical banners, flyers, and digital channels such as Facebook, Instagram, TikTok, and X for outreach.',
                        'Onboard specialised volunteers for photography, documentation, and first-aid support.',
                        'Partner with the counsellor to identify suitable at-risk youths and provide pre-session briefings.',
                        'Present budget and implementation plans to management and key stakeholders.',
                      ],
                    },
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
        'LO3: Assess impacts of social policy implementation on client groups and formulate responses to mitigate negative impacts and maximise positive impacts.',
      shortTitle: 'Learning Unit 3',
      subSections: [
        {
          id: 'lu3-a2',
          type: 'abilities',
          label: 'Abilities (A2)',
          performanceCriteriaTitle:
            'A2 - Identify impact of policy implementation on client groups.',
          entries: [
            {
              id: 'lu3-a2-e1',
              prompts: [
                {
                  id: 'lu3-a2-p1',
                  promptText:
                    'What positive and negative impacts might the team encounter during social policy implementation?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'info-table',
                    title: 'Policy Implementation Impacts',
                    headers: ['Client Group or Issue', 'Positive or Negative Impact'],
                    rows: [
                      {
                        'Client Group or Issue': 'Lower-income households',
                        'Positive or Negative Impact':
                          'Financial security through ComCare, Workfare, and coordinated coaching support.',
                      },
                      {
                        'Client Group or Issue': 'Seniors',
                        'Positive or Negative Impact':
                          'CareShield Life provides severe disability coverage and lifelong payouts for care costs.',
                      },
                      {
                        'Client Group or Issue': 'Students',
                        'Positive or Negative Impact':
                          'Education changes aim to reduce academic stress and improve support for students with special educational needs.',
                      },
                      {
                        'Client Group or Issue': 'Accessibility barriers',
                        'Positive or Negative Impact':
                          'Complex applications or strict criteria can prevent eligible groups from accessing benefits.',
                      },
                      {
                        'Client Group or Issue': 'Disparities in impact',
                        'Positive or Negative Impact':
                          'Awareness, service access, living costs, and support outcomes can vary across groups.',
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },
        {
          id: 'lu3-k5',
          type: 'knowledge',
          label: 'Knowledge (K5)',
          performanceCriteriaTitle: 'K5 - Methods to collect feedback on social policies.',
          entries: [
            {
              id: 'lu3-k5-e1',
              prompts: [
                {
                  id: 'lu3-k5-p1',
                  promptText:
                    'What methods are used to collect feedback on social policies?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'info-table',
                    title: 'Feedback Collection Channels',
                    headers: ['Channel', 'Method'],
                    rows: [
                      {
                        Channel: 'Digital Platforms',
                        Method:
                          'CrowdTaskSG surveys and polls; REACH social media, messaging apps, online surveys, and e-Listening Points.',
                      },
                      {
                        Channel: 'Physical and Community Engagement',
                        Method:
                          'Listening points at community clubs, workplaces, public spaces, and focused dialogues.',
                      },
                      {
                        Channel: 'Forums and Dialogues',
                        Method:
                          'Public consultations, webinars, focus groups, Forward SG, and pre-Budget discussions.',
                      },
                      {
                        Channel: 'Surveys and Research',
                        Method:
                          'Official studies, interviews, telephone polls, academic research, and independent analysis.',
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
  ],
};
