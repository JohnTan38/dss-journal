<<<<<<< HEAD
import type { JournalModule } from '@/types/journal';

export const sscWsh4008: JournalModule = {
  moduleId: 'ssc-wsh-4008',
  moduleCode: 'SSC-WSH-4008-1.1',
  moduleName: 'Workplace Safety & Health',
  moduleNumber: 'M2',
  theme: {
    primary: 'from-orange-600 to-red-500',
    accent: 'orange',
    knowledgeBadgeClass: 'bg-orange-100 text-orange-800 border border-orange-200',
    abilitiesBadgeClass: 'bg-red-100 text-red-800 border border-red-200',
    luHeaderBgClass: 'bg-gradient-to-r from-slate-800 via-orange-900 to-red-800',
    promptCardClass: 'bg-orange-50 border border-orange-200',
    reflectionCardClass: 'bg-amber-50 border border-amber-200',
    sidebarActiveClass: 'bg-orange-100 text-orange-800',
    buttonPrimaryClass:
      'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white',
  },
  coverSheet: {
    institution: 'Hua Mei Training Academy',
    program: 'Diploma in Social Service — Industrial Attachment',
    moduleCode: 'SSC-WSH-4008-1.1',
    moduleName: 'Workplace Safety & Health',
    moduleNumber: 'Module 2 (M2)',
    assignmentTitle: 'Reflective Practice — Industrial Attachment Journal',
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
    // LEARNING UNIT 2
    // ─────────────────────────────────────────────────────────────────────
    {
      id: 'lu2',
      title:
        'LU2. Assist with the Provision of Policies and Procedures for Establishing and Maintaining a Safe Environment.',
      shortTitle: 'Learning Unit 2',
      subSections: [
        {
          id: 'lu2-k3',
          type: 'knowledge',
          label: 'Knowledge (K3)',
          performanceCriteriaTitle:
            "K3 — Organisation\'s WSH system, general policies, procedures, programmes and evaluation guidelines.",
          entries: [
            {
              id: 'lu2-k3-e1',
              prompts: [
                {
                  id: 'lu2-k3-p1',
                  promptText:
                    "What are the general policies (SOP) for your center\'s WSH System? List 2 procedures and evaluation guidelines for your center\'s WSH System.",
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'A systematic approach where the management of WSH goals is integrated with the organisation\'s management objectives is essential to manage risks and prevent accidents. Each facility should have a safety and health management system covering safety, health and wellbeing of all employees.',
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: '2.1 Managing Workplace Safety and Health System',
                      description:
                        'An effective WSH management system should include five key elements:',
                      bulletPoints: [
                        'OH&S Policy',
                        'Planning',
                        'Implementation and Operation',
                        'Checking and Corrective Action',
                        'Management Review',
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: '2.2 Workplace Safety and Health Policy',
                      description:
                        'The leadership and commitment from management is critical. The WSH policy should be:',
                      bulletPoints: [
                        'Endorsed by the facility\'s top management',
                        'Suitable to the nature and scale of the facility\'s WSH risks',
                        'Understood and communicated effectively to all employees',
                        'Made available to interested parties and reviewed periodically',
                        'Commitment to protection of safety and health (preventing accidents/ill-health)',
                        'Compliance with current applicable legislation (e.g., WSH Act)',
                        'Commitment to eliminate hazards and reduce WSH risks',
                        'Commitment to continual improvement and consultation',
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: '2.3 Plan and Establish WSH Procedures',
                      description: 'Planning should include:',
                      bulletPoints: [
                        'WSH objectives to protect employees',
                        'Responsibilities and performance criteria (who, what, when)',
                        'Selection of measurement criteria',
                        'Allocation of adequate resources (time, money, manpower)',
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: '2.4 Implement WSH Procedures',
                      description: 'All facilities should implement procedures to address:',
                      bulletPoints: [
                        'Record-keeping and notifications (incidents, risk assessments, training)',
                        'Emergency response plans',
                        'Regular review of WSH programme(s)',
                        'Management of change',
                        'Exposure monitoring and preventive maintenance',
                        'WSH training (induction and periodic)',
                      ],
                    },
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
            'K4 — Management arrangements relating to regulatory compliance, hazards and risks, control measures and relevant expertise required.',
          entries: [
            {
              id: 'lu2-k4-e1',
              prompts: [
                {
                  id: 'lu2-k4-p1',
                  promptText:
                    'Does your center have a Standard Operating Procedure for emergency response plans for fire and evacuation?',
                },
                {
                  id: 'lu2-k4-p2',
                  promptText:
                    'How often does your center conduct a management review of the WSH Management System?',
                },
                {
                  id: 'lu2-k4-p3',
                  promptText: 'How do you communicate important WSH information to all stakeholders?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'All facilities, regardless of size, should implement relevant procedures to address emergency response plans, record keeping, regular review of WSH programmes, management of change, and WSH training.',
                  },
                  {
                    kind: 'bullet-list',
                    heading: 'Key Management Arrangements:',
                    content: [
                      'A WSH committee with team members from different functions (management, operations, social service professionals, human resources, safety and health)',
                      'Regular WSH inspections or workplace visits',
                      'Management of contractual outsourced/insourced work, students, temporary staff and volunteers',
                      'Communication of WSH policies, RA and risk control measures',
                      'Safe work procedures and PPE selection, use and maintenance',
                      'Emergency procedures for the social care facility',
                    ],
                  },
                  {
                    kind: 'paragraph',
                    content:
                      'Management reviews of WSH management system are conducted when there is an incident, a reportable incident to MoM and/or MoH, changes to work processes, or staff turnover. Important information and updates to the WSH management system are disseminated via email to all staff. For staff without access to email, a comprehensive briefing is conducted by the center manager.',
                  },
                ],
              },
            },
          ],
        },
        {
          id: 'lu2-a3',
          type: 'abilities',
          label: 'Abilities (A3)',
          performanceCriteriaTitle:
            'A3 — Set up a system for monitoring and evaluating WSH records that allow identification of patterns of workplace injuries and diseases within the area of managerial responsibility.',
          entries: [
            {
              id: 'lu2-a3-e1',
              prompts: [
                {
                  id: 'lu2-a3-p1',
                  promptText:
                    'What performance indicators do you consider when conducting a review of the WSH management system?',
                },
                {
                  id: 'lu2-a3-p2',
                  promptText:
                    'Does your center perform Root Cause Analysis (RCA) after any incidents and implement any Corrective Action Plans (CAP)?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'description-block',
                    content: {
                      title: '2.5 Checking and Corrective Actions',
                      description:
                        'Procedures to monitor and measure WSH performance on a regular basis. Personnel should look out for unsafe acts and conditions. Corrective/preventive actions should be taken to eliminate causes of accidents.',
                    },
                  },
                  {
                    kind: 'info-table',
                    title: 'Summary of Performance Indicators',
                    headers: ['Indicator Type', 'Examples', 'Goal'],
                    rows: [
                      {
                        'Indicator Type': 'Leading (Proactive)',
                        Examples:
                          'Training completion, WSH audits, % of control measures implemented',
                        Goal: 'Prevent the accident before it happens',
                      },
                      {
                        'Indicator Type': 'Lagging (Reactive)',
                        Examples: 'Number of falls, recorded workplace injuries, incidents of ill health',
                        Goal: 'Understand what went wrong and trigger RCA',
                      },
                    ],
                  },
                  {
                    kind: 'paragraph',
                    content:
                      'Yes, performing a Root Cause Analysis (RCA) is a non-negotiable part of our WSH management system. We don\'t just treat the "symptoms" of an accident; we dig for the "why" to make sure it doesn\'t happen again.',
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: '1. Root Cause Analysis (RCA) Process',
                      description:
                        'Whenever an incident occurs—whether a resident fall or staff injury—we look at underlying failures:',
                      bulletPoints: [
                        'Identify Unsafe Acts/Conditions: Was it a wet floor (condition) or a failure to follow transfer protocols (act)?',
                        'The "5 Whys": We peel back the layers — e.g. if a staff member forgot a safety protocol, was it due to lack of training, fatigue, or confusing signage?',
                        'Data Integration: We cross-reference the incident with leading indicators such as whether WSH training was up to date or if recent audits flagged that specific area.',
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Implementation of Corrective Actions',
                      description:
                        'Once the root cause is identified, we follow a specific workflow to ensure the fix actually "sticks":',
                      bulletPoints: [
                        'Immediate Correction: If a piece of equipment is faulty, it is removed or repaired immediately',
                        'Procedural Updates: If the RCA reveals a gap in our SOPs, we revise the documented procedures and communicate changes to all affected employees',
                        'Management Review: Results of the RCA are reviewed by top management (at least once a year, or sooner if the incident was severe)',
                        'KPI Evaluation: We evaluate the percentage of control measures implemented (a leading indicator) to ensure the solution wasn\'t just a "paper fix"',
                        'Communication: We hold "safety huddles" or briefings to explain why a procedure changed',
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: '2.6 Management Review',
                      description:
                        "The facility\'s top management should review the WSH management system to ensure its suitability, adequacy and effectiveness. Reviews address potential changes to:",
                      bulletPoints: [
                        'WSH policies',
                        'Objectives and targets',
                        'Elements of the WSH management system',
                        'WSH programmes',
                        'Conduct external audit (annual)',
                        'Review existing policy + procedures',
                        'Evaluate performance KPI and effectiveness of procedures',
                        'Frequency: once a year (Management Review); quarterly or twice a year (Audits)',
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

    // ─────────────────────────────────────────────────────────────────────
    // LEARNING UNIT 3
    // ─────────────────────────────────────────────────────────────────────
    {
      id: 'lu3',
      title: 'LU3. Implement Risk Management Policy and Procedures.',
      shortTitle: 'Learning Unit 3',
      subSections: [
        {
          id: 'lu3-a7',
          type: 'abilities',
          label: 'Abilities (A7)',
          performanceCriteriaTitle:
            'A7 — Develop procedures for on-going control of risks associated with hazardous events that meet WSH and related legislation requirements in consultation with appropriate emergency services.',
          entries: [
            {
              id: 'lu3-a7-e1',
              prompts: [
                {
                  id: 'lu3-a7-p1',
                  promptText:
                    'Describe your center\'s Risk Management Process (example the 5-step risk management process).',
                },
                {
                  id: 'lu3-a7-p2',
                  promptText:
                    'How does your center conduct Risk Evaluation and implement risk controls?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'Under the WSH (Risk Management) Regulations, organisations are required to conduct a Risk Assessment (RA) to identify, evaluate and control safety and health risks, including mental well-being, posed to any person who may be affected by the activities in the workplace, prior to the commencement of work.',
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Preparation for Risk Assessment',
                      description:
                        'A multi-disciplinary RA team should be formed, consisting of personnel with different job responsibilities. Relevant information to gather includes:',
                      bulletPoints: [
                        'Workplace layout plan (including emergency evacuation routes)',
                        'Process or work flowchart and list of work activities',
                        'List of chemicals, machines and/or tools used',
                        'Records of past incidents, accidents and occupational diseases',
                        'Critical incident stress management (CISM) resources',
                        'Relevant legislation, Standards, CP or specifications',
                        'WSH inspection records and health/safety audit reports',
                        'Safe Work Procedures (SWPs) and safety data sheets (SDS)',
                        'Medical condition (e.g., allergy) and mental well-being indicators',
                        'Information regarding the workplace\'s preparedness for terrorism threats (SG Secure) and disease outbreak scenarios',
                      ],
                    },
                  },
                  {
                    kind: 'paragraph',
                    content:
                      'Risk Assessment (RA) consists of three steps: Hazard Identification (individual health checks, work organization and physical work environment and process), Risk Evaluation (assessment of severity and likelihood), and Risk Control.',
                  },
                  {
                    kind: 'info-table',
                    title: 'Assessment of Severity',
                    headers: ['Level', 'Severity', 'Description'],
                    rows: [
                      {
                        Level: '5',
                        Severity: 'Catastrophic',
                        Description:
                          'Death, fatal occupational disease or exposure, or multiple major injuries',
                      },
                      {
                        Level: '4',
                        Severity: 'Major',
                        Description:
                          'Serious injuries, serious occupational diseases (includes amputations, major fractures, multiple injuries, occupational cancers, acute poisoning, disabilities)',
                      },
                      {
                        Level: '3',
                        Severity: 'Moderate',
                        Description:
                          'Injury or ill-health requiring medical treatment (includes lacerations, burns, sprains, minor fractures, psychosocial stress, dermatitis, work-related musculoskeletal disorders)',
                      },
                      {
                        Level: '2',
                        Severity: 'Minor',
                        Description:
                          'Injury or ill-health requiring first-aid only (includes minor cuts and bruises, irritation, ill-health with temporary discomfort, fatigue)',
                      },
                      {
                        Level: '1',
                        Severity: 'Negligible',
                        Description: 'Negligible injury',
                      },
                    ],
                  },
                  {
                    kind: 'info-table',
                    title: 'Assessment of Likelihood',
                    headers: ['Level', 'Likelihood', 'Description'],
                    rows: [
                      { Level: '1', Likelihood: 'Rare', Description: 'Not expected to occur but still possible' },
                      { Level: '2', Likelihood: 'Remote', Description: 'Not likely to occur under normal circumstances' },
                      { Level: '3', Likelihood: 'Occasional', Description: 'Possible or known to occur' },
                      { Level: '4', Likelihood: 'Frequent', Description: 'Common occurrence' },
                      { Level: '5', Likelihood: 'Almost Certain', Description: 'Continual or repeating experience' },
                    ],
                  },
                  {
                    kind: 'risk-matrix',
                    content: {
                      title: '5×5 Risk Matrix with Risk Prioritisation Number',
                      severityLabels: [
                        { level: 5, label: 'Catastrophic', description: 'Death / Multiple Major' },
                        { level: 4, label: 'Major', description: 'Serious Injuries' },
                        { level: 3, label: 'Moderate', description: 'Medical Treatment' },
                        { level: 2, label: 'Minor', description: 'First Aid Only' },
                        { level: 1, label: 'Negligible', description: 'Negligible Injury' },
                      ],
                      likelihoodLabels: [
                        { level: 1, label: 'Rare', description: 'Not expected' },
                        { level: 2, label: 'Remote', description: 'Not likely' },
                        { level: 3, label: 'Occasional', description: 'Known to occur' },
                        { level: 4, label: 'Frequent', description: 'Common' },
                        { level: 5, label: 'Almost Certain', description: 'Repeating' },
                      ],
                      cells: [
                        [5, 10, 15, 20, 25],
                        [4, 8, 12, 16, 20],
                        [3, 6, 9, 12, 15],
                        [2, 4, 6, 8, 10],
                        [1, 2, 3, 4, 5],
                      ],
                    },
                  },
                  {
                    kind: 'risk-action-table',
                    rows: [
                      {
                        level: 'Low (Green)',
                        color: 'green',
                        acceptability: 'Acceptable',
                        actions:
                          'No additional risk control measures may be needed. Frequent review and monitoring are required to ensure the risk level remains accurate.',
                      },
                      {
                        level: 'Medium (Yellow)',
                        color: 'yellow',
                        acceptability: 'Tolerable',
                        actions:
                          'A careful evaluation of the hazards should be carried out. Interim risk control measures, such as administrative controls or PPE, may be implemented. Management attention is required.',
                      },
                      {
                        level: 'High (Red)',
                        color: 'red',
                        acceptability: 'Not Acceptable',
                        actions:
                          'High Risk level must be reduced to at least Medium Risk before work starts. If impracticable, the hazard should be eliminated before work starts. Management review is required before work starts.',
                      },
                    ],
                  },
                ],
              },
            },
            {
              id: 'lu3-a7-e2',
              prompts: [
                {
                  id: 'lu3-a7-p3',
                  promptText:
                    'Using the 5×5 Risk Matrix, illustrate a risk evaluation example for a 2-person resident transfer. Include the Safe Work Procedure (SWP) Checklist.',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'To apply the 5×5 Risk Matrix to the manual handling of a resident (e.g., transferring a resident from a bed to a wheelchair), we follow the evaluation steps and criteria established in the training materials.',
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Risk Evaluation — 2-Person Bed-to-Wheelchair Transfer',
                      description: 'Using the 5×5 Risk Matrix:',
                      bulletPoints: [
                        'Severity (4 — Major): Includes major fractures (resident) or chronic musculoskeletal disorders (staff)',
                        'Likelihood (3 — Occasional): Resident transfers happen multiple times a day — "possible or known to occur"',
                        'Risk Score: 4 × 3 = 12 → Medium Risk (Yellow) — Tolerable',
                      ],
                    },
                  },
                  {
                    kind: 'info-table',
                    title: 'Risk Acceptability & Recommended Actions',
                    headers: ['Action Category', 'Requirements'],
                    rows: [
                      {
                        'Action Category': 'Acceptability',
                        Requirements:
                          'The risk is tolerable, but a careful evaluation of the hazard must be carried out.',
                      },
                      {
                        'Action Category': 'Administrative Controls',
                        Requirements:
                          'Implement Safe Work Procedures (SWPs) and ensure staff follow the "1 or 2 person" protocol based on the patient\'s condition.',
                      },
                      {
                        'Action Category': 'Equipment',
                        Requirements:
                          'Use the equipment checklist to ensure mechanical aids (like hoists) are functional to reduce physical strain.',
                      },
                      {
                        'Action Category': 'Management Role',
                        Requirements:
                          'Management attention is required to monitor these controls and ensure they are implemented over time.',
                      },
                    ],
                  },
                  {
                    kind: 'paragraph',
                    content:
                      'A 2-person transfer is a high-coordination task that requires both technical skill and clear communication to prevent musculoskeletal injuries. The following SWP Checklist integrates with the facility\'s WSH management system.',
                  },
                  {
                    kind: 'checklist-table',
                    title: 'Safe Work Procedure (SWP) Checklist: 2-Person Bed-to-Wheelchair Transfer',
                    sections: [
                      {
                        sectionTitle: 'Phase I — Pre-Transfer Preparation (Stop & Assess)',
                        items: [
                          {
                            label: 'Patient Condition Assessment',
                            requirement:
                              'Perform a "size of patient TEST" to confirm that the resident\'s current condition requires a 2-person transfer rather than a 1-person assist.',
                          },
                          {
                            label: 'Health Status Review',
                            requirement:
                              'Check the resident\'s medical condition and mental well-being indicators to ensure they are cooperative and physically stable for the move.',
                          },
                          {
                            label: 'Equipment Inspection',
                            requirement:
                              'Use an equipment checklist to verify that the wheelchair brakes, footrests, and any mechanical aids are in proper working order.',
                          },
                          {
                            label: 'Environmental Check',
                            requirement:
                              'Ensure the workplace layout is clear of trip hazards and allows enough space for both staff members to manoeuvre.',
                          },
                        ],
                      },
                      {
                        sectionTitle: 'Phase II — Setup (Safety Controls)',
                        items: [
                          {
                            label: 'Staff Competency',
                            requirement:
                              'Confirm that both caregivers have completed their WSH training and are within their 3–6 month appraisal period for competency.',
                          },
                          {
                            label: 'PPE & Footwear',
                            requirement:
                              'Ensure both staff members are wearing appropriate Personal Protective Equipment (PPE) and non-slip footwear as per facility procedures.',
                          },
                          {
                            label: "Manufacturer\'s Instructions",
                            requirement:
                              "If using a mechanical hoist, follow the manufacturer\'s instruction manual strictly to avoid unsafe acts.",
                          },
                        ],
                      },
                      {
                        sectionTitle: 'Phase III — Execution & Post-Transfer Actions',
                        items: [
                          {
                            label: 'Team Coordination',
                            requirement:
                              'Establish a "lead" caregiver to count down (e.g., "1, 2, 3, lift") to ensure synchronised movement and promote a positive WSH culture.',
                          },
                          {
                            label: 'Proper Body Mechanics',
                            requirement:
                              'Maintain a wide base of support and keep the resident close to your centre of gravity to minimise the severity of potential back strain.',
                          },
                          {
                            label: 'Resident Comfort',
                            requirement:
                              'Once the transfer is complete, ensure the resident is stable and perform a quick check for any signs of ill-health or discomfort.',
                          },
                          {
                            label: 'Record-Keeping',
                            requirement:
                              'Document the transfer in the WSH logs, specifically noting if any unsafe conditions (like a faulty brake) were discovered.',
                          },
                          {
                            label: 'Reporting',
                            requirement:
                              'If the transfer was difficult, provide feedback to management for the annual review so they can evaluate if the procedure needs to be revised or changed.',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    kind: 'swp-poster',
                    title: 'SWP CHEAT SHEET',
                    subtitle: '2-Person Resident Transfer',
                    goal: 'To maintain a safe environment and prevent workplace accidents through established procedures.',
                    phases: [
                      {
                        phase: '1',
                        title: 'THE PRE-CHECK (Stop & Assess)',
                        items: [
                          'Size of Patient TEST: Confirm the resident\'s weight and physical condition truly require a 2-person transfer rather than 1.',
                          'Medical Status Check: Review the resident\'s current medical condition and mental well-being indicators for cooperation or instability.',
                          'Equipment Checklist: Ensure the wheelchair and any mechanical aids are in good working order before use.',
                          'Layout Clearance: Verify the workplace layout is clear of obstacles to allow for emergency evacuation if needed.',
                        ],
                      },
                      {
                        phase: '2',
                        title: 'THE SETUP (Safety Controls)',
                        items: [
                          'Staff Appraisal: Ensure both caregivers have completed WSH induction and are within their 3–6 month competency appraisal period.',
                          'PPE Ready: Both staff members must wear the selected and maintained Personal Protective Equipment (PPE).',
                          "Manual Mastery: Review the manufacturer\'s instruction manual for any mechanical transfer devices being used.",
                        ],
                      },
                      {
                        phase: '3',
                        title: 'THE MOVE (Safe Execution)',
                        items: [
                          'Follow the SWP: Adhere strictly to established Safe Work Procedures for transfers to minimise musculoskeletal risk.',
                          'Coordinate: Communication between the two staff members is critical to prevent unsafe acts.',
                          'High Risk Control: Remember that a failure in posture or coordination can move this task from "Tolerable" to "High Risk" on the 5×5 Matrix.',
                        ],
                      },
                      {
                        phase: '4',
                        title: 'THE FOLLOW-UP (Checking & Reporting)',
                        items: [
                          'Record Results: Document any incidents or "near misses" in the record-keeping system (lagging indicators).',
                          'Corrective Action: If the equipment was faulty, take immediate corrective action to eliminate the cause of potential accidents.',
                          'Management Feedback: Provide feedback for the quarterly audit or annual Management Review to determine if procedures need to be revised or changed.',
                        ],
                      },
                    ],
                    riskReminder:
                      'The severity of a transfer injury is often Major (4). By using this checklist, we increase our Leading Indicators (control measures implemented) to keep everyone safe. Risk Score: 4 × 3 = 12 → Medium Risk (Tolerable).',
                  },
                ],
              },
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────
    // LEARNING UNIT 4
    // ─────────────────────────────────────────────────────────────────────
    {
      id: 'lu4',
      title: 'LU4. Monitor and Maintain a Safe Work Environment.',
      shortTitle: 'Learning Unit 4',
      subSections: [
        {
          id: 'lu4-k5',
          type: 'knowledge',
          label: 'Knowledge (K5)',
          performanceCriteriaTitle:
            'K5 — Importance of benchmarking WSH performance against national and international standards.',
          entries: [
            {
              id: 'lu4-k5-e1',
              prompts: [
                {
                  id: 'lu4-k5-p1',
                  promptText:
                    'Does your center have provisions for first-aid boxes to ensure the center is safe for the elderly clients, and in accordance with WSH (First-Aid) Regulations?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'Yes, the center has first-aid boxes placed at strategic and clearly lit places (example: to the right of main entrance, to the right of kitchen entrance). In accordance with the Workplace Safety and Health (WSH) Management System outlined in our training materials and Singapore\'s national guidelines, our elder care center maintains fully equipped first-aid boxes to ensure a safe environment for all seniors.',
                  },
                  {
                    kind: 'info-table',
                    title: 'Regulatory Compliance — WSH (First-Aid) Regulations 2006',
                    headers: ['Workplace Population', 'Required First-Aid Provision'],
                    rows: [
                      {
                        'Workplace Population': '1–25 persons',
                        'Required First-Aid Provision': '1 × Box A',
                      },
                      {
                        'Workplace Population': '26–50 persons',
                        'Required First-Aid Provision': '1 × Box B (or 2 × Box A)',
                      },
                      {
                        'Workplace Population': '51–100 persons',
                        'Required First-Aid Provision': '1 × Box C (or 2 × Box B / 4 × Box A)',
                      },
                      {
                        'Workplace Population': 'Every Floor',
                        'Required First-Aid Provision':
                          'At least one box must be available on every level of the building',
                      },
                    ],
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Standard MOM Box Contents (Box A/B)',
                      description:
                        'Our first-aid boxes contain the mandatory MOM-standard items, with additional enhancements recommended for geriatric care:',
                      bulletPoints: [
                        'Dressings & Bandages: Sterile adhesive dressings, crepe bandages (5cm and 10cm), absorbent gauze, and triangular bandages',
                        'Tools: Scissors, safety pins, and a diagnostic torchlight',
                        'Protection: Disposable gloves, eye shields, and sterile eye pads',
                        'Resuscitation: One-way resuscitation masks for CPR',
                        'Cleaning: Sterile water or saline (if tap water is unavailable)',
                        'Elderly-Specific: Clinical thermometers, blood pressure cuffs, blood sugar monitoring equipment',
                        'Mobility Support: Access to nearby wheelchairs and stretchers',
                      ],
                    },
                  },
                  {
                    kind: 'paragraph',
                    content:
                      'Maintenance Protocol: A designated person checks each box weekly to replenish depleted items and ensure no supplies are expired. First-aid boxes are kept in well-lit, easily accessible locations and are never locked or obstructed.',
                  },
                ],
              },
            },
          ],
        },
        {
          id: 'lu4-k8',
          type: 'knowledge',
          label: 'Knowledge (K8)',
          performanceCriteriaTitle:
            'K8 — Importance of assessing and reviewing workplace risk management activities in accordance with the guidelines provided by the WSH Act.',
          entries: [
            {
              id: 'lu4-k8-e1',
              prompts: [
                {
                  id: 'lu4-k8-p1',
                  promptText:
                    'Does your center have a Risk Management Policy and related Standard Operating Procedures (SOP)? Describe the Fire Evacuation Plan.',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'description-block',
                    content: {
                      title: '4.3 Emergency Preparedness and Response',
                      description:
                        'Planning and preparing for emergencies is an essential part of hazard prevention and control. An effective emergency response plan should include:',
                      bulletPoints: [
                        'Corporate Policy: Emphasises the importance of emergency response planning and affirms management support',
                        'Emergency Planning and Response Committee: Created to implement and execute contingency plans',
                        'Incident Command System: A command and control system to coordinate actions during an emergency',
                        'Emergency Evacuation Procedures: Elaborates evacuation routes and assembly areas for partial or full evacuation',
                        'Protection of Vital Records and Equipment: Designated employees trained in emergency shut-down or lock-out procedures',
                        'Training: All levels of employees trained in evacuation procedures, routes, shut-down procedures, and emergency equipment usage',
                        'Regular Review and Updating: Emergency response plan regularly reviewed and practice drills carried out periodically',
                      ],
                    },
                  },
                  {
                    kind: 'mermaid-diagram',
                    title: 'Medical Incident Response Protocol',
                    code: `flowchart TD
    A([Incident Occurs]) --> B{Is it a\\nmedical emergency?}
    B -- Yes --> C[Call for help / shout]
    B -- No --> D[Document as Near Miss]
    C --> E[Assess the scene\\nfor safety]
    E --> F[Call 995 SCDF\\nif life-threatening]
    E --> G[Administer First Aid\\nif trained]
    F --> H[Notify Incident\\nCommander]
    G --> H
    H --> I[Escort resident\\nto safe area]
    I --> J[Complete Incident\\nReport Form]
    J --> K[Notify MOM / MoH\\nif reportable]
    K --> L[Conduct Root\\nCause Analysis]
    L --> M[Implement Corrective\\nAction Plan]
    M --> N[Update SOP\\nand Disseminate]
    D --> J
    style A fill:#ef4444,color:#fff,stroke:#dc2626
    style F fill:#ef4444,color:#fff,stroke:#dc2626
    style K fill:#f97316,color:#fff,stroke:#ea580c
    style M fill:#22c55e,color:#fff,stroke:#16a34a
    style N fill:#22c55e,color:#fff,stroke:#16a34a`,
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Fire Evacuation Procedure',
                      description: 'If you discover a fire:',
                      bulletPoints: [
                        'Do not panic — Alert others by shouting',
                        'Activate the fire alarm at the nearest manual call point by breaking its glass',
                        'Evacuate the room/area and get everyone out without endangering yourself',
                        'If possible, close the door of the affected room to contain the fire',
                        'Dial 995 for the SCDF',
                        'Turn off gas mains (if applicable) if you can reach them',
                        'Evacuate the building in an orderly manner via the stairs — do not use the lift',
                        'Do not return to the building until the authorities announce that it is safe to do so',
                        'Fight the fire only if you are able to and without endangering yourself and others',
                      ],
                    },
                  },
                  {
                    kind: 'fire-extinguisher-guide',
                    title: 'Fire Extinguisher Guide',
                    rows: [
                      {
                        type: 'Water',
                        effectiveAgainst: 'Ordinary combustible materials — paper, cloth, wood, plastics (Class A)',
                        warning: 'NEVER use on oil fires — will cause fire to spread',
                        color: 'bg-red-100',
                      },
                      {
                        type: 'Carbon Dioxide (CO₂)',
                        effectiveAgainst: 'Flammable liquids and live electrical equipment; also for combustible materials',
                        color: 'bg-gray-100',
                      },
                      {
                        type: 'Dry Chemical Powder',
                        effectiveAgainst: 'Similar to CO₂ — flammable liquids and electrical equipment (Class B & C)',
                        color: 'bg-blue-100',
                      },
                    ],
                  },
                  {
                    kind: 'checklist-table',
                    title: 'Safety Audit Compliance Checklist',
                    sections: [
                      {
                        sectionTitle: 'Section 1: Emergency Preparedness',
                        items: [
                          {
                            label: 'Corporate Policy',
                            requirement:
                              'Is there a signed policy affirming management support for emergency initiatives?',
                          },
                          {
                            label: 'Incident Command',
                            requirement:
                              'Is a clear chain of command (roles/responsibilities) established for all hours?',
                          },
                          {
                            label: 'External Contacts',
                            requirement:
                              'Are contact protocols for SCDF, NEA, MOH, and MOM documented?',
                          },
                          {
                            label: 'Vital Records',
                            requirement:
                              'Are there specific shut-down procedures for critical equipment and record protection?',
                          },
                          {
                            label: 'Drills & Records',
                            requirement:
                              'Are practice drills scheduled, recorded, and reviewed by management?',
                          },
                        ],
                      },
                      {
                        sectionTitle: 'Section 2: Fire Safety & Evacuation',
                        items: [
                          {
                            label: 'Fire Safety Manager',
                            requirement:
                              'Has a Fire Safety Manager (FSM) been appointed as per SCDF requirements?',
                          },
                          {
                            label: 'Evacuation Routes',
                            requirement:
                              'Are routes and assembly areas clearly identified for patients, staff, and contractors?',
                          },
                          {
                            label: 'Manual Call Points',
                            requirement:
                              'Are fire alarm glass-break points accessible and functional?',
                          },
                          {
                            label: 'Extinguisher Type',
                            requirement:
                              'Are the correct extinguishers (Water/CO₂/Dry Powder) placed near relevant hazards?',
                          },
                          {
                            label: 'Maintenance',
                            requirement:
                              'Is there a documented schedule for fire protection equipment maintenance?',
                          },
                        ],
                      },
                      {
                        sectionTitle: 'Section 3: First Aid (WSH) Regulations',
                        items: [
                          {
                            label: 'Box Distribution',
                            requirement:
                              'Is there a sufficient number of boxes on every floor of the building?',
                          },
                          {
                            label: 'Box Maintenance',
                            requirement:
                              'Are boxes clearly identified, well-lit, and checked "frequently" for usable items?',
                          },
                          {
                            label: 'First-Aider Ratio',
                            requirement:
                              'Is there at least 1 first-aider for every 100 employees?',
                          },
                          {
                            label: 'Training Records',
                            requirement:
                              'Do all first-aiders have current, Commissioner-approved training/re-training?',
                          },
                          {
                            label: 'First-Aid Room',
                            requirement:
                              'If the facility has >500 persons, is a dedicated first-aid room maintained?',
                          },
                          {
                            label: 'Special Facilities',
                            requirement:
                              'Are drenching/flushing facilities available if toxic/corrosive substances are present?',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    kind: 'contact-list',
                    title: 'Emergency Contact List',
                    groups: [
                      {
                        groupTitle: '1. External Emergency Services',
                        headers: ['Agency', 'Purpose', 'Contact Number'],
                        rows: [
                          ['SCDF (Fire / Ambulance)', 'Fire, rescue, or life-threatening medicals', '995'],
                          ['Police', 'Crime, security breach, or public order', '999'],
                          ['Non-Emergency Ambulance', 'Non-life-threatening medical transport', '1777'],
                        ],
                      },
                      {
                        groupTitle: '2. Regulatory & Community Services',
                        headers: ['Agency', 'Department', 'Contact Number'],
                        rows: [
                          ['MOH', 'Ministry of Health (Healthcare Standards)', '6325 9220'],
                          ['MOM', 'Ministry of Manpower (WSH Reporting)', '6438 5122'],
                          ['NEA', 'National Environment Agency', '6225 5632'],
                          ['SCDF (General)', 'General Enquiries / Fire Safety', '1800 286 5555'],
                        ],
                      },
                      {
                        groupTitle: '3. Essential Utilities & Services',
                        headers: ['Service', 'Company/Provider', 'Contact Number'],
                        rows: [
                          ['Power/Electricity', 'SP Group (Power Failure)', '1800 778 8888'],
                          ['Water Supply', 'PUB', '1800 225 5782'],
                          ['Gas Supply', 'City Energy (Gas Leak/Emergency)', '1800 752 1800'],
                        ],
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
=======
import type { JournalModule } from '@/types/journal';

export const sscWsh4008: JournalModule = {
  moduleId: 'ssc-wsh-4008',
  moduleCode: 'SSC-WSH-4008-1.1',
  moduleName: 'Workplace Safety & Health',
  moduleNumber: 'M2',
  theme: {
    primary: 'from-orange-600 to-red-500',
    accent: 'orange',
    knowledgeBadgeClass: 'bg-orange-100 text-orange-800 border border-orange-200',
    abilitiesBadgeClass: 'bg-red-100 text-red-800 border border-red-200',
    luHeaderBgClass: 'bg-gradient-to-r from-slate-800 via-orange-900 to-red-800',
    promptCardClass: 'bg-orange-50 border border-orange-200',
    reflectionCardClass: 'bg-amber-50 border border-amber-200',
    sidebarActiveClass: 'bg-orange-100 text-orange-800',
    buttonPrimaryClass:
      'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white',
  },
  coverSheet: {
    institution: 'Hua Mei Training Academy',
    program: 'Diploma in Social Service — Industrial Attachment',
    moduleCode: 'SSC-WSH-4008-1.1',
    moduleName: 'Workplace Safety & Health',
    moduleNumber: 'Module 2 (M2)',
    assignmentTitle: 'Reflective Practice — Industrial Attachment Journal',
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
    // LEARNING UNIT 2
    // ─────────────────────────────────────────────────────────────────────
    {
      id: 'lu2',
      title:
        'LU2. Assist with the Provision of Policies and Procedures for Establishing and Maintaining a Safe Environment.',
      shortTitle: 'Learning Unit 2',
      subSections: [
        {
          id: 'lu2-k3',
          type: 'knowledge',
          label: 'Knowledge (K3)',
          performanceCriteriaTitle:
            "K3 — Organisation\'s WSH system, general policies, procedures, programmes and evaluation guidelines.",
          entries: [
            {
              id: 'lu2-k3-e1',
              prompts: [
                {
                  id: 'lu2-k3-p1',
                  promptText:
                    "What are the general policies (SOP) for your center\'s WSH System? List 2 procedures and evaluation guidelines for your center\'s WSH System.",
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'A systematic approach where the management of WSH goals is integrated with the organisation\'s management objectives is essential to manage risks and prevent accidents. Each facility should have a safety and health management system covering safety, health and wellbeing of all employees.',
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: '2.1 Managing Workplace Safety and Health System',
                      description:
                        'An effective WSH management system should include five key elements:',
                      bulletPoints: [
                        'OH&S Policy',
                        'Planning',
                        'Implementation and Operation',
                        'Checking and Corrective Action',
                        'Management Review',
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: '2.2 Workplace Safety and Health Policy',
                      description:
                        'The leadership and commitment from management is critical. The WSH policy should be:',
                      bulletPoints: [
                        'Endorsed by the facility\'s top management',
                        'Suitable to the nature and scale of the facility\'s WSH risks',
                        'Understood and communicated effectively to all employees',
                        'Made available to interested parties and reviewed periodically',
                        'Commitment to protection of safety and health (preventing accidents/ill-health)',
                        'Compliance with current applicable legislation (e.g., WSH Act)',
                        'Commitment to eliminate hazards and reduce WSH risks',
                        'Commitment to continual improvement and consultation',
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: '2.3 Plan and Establish WSH Procedures',
                      description: 'Planning should include:',
                      bulletPoints: [
                        'WSH objectives to protect employees',
                        'Responsibilities and performance criteria (who, what, when)',
                        'Selection of measurement criteria',
                        'Allocation of adequate resources (time, money, manpower)',
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: '2.4 Implement WSH Procedures',
                      description: 'All facilities should implement procedures to address:',
                      bulletPoints: [
                        'Record-keeping and notifications (incidents, risk assessments, training)',
                        'Emergency response plans',
                        'Regular review of WSH programme(s)',
                        'Management of change',
                        'Exposure monitoring and preventive maintenance',
                        'WSH training (induction and periodic)',
                      ],
                    },
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
            'K4 — Management arrangements relating to regulatory compliance, hazards and risks, control measures and relevant expertise required.',
          entries: [
            {
              id: 'lu2-k4-e1',
              prompts: [
                {
                  id: 'lu2-k4-p1',
                  promptText:
                    'Does your center have a Standard Operating Procedure for emergency response plans for fire and evacuation?',
                },
                {
                  id: 'lu2-k4-p2',
                  promptText:
                    'How often does your center conduct a management review of the WSH Management System?',
                },
                {
                  id: 'lu2-k4-p3',
                  promptText: 'How do you communicate important WSH information to all stakeholders?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'All facilities, regardless of size, should implement relevant procedures to address emergency response plans, record keeping, regular review of WSH programmes, management of change, and WSH training.',
                  },
                  {
                    kind: 'bullet-list',
                    heading: 'Key Management Arrangements:',
                    content: [
                      'A WSH committee with team members from different functions (management, operations, social service professionals, human resources, safety and health)',
                      'Regular WSH inspections or workplace visits',
                      'Management of contractual outsourced/insourced work, students, temporary staff and volunteers',
                      'Communication of WSH policies, RA and risk control measures',
                      'Safe work procedures and PPE selection, use and maintenance',
                      'Emergency procedures for the social care facility',
                    ],
                  },
                  {
                    kind: 'paragraph',
                    content:
                      'Management reviews of WSH management system are conducted when there is an incident, a reportable incident to MoM and/or MoH, changes to work processes, or staff turnover. Important information and updates to the WSH management system are disseminated via email to all staff. For staff without access to email, a comprehensive briefing is conducted by the center manager.',
                  },
                ],
              },
            },
          ],
        },
        {
          id: 'lu2-a3',
          type: 'abilities',
          label: 'Abilities (A3)',
          performanceCriteriaTitle:
            'A3 — Set up a system for monitoring and evaluating WSH records that allow identification of patterns of workplace injuries and diseases within the area of managerial responsibility.',
          entries: [
            {
              id: 'lu2-a3-e1',
              prompts: [
                {
                  id: 'lu2-a3-p1',
                  promptText:
                    'What performance indicators do you consider when conducting a review of the WSH management system?',
                },
                {
                  id: 'lu2-a3-p2',
                  promptText:
                    'Does your center perform Root Cause Analysis (RCA) after any incidents and implement any Corrective Action Plans (CAP)?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'description-block',
                    content: {
                      title: '2.5 Checking and Corrective Actions',
                      description:
                        'Procedures to monitor and measure WSH performance on a regular basis. Personnel should look out for unsafe acts and conditions. Corrective/preventive actions should be taken to eliminate causes of accidents.',
                    },
                  },
                  {
                    kind: 'info-table',
                    title: 'Summary of Performance Indicators',
                    headers: ['Indicator Type', 'Examples', 'Goal'],
                    rows: [
                      {
                        'Indicator Type': 'Leading (Proactive)',
                        Examples:
                          'Training completion, WSH audits, % of control measures implemented',
                        Goal: 'Prevent the accident before it happens',
                      },
                      {
                        'Indicator Type': 'Lagging (Reactive)',
                        Examples: 'Number of falls, recorded workplace injuries, incidents of ill health',
                        Goal: 'Understand what went wrong and trigger RCA',
                      },
                    ],
                  },
                  {
                    kind: 'paragraph',
                    content:
                      'Yes, performing a Root Cause Analysis (RCA) is a non-negotiable part of our WSH management system. We don\'t just treat the "symptoms" of an accident; we dig for the "why" to make sure it doesn\'t happen again.',
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: '1. Root Cause Analysis (RCA) Process',
                      description:
                        'Whenever an incident occurs—whether a resident fall or staff injury—we look at underlying failures:',
                      bulletPoints: [
                        'Identify Unsafe Acts/Conditions: Was it a wet floor (condition) or a failure to follow transfer protocols (act)?',
                        'The "5 Whys": We peel back the layers — e.g. if a staff member forgot a safety protocol, was it due to lack of training, fatigue, or confusing signage?',
                        'Data Integration: We cross-reference the incident with leading indicators such as whether WSH training was up to date or if recent audits flagged that specific area.',
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Implementation of Corrective Actions',
                      description:
                        'Once the root cause is identified, we follow a specific workflow to ensure the fix actually "sticks":',
                      bulletPoints: [
                        'Immediate Correction: If a piece of equipment is faulty, it is removed or repaired immediately',
                        'Procedural Updates: If the RCA reveals a gap in our SOPs, we revise the documented procedures and communicate changes to all affected employees',
                        'Management Review: Results of the RCA are reviewed by top management (at least once a year, or sooner if the incident was severe)',
                        'KPI Evaluation: We evaluate the percentage of control measures implemented (a leading indicator) to ensure the solution wasn\'t just a "paper fix"',
                        'Communication: We hold "safety huddles" or briefings to explain why a procedure changed',
                      ],
                    },
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: '2.6 Management Review',
                      description:
                        "The facility\'s top management should review the WSH management system to ensure its suitability, adequacy and effectiveness. Reviews address potential changes to:",
                      bulletPoints: [
                        'WSH policies',
                        'Objectives and targets',
                        'Elements of the WSH management system',
                        'WSH programmes',
                        'Conduct external audit (annual)',
                        'Review existing policy + procedures',
                        'Evaluate performance KPI and effectiveness of procedures',
                        'Frequency: once a year (Management Review); quarterly or twice a year (Audits)',
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

    // ─────────────────────────────────────────────────────────────────────
    // LEARNING UNIT 3
    // ─────────────────────────────────────────────────────────────────────
    {
      id: 'lu3',
      title: 'LU3. Implement Risk Management Policy and Procedures.',
      shortTitle: 'Learning Unit 3',
      subSections: [
        {
          id: 'lu3-a7',
          type: 'abilities',
          label: 'Abilities (A7)',
          performanceCriteriaTitle:
            'A7 — Develop procedures for on-going control of risks associated with hazardous events that meet WSH and related legislation requirements in consultation with appropriate emergency services.',
          entries: [
            {
              id: 'lu3-a7-e1',
              prompts: [
                {
                  id: 'lu3-a7-p1',
                  promptText:
                    'Describe your center\'s Risk Management Process (example the 5-step risk management process).',
                },
                {
                  id: 'lu3-a7-p2',
                  promptText:
                    'How does your center conduct Risk Evaluation and implement risk controls?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'Under the WSH (Risk Management) Regulations, organisations are required to conduct a Risk Assessment (RA) to identify, evaluate and control safety and health risks, including mental well-being, posed to any person who may be affected by the activities in the workplace, prior to the commencement of work.',
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Preparation for Risk Assessment',
                      description:
                        'A multi-disciplinary RA team should be formed, consisting of personnel with different job responsibilities. Relevant information to gather includes:',
                      bulletPoints: [
                        'Workplace layout plan (including emergency evacuation routes)',
                        'Process or work flowchart and list of work activities',
                        'List of chemicals, machines and/or tools used',
                        'Records of past incidents, accidents and occupational diseases',
                        'Critical incident stress management (CISM) resources',
                        'Relevant legislation, Standards, CP or specifications',
                        'WSH inspection records and health/safety audit reports',
                        'Safe Work Procedures (SWPs) and safety data sheets (SDS)',
                        'Medical condition (e.g., allergy) and mental well-being indicators',
                        'Information regarding the workplace\'s preparedness for terrorism threats (SG Secure) and disease outbreak scenarios',
                      ],
                    },
                  },
                  {
                    kind: 'paragraph',
                    content:
                      'Risk Assessment (RA) consists of three steps: Hazard Identification (individual health checks, work organization and physical work environment and process), Risk Evaluation (assessment of severity and likelihood), and Risk Control.',
                  },
                  {
                    kind: 'info-table',
                    title: 'Assessment of Severity',
                    headers: ['Level', 'Severity', 'Description'],
                    rows: [
                      {
                        Level: '5',
                        Severity: 'Catastrophic',
                        Description:
                          'Death, fatal occupational disease or exposure, or multiple major injuries',
                      },
                      {
                        Level: '4',
                        Severity: 'Major',
                        Description:
                          'Serious injuries, serious occupational diseases (includes amputations, major fractures, multiple injuries, occupational cancers, acute poisoning, disabilities)',
                      },
                      {
                        Level: '3',
                        Severity: 'Moderate',
                        Description:
                          'Injury or ill-health requiring medical treatment (includes lacerations, burns, sprains, minor fractures, psychosocial stress, dermatitis, work-related musculoskeletal disorders)',
                      },
                      {
                        Level: '2',
                        Severity: 'Minor',
                        Description:
                          'Injury or ill-health requiring first-aid only (includes minor cuts and bruises, irritation, ill-health with temporary discomfort, fatigue)',
                      },
                      {
                        Level: '1',
                        Severity: 'Negligible',
                        Description: 'Negligible injury',
                      },
                    ],
                  },
                  {
                    kind: 'info-table',
                    title: 'Assessment of Likelihood',
                    headers: ['Level', 'Likelihood', 'Description'],
                    rows: [
                      { Level: '1', Likelihood: 'Rare', Description: 'Not expected to occur but still possible' },
                      { Level: '2', Likelihood: 'Remote', Description: 'Not likely to occur under normal circumstances' },
                      { Level: '3', Likelihood: 'Occasional', Description: 'Possible or known to occur' },
                      { Level: '4', Likelihood: 'Frequent', Description: 'Common occurrence' },
                      { Level: '5', Likelihood: 'Almost Certain', Description: 'Continual or repeating experience' },
                    ],
                  },
                  {
                    kind: 'risk-matrix',
                    content: {
                      title: '5×5 Risk Matrix with Risk Prioritisation Number',
                      severityLabels: [
                        { level: 5, label: 'Catastrophic', description: 'Death / Multiple Major' },
                        { level: 4, label: 'Major', description: 'Serious Injuries' },
                        { level: 3, label: 'Moderate', description: 'Medical Treatment' },
                        { level: 2, label: 'Minor', description: 'First Aid Only' },
                        { level: 1, label: 'Negligible', description: 'Negligible Injury' },
                      ],
                      likelihoodLabels: [
                        { level: 1, label: 'Rare', description: 'Not expected' },
                        { level: 2, label: 'Remote', description: 'Not likely' },
                        { level: 3, label: 'Occasional', description: 'Known to occur' },
                        { level: 4, label: 'Frequent', description: 'Common' },
                        { level: 5, label: 'Almost Certain', description: 'Repeating' },
                      ],
                      cells: [
                        [5, 10, 15, 20, 25],
                        [4, 8, 12, 16, 20],
                        [3, 6, 9, 12, 15],
                        [2, 4, 6, 8, 10],
                        [1, 2, 3, 4, 5],
                      ],
                    },
                  },
                  {
                    kind: 'risk-action-table',
                    rows: [
                      {
                        level: 'Low (Green)',
                        color: 'green',
                        acceptability: 'Acceptable',
                        actions:
                          'No additional risk control measures may be needed. Frequent review and monitoring are required to ensure the risk level remains accurate.',
                      },
                      {
                        level: 'Medium (Yellow)',
                        color: 'yellow',
                        acceptability: 'Tolerable',
                        actions:
                          'A careful evaluation of the hazards should be carried out. Interim risk control measures, such as administrative controls or PPE, may be implemented. Management attention is required.',
                      },
                      {
                        level: 'High (Red)',
                        color: 'red',
                        acceptability: 'Not Acceptable',
                        actions:
                          'High Risk level must be reduced to at least Medium Risk before work starts. If impracticable, the hazard should be eliminated before work starts. Management review is required before work starts.',
                      },
                    ],
                  },
                ],
              },
            },
            {
              id: 'lu3-a7-e2',
              prompts: [
                {
                  id: 'lu3-a7-p3',
                  promptText:
                    'Using the 5×5 Risk Matrix, illustrate a risk evaluation example for a 2-person resident transfer. Include the Safe Work Procedure (SWP) Checklist.',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'To apply the 5×5 Risk Matrix to the manual handling of a resident (e.g., transferring a resident from a bed to a wheelchair), we follow the evaluation steps and criteria established in the training materials.',
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Risk Evaluation — 2-Person Bed-to-Wheelchair Transfer',
                      description: 'Using the 5×5 Risk Matrix:',
                      bulletPoints: [
                        'Severity (4 — Major): Includes major fractures (resident) or chronic musculoskeletal disorders (staff)',
                        'Likelihood (3 — Occasional): Resident transfers happen multiple times a day — "possible or known to occur"',
                        'Risk Score: 4 × 3 = 12 → Medium Risk (Yellow) — Tolerable',
                      ],
                    },
                  },
                  {
                    kind: 'info-table',
                    title: 'Risk Acceptability & Recommended Actions',
                    headers: ['Action Category', 'Requirements'],
                    rows: [
                      {
                        'Action Category': 'Acceptability',
                        Requirements:
                          'The risk is tolerable, but a careful evaluation of the hazard must be carried out.',
                      },
                      {
                        'Action Category': 'Administrative Controls',
                        Requirements:
                          'Implement Safe Work Procedures (SWPs) and ensure staff follow the "1 or 2 person" protocol based on the patient\'s condition.',
                      },
                      {
                        'Action Category': 'Equipment',
                        Requirements:
                          'Use the equipment checklist to ensure mechanical aids (like hoists) are functional to reduce physical strain.',
                      },
                      {
                        'Action Category': 'Management Role',
                        Requirements:
                          'Management attention is required to monitor these controls and ensure they are implemented over time.',
                      },
                    ],
                  },
                  {
                    kind: 'paragraph',
                    content:
                      'A 2-person transfer is a high-coordination task that requires both technical skill and clear communication to prevent musculoskeletal injuries. The following SWP Checklist integrates with the facility\'s WSH management system.',
                  },
                  {
                    kind: 'checklist-table',
                    title: 'Safe Work Procedure (SWP) Checklist: 2-Person Bed-to-Wheelchair Transfer',
                    sections: [
                      {
                        sectionTitle: 'Phase I — Pre-Transfer Preparation (Stop & Assess)',
                        items: [
                          {
                            label: 'Patient Condition Assessment',
                            requirement:
                              'Perform a "size of patient TEST" to confirm that the resident\'s current condition requires a 2-person transfer rather than a 1-person assist.',
                          },
                          {
                            label: 'Health Status Review',
                            requirement:
                              'Check the resident\'s medical condition and mental well-being indicators to ensure they are cooperative and physically stable for the move.',
                          },
                          {
                            label: 'Equipment Inspection',
                            requirement:
                              'Use an equipment checklist to verify that the wheelchair brakes, footrests, and any mechanical aids are in proper working order.',
                          },
                          {
                            label: 'Environmental Check',
                            requirement:
                              'Ensure the workplace layout is clear of trip hazards and allows enough space for both staff members to manoeuvre.',
                          },
                        ],
                      },
                      {
                        sectionTitle: 'Phase II — Setup (Safety Controls)',
                        items: [
                          {
                            label: 'Staff Competency',
                            requirement:
                              'Confirm that both caregivers have completed their WSH training and are within their 3–6 month appraisal period for competency.',
                          },
                          {
                            label: 'PPE & Footwear',
                            requirement:
                              'Ensure both staff members are wearing appropriate Personal Protective Equipment (PPE) and non-slip footwear as per facility procedures.',
                          },
                          {
                            label: "Manufacturer\'s Instructions",
                            requirement:
                              "If using a mechanical hoist, follow the manufacturer\'s instruction manual strictly to avoid unsafe acts.",
                          },
                        ],
                      },
                      {
                        sectionTitle: 'Phase III — Execution & Post-Transfer Actions',
                        items: [
                          {
                            label: 'Team Coordination',
                            requirement:
                              'Establish a "lead" caregiver to count down (e.g., "1, 2, 3, lift") to ensure synchronised movement and promote a positive WSH culture.',
                          },
                          {
                            label: 'Proper Body Mechanics',
                            requirement:
                              'Maintain a wide base of support and keep the resident close to your centre of gravity to minimise the severity of potential back strain.',
                          },
                          {
                            label: 'Resident Comfort',
                            requirement:
                              'Once the transfer is complete, ensure the resident is stable and perform a quick check for any signs of ill-health or discomfort.',
                          },
                          {
                            label: 'Record-Keeping',
                            requirement:
                              'Document the transfer in the WSH logs, specifically noting if any unsafe conditions (like a faulty brake) were discovered.',
                          },
                          {
                            label: 'Reporting',
                            requirement:
                              'If the transfer was difficult, provide feedback to management for the annual review so they can evaluate if the procedure needs to be revised or changed.',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    kind: 'swp-poster',
                    title: 'SWP CHEAT SHEET',
                    subtitle: '2-Person Resident Transfer',
                    goal: 'To maintain a safe environment and prevent workplace accidents through established procedures.',
                    phases: [
                      {
                        phase: '1',
                        title: 'THE PRE-CHECK (Stop & Assess)',
                        items: [
                          'Size of Patient TEST: Confirm the resident\'s weight and physical condition truly require a 2-person transfer rather than 1.',
                          'Medical Status Check: Review the resident\'s current medical condition and mental well-being indicators for cooperation or instability.',
                          'Equipment Checklist: Ensure the wheelchair and any mechanical aids are in good working order before use.',
                          'Layout Clearance: Verify the workplace layout is clear of obstacles to allow for emergency evacuation if needed.',
                        ],
                      },
                      {
                        phase: '2',
                        title: 'THE SETUP (Safety Controls)',
                        items: [
                          'Staff Appraisal: Ensure both caregivers have completed WSH induction and are within their 3–6 month competency appraisal period.',
                          'PPE Ready: Both staff members must wear the selected and maintained Personal Protective Equipment (PPE).',
                          "Manual Mastery: Review the manufacturer\'s instruction manual for any mechanical transfer devices being used.",
                        ],
                      },
                      {
                        phase: '3',
                        title: 'THE MOVE (Safe Execution)',
                        items: [
                          'Follow the SWP: Adhere strictly to established Safe Work Procedures for transfers to minimise musculoskeletal risk.',
                          'Coordinate: Communication between the two staff members is critical to prevent unsafe acts.',
                          'High Risk Control: Remember that a failure in posture or coordination can move this task from "Tolerable" to "High Risk" on the 5×5 Matrix.',
                        ],
                      },
                      {
                        phase: '4',
                        title: 'THE FOLLOW-UP (Checking & Reporting)',
                        items: [
                          'Record Results: Document any incidents or "near misses" in the record-keeping system (lagging indicators).',
                          'Corrective Action: If the equipment was faulty, take immediate corrective action to eliminate the cause of potential accidents.',
                          'Management Feedback: Provide feedback for the quarterly audit or annual Management Review to determine if procedures need to be revised or changed.',
                        ],
                      },
                    ],
                    riskReminder:
                      'The severity of a transfer injury is often Major (4). By using this checklist, we increase our Leading Indicators (control measures implemented) to keep everyone safe. Risk Score: 4 × 3 = 12 → Medium Risk (Tolerable).',
                  },
                ],
              },
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────
    // LEARNING UNIT 4
    // ─────────────────────────────────────────────────────────────────────
    {
      id: 'lu4',
      title: 'LU4. Monitor and Maintain a Safe Work Environment.',
      shortTitle: 'Learning Unit 4',
      subSections: [
        {
          id: 'lu4-k5',
          type: 'knowledge',
          label: 'Knowledge (K5)',
          performanceCriteriaTitle:
            'K5 — Importance of benchmarking WSH performance against national and international standards.',
          entries: [
            {
              id: 'lu4-k5-e1',
              prompts: [
                {
                  id: 'lu4-k5-p1',
                  promptText:
                    'Does your center have provisions for first-aid boxes to ensure the center is safe for the elderly clients, and in accordance with WSH (First-Aid) Regulations?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'paragraph',
                    content:
                      'Yes, the center has first-aid boxes placed at strategic and clearly lit places (example: to the right of main entrance, to the right of kitchen entrance). In accordance with the Workplace Safety and Health (WSH) Management System outlined in our training materials and Singapore\'s national guidelines, our elder care center maintains fully equipped first-aid boxes to ensure a safe environment for all seniors.',
                  },
                  {
                    kind: 'info-table',
                    title: 'Regulatory Compliance — WSH (First-Aid) Regulations 2006',
                    headers: ['Workplace Population', 'Required First-Aid Provision'],
                    rows: [
                      {
                        'Workplace Population': '1–25 persons',
                        'Required First-Aid Provision': '1 × Box A',
                      },
                      {
                        'Workplace Population': '26–50 persons',
                        'Required First-Aid Provision': '1 × Box B (or 2 × Box A)',
                      },
                      {
                        'Workplace Population': '51–100 persons',
                        'Required First-Aid Provision': '1 × Box C (or 2 × Box B / 4 × Box A)',
                      },
                      {
                        'Workplace Population': 'Every Floor',
                        'Required First-Aid Provision':
                          'At least one box must be available on every level of the building',
                      },
                    ],
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Standard MOM Box Contents (Box A/B)',
                      description:
                        'Our first-aid boxes contain the mandatory MOM-standard items, with additional enhancements recommended for geriatric care:',
                      bulletPoints: [
                        'Dressings & Bandages: Sterile adhesive dressings, crepe bandages (5cm and 10cm), absorbent gauze, and triangular bandages',
                        'Tools: Scissors, safety pins, and a diagnostic torchlight',
                        'Protection: Disposable gloves, eye shields, and sterile eye pads',
                        'Resuscitation: One-way resuscitation masks for CPR',
                        'Cleaning: Sterile water or saline (if tap water is unavailable)',
                        'Elderly-Specific: Clinical thermometers, blood pressure cuffs, blood sugar monitoring equipment',
                        'Mobility Support: Access to nearby wheelchairs and stretchers',
                      ],
                    },
                  },
                  {
                    kind: 'paragraph',
                    content:
                      'Maintenance Protocol: A designated person checks each box weekly to replenish depleted items and ensure no supplies are expired. First-aid boxes are kept in well-lit, easily accessible locations and are never locked or obstructed.',
                  },
                ],
              },
            },
          ],
        },
        {
          id: 'lu4-k8',
          type: 'knowledge',
          label: 'Knowledge (K8)',
          performanceCriteriaTitle:
            'K8 — Importance of assessing and reviewing workplace risk management activities in accordance with the guidelines provided by the WSH Act.',
          entries: [
            {
              id: 'lu4-k8-e1',
              prompts: [
                {
                  id: 'lu4-k8-p1',
                  promptText:
                    'Does your center have a Risk Management Policy and related Standard Operating Procedures (SOP)? Describe the Fire Evacuation Plan.',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'description-block',
                    content: {
                      title: '4.3 Emergency Preparedness and Response',
                      description:
                        'Planning and preparing for emergencies is an essential part of hazard prevention and control. An effective emergency response plan should include:',
                      bulletPoints: [
                        'Corporate Policy: Emphasises the importance of emergency response planning and affirms management support',
                        'Emergency Planning and Response Committee: Created to implement and execute contingency plans',
                        'Incident Command System: A command and control system to coordinate actions during an emergency',
                        'Emergency Evacuation Procedures: Elaborates evacuation routes and assembly areas for partial or full evacuation',
                        'Protection of Vital Records and Equipment: Designated employees trained in emergency shut-down or lock-out procedures',
                        'Training: All levels of employees trained in evacuation procedures, routes, shut-down procedures, and emergency equipment usage',
                        'Regular Review and Updating: Emergency response plan regularly reviewed and practice drills carried out periodically',
                      ],
                    },
                  },
                  {
                    kind: 'mermaid-diagram',
                    title: 'Medical Incident Response Protocol',
                    code: `flowchart TD
    A([Incident Occurs]) --> B{Is it a\\nmedical emergency?}
    B -- Yes --> C[Call for help / shout]
    B -- No --> D[Document as Near Miss]
    C --> E[Assess the scene\\nfor safety]
    E --> F[Call 995 SCDF\\nif life-threatening]
    E --> G[Administer First Aid\\nif trained]
    F --> H[Notify Incident\\nCommander]
    G --> H
    H --> I[Escort resident\\nto safe area]
    I --> J[Complete Incident\\nReport Form]
    J --> K[Notify MOM / MoH\\nif reportable]
    K --> L[Conduct Root\\nCause Analysis]
    L --> M[Implement Corrective\\nAction Plan]
    M --> N[Update SOP\\nand Disseminate]
    D --> J
    style A fill:#ef4444,color:#fff,stroke:#dc2626
    style F fill:#ef4444,color:#fff,stroke:#dc2626
    style K fill:#f97316,color:#fff,stroke:#ea580c
    style M fill:#22c55e,color:#fff,stroke:#16a34a
    style N fill:#22c55e,color:#fff,stroke:#16a34a`,
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Fire Evacuation Procedure',
                      description: 'If you discover a fire:',
                      bulletPoints: [
                        'Do not panic — Alert others by shouting',
                        'Activate the fire alarm at the nearest manual call point by breaking its glass',
                        'Evacuate the room/area and get everyone out without endangering yourself',
                        'If possible, close the door of the affected room to contain the fire',
                        'Dial 995 for the SCDF',
                        'Turn off gas mains (if applicable) if you can reach them',
                        'Evacuate the building in an orderly manner via the stairs — do not use the lift',
                        'Do not return to the building until the authorities announce that it is safe to do so',
                        'Fight the fire only if you are able to and without endangering yourself and others',
                      ],
                    },
                  },
                  {
                    kind: 'fire-extinguisher-guide',
                    title: 'Fire Extinguisher Guide',
                    rows: [
                      {
                        type: 'Water',
                        effectiveAgainst: 'Ordinary combustible materials — paper, cloth, wood, plastics (Class A)',
                        warning: 'NEVER use on oil fires — will cause fire to spread',
                        color: 'bg-red-100',
                      },
                      {
                        type: 'Carbon Dioxide (CO₂)',
                        effectiveAgainst: 'Flammable liquids and live electrical equipment; also for combustible materials',
                        color: 'bg-gray-100',
                      },
                      {
                        type: 'Dry Chemical Powder',
                        effectiveAgainst: 'Similar to CO₂ — flammable liquids and electrical equipment (Class B & C)',
                        color: 'bg-blue-100',
                      },
                    ],
                  },
                  {
                    kind: 'checklist-table',
                    title: 'Safety Audit Compliance Checklist',
                    sections: [
                      {
                        sectionTitle: 'Section 1: Emergency Preparedness',
                        items: [
                          {
                            label: 'Corporate Policy',
                            requirement:
                              'Is there a signed policy affirming management support for emergency initiatives?',
                          },
                          {
                            label: 'Incident Command',
                            requirement:
                              'Is a clear chain of command (roles/responsibilities) established for all hours?',
                          },
                          {
                            label: 'External Contacts',
                            requirement:
                              'Are contact protocols for SCDF, NEA, MOH, and MOM documented?',
                          },
                          {
                            label: 'Vital Records',
                            requirement:
                              'Are there specific shut-down procedures for critical equipment and record protection?',
                          },
                          {
                            label: 'Drills & Records',
                            requirement:
                              'Are practice drills scheduled, recorded, and reviewed by management?',
                          },
                        ],
                      },
                      {
                        sectionTitle: 'Section 2: Fire Safety & Evacuation',
                        items: [
                          {
                            label: 'Fire Safety Manager',
                            requirement:
                              'Has a Fire Safety Manager (FSM) been appointed as per SCDF requirements?',
                          },
                          {
                            label: 'Evacuation Routes',
                            requirement:
                              'Are routes and assembly areas clearly identified for patients, staff, and contractors?',
                          },
                          {
                            label: 'Manual Call Points',
                            requirement:
                              'Are fire alarm glass-break points accessible and functional?',
                          },
                          {
                            label: 'Extinguisher Type',
                            requirement:
                              'Are the correct extinguishers (Water/CO₂/Dry Powder) placed near relevant hazards?',
                          },
                          {
                            label: 'Maintenance',
                            requirement:
                              'Is there a documented schedule for fire protection equipment maintenance?',
                          },
                        ],
                      },
                      {
                        sectionTitle: 'Section 3: First Aid (WSH) Regulations',
                        items: [
                          {
                            label: 'Box Distribution',
                            requirement:
                              'Is there a sufficient number of boxes on every floor of the building?',
                          },
                          {
                            label: 'Box Maintenance',
                            requirement:
                              'Are boxes clearly identified, well-lit, and checked "frequently" for usable items?',
                          },
                          {
                            label: 'First-Aider Ratio',
                            requirement:
                              'Is there at least 1 first-aider for every 100 employees?',
                          },
                          {
                            label: 'Training Records',
                            requirement:
                              'Do all first-aiders have current, Commissioner-approved training/re-training?',
                          },
                          {
                            label: 'First-Aid Room',
                            requirement:
                              'If the facility has >500 persons, is a dedicated first-aid room maintained?',
                          },
                          {
                            label: 'Special Facilities',
                            requirement:
                              'Are drenching/flushing facilities available if toxic/corrosive substances are present?',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    kind: 'contact-list',
                    title: 'Emergency Contact List',
                    groups: [
                      {
                        groupTitle: '1. External Emergency Services',
                        headers: ['Agency', 'Purpose', 'Contact Number'],
                        rows: [
                          ['SCDF (Fire / Ambulance)', 'Fire, rescue, or life-threatening medicals', '995'],
                          ['Police', 'Crime, security breach, or public order', '999'],
                          ['Non-Emergency Ambulance', 'Non-life-threatening medical transport', '1777'],
                        ],
                      },
                      {
                        groupTitle: '2. Regulatory & Community Services',
                        headers: ['Agency', 'Department', 'Contact Number'],
                        rows: [
                          ['MOH', 'Ministry of Health (Healthcare Standards)', '6325 9220'],
                          ['MOM', 'Ministry of Manpower (WSH Reporting)', '6438 5122'],
                          ['NEA', 'National Environment Agency', '6225 5632'],
                          ['SCDF (General)', 'General Enquiries / Fire Safety', '1800 286 5555'],
                        ],
                      },
                      {
                        groupTitle: '3. Essential Utilities & Services',
                        headers: ['Service', 'Company/Provider', 'Contact Number'],
                        rows: [
                          ['Power/Electricity', 'SP Group (Power Failure)', '1800 778 8888'],
                          ['Water Supply', 'PUB', '1800 225 5782'],
                          ['Gas Supply', 'City Energy (Gas Leak/Emergency)', '1800 752 1800'],
                        ],
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
>>>>>>> 31fee721fb260985b1d7888b9c1702e276963779
