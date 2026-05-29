export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "claim-risk-intake-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Claim Risk Intake and produce an audit-ready action plan.",
      "placeholder": "Describe the decision or workflow goal",
      "options": [],
      "required": true,
      "source": "Claims Litigation Early Warning"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste records, notes, documents, metrics, or evidence for Claim Risk Intake.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "Claims Litigation Early Warning"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "Claims Litigation Early Warning"
    }
  ],
  "litigation-propensity-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Litigation Propensity and produce an audit-ready action plan.",
      "placeholder": "Describe the decision or workflow goal",
      "options": [],
      "required": true,
      "source": "Claims Litigation Early Warning"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste records, notes, documents, metrics, or evidence for Litigation Propensity.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "Claims Litigation Early Warning"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "Claims Litigation Early Warning"
    }
  ],
  "evidence-gap-review-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Evidence Gap Review and produce an audit-ready action plan.",
      "placeholder": "Describe the decision or workflow goal",
      "options": [],
      "required": true,
      "source": "Claims Litigation Early Warning"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste records, notes, documents, metrics, or evidence for Evidence Gap Review.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "Claims Litigation Early Warning"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "Claims Litigation Early Warning"
    }
  ],
  "reserve-risk-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Reserve Risk and produce an audit-ready action plan.",
      "placeholder": "Describe the decision or workflow goal",
      "options": [],
      "required": true,
      "source": "Claims Litigation Early Warning"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste records, notes, documents, metrics, or evidence for Reserve Risk.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "Claims Litigation Early Warning"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "Claims Litigation Early Warning"
    }
  ],
  "jurisdiction-patterns-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Jurisdiction Patterns and produce an audit-ready action plan.",
      "placeholder": "Describe the decision or workflow goal",
      "options": [],
      "required": true,
      "source": "Claims Litigation Early Warning"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste records, notes, documents, metrics, or evidence for Jurisdiction Patterns.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "Claims Litigation Early Warning"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "Claims Litigation Early Warning"
    }
  ],
  "counsel-assignment-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Counsel Assignment and produce an audit-ready action plan.",
      "placeholder": "Describe the decision or workflow goal",
      "options": [],
      "required": true,
      "source": "Claims Litigation Early Warning"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste records, notes, documents, metrics, or evidence for Counsel Assignment.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "Claims Litigation Early Warning"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "Claims Litigation Early Warning"
    }
  ],
  "settlement-strategy-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Settlement Strategy and produce an audit-ready action plan.",
      "placeholder": "Describe the decision or workflow goal",
      "options": [],
      "required": true,
      "source": "Claims Litigation Early Warning"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste records, notes, documents, metrics, or evidence for Settlement Strategy.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "Claims Litigation Early Warning"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "Claims Litigation Early Warning"
    }
  ],
  "adjuster-escalations-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Adjuster Escalations and produce an audit-ready action plan.",
      "placeholder": "Describe the decision or workflow goal",
      "options": [],
      "required": true,
      "source": "Claims Litigation Early Warning"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste records, notes, documents, metrics, or evidence for Adjuster Escalations.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "Claims Litigation Early Warning"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "Claims Litigation Early Warning"
    }
  ],
  "litigation-watchlist-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Litigation Watchlist and produce an audit-ready action plan.",
      "placeholder": "Describe the decision or workflow goal",
      "options": [],
      "required": true,
      "source": "Claims Litigation Early Warning"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste records, notes, documents, metrics, or evidence for Litigation Watchlist.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "Claims Litigation Early Warning"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "Claims Litigation Early Warning"
    }
  ],
  "executive-loss-report-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve Executive Loss Report and produce an audit-ready action plan.",
      "placeholder": "Describe the decision or workflow goal",
      "options": [],
      "required": true,
      "source": "Claims Litigation Early Warning"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste records, notes, documents, metrics, or evidence for Executive Loss Report.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "Claims Litigation Early Warning"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "Claims Litigation Early Warning"
    }
  ]
};
