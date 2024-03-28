export interface AccountInfo {
  accountHolderName: string;
  accountNumber: number;
  balance: number;
  lastTransactionDate: Date;
  dob: Date;
  accountType: string; // e.g., "Checking", "Savings", "Credit Card", "Loan"
currency: string; // e.g., "USD", "EUR", "GBP"
  interestRate: number; // e.g., 0.5 for 0.5%
  branchName: string;
branchCode: string;
creationDate: Date;
contactEmail: string;
contactPhone: string;
}

export const account: AccountInfo =
{
    accountHolderName: "John Doe",
    accountNumber: 1234567890,
    balance: 1500.00,
    lastTransactionDate: new Date("2023-12-01"),
    dob: new Date("1980-05-15"),
    accountType: "Savings",
    currency: "USD",
    interestRate: 0.5,
    branchName: "Main Street",
    branchCode: "MS123",
    creationDate: new Date("2010-06-01"),
    contactEmail: "john.doe@example.com",
    contactPhone: "555-1234",
};

export const providers=[
  {
    "id": 1,
    "name": "Airtel",
    "description": "With Airtel 5G Plus. Up to 30x faster. Know More. Get your prepaid SIM home delivered. Enjoy doorstep KYC, paperless process and quick activation."
  },
  {
    "id": 2,
    "name": "JioCinema",
    "description": "JioCinema offers live and on-demand streaming of movies, TV shows, Voot shows, and sports in HD quality and multiple languages."
  },
  {
    "id": 3,
    "name": "BESCOM",
    "description": "Pay your BESCOM electricity bills online with ease and convenience. View your billing history, payment status, and service request details."
  },
  {
    "id": 4,
    "name": "Vi (Vodafone Idea)",
    "description": "Vodafone & Idea are now Vi Explore Vi Max Postpaid Plans, Prepaid, New Connection, Vi Games, Hungama Music on Vi App & many more."
  },
  {
    "id": 5,
    "name": "BSNL Portal",
    "description": "BSNL Portal is the official website of Bharat Sanchar Nigam Limited, a leading telecom service provider in India."
  },
]
