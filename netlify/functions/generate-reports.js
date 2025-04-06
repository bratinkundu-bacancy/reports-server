exports.handler = async function(event, context) {
    const departments = [
        {
          id: "022d3fd1-dff1-4d7c-be41-5c63ce22823a",
          name: "Human Resources",
          description: "Manages recruitment and employee welfare",
          createdAt: "2025-04-05 23:19:59.454011+05:30",
          updatedAt: "2025-04-05 23:19:59.454011+05:30",
        },
        {
          id: "1c477ba1-52d6-4139-b13c-3cc1d3c9addd",
          name: "Finance",
          description: "Responsible for budgeting and financial planning",
          createdAt: "2025-04-05 23:19:59.454011+05:30",
          updatedAt: "2025-04-05 23:19:59.454011+05:30",
        },
        {
          id: "7f7c97e0-7f3f-47e7-b05e-ad69b41a74a9",
          name: "Marketing",
          description: "Focuses on promotion and outreach",
          createdAt: "2025-04-05 23:19:59.454011+05:30",
          updatedAt: "2025-04-05 23:19:59.454011+05:30",
        },
        {
          id: "e55d1dfe-f36b-497e-abe7-a9305ebb8a42",
          name: "Engineering",
          description: "Handles all technical development",
          createdAt: "2025-04-05 23:19:59.454011+05:30",
          updatedAt: "2025-04-05 23:19:59.454011+05:30",
        },
      ];
  
      const projects = [
        {
          id: "02c4103a-5436-47e1-b130-0ecf59aab6f6",
          name: "Prestige Worldwide Project 5",
          description: "This is project 5 for Prestige Worldwide",
          startDate: "2023-09-29 07:21:16.76+05:30",
          endDate: "2024-06-17 19:28:23.285+05:30",
          clientId: "9007d3bb-ecc1-4a6e-8d2f-77113c5f4917",
          status: "Active",
          escalationCount: 3,
          isActive: true,
          createdAt: "2025-04-05 23:19:59.48+05:30",
          updatedAt: "2025-04-05 23:19:59.48+05:30",
        },
        {
          id: "073a8b1d-ce53-40b7-99fc-1545916b767e",
          name: "Initech Project 3",
          description: "This is project 3 for Initech",
          startDate: "2023-01-04 16:35:00.058+05:30",
          endDate: null,
          clientId: "b4c0029d-16f0-4d0a-9c02-291129bdc811",
          status: "Active",
          escalationCount: 3,
          isActive: true,
          createdAt: "2025-04-05 23:19:59.48+05:30",
          updatedAt: "2025-04-05 23:19:59.48+05:30",
        },
        // ... remaining projects
      ];
  
      const clients = [
        {
          id: "2d0140d2-92dd-434b-812e-0332454b3ce3",
          name: "Hooli Enterprises",
          contactInfo: "hello@hooli.com",
          address: "1233 Main St",
          country: "India",
          isActive: true,
          createdAt: "2025-04-05 23:19:59.473+05:30",
          updatedAt: "2025-04-05 23:19:59.473+05:30",
        },
        // ... remaining clients
      ];
  
      const employees = [
        {
          id: "00b692c0-158f-4d61-82a4-7796c9435601",
          firstName: "Beulah",
          lastName: "Wintheiser",
          email: "beulah.wintheiser@company.com",
          phone: 17448588218,
          departmentId: "1c477ba1-52d6-4139-b13c-3cc1d3c9addd",
          escalationCount: 1,
          hireDate: "2018-01-30 21:40:14.295+05:30",
          salary: 81533.9,
          isActive: true,
          createdAt: "2025-04-05 23:19:59.513+05:30",
          updatedAt: "2025-04-05 23:19:59.513+05:30",
        },
        // ... remaining employees
      ];
  
      const incomeData = [
        {
          id: "0194f459-e7bb-4cee-bb1f-321aaaf5e1bf",
          subCategoryId: "d6badd28-9e28-4239-a3a4-867032b028ea",
          clientId: "d0af8f2f-7e50-4474-a95a-1b7ccb20991e",
          projectId: "c49e514a-efb1-4570-ad20-7764c1007642",
          employeeId: "00b692c0-158f-4d61-82a4-7796c9435601",
          incomeDate: "2023-12-10 00:00:00+05:30",
          amount: 40739.7,
          currency: "USD",
          paymentMethod: "Bank Transfer",
          description: "Team-oriented executive array",
          createdAt: "2025-04-05 23:19:59.713+05:30",
          updatedAt: "2025-04-05 23:19:59.713+05:30",
        },
        // ... remaining income data
      ];
  
      const incomeCategories = [
        {
          id: "20a9e067-d843-4fa7-9ec7-75b6db8b024b",
          name: "Hardware Sales",
          description:
            "Revenue from the sale of IT hardware and related equipment",
          createdAt: "2025-04-05 23:19:59.503+05:30",
          updatedAt: "2025-04-05 23:19:59.503+05:30",
        },
        // ... remaining income categories
      ];
  
      const incomeSubCategories = [
        {
          id: "314ef266-41e5-40c5-a38b-4e4ecaaf9302",
          categoryId: "ca4ff8d4-e7f7-4496-8640-5f821b45e97d",
          name: "Service Level Agreements",
          description:
            "Service Level Agreements expenses under Maintenance & Updates",
          createdAt: "2025-04-05 23:19:59.508+05:30",
          updatedAt: "2025-04-05 23:19:59.508+05:30",
        },
      ];
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json", // 👈 this makes sure the response is JSON
        },
        body: JSON.stringify({
          departments,
          projects,
          clients,
          employees,
          incomeData,
          incomeCategories,
          incomeSubCategories,
        }),
    }
  };