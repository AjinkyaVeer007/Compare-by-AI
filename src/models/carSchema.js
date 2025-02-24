import { SchemaType } from "@google/generative-ai";

export const carSchema = {
  description: "Create an object for comparision of given two smartphones",
  type: SchemaType.OBJECT,
  properties: {
    comparision: {
      description: "Comparision of given two smartphones",
      type: SchemaType.OBJECT,
      nullable: false,
      properties: {
        displaySize: {
          type: SchemaType.OBJECT,
          description: "Display size of smartphones",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Display size of first smartphone",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Display size of second smartphone",
              nullable: false,
            },
          },
        },
        displayType: {
          type: SchemaType.OBJECT,
          description: "Display type of smartphones",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Display type of first smartphone",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Display type of second smartphone",
              nullable: false,
            },
          },
        },
        os: {
          type: SchemaType.OBJECT,
          description: "Operating system of smartphones",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Operating system of first smartphone",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Operating system of second smartphone",
              nullable: false,
            },
          },
        },
        ram: {
          type: SchemaType.OBJECT,
          description: "Ram of smartphones",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Ram of first smartphone",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Ram of second smartphone",
              nullable: false,
            },
          },
        },
        processor: {
          type: SchemaType.OBJECT,
          description: "Processor of smartphones",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Processor of first smartphone",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Processor of second smartphone",
              nullable: false,
            },
          },
        },
        storage: {
          type: SchemaType.OBJECT,
          description: "Storage of smartphone",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Storage of first smartphone",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Storage of first smartphone",
              nullable: false,
            },
          },
        },
        frontCamera: {
          type: SchemaType.OBJECT,
          description: "Front camera of smartphone",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Front camera of first smartphone",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Front camera of second smartphone",
              nullable: false,
            },
          },
        },
        backCamera: {
          type: SchemaType.OBJECT,
          description: "Back camera of smartphone",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Back camera of first smartphone",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Back camera of second smartphone",
              nullable: false,
            },
          },
        },
        battery: {
          type: SchemaType.OBJECT,
          description: "Battery details of smartphone",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Battery details of first smartphone",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Battery details of second smartphone",
              nullable: false,
            },
          },
        },
      },
    },
    graphicalData: {
      description: "Create an object for rating of features of two smartphones",
      type: SchemaType.OBJECT,
      nullable: false,
      properties: {
        displaySize: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for display size by comparing two smartphones",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description:
                "Rate in between 1 to 5 for display size of smartphone 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description:
                "Rate in between 1 to 5 for display size of smartphone 2",
            },
          },
        },
        displayType: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for display type by comparing two smartphones",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description:
                "Rate in between 1 to 5 for display type of smartphone 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description:
                "Rate in between 1 to 5 for display type of smartphone 2",
            },
          },
        },
        os: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for operating system by comparing two smartphones",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description:
                "Rate in between 1 to 5 for operating system of smartphone 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description:
                "Rate in between 1 to 5 for operating system of smartphone 2",
            },
          },
        },
        ram: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for ram by comparing two smartphones",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for ram of smartphone 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for ram of smartphone 2",
            },
          },
        },
        processor: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for processor by comparing two smartphones",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description:
                "Rate in between 1 to 5 for processor of smartphone 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description:
                "Rate in between 1 to 5 for processor of smartphone 2",
            },
          },
        },
        storage: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for storage by comparing two smartphones",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for storage of smartphone 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for storage of smartphone 2",
            },
          },
        },
        frontCamera: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for front camera by comparing two smartphones",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description:
                "Rate in between 1 to 5 for front camera of smartphone 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description:
                "Rate in between 1 to 5 for front camera of smartphone 2",
            },
          },
        },
        backCamera: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for back camera by comparing two smartphones",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description:
                "Rate in between 1 to 5 for back camera of smartphone 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description:
                "Rate in between 1 to 5 for back camera of smartphone 2",
            },
          },
        },
        battery: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for battery by comparing two smartphones",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for battery of smartphone 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for battery of smartphone 2",
            },
          },
        },
      },
    },
    winner: {
      type: SchemaType.STRING,
      description:
        "Based on the result give the winner smartphone of one of them",
    },
  },
};
