import type { JournalModule } from '@/types/journal';

export const sscPdv4045: JournalModule = {
  moduleId: 'ssc-pdv-4045',
  moduleCode: 'SSC-PDV-4045-1.1',
  moduleName: 'People Management',
  moduleNumber: 'M3',
  theme: {
    primary: 'from-purple-600 to-violet-500',
    accent: 'purple',
    knowledgeBadgeClass: 'bg-purple-100 text-purple-800 border border-purple-200',
    abilitiesBadgeClass: 'bg-violet-100 text-violet-800 border border-violet-200',
    luHeaderBgClass: 'bg-gradient-to-r from-slate-800 via-purple-900 to-violet-800',
    luIconClass: 'text-violet-300',
    promptCardClass: 'bg-purple-50 border border-purple-200',
    reflectionCardClass: 'bg-amber-50 border border-amber-200',
    sidebarActiveClass: 'bg-purple-100 text-purple-800',
    buttonPrimaryClass:
      'bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white',
    coverTitleClass:
      'bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent',
  },
  coverSheet: {
    institution: 'Hua Mei Training Academy',
    program: 'Social Service — Clinical Attachment',
    moduleCode: 'SSC-PDV-4045-1.1',
    moduleName: 'People Management',
    moduleNumber: 'Module 3 (M3)',
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
    // ─────────────────────────────────────────────────────────────────────
    // LEARNING UNIT 1 — LO1: Manpower Planning
    // ─────────────────────────────────────────────────────────────────────
    {
      id: 'lu1',
      title:
        'LO1: Apply the principles of manpower planning to forecast, recruit, develop and control the manpower required to enable organisation to achieve its strategic goals.',
      shortTitle: 'Learning Unit 1',
      subSections: [
        // ── Knowledge (K7) ──────────────────────────────────────────────
        {
          id: 'lu1-k7',
          type: 'knowledge',
          label: 'Knowledge (K7)',
          performanceCriteriaTitle:
            'K7 — Principles of manpower planning: forecasting, workforce development, and manpower control in alignment with organisational strategy.',
          entries: [
            {
              id: 'lu1-k7-e1',
              prompts: [
                {
                  id: 'lu1-k7-p1',
                  promptText:
                    'Overview: What are the key principles of manpower planning in a social service organisation, and how do they align with Singapore\'s Service Workforce Framework?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'Manpower planning is a systematic process that ensures an organisation has the right number of people, with the right competencies, in the right roles, at the right time. In Singapore\'s social service sector, this process is guided by the Ministry of Manpower (MOM) and frameworks such as the Service Workforce Framework, which provides a structured approach to workforce development across the Planning, Developing, and Supporting lifecycle.',
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: '1. The Manpower Planning Cycle (Service Workforce Framework)',
                      description:
                        'The framework organises workforce management into three interconnected phases:',
                      bulletPoints: [
                        'Planning — Conduct a workforce analysis to identify current headcount, skills gaps, and future role requirements based on strategic goals. This includes establishing a headcount plan and succession map aligned to the organisation\'s 3–5 year strategy.',
                        'Developing — Invest in training, competency development, and career pathways. This is operationalised through Individual Development Plans (IDPs) tied to organisational needs.',
                        'Supporting — Implement retention strategies, staff welfare programmes, and performance management systems to maintain workforce sustainability. This phase encompasses equitable remuneration benchmarking and employee engagement surveys.',
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: '2. Quantitative and Qualitative Forecasting Methods',
                      description:
                        'Effective manpower forecasting uses both data-driven and judgement-based approaches:',
                      bulletPoints: [
                        'Ratio Analysis — Calculating the staffing ratio required per service output (e.g., 1 case manager per 30 active cases in a Family Service Centre).',
                        'Trend Analysis — Extrapolating future headcount requirements from historical growth data (e.g., 8% annual increase in elderly clients requiring a proportional increase in care staff).',
                        'Managerial Judgement — Incorporating planned service expansions, new programme launches, or regulatory changes (e.g., MSF\'s announcement of new ComCare funding requiring additional social work officers).',
                      ],
                    },
                  },
                  {
                    kind: 'info-table',
                    title: 'Manpower Planning: Key Components Summary',
                    headers: ['Component', 'What It Involves', 'Relevant SG Framework'],
                    rows: [
                      {
                        Component: 'Demand Forecasting',
                        'What It Involves':
                          'Project future staffing needs from strategic plans and service projections',
                        'Relevant SG Framework':
                          'MOM Manpower Planning Guidelines; MSF Sectoral Manpower Plan',
                      },
                      {
                        Component: 'Supply Analysis',
                        'What It Involves':
                          'Audit existing headcount, competencies, attrition rates, and succession readiness',
                        'Relevant SG Framework': 'Service Workforce Framework (Planning Phase)',
                      },
                      {
                        Component: 'Gap Analysis',
                        'What It Involves':
                          'Identify critical vacancies, skills shortfalls, and over/under-staffed areas',
                        'Relevant SG Framework': 'SkillsFuture SG — Skills Gap Mapping',
                      },
                      {
                        Component: 'Action Planning',
                        'What It Involves':
                          'Define hiring, redeployment, training, and succession strategies to close the gap',
                        'Relevant SG Framework': 'Fair Consideration Framework (FCF), MOM',
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },

        // ── Abilities (A10) ─────────────────────────────────────────────
        {
          id: 'lu1-a10',
          type: 'abilities',
          label: 'Abilities (A10)',
          performanceCriteriaTitle:
            'A10 — Support recruitment process in compliance with the Fair Consideration Framework and MOM guidelines.',
          entries: [
            {
              id: 'lu1-a10-e1',
              prompts: [
                {
                  id: 'lu1-a10-p1',
                  promptText:
                    "Question 1: How can Social Service Agencies (SSAs) leverage the 'Developing' and 'Supporting' manpower principles to reduce high turnover rates and enhance staff retention in a high-stress environment?",
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'Comprehensive Answer: To stabilize the workforce, organizations must move beyond basic administration and focus on the psychological and professional growth of their employees.',
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Implement Individual Development Plans (IDPs)',
                      description:
                        'Creating IDPs allows staff to upgrade skills through courses, on-the-job training (OJT), or coaching. This fosters a sense of "Lifelong Learning," which increases organizational attachment and self-sufficiency.',
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: "Prioritise 'Engaged Performance' and Belonging",
                      description:
                        'High turnover is often linked to a lack of emotional connection. Management should use Climate or Pulse surveys to gauge employee sentiment. By defining the "implicit contract"—the tools and resources provided to ensure job satisfaction—agencies can elicit more positive behaviors and enthusiasm.',
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Align with Tripartite Standards',
                      description:
                        "In addition to the Singapore Employment Act, agencies should adopt MOM's Tripartite Standard on Work-Life Harmony. This complements the 'Supporting the Manpower' principle by providing flexible work arrangements, which is crucial for preventing burnout among social workers and therapists.",
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Leadership Advocacy',
                      description:
                        "Leaders must be involved in workforce strategies to identify skill gaps and implement intervention measures like measurable KPIs. When leaders are seen advocating for their team's development, it strengthens the organizational culture.",
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Supporting the Recruitment Process — Scenario',
                      description:
                        'An NGO is struggling to recruit enough specialized therapists and volunteers to meet its community targets. Applying the "Improve Recruitment" and "Supporting Manpower" principles:',
                      bulletPoints: [
                        'Forecasting & Networking: All departments must forecast specific talent needs and tap into existing networks of passionate volunteers.',
                        'Incentives & Initiatives: Use external recruitment agencies and scholarships to attract specialized talent.',
                        'Defining the Implicit Contract: Clearly define how the organization will support "Engaged Performance" by offering tools and resources that elicit positive behaviors and job satisfaction.',
                      ],
                    },
                  },
                ],
              },
            },
            {
              id: 'lu1-a10-e2',
              prompts: [
                {
                  id: 'lu1-a10-p2',
                  promptText:
                    'Question 2: In a competitive market for specialized roles (e.g., Therapists, Psychologists), how can an NGO optimize its recruitment strategy using forecasting and strategic incentives?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'Comprehensive Answer: Recruiting for specialized roles requires a proactive rather than reactive approach, combining long-term planning with financial levers.',
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Strategic Forecasting and Networking',
                      description:
                        'Organizations must forecast specific talent needs well in advance. This includes tapping into existing networks of passionate volunteers who may already be aligned with the mission and could be upskilled for formal roles.',
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Utilize Strategic Financial Incentives',
                      description:
                        'To compete with the private sector, SSAs should utilize Scholarships and External Recruitment Agencies. In the Singapore context, this involves leveraging NCSS-administered scholarships (like the Social Service Scholarship) to build a pipeline of future professionals.',
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'SMART Recruitment Planning',
                      description:
                        'Recruitment goals should be Specific, Measurable, Achievable, Realistic, and Timely (SMART). For instance, instead of a vague goal to "hire more therapists," a SMART plan would aim to "recruit two occupational therapists within six months using a specialized healthcare headhunter."',
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Adherence to Fair Consideration Framework',
                      description:
                        "Agencies must ensure their recruitment process complies with MOM's Fair Consideration Framework (FCF), ensuring that Singaporeans are given fair consideration for job openings before turning to other options.",
                    },
                  },
                  {
                    kind: 'info-table',
                    title: 'Manpower Planning Principles',
                    headers: ['Principle', 'Actionable Strategy'],
                    rows: [
                      {
                        Principle: 'Forecasting',
                        'Actionable Strategy':
                          'Predicting future demand for human resources to prevent talent gaps.',
                      },
                      {
                        Principle: 'Balancing',
                        'Actionable Strategy':
                          'Initiating programs to meet demand (recruitment) or manage surplus (retirement).',
                      },
                      {
                        Principle: 'Engagement',
                        'Actionable Strategy':
                          'Communicating with stakeholders to understand reactions to sector changes.',
                      },
                    ],
                  },
                  {
                    kind: 'info-table',
                    title: 'SMART Recruitment Plan Template: Specialized Therapist',
                    headers: ['Criteria', 'Application for Therapist Recruitment'],
                    rows: [
                      {
                        Criteria: 'Specific',
                        'Application for Therapist Recruitment':
                          'Recruit two (2) specialized therapists to support the Early Intervention program.',
                      },
                      {
                        Criteria: 'Measurable',
                        'Application for Therapist Recruitment':
                          'Successfully shortlist at least five qualified candidates and conduct final-stage interviews.',
                      },
                      {
                        Criteria: 'Achievable',
                        'Application for Therapist Recruitment':
                          'Utilize external recruitment agencies and tap into existing networks of passionate volunteers or scholarship recipients.',
                      },
                      {
                        Criteria: 'Realistic',
                        'Application for Therapist Recruitment':
                          'Ensure the compensation and support tools align with the Singapore Social Service context and MSF policies.',
                      },
                      {
                        Criteria: 'Time-bound',
                        'Application for Therapist Recruitment':
                          'Complete the hiring process and have staff onboarded within four months to mitigate high turnover risks.',
                      },
                    ],
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Implementation & Support Actions',
                      description: 'Key actions to operationalize the recruitment plan:',
                      bulletPoints: [
                        'Recruitment Channels: Leverage external recruitment agencies and offer Scholarships to attract top-tier specialized talent.',
                        'Legal Compliance: Ensure all recruitment activities adhere to the Singapore Employment Act, the Charities Act 1994, and MSF Policies.',
                        'Support Initiatives: Clearly define the "Engaged Performance" tools provided (e.g., clinical supervision, specialized equipment) to ensure new hires feel supported and satisfied from day one.',
                        'Development Path: Present a clear Individual Development Plan (IDP) during the interview to show the candidate their path for lifelong learning and professional upgrading.',
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Risk Mitigation (Contingency Planning)',
                      description: 'Proactive measures to address potential recruitment shortfalls:',
                      bulletPoints: [
                        "Talent Shortfall: If external recruitment fails to meet the deadline, initiate an internal development program to upskill Social Work Associates through OJT or coaching.",
                        'Turnover Prevention: Conduct "Pulse surveys" shortly after onboarding to ensure the new therapist\'s "Sense of organizational attachment" is strong.',
                      ],
                    },
                  },
                ],
              },
            },
            {
              id: 'lu1-ref',
              prompts: [
                {
                  id: 'lu1-ref-p1',
                  promptText: 'References',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'bullet-list',
                    content: [
                      'Ministry of Manpower Singapore. (2024). Fair Consideration Framework (FCF). Retrieved from https://www.mom.gov.sg/employment-practices/fair-employment-practices/fair-consideration-framework',
                      'Ministry of Manpower Singapore. (2024). Tripartite Guidelines on Fair Employment Practices. Retrieved from https://www.mom.gov.sg',
                      'Global Social Services Workforce Alliance. (2020). Service Workforce Framework — Planning, Developing, and Supporting the Social Service Workforce.',
                      'Ministry of Social and Family Development. (2023). Social Service Sector Manpower Plan and HR Practices Guidelines. Retrieved from https://www.msf.gov.sg',
                      'SkillsFuture Singapore. (2023). Social Service Workforce Skills Qualifications (SSW) Framework.',
                    ],
                  },
                ],
              },
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────
    // LEARNING UNIT 2 — LO2: Staff Development
    // ─────────────────────────────────────────────────────────────────────
    {
      id: 'lu2',
      title:
        "LO2: Develop a Staff Development Plan for the employees or teams to align their professional development with the organisation's strategic goals.",
      shortTitle: 'Learning Unit 2',
      subSections: [
        // ── Knowledge (K6) ──────────────────────────────────────────────
        {
          id: 'lu2-k6',
          type: 'knowledge',
          label: 'Knowledge (K6)',
          performanceCriteriaTitle:
            "K6 — Organisation's staff development framework: Individual Development Plans, training needs analysis, and SMART goal alignment.",
          entries: [
            {
              id: 'lu2-k6-e1',
              prompts: [
                {
                  id: 'lu2-k6-p1',
                  promptText:
                    "Overview: What constitutes an effective Staff Development Framework in a social service context, and how does it link individual professional goals to organisational strategic objectives?",
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      "A Staff Development Framework (SDF) is a structured, organisation-wide system for identifying, planning, and executing learning interventions that build individual and team capability in direct support of the organisation's strategic direction. In Singapore's social service sector, the SDF is anchored in the Service Workforce Framework's Developing phase, and is informed by the Singapore Association of Social Workers (SASW) Code of Ethics, which identifies ongoing professional development as an ethical obligation.",
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: '1. Three Levels of Development Planning',
                      description: 'An effective SDF operates simultaneously at three levels:',
                      bulletPoints: [
                        "Individual Level — The Individual Development Plan (IDP) is the foundational tool. It captures each staff member's current competency level, career aspirations, identified skill gaps, and a time-bound plan to address those gaps through training, mentoring, job rotations, or stretch assignments.",
                        'Team Level — Team Development Plans aggregate individual IDPs to identify common learning needs that can be addressed through group training, team-based action learning, or cross-functional projects. This ensures teams develop collective capabilities (e.g., trauma-informed care skills across an entire casework team).',
                        "Organisational Level — The organisation-wide Training Needs Analysis (TNA) synthesises team plans and aligns them with the annual strategic plan. Budget allocation follows from this consolidated view, ensuring that learning investments are prioritised based on strategic impact.",
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: '2. The Individual Development Plan (IDP) — SMART Goals Framework',
                      description:
                        'Each IDP should contain development goals that are SMART:',
                      bulletPoints: [
                        'Specific — Define the exact competency to be built (e.g., "Complete the Advanced Case Management module from the Singapore University of Social Sciences").',
                        'Measurable — Establish a clear indicator of achievement (e.g., "Obtain Certificate of Completion and apply one new assessment framework in caseload within 30 days of course completion").',
                        "Achievable — Ensure the goal is realistic given the staff member's current workload and available development resources.",
                        "Relevant — Link the goal directly to a specific strategic objective (e.g., if the organisation is expanding its dementia care services, development goals should focus on gerontological social work competencies).",
                        'Time-bound — Set a clear deadline for completion and a mid-point check-in date.',
                      ],
                    },
                  },
                  {
                    kind: 'info-table',
                    title: 'Staff Development Framework: Individual vs Team vs Organisation',
                    headers: ['Level', 'Key Tool', 'Key Output', 'Strategic Link'],
                    rows: [
                      {
                        Level: 'Individual',
                        'Key Tool': 'Individual Development Plan (IDP)',
                        'Key Output': 'Personal competency growth roadmap with SMART goals',
                        'Strategic Link':
                          "Maps each staff member's development to a specific organisational strategic pillar",
                      },
                      {
                        Level: 'Team',
                        'Key Tool': 'Team Development Plan (TDP)',
                        'Key Output': 'Common skills built through group learning interventions',
                        'Strategic Link':
                          'Ensures teams collectively possess competencies required for new service mandates',
                      },
                      {
                        Level: 'Organisation',
                        'Key Tool': 'Training Needs Analysis (TNA)',
                        'Key Output': 'Annual training calendar and L&D budget allocation',
                        'Strategic Link':
                          'Prioritises organisation-wide learning investments based on strategic plan requirements',
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },

        // ── Abilities (A7) ──────────────────────────────────────────────
        {
          id: 'lu2-a7',
          type: 'abilities',
          label: 'Abilities (A7)',
          performanceCriteriaTitle:
            'A7 — Manage staff development framework: develop IDPs, facilitate TNA, and align staff development with organisational strategic goals.',
          entries: [
            {
              id: 'lu2-a7-e1',
              prompts: [
                {
                  id: 'lu2-a7-p1',
                  promptText:
                    "Question 1: How can periodic appraisals be designed to ensure that external training translates into actual office productivity and long-term 'Engaged Performance'?",
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'Comprehensive Answer: The goal of an appraisal is not just to check a box, but to bridge the gap between learning and doing through a "Professional Improvement Staff Development Plan (SDP)."',
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Define and Clarify Job Functions',
                      description:
                        "Use the appraisal process to better define specific job responsibilities that require the new skills learned in training. If productivity hasn't improved, the manager must analyze why the training isn't translating into work.",
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Implement Measurable KPIs',
                      description:
                        'Success must be tracked via intervention measures and measurable KPIs aligned with organizational goals. Example: Measuring the reduction in case backlog for a specific sub-team after training has been completed.',
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: "Foster 'Engaged Performance'",
                      description:
                        'High performance is sustained when employees feel they belong. This is achieved through an "implicit contract" where the agency provides enthusiasm-stimulating support and resources in exchange for organizational success.',
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Utilize Monitoring Tools',
                      description:
                        'Instead of once-a-year reviews, use Pulse Surveys, Climate Surveys, and Employee Opinion/Satisfaction (ESS) surveys to gauge the ongoing health and sentiment of the workforce.',
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Maintain Legal & Policy Compliance',
                      description:
                        'All appraisal activities must adhere to the Singapore Charities Act 1994 and the Singapore Employment Act. This ensures that performance management is fair and transparent.',
                    },
                  },
                  {
                    kind: 'info-table',
                    title: 'IDP Template — Section 1: Current Performance & Competency Gap',
                    headers: ['Competency / Skill', 'Current Proficiency Level', 'Gap / Area for Improvement'],
                    rows: [
                      {
                        'Competency / Skill': 'e.g., Case Management',
                        'Current Proficiency Level': 'Intermediate',
                        'Gap / Area for Improvement': 'To be improved — specialized pediatric care',
                      },
                    ],
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'IDP Template — Section 2 & 3: SMART Objectives and Action Plan',
                      description:
                        'Development objectives must be Specific, Measurable, Achievable, Realistic, and Time-bound. Select the appropriate delivery method:',
                      bulletPoints: [
                        'Formal Training: Enroll in external courses or workshops.',
                        'On-the-Job Training (OJT): Specific task-based learning within the daily workflow.',
                        'Projects: Assigning a specific project to stretch capabilities.',
                        'Coaching/Mentoring: Regular sessions with a senior leader or coach.',
                      ],
                    },
                  },
                  {
                    kind: 'info-table',
                    title: 'IDP Template — Section 4: Resource Support & Timeline',
                    headers: ['Action Item', 'Resources Needed (e.g., Scholarship, Tools)', 'Target Completion Date'],
                    rows: [
                      {
                        'Action Item': 'Enroll in specialist training programme',
                        'Resources Needed (e.g., Scholarship, Tools)': 'SSI Scholarship / L&D Budget',
                        'Target Completion Date': 'Q2 of current financial year',
                      },
                    ],
                  },
                  {
                    kind: 'checklist-table',
                    title: 'IDP Implementation Checklist for Managers',
                    sections: [
                      {
                        sectionTitle: 'Checklist Criteria',
                        items: [
                          {
                            label: 'Alignment',
                            requirement:
                              "Does the plan help achieve the organization's vision?",
                          },
                          {
                            label: 'Lifelong Learning',
                            requirement:
                              'Does it encourage self-sufficiency and organizational attachment?',
                          },
                          {
                            label: 'Legislation',
                            requirement:
                              'Does it follow the Employment Act and Charities Act 1994?',
                          },
                          {
                            label: 'KPI Integration',
                            requirement:
                              'Are there measurable markers for success?',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            {
              id: 'lu2-a7-e2',
              prompts: [
                {
                  id: 'lu2-a7-p2',
                  promptText:
                    "Question 2: Your organisation's strategic plan includes a goal to \"build leadership capacity at the executive level by 2027.\" A promising senior social worker, Ms Lim, has expressed interest in a future Team Lead role. How would you align her Individual Development Plan with this organisational strategic goal?",
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      "Comprehensive Answer: Aligning Ms Lim's IDP to the organisation's leadership pipeline strategy requires a deliberate succession development approach.",
                  },
                  {
                    kind: 'info-table',
                    title: "Ms Lim's Individual Development Plan — 18-Month Leadership Roadmap",
                    headers: ['Development Area', 'Specific Goal (SMART)', 'Timeline', 'Mode'],
                    rows: [
                      {
                        'Development Area': 'Leadership Foundations',
                        'Specific Goal (SMART)':
                          'Complete the SSI "Leadership Essentials for Social Service Managers" programme',
                        Timeline: 'Q1 of Year 1',
                        Mode: 'Formal Training',
                      },
                      {
                        'Development Area': 'Supervisory Practice',
                        'Specific Goal (SMART)':
                          'Co-supervise two junior social workers for one supervision cycle with documented feedback sessions',
                        Timeline: 'Q2–Q3 of Year 1',
                        Mode: 'On-the-Job Stretch Assignment',
                      },
                      {
                        'Development Area': 'Project Leadership',
                        'Specific Goal (SMART)':
                          'Lead a cross-functional team for the annual community outreach programme and present outcomes to management',
                        Timeline: 'Q4 of Year 1',
                        Mode: 'Action Learning Project',
                      },
                      {
                        'Development Area': 'HR & Administrative Competency',
                        'Specific Goal (SMART)':
                          'Shadow HR manager in two recruitment cycles and independently conduct one staff appraisal under guidance',
                        Timeline: 'Q1–Q2 of Year 2',
                        Mode: 'Job Shadowing + Mentoring',
                      },
                      {
                        'Development Area': 'Strategic Thinking',
                        'Specific Goal (SMART)':
                          'Contribute to the development of one component of the next annual service plan with documented input',
                        Timeline: 'Q3 of Year 2',
                        Mode: 'Strategic Assignment',
                      },
                    ],
                  },
                  {
                    kind: 'paragraph',
                    content:
                      "This IDP directly supports the organisation's 2027 leadership goal by building Ms Lim's competencies in a structured, evidence-based sequence — moving from foundational knowledge through supervised practice to independent leadership responsibility. The plan must be reviewed semi-annually and adjusted based on Ms Lim's progress, organisational changes, and emerging strategic priorities.",
                  },
                ],
              },
            },
            {
              id: 'lu2-ref',
              prompts: [
                {
                  id: 'lu2-ref-p1',
                  promptText: 'References',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'bullet-list',
                    content: [
                      'Social Service Institute (SSI) Singapore. (2024). Training Catalogue — Leadership and Management for Social Service Professionals. Retrieved from https://www.ssi.gov.sg',
                      'Singapore Association of Social Workers (SASW). (2020). Code of Ethics. Singapore: SASW.',
                      'Ministry of Social and Family Development. (2023). Social Service Workforce HR Practices Guidelines. Singapore: MSF.',
                      'Global Social Services Workforce Alliance. (2020). Service Workforce Framework — Developing Phase: Individual Development Planning.',
                      'SkillsFuture Singapore. (2024). Social Service Workforce Skills Qualifications (SSW) Framework — Competency Standards.',
                    ],
                  },
                ],
              },
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────
    // LEARNING UNIT 3 — LO3: Performance Management & Disciplinary
    // ─────────────────────────────────────────────────────────────────────
    {
      id: 'lu3',
      title:
        'LO3: Apply effective motivation techniques, mediation principles, conflict management methods, counselling skills and negotiation techniques to manage the performance of their people so that the strategic goals of the organisation can be achieved.',
      shortTitle: 'Learning Unit 3',
      subSections: [
        // ── Knowledge (K1 & K9) ─────────────────────────────────────────
        {
          id: 'lu3-k1k9',
          type: 'knowledge',
          label: 'Knowledge (K1 & K9)',
          performanceCriteriaTitle:
            'K1 — Department and organisational disciplinary measures. K9 — Staff disciplinary framework, policies, and guidelines.',
          entries: [
            {
              id: 'lu3-k1k9-e1',
              prompts: [
                {
                  id: 'lu3-k1k9-p1',
                  promptText:
                    "Overview: What is the organisational disciplinary framework in Singapore's social service sector, and how do counselling, conflict management, and mediation principles support effective people performance management?",
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'Performance management in social service organisations requires a balanced approach: holding staff accountable to standards while applying supportive interventions that address underlying behavioural or contextual factors. The legal foundation for disciplinary action in Singapore is the Employment Act (Chapter 91A), which governs all PMEs (Professionals, Managers and Executives) and non-PME employees, and sets out the procedural rights of employees during disciplinary investigations.',
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: '1. The Progressive Discipline Framework',
                      description:
                        'Most Singapore social service organisations adopt a progressive discipline approach, structured in escalating stages:',
                      bulletPoints: [
                        "Verbal Warning — Issued informally for minor, first-time infractions (e.g., persistent tardiness). Documented in a supervisor's case note but not placed on the employee's formal file.",
                        'Written Warning — Issued for a repeat minor infraction or a first-time moderate offence (e.g., failure to maintain confidentiality in a non-critical instance). Placed on the employee\'s personal file with a defined improvement timeline.',
                        'Final Written Warning — Issued when prior warnings have not resulted in improvement, or for a serious first-time offence. May include suspension without pay as permitted under the Employment Act, Section 35.',
                        'Termination — Reserved for gross misconduct (e.g., physical abuse of a client, theft, fraud, or a fundamental breach of the SASW Code of Ethics). Requires a formal inquiry prior to dismissal.',
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: '2. The Inquiry Process — Natural Justice Principles',
                      description:
                        'Before any disciplinary action beyond a verbal warning, the organisation must uphold the principles of Natural Justice:',
                      bulletPoints: [
                        'Right to be Heard (Audi Alteram Partem) — The employee must be given an opportunity to present their side of the case. A Domestic Inquiry (DI) is conducted for serious matters.',
                        'Rule Against Bias (Nemo Judex in Causa Sua) — The inquiry panel must not include the complainant or anyone with a conflict of interest.',
                        'Timely Notice — The employee must receive written notice of the specific allegations, the date of the inquiry, and their right to be accompanied by a fellow employee (not an external lawyer) during the hearing.',
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: '3. Counselling and Mediation as Performance Interventions',
                      description:
                        'Prior to and alongside formal discipline, managers must deploy supportive interventions:',
                      bulletPoints: [
                        'Supervisory Counselling — A structured, confidential conversation using active listening and open-ended questioning to understand the root cause of a performance or behavioural issue (e.g., burnout, personal stress, role ambiguity). The outcome is a documented Counselling Action Plan.',
                        'Peer Mediation — Where interpersonal conflict between colleagues is the source of a performance issue, a neutral mediator (e.g., HR manager or a trained peer mediator) facilitates a structured dialogue using the Interest-Based Relational (IBR) approach, focusing on underlying needs rather than stated positions.',
                        "Employee Assistance Programme (EAP) — Singapore VWOs are encouraged by MSF to have an EAP referral pathway for staff dealing with personal mental health, financial, or family issues that impact work performance.",
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },

        // ── Abilities (A1) ──────────────────────────────────────────────
        {
          id: 'lu3-a1',
          type: 'abilities',
          label: 'Abilities (A1)',
          performanceCriteriaTitle:
            'A1 — Address staff disciplinary issues in compliance with the Employment Act and organisational disciplinary policy.',
          entries: [
            {
              id: 'lu3-a1-e1',
              prompts: [
                {
                  id: 'lu3-a1-p1',
                  promptText:
                    "Question 1: A staff member is suspected of a serious breach (e.g., mishandling client or donor data). How can a Social Service Agency (SSA) ensure its disciplinary process adheres to the principles of 'Due Inquiry' and 'Fairness' as mandated by Singapore law and sectoral standards?",
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'Comprehensive Answer: To ensure fairness and legal compliance, an agency must move beyond mere punishment and follow a structured, impartial process.',
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: "Conduct a 'Due Inquiry'",
                      description:
                        'Under the Singapore Employment Act, an employer must conduct a due inquiry before dismissing an employee for misconduct. This involves:',
                      bulletPoints: [
                        'Notification: Clearly informing the employee of the specific allegations and evidence against them.',
                        'Right of Reply: Giving the employee a reasonable opportunity to explain their version of events and present their case.',
                        'Impartiality: Appointing a person to hear the inquiry who is not in a position that suggests bias (e.g., someone not directly involved in the incident).',
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Establish Clear Policies and Guidelines',
                      description:
                        'The agency must have clearly defined policies that align with the Singapore Charities Act 1994. These guidelines ensure the employee is aware of their legal and ethical obligations from the start.',
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Leverage Board Oversight',
                      description:
                        'The Governing Board has a duty to ensure the organization remains compliant with legal risks. Their oversight ensures the disciplinary framework is robust and that decisions are not arbitrary.',
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Maintain Records',
                      description:
                        'Proper documentation of the investigation and the inquiry is essential to prove that a fair process was followed, which protects the agency against future wrongful dismissal claims.',
                    },
                  },
                ],
              },
            },
            {
              id: 'lu3-a1-e2',
              prompts: [
                {
                  id: 'lu3-a1-p2',
                  promptText:
                    'Question 2: How can supervisors use mediation principles and motivation techniques to resolve team conflicts or performance issues before they escalate into formal disciplinary matters?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'Comprehensive Answer: Effective leadership in social services often involves "pre-disciplinary" interventions that address the root cause of behavior.',
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Apply Facilitative Mediation Principles',
                      description:
                        "Instead of imposing a solution, supervisors should act as neutral mediators to help parties develop their own mutually acceptable settlements. This focuses on the parties' real interests rather than their rigid \"positions,\" which helps maintain long-term working relationships.",
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Implement Motivation Strategies',
                      description: 'Three evidence-based motivation approaches for social service settings:',
                      bulletPoints: [
                        'Mentorship Programs: Pair a struggling staff member with a Senior Social Service professional who can model empathy and professional behavior.',
                        'Set Intermittent Goals (Small Wins): Breaking large, overwhelming targets into "smaller, specific, and measurable goals" provides "small wins" that keep staff motivated and focused.',
                        'Incentive Programs Linked to Training: Link rewards (e.g., vouchers or advanced training) to the successful completion of development goals to encourage positive behavioral shifts.',
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: "Distinguish Misconduct from Performance",
                      description:
                        "Supervisors must identify if an issue is a 'won't do' (conduct/culpability) or a 'can't do' (capability/skill gap):",
                      bulletPoints: [
                        "Performance issues should be handled through a supportive Staff Development Plan (SDP) or training.",
                        "Conduct issues should be handled via the disciplinary policy.",
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Use Past Appraisals as Context',
                      description:
                        "Before deciding on a disciplinary action, review the staff member's past Performance Appraisals and Individual Development Plans (IDP) to determine if the behavior is an isolated incident or a recurring pattern that requires a more serious intervention.",
                    },
                  },
                ],
              },
            },
            {
              id: 'lu3-ref',
              prompts: [
                {
                  id: 'lu3-ref-p1',
                  promptText: 'References',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'bullet-list',
                    content: [
                      'Employment Act (Chapter 91A), Singapore. Retrieved from https://sso.agc.gov.sg',
                      'Personal Data Protection Commission Singapore. (2023). PDPA Guide for Organisations. Retrieved from https://www.pdpc.gov.sg',
                      'Singapore Association of Social Workers (SASW). (2020). Code of Ethics — Section on Confidentiality and Professional Conduct. Singapore: SASW.',
                      'Ministry of Manpower Singapore. (2024). Tripartite Guidelines on Misconduct and Dismissal. Retrieved from https://www.mom.gov.sg',
                      'Ministry of Social and Family Development. (2023). Human Resource Practices for Social Service Agencies. Singapore: MSF.',
                      'Fisher, R., Ury, W., & Patton, B. (2011). Getting to Yes: Negotiating Agreement Without Giving In (3rd ed.). Penguin Books.',
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
