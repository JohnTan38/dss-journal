import type { JournalModule } from '@/types/journal';

export const sscPmt4024: JournalModule = {
  moduleId: 'ssc-pmt-4024',
  moduleCode: 'SSC-PMT-4024-1.1',
  moduleName: 'Social Service Programme Implementation',
  moduleNumber: 'M8',
  theme: {
    primary: 'from-emerald-600 to-cyan-500',
    accent: 'emerald',
    knowledgeBadgeClass: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
    abilitiesBadgeClass: 'bg-cyan-100 text-cyan-800 border border-cyan-200',
    luHeaderBgClass: 'bg-gradient-to-r from-slate-800 via-emerald-900 to-cyan-800',
    luIconClass: 'text-cyan-300',
    promptCardClass: 'bg-emerald-50 border border-emerald-200',
    reflectionCardClass: 'bg-cyan-50 border border-cyan-200',
    sidebarActiveClass: 'bg-emerald-100 text-emerald-800',
    buttonPrimaryClass:
      'bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white',
    coverTitleClass:
      'bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent',
  },
  coverSheet: {
    institution: 'Hua Mei Training Academy',
    program: 'Diploma in Social Service',
    moduleCode: 'SSC-PMT-4024-1.1',
    moduleName: 'Social Service Programme Implementation',
    moduleNumber: 'Module 8 (M8)',
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
      label: 'Original M8 reflective journal PDF',
      href: '/assets/M8-SSC-PMT-4024-1.1-Social-Service-Program-Implementation-v1.2-M8-RJ.pdf',
      filename:
        'M8-SSC-PMT-4024-1.1-Social-Service-Program-Implementation-v1.2-M8-RJ.pdf',
    },
  ],
  learningUnits: [
    {
      id: 'lu1',
      title:
        'LO1: Adapt best practices and strategies to develop and implement a fundraising programme to suit client needs or programme objectives.',
      shortTitle: 'Learning Unit 1',
      subSections: [
        {
          id: 'lu1-a1',
          type: 'abilities',
          label: 'Abilities (A1)',
          performanceCriteriaTitle:
            'A1 - Adapt programmes and services to suit needs of client or programme objectives.',
          entries: [
            {
              id: 'lu1-a1-e1',
              prompts: [
                {
                  id: 'lu1-a1-p1',
                  promptText:
                    'How can appropriate social service programmes be developed for seniors aged 65 and above?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Project Summary',
                      description:
                        'The project targets seniors aged 65 and above living in 2-room rental units at Blk 310 Clementi Ave 4. It combines a structured community needs assessment, pilot intervention, programme design, and survey tools.',
                      bulletPoints: [
                        'Identify health, social, emotional, and functional risks among target seniors.',
                        'Develop a realistic action plan with local assets and collaborative delivery.',
                        'Align with Healthier SG and Age Well SG priorities for preventive, community-rooted ageing in place.',
                      ],
                    },
                  },
                  {
                    kind: 'info-table',
                    title: 'Location and Key Touchpoints',
                    headers: ['Touchpoint', 'Role'],
                    rows: [
                      {
                        Touchpoint: 'Blk 310 Clementi Ave 4',
                        Role: 'Core site for outreach and needs assessment.',
                      },
                      {
                        Touchpoint: 'SLEC, SASCO, RN, CC, SSO, FSC',
                        Role: 'Immediate local partners and community access points.',
                      },
                      {
                        Touchpoint: 'Healthier SG and Age Well SG',
                        Role: 'System alignment for AACs as health-social hubs.',
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },
        {
          id: 'lu1-k1',
          type: 'knowledge',
          label: 'Knowledge (K1)',
          performanceCriteriaTitle:
            'K1 - Best practices and strategies to adapt programmes and services.',
          entries: [
            {
              id: 'lu1-k1-e1',
              prompts: [
                {
                  id: 'lu1-k1-p1',
                  promptText:
                    'What best practices and strategies support adaptation of programmes and services?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'info-table',
                    title: 'Community Needs Assessment - Six-Step Framework',
                    headers: ['Step', 'Application'],
                    rows: [
                      {
                        Step: '1. Profile the Community',
                        Application:
                          'Review mature estates, older HDB blocks, and senior concentration to identify age-friendly support needs.',
                      },
                      {
                        Step: '2. Define Scope',
                        Application:
                          'Target 100 seniors and deploy 10 trained volunteers working in pairs for safety and PDPA-compliant data handling.',
                      },
                      {
                        Step: '3. Identify Assets',
                        Application:
                          'Map AACs, SACs, FSCs, SSOs, AIC Silver Generation Office, community hubs, faith groups, hawkers, clinics, and sponsors.',
                      },
                      {
                        Step: '4. Connect Stakeholders',
                        Application:
                          'Align social workers, MSWs, AIC care coordinators, AAC managers, NCSS, grassroots leaders, caregivers, and businesses.',
                      },
                      {
                        Step: '5. Collect Data',
                        Application:
                          'Use interviews and observations across emotional, cognitive, social, and physical well-being domains.',
                      },
                      {
                        Step: '6. Analyse and Prioritise',
                        Application:
                          'Triangulate medication, falls, loneliness, protective factors, and gaps requiring early intervention.',
                      },
                    ],
                  },
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Adaptation principles',
                      description:
                        'The pilot workshop for high-risk seniors and caregivers uses Asset-Based Community Development and Many Helping Hands.',
                      bulletPoints: [
                        'Co-create content with seniors to strengthen social connections.',
                        'Meet seniors in familiar settings such as hawker centres and void decks.',
                        'Keep sessions brief, modular, and digestible.',
                        'Integrate health-social screening and social prescribing referrals.',
                        'Use trust-based engagement, simple evaluation, transparent budgets, and clear coordination timelines.',
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
      id: 'lu2',
      title:
        'LO2: Build and utilise networks of community stakeholders and social service organisations to extend support and participation in programmes.',
      shortTitle: 'Learning Unit 2',
      subSections: [
        {
          id: 'lu2-a4',
          type: 'abilities',
          label: 'Abilities (A4)',
          performanceCriteriaTitle:
            'A4 - Utilise networks within the community and social service organisations.',
          entries: [
            {
              id: 'lu2-a4-e1',
              prompts: [
                {
                  id: 'lu2-a4-p1',
                  promptText:
                    'How does AIC support aged homes and community care through networks and coordination?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Agency for Integrated Care as care aggregator',
                      description:
                        'AIC coordinates support for aged homes and community care facilities through referral, subsidies, capability building, and digitalisation.',
                      bulletPoints: [
                        'Manages referrals and placement into appropriate long-term care settings.',
                        'Provides a single point of contact through AIC hotline and AIC Links.',
                        'Administers means-tested subsidies, CareShield Life, ElderFund, and caregiving grants.',
                        'Supports manpower development, staff training, and digital transformation.',
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
            'K4 - Methods to build community stakeholder support for programmes.',
          entries: [
            {
              id: 'lu2-k4-e1',
              prompts: [
                {
                  id: 'lu2-k4-p1',
                  promptText:
                    'What methods can build community stakeholder support for programmes?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Stakeholder support methods',
                      description:
                        'Community support is built through grassroots organisations, cross-sector partnerships, and digital platforms.',
                      bulletPoints: [
                        'Partner with People Association entities such as Residents Network for ground pulse, venues, and access to residents.',
                        'Engage businesses for skilled-based volunteerism and corporate social responsibility.',
                        'Work with inter-racial and religious confidence circles for culturally diverse welfare support.',
                        'Use Giving.sg for credible fundraising and volunteer recruitment.',
                        'Use community apps and local messaging groups to share stories and upcoming activities.',
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
        'LO3: Review a fundraising programme to identify improvement areas and address causes of client disengagement.',
      shortTitle: 'Learning Unit 3',
      subSections: [
        {
          id: 'lu3-a2',
          type: 'abilities',
          label: 'Abilities (A2)',
          performanceCriteriaTitle:
            'A2 - Develop strategies to address causes for client disengagement.',
          entries: [
            {
              id: 'lu3-a2-e1',
              prompts: [
                {
                  id: 'lu3-a2-p1',
                  promptText:
                    'What strategies address the causes of client disengagement?',
                },
              ],
              studentReflection: {
                type: 'composite',
                components: [
                  {
                    kind: 'description-block',
                    content: {
                      title: 'Client disengagement strategies',
                      description:
                        'Effective strategies address programme design, external barriers, caregiver stress, client agency, and re-engagement.',
                      bulletPoints: [
                        'Deliver promised outcomes and communicate realistic goals from the start.',
                        'Use milestones and feedback-driven adjustments to sustain motivation.',
                        'Connect caregivers to AIC respite care, support groups, and financial assistance.',
                        'Deploy befriending volunteers to maintain soft connection with disengaged seniors.',
                        'Co-create activities and provide platforms for seniors to share voice and experience.',
                        'Use culturally relevant content, native languages, and gradual re-introduction for anxious clients.',
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
  ],
};
