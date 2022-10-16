import {gql, useQuery} from '@apollo/client';

const GET_CLIENTS = gql`
query getClients {
  clients{
   grossMonthlyIncome
   creditCardPayment
   carPayment
   studentLoanPayments
   appraisedValue
   downPayment
   loanPayment
   monthlyMortgagePayment
   creditScore
}
}
`;

export { GET_CLIENTS };