import type { JournalModule } from '@/types/journal';

export const sscCfc4047: JournalModule = {
  moduleId: 'ssc-cfc-4047',
  moduleCode: 'SSC-CFC-4047-1.1',
  moduleName: 'Volunteer Programme Management',
  moduleNumber: 'M4',
  theme: {
    primary: 'from-emerald-600 to-teal-500',
    accent: 'emerald',
    knowledgeBadgeClass: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
    abilitiesBadgeClass: 'bg-teal-100 text-teal-800 border border-teal-200',
    luHeaderBgClass: 'bg-gradient-to-r from-slate-800 via-emerald-900 to-teal-800',
    luIconClass: 'text-emerald-300',
    promptCardClass: 'bg-emerald-50 border border-emerald-200',
    reflectionCardClass: 'bg-teal-50 border border-teal-200',
    sidebarActiveClass: 'bg-emerald-100 text-emerald-800',
    buttonPrimaryClass:
      'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white',
    coverTitleClass:
      'bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent',
  },
  coverSheet: {
    institution: 'Hua Mei Training Academy',
    program: 'Social Service — Clinical Attachment',
    moduleCode: 'SSC-CFC-4047-1.1',
    moduleName: 'Volunteer Programme Management',
    moduleNumber: 'Module 4 (M4)',
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
    // LEARNING UNIT 1 — LO1: Volunteer Management Strategies, Policies & Procedures
    // ─────────────────────────────────────────────────────────────────────
    {
      id: 'lu1',
      title:
        'LO1: Adopt the best practices in volunteer management to develop volunteer management strategies, policies and procedures in consultation with the management to meet the strategic goals of the organisation.',
      shortTitle: 'Learning Unit 1',
      subSections: [
        // ── Knowledge (K1) ──────────────────────────────────────────────
        {
          id: 'lu1-k1',
          type: 'knowledge',
          label: 'Knowledge (K1)',
          performanceCriteriaTitle:
            'K1 — Best practices in volunteer management: screening, recruitment needs analysis, matching, recognition, and organisational alignment.',
          entries: [
            {
              id: 'lu1-k1-e1',
              prompts: [
                {
                  id: 'lu1-k1-p1',
                  promptText:
                    'Do you do screening of volunteers and matching them to organisational tasks?',
                },
                {
                  id: 'lu1-k1-p2',
                  promptText:
                    'Does your center perform Recruitment Needs Analysis (RNA)?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'Best practices in volunteer management encompass a structured lifecycle from recruitment to recognition. Organisations that adopt a systematic approach to screening, matching, and retaining volunteers are better positioned to align volunteer contributions with strategic goals. In Singapore\'s social service sector, this is operationalised through structured frameworks endorsed by the National Volunteer & Philanthropy Centre (NVPC) and the Ministry of Social and Family Development (MSF).',
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: '1. Volunteer Screening and Skills Matching',
                      description:
                        'Screening of potential volunteers is a critical gatekeeping function that surfaces candidates whose values, skills, and motivations align with the organisation\'s vision, mission, and goals. The process typically involves:',
                      bulletPoints: [
                        'Application Review — Assessing stated interests, availability, and prior volunteering experience against programme requirements.',
                        'Interview or Orientation Session — A face-to-face or virtual conversation to gauge interpersonal fit, commitment level, and understanding of the organisation\'s client population.',
                        'Reference or Background Checks — Particularly important for roles involving vulnerable groups (e.g., elderly, children with disabilities), in compliance with MSF\'s Volunteer Management Guidelines.',
                        'Skills-Interest Matching — Selected volunteers are mapped to organisational tasks according to their skill sets, areas of expertise, interests, and aspirations to maximise both volunteer satisfaction and programme effectiveness.',
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: '2. Recruitment Needs Analysis (RNA)',
                      description:
                        'A Recruitment Needs Analysis (RNA) is a systematic process of identifying exactly what volunteer roles are required to fulfil the organisation\'s vision, mission, and goals. It involves:',
                      bulletPoints: [
                        'Stakeholder Consultation — Asking management and staff what they see as the organisation\'s current and projected volunteer needs. These responses are collated to arrive at a prioritised list of volunteer roles.',
                        'Volunteer Job Description Development — Each identified role should be translated into a clear Volunteer Job Description (VJD). A good VJD explains the role thoroughly, outlines the skills needed to perform the tasks successfully, and specifies the type of training and support the volunteer will receive.',
                        'Gap Analysis — Comparing the current volunteer profile against identified needs to determine where recruitment effort should be concentrated.',
                        'Priority Setting — Not all roles are equally urgent; the RNA helps the organisation focus its outreach on roles that are critical to programme delivery.',
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: '3. Volunteer Recognition and Organisational Transparency',
                      description:
                        'Recognising volunteers\' contributions — whether through formal or informal channels — is essential for retention and sustained engagement. Effective recognition practices include:',
                      bulletPoints: [
                        'Formal Recognition — Plaques, official awards ceremonies, or certificates of appreciation presented at key milestones.',
                        'Informal Recognition — Simple thank-you notes, public acknowledgement at team meetings, or spotlight features in newsletters.',
                        'Community Building — Quarterly or semi-annual events (e.g., volunteer appreciation dinners or potlucks) that foster a sense of belonging and shared purpose.',
                        'Transparency and Inclusion — Sharing the organisation\'s mission, structure, and programme goals openly with volunteers. Including volunteers in relevant staff meetings builds trust and reinforces their sense of value within the organisation.',
                      ],
                    },
                  },
                  {
                    kind: 'info-table',
                    title: 'Volunteer Management Best Practices: Summary',
                    headers: ['Practice', 'Key Action', 'Outcome'],
                    rows: [
                      {
                        Practice: 'Volunteer Screening',
                        'Key Action':
                          'Application review, interview, background checks',
                        Outcome:
                          'Ensures volunteer-organisation value alignment and client safety',
                      },
                      {
                        Practice: 'Recruitment Needs Analysis (RNA)',
                        'Key Action':
                          'Stakeholder consultation, role prioritisation, VJD development',
                        Outcome:
                          'Targeted recruitment that fills critical programme gaps',
                      },
                      {
                        Practice: 'Skills-Interest Matching',
                        'Key Action':
                          'Map volunteers to roles by skill set, interest, and aspiration',
                        Outcome:
                          'Higher volunteer satisfaction and longer retention',
                      },
                      {
                        Practice: 'Formal Recognition',
                        'Key Action':
                          'Awards, certificates, appreciation events',
                        Outcome:
                          'Volunteers feel valued; reinforces motivation and commitment',
                      },
                      {
                        Practice: 'Organisational Transparency',
                        'Key Action':
                          'Share goals, include volunteers in relevant meetings',
                        Outcome:
                          'Builds trust and deepens volunteers\' sense of organisational belonging',
                      },
                    ],
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
                      'National Volunteer & Philanthropy Centre (NVPC). (2023). Volunteer Management Toolkit. Singapore: NVPC. Retrieved from https://www.nvpc.org.sg',
                      'Ministry of Social and Family Development. (2022). Volunteer Management Guidelines for Social Service Agencies. Singapore: MSF.',
                      'Volunteer Service Overseas (VSO). (2020). Effective Volunteer Management: Recruitment Needs Analysis Framework.',
                      'SkillsFuture Singapore. (2024). Community & Social Services Workforce Skills Qualifications (WSQ) Framework — Volunteer Management Competencies.',
                      'Singapore Centre for Social Enterprise (raiSE). (2023). Volunteer Engagement Practices in the Social Service Sector.',
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
    // LEARNING UNIT 2 — LO2: Volunteer Management Programme (Deploy, Orientate, Train)
    // ─────────────────────────────────────────────────────────────────────
    {
      id: 'lu2',
      title:
        'LO2: Develop a Volunteer Management Programme to deploy, orientate and train volunteers to achieve organisational goals with minimal risks.',
      shortTitle: 'Learning Unit 2',
      subSections: [
        // ── Abilities (A3 & A9) ─────────────────────────────────────────
        {
          id: 'lu2-a3a9',
          type: 'abilities',
          label: 'Abilities (A3 & A9)',
          performanceCriteriaTitle:
            'A3 — Deploy volunteers according to their interests and abilities and programme needs. A9 — Identify synergies across programmes and departments to maximise the values and effectiveness of volunteer programmes.',
          entries: [
            {
              id: 'lu2-a3-e1',
              prompts: [
                {
                  id: 'lu2-a3-p1',
                  promptText:
                    'A3: How does your center deploy volunteers according to their skillsets and interests to fulfill program needs?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'Comprehensive Answer: Effective volunteer deployment is not a one-size-fits-all exercise. It requires a structured, data-driven approach that matches the individual volunteer\'s profile — skills, interests, availability, and aspirations — to specific programme requirements. Organisations that invest in this matching process consistently report higher volunteer satisfaction and longer-term retention.',
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Comprehensive Needs Analysis and Volunteer Orientation',
                      description:
                        'Volunteer deployment begins with a comprehensive needs analysis conducted in consultation with programme managers and key stakeholders. This analysis identifies:',
                      bulletPoints: [
                        'Programme Gaps — Specific tasks and roles that require volunteer support, categorised by skill level and time commitment.',
                        'Volunteer Profiles — Following a structured orientation process, each volunteer\'s skills, interests, and availability are documented in a Volunteer Profile Record.',
                        'Targeted Training — Where skill gaps exist between a volunteer\'s current competencies and programme requirements, targeted pre-deployment training is provided. Training is designed to be short, practical, and directly applicable to the role.',
                        'Deployment Decision — Deployment decisions are made by the Volunteer Coordinator in consultation with programme supervisors, ensuring both the volunteer\'s aspirations and the programme\'s operational needs are considered.',
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Retention Through Alignment: The Evidence Base',
                      description:
                        'Research consistently demonstrates that volunteers who perform organisational tasks aligned to their skill sets, interests, and aspirations have significantly higher retention rates over the medium to long term. Key implications for practice:',
                      bulletPoints: [
                        'Role Enrichment — Periodically reviewing and enriching volunteer roles to incorporate new responsibilities that match the volunteer\'s evolving interests prevents stagnation and disengagement.',
                        'Regular Check-ins — Scheduling monthly or quarterly one-to-one conversations between volunteers and their supervisors allows for real-time recalibration of role fit.',
                        'Volunteer Feedback Loops — Anonymous satisfaction surveys and exit interviews provide data to continuously improve the deployment and matching process.',
                      ],
                    },
                  },
                  {
                    kind: 'info-table',
                    title: 'Volunteer Deployment Process: Step-by-Step',
                    headers: ['Step', 'Action', 'Responsible Party'],
                    rows: [
                      {
                        Step: '1. Needs Analysis',
                        Action: 'Identify programme gaps and required volunteer roles',
                        'Responsible Party': 'Programme Manager & Volunteer Coordinator',
                      },
                      {
                        Step: '2. Volunteer Profiling',
                        Action: 'Document skills, interests, availability after orientation',
                        'Responsible Party': 'Volunteer Coordinator',
                      },
                      {
                        Step: '3. Targeted Training',
                        Action: 'Provide role-specific pre-deployment training',
                        'Responsible Party': 'Programme Supervisor & L&D Team',
                      },
                      {
                        Step: '4. Deployment',
                        Action: 'Assign volunteers to roles matching their profile and programme needs',
                        'Responsible Party': 'Volunteer Coordinator & Programme Supervisor',
                      },
                      {
                        Step: '5. Review',
                        Action: 'Conduct regular check-ins and satisfaction surveys',
                        'Responsible Party': 'Volunteer Coordinator',
                      },
                    ],
                  },
                ],
              },
            },
            {
              id: 'lu2-a9-e1',
              prompts: [
                {
                  id: 'lu2-a9-p1',
                  promptText:
                    'A9: Do the various departments within the center cooperate on volunteer programs to optimize and maximize the effectiveness of volunteer programs?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'Comprehensive Answer: Inter-departmental cooperation is a critical enabler of volunteer programme effectiveness. Siloed volunteer management — where each department manages its own volunteers independently — leads to duplication of effort, inconsistent volunteer experiences, and missed opportunities for cross-programme synergies. A whole-of-organisation approach maximises the value generated from each volunteer engagement.',
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Inter-Departmental Cooperation Mechanisms',
                      description:
                        'To optimise volunteer programme effectiveness across departments, organisations should establish structured cooperation mechanisms:',
                      bulletPoints: [
                        'Cross-Departmental Volunteer Management Committee — A standing committee comprising representatives from each programme area, chaired by the Volunteer Coordinator, meets regularly to share volunteer resources, identify synergies, and resolve deployment conflicts.',
                        'Shared Volunteer Database — A centralised volunteer management system (e.g., VolunteerHub or bespoke CRM) accessible to all departments ensures no duplication of volunteer records and enables cross-programme deployment.',
                        'Unified Volunteer Orientation — A single organisational orientation programme for all incoming volunteers, regardless of which department they are assigned to, ensures consistent messaging about the organisation\'s mission, values, and volunteer code of conduct.',
                        'Cross-Deployment Opportunities — Volunteers recruited for one programme are made aware of other volunteer opportunities within the organisation, widening their impact and deepening their organisational connection.',
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Joint Training: A Model for Cost Efficiency and Standardisation',
                      description:
                        'One concrete model of inter-departmental synergy is the conduct of joint training sessions. For example, Basic Life Support (BLS) and Workplace Safety & Health (WSH) training can be delivered to volunteers from multiple departments simultaneously, on-site. This approach delivers multiple benefits:',
                      bulletPoints: [
                        'Cost Reduction — Shared training costs are distributed across departments, reducing the per-volunteer training expenditure for each programme.',
                        'Standardisation — Consistent instructors deliver a uniform standard of training to all volunteers, regardless of department, eliminating variations in competency.',
                        'Efficiency — Volunteers from multiple departments are trained and ready for deployment within the same timeframe, preventing bottlenecks caused by staggered training schedules.',
                        'Community Building — Joint training creates opportunities for volunteers from different departments to connect and build relationships, strengthening the overall volunteer community.',
                      ],
                    },
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
                      'National Volunteer & Philanthropy Centre (NVPC). (2023). State of Giving Report: Volunteerism in Singapore. Singapore: NVPC.',
                      'Ministry of Social and Family Development. (2022). Guidelines on Volunteer Management for Voluntary Welfare Organisations (VWOs). Singapore: MSF.',
                      'Points of Light Foundation. (2020). Volunteer Deployment and Retention: Evidence-Based Practices for Nonprofit Organisations.',
                      'Corporation for National and Community Service (CNCS). (2021). Volunteer Management Capacity Study: Synergies Across Programmes and Departments.',
                      'VolunteerHub. (2024). Best Practices in Centralised Volunteer Management Systems. Retrieved from https://www.volunteerhub.com',
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
    // LEARNING UNIT 3 — LO3: Volunteer Leadership Framework & Pathways
    // ─────────────────────────────────────────────────────────────────────
    {
      id: 'lu3',
      title:
        'LO3: Develop a feasible Volunteer Leadership Framework and pathways to identify and train volunteer leaders to lead community initiatives and activities.',
      shortTitle: 'Learning Unit 3',
      subSections: [
        // ── Abilities (A8) ──────────────────────────────────────────────
        {
          id: 'lu3-a8',
          type: 'abilities',
          label: 'Abilities (A8)',
          performanceCriteriaTitle:
            'A8 — Develop the framework and pathways for volunteer leadership.',
          entries: [
            {
              id: 'lu3-a8-e1',
              prompts: [
                {
                  id: 'lu3-a8-p1',
                  promptText:
                    'Does your center have a Volunteer Leadership Development Framework?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'Comprehensive Answer: A Volunteer Leadership Development Framework is a structured system that identifies, develops, and supports volunteers who demonstrate the potential and aspiration to lead community initiatives and activities. Without a deliberate framework, leadership development is left to chance — resulting in an organisation that is perpetually dependent on staff for coordination rather than cultivating a self-sustaining volunteer leadership pipeline.',
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Recommended Volunteer Leadership Framework: Core Principle',
                      description:
                        'At the heart of the framework is the relationship between the team leader and team members. This is a two-way, trusting, productive working relationship focused on achieving the organisation\'s goals with each person working to their full potential. The framework is structured as a central hub with six interconnected pillars of leadership competency, underpinned by three effectiveness factors: Organisation Culture, Designed Leadership, and Organisation Design.',
                    },
                  },
                  {
                    kind: 'info-table',
                    title: 'Volunteer Leadership Framework: Six Competency Pillars',
                    headers: ['Pillar', 'Key Competencies'],
                    rows: [
                      {
                        Pillar: 'Lead Strategically',
                        'Key Competencies':
                          'Think strategically, Create a vision, Set goals & objectives, Think analytically to solve problems',
                      },
                      {
                        Pillar: 'Lead People',
                        'Key Competencies':
                          'Negotiation, Delegation, Supervision, Conflict Resolution',
                      },
                      {
                        Pillar: 'Lead Change',
                        'Key Competencies':
                          'Thinking creatively, Foster Innovation, Managing Change, Influencing others',
                      },
                      {
                        Pillar: 'Lead Projects',
                        'Key Competencies':
                          'Project Management, Project Planning, Offer Quality Services to Clients',
                      },
                      {
                        Pillar: 'Skilled Communicator',
                        'Key Competencies':
                          'Positive communication, Giving and Receiving Feedback, Assertiveness, Listening',
                      },
                      {
                        Pillar: 'Manage Self',
                        'Key Competencies':
                          'Emotional Intelligence, Understanding Self and Others, Managing time and stress',
                      },
                    ],
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Volunteer Leadership Pathway: Six Steps',
                      description:
                        'The pathway provides a structured progression for volunteers from initial engagement through to strategic leadership. Steps in the Volunteer Leadership Pathway include:',
                      bulletPoints: [
                        'Step 1 — Introduce leadership opportunities to new volunteers to prepare them for their future roles.',
                        'Step 2 — Managers and supervisors observe volunteers to identify those who demonstrate potential for leadership.',
                        'Step 3 — Volunteers assess their own leadership skills to identify training opportunities and close skill gaps.',
                        'Step 4 — The organisation selects identified leaders and provides targeted training for their roles.',
                        'Step 5 — Create structured opportunities for trained volunteer leaders to lead volunteer-led initiatives and community activities.',
                        'Step 6 — Appraise volunteer leaders and provide structured feedback to continuously improve their leadership skills.',
                      ],
                    },
                  },
                  {
                    kind: 'mermaid-diagram',
                    title: 'Volunteer Leadership Pathway: Three-Level Progression',
                    code: `flowchart LR
  A["🌱 Level 1\\nNew Volunteer\\n───────────\\nOrientation\\nInduction\\nJob Roles & Description\\n───────────\\nAction:\\nIntroduce Leadership\\nDevelopment Opportunity"] -->|"Preparing for\\nLeadership"| B["👥 Level 2\\nTeam Member\\n───────────\\nTeamwork\\nCollaboration\\nCare Services\\nManage Self\\nCommunication\\n───────────\\nAction:\\nPreparing for Leadership"] -->|"Building Strategic\\nMuscles"| C["🏆 Level 3\\nVolunteer Leader\\n───────────\\nLead Strategically\\nLead People\\nLead Change\\nLead Projects\\n───────────\\nAction:\\nBuild Strategic Muscles\\nSharpen Skills"]
  style A fill:#d1fae5,stroke:#059669,color:#064e3b
  style B fill:#a7f3d0,stroke:#047857,color:#064e3b
  style C fill:#6ee7b7,stroke:#065f46,color:#064e3b`,
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Effectiveness Factors',
                      description:
                        'The effectiveness of the Volunteer Leadership Framework relies on three organisational factors that must be intentionally cultivated:',
                      bulletPoints: [
                        'Organisation Culture — A culture that values and celebrates volunteer leadership, where paid staff actively mentor and create space for volunteers to lead.',
                        'Designed Leadership — Deliberate, structured leadership development activities (training, stretch assignments, mentoring) rather than ad-hoc or accidental leadership growth.',
                        'Organisation Design — Organisational structures and role designs that create genuine leadership opportunities for volunteers, such as Team Leader roles within volunteer programmes.',
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },

        // ── Knowledge (K6) ──────────────────────────────────────────────
        {
          id: 'lu3-k6',
          type: 'knowledge',
          label: 'Knowledge (K6)',
          performanceCriteriaTitle:
            'K6 — Strategies and best practices for developing a volunteer leadership network.',
          entries: [
            {
              id: 'lu3-k6-e1',
              prompts: [
                {
                  id: 'lu3-k6-p1',
                  promptText:
                    'What best practices does your center adopt for developing a Volunteer Leadership Network (VLN)?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'A Volunteer Leadership Network (VLN) is a structured community of practised volunteer leaders who connect, collaborate, and support each other in leading community initiatives. Unlike informal peer groups, a VLN is deliberately designed with a clear purpose, governance structure, and development agenda. Organisations that invest in building a VLN create a self-sustaining leadership ecosystem that reduces dependence on paid staff for programme coordination and deepens volunteer ownership of community outcomes.',
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: '1. Outline the Purpose and Goals of the VLN',
                      description:
                        'A VLN must be anchored by clearly defined, well-articulated goals that are acknowledged and accepted by every member. Key considerations when establishing the purpose:',
                      bulletPoints: [
                        'Mission Alignment — The VLN\'s goals must directly support the organisation\'s volunteer programme mission. Members who join the VLN should be like-minded leaders who share similar aspirations and a commitment to the collective purpose.',
                        'Member Buy-In — Goals should be co-created with founding members rather than imposed top-down. When members shape the VLN\'s direction, they are more invested in its success.',
                        'Scope Definition — Clearly define what the VLN will and will not do. For example: "The VLN focuses on peer learning and coordinating volunteer-led community events; it does not replace the organisation\'s Volunteer Management Committee."',
                        'Measurable Outcomes — Establish metrics for VLN effectiveness (e.g., number of volunteer-led initiatives supported per year, member engagement rate, leadership skills progression).',
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: '2. Give the VLN a Structure',
                      description:
                        'A networking group needs a solid foundational structure to sustain its operations and credibility. Key structural decisions include:',
                      bulletPoints: [
                        'Identity — Does the VLN need a distinct name or brand identity? A named network (e.g., "Community Leaders Circle") gives members a shared identity and signals the group\'s seriousness and longevity.',
                        'Formality Level — Is the VLN a formal sub-committee of the organisation with a constitution, or an informal peer learning community? The level of formality should match the organisation\'s culture and the members\' preferences.',
                        'Leadership and Chair — Who will chair or facilitate the VLN? Rotating facilitation among members develops leadership skills and prevents over-reliance on a single leader.',
                        'Meeting Frequency and Format — How often does the VLN gather, and in what format (in-person, hybrid, online)? A regular, predictable meeting schedule is essential for building momentum and habit.',
                        'Code of Conduct — Establishing norms for participation, confidentiality, respectful dialogue, and decision-making ensures the group remains psychologically safe and productive.',
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: '3. Sustain and Grow the VLN',
                      description:
                        'Beyond establishing the VLN, organisations must actively invest in its sustainability:',
                      bulletPoints: [
                        'Onboarding Process — When new volunteer leaders are admitted, a structured onboarding (buddy system, orientation to the VLN\'s norms and goals) helps them integrate quickly.',
                        'Skill-Building Activities — Regularly incorporate learning sessions, guest speakers, or site visits into VLN meetings to keep members\' skills current and engagement high.',
                        'Celebrating Milestones — Recognise and celebrate the VLN\'s achievements publicly within the organisation to reinforce the value of volunteer leadership and attract new candidates.',
                        'Annual Review — Conduct an annual review of the VLN\'s purpose, structure, and effectiveness, inviting member feedback to ensure the network evolves in line with the organisation\'s changing needs.',
                      ],
                    },
                  },
                  {
                    kind: 'info-table',
                    title: 'VLN Development Checklist',
                    headers: ['Element', 'Key Question', 'Best Practice'],
                    rows: [
                      {
                        Element: 'Purpose',
                        'Key Question': 'What is the VLN for?',
                        'Best Practice':
                          'Co-create goals with founding members; align to organisational volunteer mission',
                      },
                      {
                        Element: 'Identity',
                        'Key Question': 'Does the VLN have a name?',
                        'Best Practice':
                          'Name and brand the VLN to give members a shared identity and signal longevity',
                      },
                      {
                        Element: 'Governance',
                        'Key Question': 'Who chairs and facilitates?',
                        'Best Practice':
                          'Rotate facilitation among members to develop distributed leadership',
                      },
                      {
                        Element: 'Cadence',
                        'Key Question': 'How often do they meet?',
                        'Best Practice':
                          'Monthly or quarterly meetings with a consistent, predictable schedule',
                      },
                      {
                        Element: 'Code of Conduct',
                        'Key Question': 'What are the norms?',
                        'Best Practice':
                          'Document norms for participation, confidentiality, and respectful dialogue',
                      },
                      {
                        Element: 'Sustainability',
                        'Key Question': 'How is the VLN sustained?',
                        'Best Practice':
                          'Annual review, skill-building activities, and public recognition of VLN achievements',
                      },
                    ],
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
                      'National Volunteer & Philanthropy Centre (NVPC). (2023). Volunteer Leadership Development: Building a Community of Practice. Singapore: NVPC.',
                      'Centre for Volunteer Leadership (CVL). (2022). Volunteer Leadership Framework: Competency Standards and Development Pathways.',
                      'Ministry of Social and Family Development. (2022). Human Capital Development Framework for Voluntary Welfare Organisations. Singapore: MSF.',
                      'Social Service Institute (SSI) Singapore. (2024). Leadership and Management Programmes for Volunteer Coordinators. Retrieved from https://www.ssi.gov.sg',
                      'Brudney, J. L., & Meijs, L. C. P. M. (2014). Models of Volunteer Management: Professional Volunteer Programme Administration in Nonprofit Organizations. Human Service Organizations, 38(3), 297–309.',
                      'Cnaan, R. A., & Cascio, T. A. (1998). Performance and Commitment: Issues in Management of Volunteers in Human Service Organizations. Journal of Social Service Research, 24(3/4), 1–37.',
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
