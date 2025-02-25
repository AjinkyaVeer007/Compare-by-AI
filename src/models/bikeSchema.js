import { SchemaType } from "@google/generative-ai";

export const bikeSchema = {
  description: "Create an object for comparision of given two bikes",
  type: SchemaType.OBJECT,
  properties: {
    comparision: {
      description: "Comparision of given two bikes",
      type: SchemaType.OBJECT,
      nullable: false,
      properties: {
        engine: {
          type: SchemaType.OBJECT,
          description: "Engine of bikes",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Engine of first bike",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Engine of second bike",
              nullable: false,
            },
          },
        },
        fuelType: {
          type: SchemaType.OBJECT,
          description: "Fuel type of bikes",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Fuel type of first bike",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Fuel type of second bike",
              nullable: false,
            },
          },
        },
        power: {
          type: SchemaType.OBJECT,
          description: "Maximum power of bikes",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Maximum power of first bike",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Maximum power of second bike",
              nullable: false,
            },
          },
        },
        torque: {
          type: SchemaType.OBJECT,
          description: "Maximum torque of bikes",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Maximum torque of first bike",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Maximum torque of second bike",
              nullable: false,
            },
          },
        },
        transmission: {
          type: SchemaType.OBJECT,
          description: "Transmission of bikes",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Transmission of first bike",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Transmission of second bike",
              nullable: false,
            },
          },
        },
        fuelTankCapacity: {
          type: SchemaType.OBJECT,
          description: "Fuel Tank Capacity of bikes",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Fuel Tank Capacity of first bike",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Fuel Tank Capacity of second bike",
              nullable: false,
            },
          },
        },
        suspension: {
          type: SchemaType.OBJECT,
          description: "Suspension of bikes",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Suspension of first bike",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Suspension of second bike",
              nullable: false,
            },
          },
        },
        brakes: {
          type: SchemaType.OBJECT,
          description: "Brakes type of bikes",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Brakes type of first bike",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Brakes type of second bike",
              nullable: false,
            },
          },
        },
        rating: {
          type: SchemaType.OBJECT,
          description: "NCAP Rating of bikes",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "NCAP Rating of first bike",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "NCAP Rating of second bike",
              nullable: false,
            },
          },
        },
        headLights: {
          type: SchemaType.OBJECT,
          description: "Head lights of bikes",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Head lights of first bike",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Head lights of second bike",
              nullable: false,
            },
          },
        },
        tailLights: {
          type: SchemaType.OBJECT,
          description: "Tail light of bikes",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Tail light of first bike",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Tail light of second bike",
              nullable: false,
            },
          },
        },
        warranty: {
          type: SchemaType.OBJECT,
          description: "Warranty of bikes",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Warranty of first bike",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Warranty of second bike",
              nullable: false,
            },
          },
        },
        colors: {
          type: SchemaType.OBJECT,
          description: "Available colors of bikes",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Available colors of first bike",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Available colors of second bike",
              nullable: false,
            },
          },
        },
        price: {
          type: SchemaType.OBJECT,
          description: "Price in india of bikes",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Price in india of first bike",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Price in india of second bike",
              nullable: false,
            },
          },
        },
      },
    },
    graphicalData: {
      description: "Create an object for rating of features of two bikes",
      type: SchemaType.OBJECT,
      nullable: false,
      properties: {
        engine: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for engine by comparing two bikes",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for engine of bike 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for engine of bike 2",
            },
          },
        },
        fuelType: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for fuel type by comparing two bikes",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for fuel type of bike 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for fuel type of bike 2",
            },
          },
        },
        power: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for power by comparing two bikes",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for power of bike 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for power of bike 2",
            },
          },
        },
        torque: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for torque by comparing two bikes",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for torque of bike 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for torque of bike 2",
            },
          },
        },
        transmission: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for transmission by comparing two bikes",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for transmission of bike 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for transmission of bike 2",
            },
          },
        },
        fuelTankCapacity: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for fuel tank capacity by comparing two bikes",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description:
                "Rate in between 1 to 5 for fuel tank capacity of bike 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description:
                "Rate in between 1 to 5 for fuel tank capacity of bike 2",
            },
          },
        },
        suspension: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for suspension by comparing two bikes",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for suspension of bike 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for suspension of bike 2",
            },
          },
        },
        brakes: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for break type by comparing two bikes",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for break type of bike 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for break type of bike 2",
            },
          },
        },
        rating: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for NCAP Rating by comparing two bikes",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for NCAP Rating of bike 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for NCAP Rating of bike 2",
            },
          },
        },
        headLights: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for head lights by comparing two bikes",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for head lights of bike 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for head lights of bike 2",
            },
          },
        },
        tailLights: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for tail lights by comparing two bikes",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for tail lights of bike 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for tail lights of bike 2",
            },
          },
        },
        warranty: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for warranty by comparing two bikes",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for warranty of bike 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for warranty of bike 2",
            },
          },
        },
        colors: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for colors by comparing two bikes",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for colors of bike 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for colors of bike 2",
            },
          },
        },
        price: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for price in india by comparing two bikes",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description:
                "Rate in between 1 to 5 for price in india of bike 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description:
                "Rate in between 1 to 5 for price in india of bike 2",
            },
          },
        },
      },
    },
    winner: {
      type: SchemaType.STRING,
      description: "Based on the result give the winner bike of one of them",
    },
  },
};
