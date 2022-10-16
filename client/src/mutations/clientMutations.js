import { gql } from '@apollo/client';

const ADD_CLIENT = gql`
  mutation addClient($name: String!, $email: String!, $phone: String!) {
    addClient(ID: $ID, GrossMonthlyIncome: $GrossMonthlyIncome, CreditCardPayment: $CreditCardPayment, StudentLoanPayments: $StudentLoanPayments, AppraisedValue: $AppraisedValue, MonthlyMortgagePayment: $MonthlyMotgagePayment,CreditScore: $CreditScore ) {
      ID
      GrossMonthlyIncome
      CreditCardPayment
      StudentLoanPayments
      AppraisedValue
      DownPayment
      LoanAmount
      MonthlyMortgagePayment
      CreditScore
    }
  }
`;

const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      ID
      GrossMonthlyIncome
      CreditCardPayment
      StudentLoanPayments
      AppraisedValue
      DownPayment
      LoanAmount
      MonthlyMortgagePayment
      CreditScore
    }
  }
`;

export { ADD_CLIENT, DELETE_CLIENT };