Survey.StylesManager.applyTheme("default");
  
let json = {
    pages: [
     {
      name: "General Asset Information",
      elements: [
       {
        type: "panel",
        name: "Assets",
        elements: [
         {
          type: "text",
          name: "Checking Account",
          title: "Checking Account",
          isRequired: true
         },
         {
          type: "text",
          name: "Savings Account",
          title: "Savings Account",
          isRequired: true
         },
         {
          type: "text",
          name: "Interest Rate",
          title: "Interest Rate",
          isRequired: true
         }
        ]
       }
      ],
      title: "Assets"
     },
     {
      name: "Real Estate Asset Information",
      elements: [
       {
        type: "panel",
        name: "panel1",
        elements: [
         {
          type: "radiogroup",
          name: "Do you own a home?",
          title: "Do you own a home?",
          choices: [
           {
            value: "Yes",
            text: "Yes"
           },
           {
            value: "No",
            text: "No"
           }
          ]
         },
         {
          type: "multipletext",
          name: "Estate Information",
          visibleIf: "{Do you own a home?} == 'Yes'",
          title: "Estate Information:",
          items: [
           {
            name: "Fair Market Value",
            title: "Fair Market Value"
           },
           {
            name: "Original Mortgage Balance",
            title: "Original Mortgage Balance"
           },
           {
            name: "Current Mortgage Balance",
            title: "Current Mortgage Balance"
           },
           {
            name: "Start Date of Mortgage",
            title: "Start Date of Mortgage"
           },
           {
            name: "End Date of Mortgage",
            title: "End Date of Mortgage"
           },
           {
            name: "Purchase Price",
            title: "Purchase Price"
           },
           {
            name: "Interest Rate",
            title: "Interest Rate"
           },
           {
            name: "Monthly Payment",
            title: "Monthly Payment"
           },
           {
            name: "Lines of Credit (Home Equity Loan)",
            title: "Lines of Credit (Home Equity Loan)"
           },
           {
            name: "Taxes",
            title: "Taxes"
           },
           {
            name: "Utilities",
            title: "Utilities"
           }
          ]
         },
         {
          type: "radiogroup",
          name: "Do you own any investment properties?",
          title: "Do you own any investment properties?",
          choices: [
           {
            value: "Yes",
            text: "Yes"
           },
           {
            value: "No",
            text: "No"
           }
          ]
         },
         {
          type: "paneldynamic",
          name: "Investment Properties",
          visibleIf: "{Do you own any investment properties?} == 'Yes'",
          templateElements: [
           {
            type: "multipletext",
            name: "Estate Information",
            title: "Estate Information:",
            isRequired: true,
            items: [
             {
              name: "Fair Market Value",
              title: "Fair Market Value"
             },
             {
              name: "Original Mortgage Balance",
              title: "Original Mortgage Balance"
             },
             {
              name: "Current Mortgage Balance",
              title: "Current Mortgage Balance"
             },
             {
              name: "Start Date of Mortgage",
              title: "Start Date of Mortgage"
             },
             {
              name: "End Date of Mortgage",
              title: "End Date of Mortgage"
             },
             {
              name: "Purchase Price",
              title: "Purchase Price"
             },
             {
              name: "Interest Rate",
              title: "Interest Rate"
             },
             {
              name: "Monthly Payment",
              title: "Monthly Payment"
             },
             {
              name: "Lines of Credit (Home Equity Loan)",
              title: "Lines of Credit (Home Equity Loan)"
             },
             {
              name: "Taxes",
              title: "Taxes"
             },
             {
              name: "Utilities",
              title: "Utilities"
             }
            ]
           }
          ],
          templateTitle: "Investment Property #{panelIndex}",
          panelCount: 1,
          minPanelCount: 1,
          keyName: "name",
          panelAddText: "Add another property",
          panelRemoveText: "Remove property",
          showQuestionNumbers: "none"
         },
         {
          type: "panel",
          name: "panel1"
         }
        ]
       }
      ],
      title: "Real Estate Asset Information"
     },
     {
      name: "Business Asset Information",
      elements: [
       {
        type: "panel",
        name: "panel1",
        elements: [
         {
          type: "radiogroup",
          name: "Do you own a business?",
          title: "Do you own a business?",
          choices: [
           {
            value: "Yes",
            text: "Yes"
           },
           {
            value: "No",
            text: "No"
           }
          ]
         },
         {
          type: "paneldynamic",
          name: "Businesses",
          visibleIf: "{Do you own a business?} == 'Yes'",
          templateElements: [
           {
            type: "multipletext",
            name: "Business Information",
            title: "Business Information:",
            items: [
             {
              name: "Percentage Ownership",
              title: "Percentage Ownership"
             },
             {
              name: "Business Structure",
              title: "Business Structure"
             },
             {
              name: "Business Address",
              title: "Business Address"
             },
             {
              name: "Business Type",
              title: "Business Type"
             },
             {
              name: "Approximate Value of Business",
              title: "Approximate Value of Business"
             },
             {
              name: "Business Loans",
              title: "Business Loans"
             },
             {
              name: "Business Line of Cred",
              title: "Business Line of Cred"
             }
            ]
           }
          ],
          templateTitle: "Business #{panelIndex}",
          panelCount: 1,
          minPanelCount: 1,
          keyName: "name",
          panelAddText: "Add another business",
          panelRemoveText: "Remove business",
          showQuestionNumbers: "none"
         },
         {
          type: "radiogroup",
          name: "Do you own any shares (units) in limited partnerships?",
          title: "Do you own any shares (units) in limited partnerships?",
          choices: [
           {
            value: "Yes",
            text: "Yes"
           },
           {
            value: "No",
            text: "No"
           }
          ]
         },
         {
          type: "paneldynamic",
          name: "Investment Properties",
          visibleIf: "{Do you own any shares (units) in limited partnerships?} == 'Yes'",
          templateElements: [
           {
            type: "multipletext",
            name: "Limited Partnership Information",
            title: "Limited Partnership Information:",
            items: [
             {
              name: "Shares (units) Owned",
              title: "Shares (units) Owned"
             },
             {
              name: "Investment Type",
              title: "Investment Type"
             },
             {
              name: " Product Name",
              title: " Product Name"
             },
             {
              name: "Product Sponsor",
              title: "Product Sponsor"
             },
             {
              name: "Managing Broker",
              title: "Managing Broker"
             },
             {
              name: "Total Asset",
              title: "Total Asset"
             },
             {
              name: "Value of Partnership",
              title: "Value of Partnership"
             }
            ]
           }
          ],
          templateTitle: "Limited Partnership #{panelIndex}",
          panelCount: 1,
          minPanelCount: 1,
          keyName: "name",
          panelAddText: "Add another partnership",
          panelRemoveText: "Remove partnership",
          showQuestionNumbers: "none"
         },
         {
          type: "panel",
          name: "panel1"
         }
        ]
       }
      ],
      title: "Business Asset Information"
     },
     {
      name: "Retirement",
      elements: [
       {
        type: "text",
        name: "At what age do you wish to retire?",
        title: "At what age do you wish to retire?"
       },
       {
        type: "text",
        name: "How much do you wish to spend on a monthly basis in retirement?",
        title: "How much do you wish to spend on a monthly basis in retirement?"
       },
       {
        type: "panel",
        name: "panel2",
        elements: [
         {
          type: "radiogroup",
          name: "Do you have an IRA?",
          title: "Do you have an IRA?",
          choices: [
           {
            value: "Yes",
            text: "Yes"
           },
           {
            value: "No",
            text: "No"
           }
          ]
         },
         {
          type: "paneldynamic",
          name: "IRA Properties",
          visibleIf: "{Do you have an IRA?} == 'Yes'",
          templateElements: [
           {
            type: "multipletext",
            name: "IRA Information",
            title: "IRA Information:",
            items: [
             {
              name: "Item Description",
              title: "Item Description"
             },
             {
              name: "Monthly Contributions",
              title: "Monthly Contributions"
             },
             {
              name: "Employer Match",
              title: "Employer Match"
             },
             {
              name: "Product Sponsor",
              title: "Product Sponsor"
             },
             {
              name: "Account Value",
              title: "Account Value"
             },
             {
              name: "Holding Company",
              title: "Holding Company"
             }
            ]
           }
          ],
          templateTitle: "IRA #{panelIndex}",
          panelCount: 1,
          minPanelCount: 1,
          keyName: "name",
          panelAddText: "Add another IRA",
          panelRemoveText: "Remove IRA",
          showQuestionNumbers: "none"
         },
         {
          type: "radiogroup",
          name: "Do you have a Roth IRA?",
          title: "Do you have a Roth IRA?",
          choices: [
           {
            value: "Yes",
            text: "Yes"
           },
           {
            value: "No",
            text: "No"
           }
          ]
         },
         {
          type: "paneldynamic",
          name: "Roth IRAs",
          visibleIf: "{Do you have a Roth IRA?} == 'Yes'",
          templateElements: [
           {
            type: "multipletext",
            name: "Roth IRA Information",
            title: "Roth IRA Information:",
            items: [
             {
              name: "Item Description",
              title: "Item Description"
             },
             {
              name: "Monthly Contributions",
              title: "Monthly Contributions"
             },
             {
              name: "Employer Match",
              title: "Employer Match"
             },
             {
              name: "Product Sponsor",
              title: "Product Sponsor"
             },
             {
              name: "Account Value",
              title: "Account Value"
             },
             {
              name: "Holding Company",
              title: "Holding Company"
             }
            ]
           }
          ],
          templateTitle: "Roth IRA #{panelIndex}",
          panelCount: 1,
          minPanelCount: 1,
          keyName: "name",
          panelAddText: "Add another Roth IRA",
          panelRemoveText: "Remove Roth IRA",
          showQuestionNumbers: "none"
         },
         {
          type: "radiogroup",
          name: "Do you have a 401(k)?",
          title: "Do you have a 401(k)?",
          choices: [
           {
            value: "Yes",
            text: "Yes"
           },
           {
            value: "No",
            text: "No"
           }
          ]
         },
         {
          type: "paneldynamic",
          name: "401(k)s",
          visibleIf: "{Do you have a 401(k)?} == 'Yes'",
          templateElements: [
           {
            type: "multipletext",
            name: "401(k) Information",
            title: "401(k) Information:",
            items: [
             {
              name: "Item Description",
              title: "Item Description"
             },
             {
              name: "Monthly Contributions",
              title: "Monthly Contributions"
             },
             {
              name: "Employer Match",
              title: "Employer Match"
             },
             {
              name: "Product Sponsor",
              title: "Product Sponsor"
             },
             {
              name: "Account Value",
              title: "Account Value"
             },
             {
              name: "Holding Company",
              title: "Holding Company"
             }
            ]
           }
          ],
          templateTitle: "401(k) #{panelIndex}",
          panelCount: 1,
          minPanelCount: 1,
          keyName: "name",
          panelAddText: "Add another 401(k",
          panelRemoveText: "Remove 401(k)",
          showQuestionNumbers: "none"
         },
         {
          type: "radiogroup",
          name: "Do you have a 403(b)?",
          title: "Do you have a 403(b)?",
          choices: [
           {
            value: "Yes",
            text: "Yes"
           },
           {
            value: "No",
            text: "No"
           }
          ]
         },
         {
          type: "paneldynamic",
          name: "403(b)s",
          visibleIf: "{Do you have a 403(b)?} == 'Yes'",
          templateElements: [
           {
            type: "multipletext",
            name: "403(b) Information",
            title: "403(b) Information:",
            items: [
             {
              name: "Item Description",
              title: "Item Description"
             },
             {
              name: "Monthly Contributions",
              title: "Monthly Contributions"
             },
             {
              name: "Employer Match",
              title: "Employer Match"
             },
             {
              name: "Product Sponsor",
              title: "Product Sponsor"
             },
             {
              name: "Account Value",
              title: "Account Value"
             },
             {
              name: "Holding Company",
              title: "Holding Company"
             }
            ]
           }
          ],
          templateTitle: "403(b) #{panelIndex}",
          panelCount: 1,
          minPanelCount: 1,
          keyName: "name",
          panelAddText: "Add another 403(b)",
          panelRemoveText: "Remove 403(b)",
          showQuestionNumbers: "none"
         }
        ],
        title: "Retirement Assets",
        description: "IRA, Roth IRA, 401(k), 403(b) etc. (any account that is designated for retirement)"
       }
      ],
      title: "Retirement Information"
     },
     {
      name: "Investment Assets",
      elements: [
       {
        type: "radiogroup",
        name: "Do you own any investment assets?",
        title: "Do you own any investment assets?",
        isRequired: true,
        choices: [
         {
          value: "Yes",
          text: "Yes"
         },
         {
          value: "No",
          text: "No"
         }
        ]
       },
       {
        type: "paneldynamic",
        name: "Investment Assets",
        visibleIf: "{Do you own any investment assets?} == 'Yes'",
        templateElements: [
         {
          type: "multipletext",
          name: "Investment Assets",
          title: "Investment Asset Information:",
          items: [
           {
            name: "Description",
            title: "Description"
           },
           {
            name: "Monthly Contributions",
            title: "Monthly Contributions"
           },
           {
            name: "Ticker Symbol",
            title: "Ticker Symbol"
           },
           {
            name: "Shares Owned",
            title: "Shares Owned"
           },
           {
            name: "Holding Company",
            title: "Holding Company"
           }
          ]
         }
        ],
        templateTitle: "Investment Asset #{panelIndex}",
        panelCount: 1,
        minPanelCount: 1,
        keyName: "name",
        panelAddText: "Add another Investment Asset",
        panelRemoveText: "Remove Investment Asset",
        showQuestionNumbers: "none"
       }
      ],
      title: "Investment Assets"
     },
     {
      name: "Insurance Information",
      elements: [
       {
        type: "radiogroup",
        name: "Do you have insurance through work?",
        title: "Do you have insurance through work?",
        choices: [
         {
          value: "Yes",
          text: "Yes"
         },
         {
          value: "No",
          text: "No"
         }
        ]
       },
       {
        type: "matrixdropdown",
        name: "Work Insurance Information",
        visibleIf: "{Do you have insurance through work?} == 'Yes'",
        title: "Work Insurance Information",
        columns: [
         {
          name: "Death Benefit",
          title: "Death Benefit",
          cellType: "text"
         },
         {
          name: "Monthly Payment",
          title: "Monthly Payment",
          cellType: "text"
         }
        ],
        rows: [
         "Guest",
         "Spouse"
        ]
       },
       {
        type: "radiogroup",
        name: "Can you purchase additional life insurance through work?",
        title: "Can you purchase additional life insurance through work?",
        choices: [
         {
          value: "Yes",
          text: "Yes"
         },
         {
          value: "No",
          text: "No"
         }
        ]
       },
       {
        type: "matrixdropdown",
        name: "Additional Life Insurance Information",
        visibleIf: "{Can you purchase additional life insurance through work?} == 'Yes'",
        title: "Additional Life Insurance Information",
        columns: [
         {
          name: "Max Death Benefit To Be Purchased",
          title: "Max Death Benefit To Be Purchased",
          cellType: "text"
         },
         {
          name: "Monthly Payment",
          title: "Monthly Payment",
          cellType: "text"
         }
        ],
        rows: [
         "Guest",
         "Spouse"
        ]
       },
       {
        type: "matrixdynamic",
        visibleIf:"{Do you have insurance through work?} != 'No' || {Can you purchase additional life insurance through work?} != 'No'",
        name: "If you own personal life insurance, please provide the following information:",
        columns: [
         {
          name: "Company"
         },
         {
          name: "Policy #"
         },
         {
          name: "Insured"
         },
         {
          name: "Beneficiary"
         },
         {
          name: "Death Benefit"
         },
         {
          name: "Annual Cost"
         },
         {
          name: "Current Cash Value"
         },
         {
          name: "Issue Date"
         },
         {
          name: "Loan(s) Against Policy"
         }
        ],
        cellType: "text",
        rowCount: 1,
        addRowText: "Add field",
        removeRowText: "Remove field"
       }
      ],
      title: "Insurance Information"
     },
     {
      name: "Additional Assets",
      elements: [
       {
        type: "radiogroup",
        name: "Do you own a vehicle?",
        title: "Do you own a vehicle?",
        isRequired: true,
        choices: [
         {
          value: "Yes",
          text: "Yes"
         },
         {
          value: "No",
          text: "No"
         }
        ]
       },
       {
        type: "paneldynamic",
        name: "Vehicle Information",
        visibleIf: "{Do you own a vehicle?} == 'Yes'",
        templateElements: [
         {
          type: "multipletext",
          name: "Vehicles",
          title: "Vehicle Information:",
          items: [
           {
            name: "Purchase Price",
            title: "Purchase Price"
           },
           {
            name: "Fair Market Value",
            title: "Fair Market Value"
           },
           {
            name: "Original Loan Balance",
            title: "Original Loan Balance"
           },
           {
            name: "Current Loan Balance",
            title: "Current Loan Balance"
           },
           {
            name: "Interest Rate",
            title: "Interest Rate"
           },
           {
            name: "Monthly Payment",
            title: "Monthly Payment"
           },
           {
            name: "State Date of Loan",
            title: "State Date of Loan"
           },
           {
            name: "End Date of Loan",
            title: "End Date of Loan"
           },
           {
            name: "Insurance Provider",
            title: "Insurance Provider"
           },
           {
            name: "Repair or Maintenance",
            title: "Repair or Maintenance"
           }
          ]
         }
        ],
        templateTitle: "Vehicle #{panelIndex}",
        panelCount: 1,
        minPanelCount: 1,
        keyName: "name",
        panelAddText: "Add another Vehicle",
        panelRemoveText: "Remove Vehicle",
        showQuestionNumbers: "none"
       },
       {
        type: "radiogroup",
        name: "Do you have any additional assets you wish to tell us about?",
        title: "Do you have any additional assets you wish to tell us about?",
        isRequired: true,
        choices: [
         {
          value: "Yes",
          text: "Yes"
         },
         {
          value: "No",
          text: "No"
         }
        ]
       },
       {
        type: "paneldynamic",
        name: "Additional Assets",
        visibleIf: "{Do you have any additional assets you wish to tell us about?} == 'Yes'",
        templateElements: [
         {
          type: "multipletext",
          name: "Additional Assets",
          title: "Additional Asset Information:",
          items: [
           {
            name: "Purchase Price",
            title: "Purchase Price"
           },
           {
            name: "Fair Market Value",
            title: "Fair Market Value"
           },
           {
            name: "Original Loan Balance",
            title: "Original Loan Balance"
           },
           {
            name: "Current Loan Balance",
            title: "Current Loan Balance"
           },
           {
            name: "Interest Rate",
            title: "Interest Rate"
           },
           {
            name: "Monthly Payment",
            title: "Monthly Payment"
           },
           {
            name: "State Date of Loan",
            title: "State Date of Loan"
           },
           {
            name: "End Date of Loan",
            title: "End Date of Loan"
           }
          ]
         }
        ],
        templateTitle: "Additional Asset #{panelIndex}",
        panelCount: 1,
        minPanelCount: 1,
        keyName: "name",
        panelAddText: "Add another Asset",
        panelRemoveText: "Remove Asset",
        showQuestionNumbers: "none"
       }
      ],
      title: "Additional Assets"
     },
     {
      name: "Liabilities",
      elements: [
       {
        type: "matrixdynamic",
        name: "Bank / Installment Loans",
        columns: [
         {
          name: "Amount"
         },
         {
          name: "Interest Rate"
         },
         {
          name: "Monthly Payment"
         },
         {
          name: "Initial Loan Amount"
         },
         {
          name: "Start of Date Loan"
         },
         {
          name: "End of Date Loan"
         }
        ],
        cellType: "text",
        rowCount: 1,
        addRowText: "Add Bank/Installment Loan",
        removeRowText: "Remove Bank/Installment Loan"
       },
       {
        type: "matrixdynamic",
        name: "Charge Account Balance",
        columns: [
         {
          name: "Amount"
         },
         {
          name: "Interest Rate"
         },
         {
          name: "Monthly Payment"
         }
        ],
        cellType: "text",
        rowCount: 1,
        addRowText: "Add Charge Account Balance",
        removeRowText: "Remove Charge Account Balance"
       },
       {
        type: "matrixdynamic",
        name: "Taxes",
        columns: [
         {
          name: "Amount"
         },
         {
          name: "Interest Rate"
         },
         {
          name: "Monthly Payment"
         },
         {
          name: "End Date of Lien"
         }
        ],
        cellType: "text",
        rowCount: 1,
        addRowText: "Add Taxes",
        removeRowText: "Remove Taxes"
       },
       {
        type: "matrixdynamic",
        name: "Alimony",
        columns: [
         {
          name: "Monthly Payment"
         },
         {
          name: "Date of Final Payment"
         }
        ],
        cellType: "text",
        rowCount: 1,
        addRowText: "Add Alimony",
        removeRowText: "Remove Alimony"
       },
       {
        type: "matrixdynamic",
        name: "Child Support",
        columns: [
         {
          name: "Monthly Payment"
         },
         {
          name: "Date of Final Payment"
         }
        ],
        cellType: "text",
        rowCount: 1,
        addRowText: "Add Child Support",
        removeRowText: "Remove Child Support"
       },
       {
        type: "radiogroup",
        name: "Do you have any outstanding credit card debts?",
        title: "Do you have any outstanding credit card debts?",
        isRequired: true,
        choices: [
         {
          value: "Yes",
          text: "Yes"
         },
         {
          value: "No",
          text: "No"
         }
        ]
       },
       {
        type: "paneldynamic",
        name: "Credit Card Debt Information",
        visibleIf: "{Do you have any outstanding credit card debts?} == 'Yes'",
        templateElements: [
         {
          type: "multipletext",
          name: "Credit Card Debts",
          title: "Debt Information:",
          items: [
           {
            name: "Card Description",
            title: "Card Description"
           },
           {
            name: "Monthly Payment",
            title: "Monthly Payment"
           },
           {
            name: "Interest Rate",
            title: "Interest Rate"
           },
           {
            name: "Card Balance",
            title: "Card Balance"
           }
          ]
         }
        ],
        templateTitle: "Credit Card Debt #{panelIndex}",
        panelCount: 1,
        minPanelCount: 1,
        keyName: "name",
        panelAddText: "Add Additional Debt",
        panelRemoveText: "Remove Debt Item",
        showQuestionNumbers: "none"
       },
       {
        type: "radiogroup",
        name: "Do you have any Student Loan Debt?",
        title: "Do you have any Student Loan Debt?",
        isRequired: true,
        choices: [
         {
          value: "Yes",
          text: "Yes"
         },
         {
          value: "No",
          text: "No"
         }
        ]
       },
       {
        type: "paneldynamic",
        name: "Student Loan Debts",
        visibleIf: "{Do you have any Student Loan Debt?} == 'Yes'",
        templateElements: [
         {
          type: "multipletext",
          name: "Student Loans",
          title: "Student Loan Debt Information:",
          items: [
           {
            name: "Loan Description",
            title: "Loan Description"
           },
           {
            name: "Loan Issuer",
            title: "Loan Issuer"
           },
           {
            name: "Monthly Payment",
            title: "Monthly Payment"
           },
           {
            name: "Interest Rate",
            title: "Interest Rate"
           },
           {
            name: "Loan Balance",
            title: "Loan Balance"
           },
           {
            name: "End Date of Loan",
            title: "End Date of Loan"
           },
          ]
         }
        ],
        templateTitle: "Student Loan #{panelIndex}",
        panelCount: 1,
        minPanelCount: 1,
        keyName: "name",
        panelAddText: "Add Student Loan",
        panelRemoveText: "Remove Student Loan",
        showQuestionNumbers: "none"
       },
       {
        type: "radiogroup",
        name: "Do you have any other debts you would like to share with us?",
        title: "Do you have any other debts you would like to share with us?",
        isRequired: true,
        choices: [
         {
          value: "Yes",
          text: "Yes"
         },
         {
          value: "No",
          text: "No"
         }
        ]
       },
       {
        type: "paneldynamic",
        name: "Miscellaneous Assets",
        visibleIf: "{Do you have any other debts you would like to share with us?} == 'Yes'",
        templateElements: [
         {
          type: "multipletext",
          name: "Miscellaneous Debts",
          title: "Miscellaneous Debt Information:",
          items: [
           {
            name: "Loan Balance",
            title: "Loan Balance"
           },
           {
            name: "Monthly Payment",
            title: "Monthly Payment"
           },
           {
            name: "Interest Rate",
            title: "Interest Rate"
           },
           {
            name: "End Date of Loan",
            title: "End Date of Loan"
           },
          ]
         }
        ],
        templateTitle: "Miscellaneous Debt #{panelIndex}",
        panelCount: 1,
        minPanelCount: 1,
        keyName: "name",
        panelAddText: "Add Miscellaneous Debt",
        panelRemoveText: "Remove Miscellaneous Debt",
        showQuestionNumbers: "none"
       }
      ],
      title: "Liabilities"
     },
    ]
   }

   window.survey = new Survey.Model(json);

   const redirect = (url) => {
    return window.location.href = `${url}send`
   }

   const environmentURLS = {
     local: '//localhost:5000',
     prod : '//genesisfinancial.herokuapp.com'
   }

   var env = /(local|5000)/i.test(window.location.hostname) ? 'local' : 'prod'
   var url = `${environmentURLS[env]}/send`


   survey.onComplete.add(function (result) {  
    const surveyResult = JSON.stringify(result.data)
        // sessionStorage.setItem('data', surveyResult)
        // document.querySelector('p#surveyResult').innerHTML = sessionStorage.data;

        $.post(url, {
          data: surveyResult,
          headers: {
            'Access-Control-Allow-Origin': url
          },
      }, function(data){
          console.log('success')
          console.log(data)
          redirect(window.location.href)
      })
         });
   
     $("#surveyElement").Survey({model: survey});

  function toggleDisplay() {
    const el = document.querySelector('.js-fade')
    const mainDisplay = document.querySelector('.main_content')
    const getStarted = document.querySelector('button.get_started')
    const intro = document.querySelector('.intro')

    if (el.classList.contains('is-paused')){
      el.classList.remove('is-paused');
    }

    getStarted.addEventListener('click', function(e) {
      intro.classList.remove('show');
      intro.classList.add('hide');
      mainDisplay.classList.remove('hide');
      mainDisplay.classList.add('show');
    })
  };

  const progressBar = document.querySelector('.progress-bar.progress-bar-striped.progress-bar-animated')
  const nextButton = document.querySelector('input.sv_next_btn')
  let progressBarAttributes = progressBar.attributes

  // nextButton.addEventListener('click', updateProgress())

  // const updateProgress = () => {
  //   /*
  //              COMPLETE Questionnaire first!!!

  //     each click will need to add a percentage of completion relative to current status
  //     i.e., first page (contains 3 of X amount of questions) is Y percentage of *all* questions
  //     so, take integer of all questions per page, dole out a percentage per page (parse integer),
  //     and add that particular percentage to the progress bar innards

  //     e.g., if each page is worth 18% of total, add 18 to innerHTML as well as progressBar width each click
  //   */

  //   return progressBar.innerHTML = `${parseInt(progressBar.style.width)}%`
  // }
toggleDisplay();
