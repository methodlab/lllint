export const formatFunction = {
  name: "format",
  description: "Format the code and provide any notes.",
  parameters: {
    type: "object",
    properties: {
      code: {
        type: "string",
        description: "The formatted code.",
      },
      notes: {
        type: "array",
        description: "An array of notes about the code.",
        items: {
          type: "object",
          properties: {
            message: {
              type: "string",
              description: "The message describing the note.",
            },
            lineNumber: {
              type: "number",
              description: "The line number associated with the note.",
            },
            guidelineNumber: {
              type: "string",
              description: "The guideline number associated with the note.",
            }
          },
          required: ["guidelineNumber", "message"],
        }
      }
    },
    required: ["code"],
    additionalProperties: false
  }
};

export interface FormatResult {
  formattedCode: string
  notes: Array<{ guidelineNumber: string; message: string; lineNumber?: number }>
}