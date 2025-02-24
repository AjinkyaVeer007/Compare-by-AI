import { SchemaType } from "@google/generative-ai";

export const carSchema = {
  description: "Create an object for comparision of given two cars",
  type: SchemaType.OBJECT,
  properties: {
    comparision: {
      description: "Comparision of given two cars",
      type: SchemaType.OBJECT,
      nullable: false,
      properties: {
        engine: {
          type: SchemaType.OBJECT,
          description: "Engine of cars",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Engine of first car",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Engine of second car",
              nullable: false,
            },
          },
        },
        fuelType: {
          type: SchemaType.OBJECT,
          description: "Fuel type of cars",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Fuel type of first car",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Fuel type of second car",
              nullable: false,
            },
          },
        },
        power: {
          type: SchemaType.OBJECT,
          description: "Maximum power of cars",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Maximum power of first car",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Maximum power of second car",
              nullable: false,
            },
          },
        },
        torque: {
          type: SchemaType.OBJECT,
          description: "Maximum torque of cars",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Maximum torque of first car",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Maximum torque of second car",
              nullable: false,
            },
          },
        },
        driveTrain: {
          type: SchemaType.OBJECT,
          description: "Drivetrain of cars",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Drivetrain of first car",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Drivetrain of second car",
              nullable: false,
            },
          },
        },
        transmission: {
          type: SchemaType.OBJECT,
          description: "Transmission of cars",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Transmission of first car",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Transmission of second car",
              nullable: false,
            },
          },
        },
        emissionStandard: {
          type: SchemaType.OBJECT,
          description: "Emission Standard of cars",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Emission Standard of first car",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Emission Standard of first car",
              nullable: false,
            },
          },
        },
        seatingCapacity: {
          type: SchemaType.OBJECT,
          description: "Seating Capacity of cars",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Seating Capacity of first car",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Seating Capacity of second car",
              nullable: false,
            },
          },
        },
        fuelTankCapacity: {
          type: SchemaType.OBJECT,
          description: "Fuel Tank Capacity of cars",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Fuel Tank Capacity of first car",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Fuel Tank Capacity of second car",
              nullable: false,
            },
          },
        },
        suspension: {
          type: SchemaType.OBJECT,
          description: "Suspension of cars",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Suspension of first car",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Suspension of second car",
              nullable: false,
            },
          },
        },
        brakes: {
          type: SchemaType.OBJECT,
          description: "Brakes type of cars",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Brakes type of first car",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Brakes type of second car",
              nullable: false,
            },
          },
        },
        rating: {
          type: SchemaType.OBJECT,
          description: "NCAP Rating of cars",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "NCAP Rating of first car",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "NCAP Rating of second car",
              nullable: false,
            },
          },
        },
        airbags: {
          type: SchemaType.OBJECT,
          description: "Airbags of cars",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Airbags of first car",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Airbags of second car",
              nullable: false,
            },
          },
        },
        headLights: {
          type: SchemaType.OBJECT,
          description: "Head lights of cars",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Head lights of first car",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Head lights of second car",
              nullable: false,
            },
          },
        },
        tailLights: {
          type: SchemaType.OBJECT,
          description: "Tail light of cars",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Tail light of first car",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Tail light of second car",
              nullable: false,
            },
          },
        },
        warranty: {
          type: SchemaType.OBJECT,
          description: "Warranty of cars",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Warranty of first car",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Warranty of second car",
              nullable: false,
            },
          },
        },
        colors: {
          type: SchemaType.OBJECT,
          description: "Available colors of cars",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Available colors of first car",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Available colors of second car",
              nullable: false,
            },
          },
        },
        price: {
          type: SchemaType.OBJECT,
          description: "Price in india of cars",
          nullable: false,
          properties: {
            0: {
              type: SchemaType.STRING,
              description: "Price in india of first car",
              nullable: false,
            },
            1: {
              type: SchemaType.STRING,
              description: "Price in india of second car",
              nullable: false,
            },
          },
        },
      },
    },
    graphicalData: {
      description: "Create an object for rating of features of two cars",
      type: SchemaType.OBJECT,
      nullable: false,
      properties: {
        engine: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for engine by comparing two cars",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for engine of car 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for engine of car 2",
            },
          },
        },
        fuelType: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for fuel type by comparing two cars",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for fuel type of car 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for fuel type of car 2",
            },
          },
        },
        power: {
          type: SchemaType.OBJECT,
          description: "Rate in between 1 to 5 for power by comparing two cars",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for power of car 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for power of car 2",
            },
          },
        },
        torque: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for torque by comparing two cars",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for torque of car 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for torque of car 2",
            },
          },
        },
        driveTrain: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for drive train by comparing two cars",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for drive train of car 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for drive train of car 2",
            },
          },
        },
        transmission: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for transmission by comparing two cars",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for transmission of car 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for transmission of car 2",
            },
          },
        },
        emissionStandard: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for emission standard by comparing two cars",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description:
                "Rate in between 1 to 5 for emission standard of car 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description:
                "Rate in between 1 to 5 for emission standard of car 2",
            },
          },
        },
        seatingCapacity: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for seat capacity by comparing two cars",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for seat capacity of car 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for seat capacity of car 2",
            },
          },
        },
        fuelTankCapacity: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for fuel tank capacity by comparing two cars",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description:
                "Rate in between 1 to 5 for fuel tank capacity of car 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description:
                "Rate in between 1 to 5 for fuel tank capacity of car 2",
            },
          },
        },
        suspension: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for suspension by comparing two cars",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for suspension of car 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for suspension of car 2",
            },
          },
        },
        brakes: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for break type by comparing two cars",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for break type of car 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for break type of car 2",
            },
          },
        },
        rating: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for NCAP Rating by comparing two cars",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for NCAP Rating of car 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for NCAP Rating of car 2",
            },
          },
        },
        airbags: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for airbags by comparing two cars",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for airbags of car 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for airbags of car 2",
            },
          },
        },
        headLights: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for head lights by comparing two cars",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for head lights of car 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for head lights of car 2",
            },
          },
        },
        tailLights: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for tail lights by comparing two cars",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for tail lights of car 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for tail lights of car 2",
            },
          },
        },
        warranty: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for warranty by comparing two cars",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for warranty of car 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for warranty of car 2",
            },
          },
        },
        colors: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for colors by comparing two cars",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for colors of car 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for colors of car 2",
            },
          },
        },
        price: {
          type: SchemaType.OBJECT,
          description:
            "Rate in between 1 to 5 for price in india by comparing two cars",
          properties: {
            0: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for price in india of car 1",
            },
            1: {
              type: SchemaType.NUMBER,
              description: "Rate in between 1 to 5 for price in india of car 2",
            },
          },
        },
      },
    },
    winner: {
      type: SchemaType.STRING,
      description: "Based on the result give the winner car of one of them",
    },
  },
};
