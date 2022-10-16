import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { ADD_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';

//  grossMonthlyIncome: {type: GraphQLInt},
// creditCardPayment: {type: GraphQLInt}, 
// carPayment: {type: GraphQLInt},
// studentLoanPayments: {type: GraphQLInt},
// appraisedValue: {type: GraphQLInt},
// downPayment: {type: GraphQLInt},
// loanPayment: {type: GraphQLInt},
// monthlyMortgagePayment: {type: GraphQLInt},
// creditScore: {type: GraphQLInt}

export default function AddClientModal() {
  const [ID, setID] = useState('');
  const [GrossMonthlyIncome, setGrossMonthlyIncome] = useState('');
  const [CarPayment, setCarPayment] = useState('');
  const [StudentLoanPayments, setStudentLoanPayments] = useState('');  
  const [AppriasedValue, setAppraisedValue] = useState('');
  const [DownPayment, setDownPayment] = useState('');
  const [LoanAmount, setLoanAmount] = useState('');
  const [MonthlyMortgagePayment, setMonthlyMortgagePayment] = useState('');
  const [CreditScore, setCreditScore] = useState('');


  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { ID, GrossMonthlyIncome, CarPayment, StudentLoanPayments, AppriasedValue, DownPayment, LoanAmount, MonthlyMortgagePayment, CreditScore},
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });

      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] },
      });
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (ID === '' || GrossMonthlyIncome === '' || CarPayment === '') {
      return alert('Please fill in all fields');
    }

    addClient( ID, GrossMonthlyIncome, CarPayment, StudentLoanPayments, AppriasedValue, DownPayment, LoanAmount, MonthlyMortgagePayment, CreditScore);

    setID('');
    setGrossMonthlyIncome('');
    setCarPayment('');
    setStudentLoanPayments('');
    setAppraisedValue('');
    setDownPayment('');
    setLoanAmount('');
    setMonthlyMortgagePayment('');
    setCreditScore('');
  };

  return (
    <>
      <button
        type='button'
        className='btn btn-secondary'
        data-bs-toggle='modal'
        data-bs-target='#addClientModal'
      >
        <div className='d-flex align-items-center'>
          <FaUser className='icon' />
          <div>Add Client</div>
        </div>
      </button>

      <div
        className='modal fade'
        id='addClientModal'
        aria-labelledby='addClientModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='addClientModalLabel'>
                Add Client
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={onSubmit}>
                <div className='mb-3'>
                  <label className='form-label'>ID</label>
                  <input
                    type='text'
                    className='form-control'
                    id='ID'
                    value={ID}
                    onChange={(e) => setID(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Gross Monthly Income</label>
                  <input
                    type='email'
                    className='form-control'
                    id='grossMonthlyIncome'
                    value={GrossMonthlyIncome}
                    onChange={(e) => setGrossMonthlyIncome(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Car Payment</label>
                  <input
                    type='text'
                    className='form-control'
                    id='carpayment'
                    value={CarPayment}
                    onChange={(e) => setCarPayment(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Student Loan Payment</label>
                  <input
                    type='text'
                    className='form-control'
                    id='studentloanpayment'
                    value={StudentLoanPayments}
                    onChange={(e) => setStudentLoanPayments(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Appraised Value</label>
                  <input
                    type='text'
                    className='form-control'
                    id='appraisedvalue'
                    value={AppriasedValue}
                    onChange={(e) => AppriasedValue(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Down Payment</label>
                  <input
                    type='text'
                    className='form-control'
                    id='downPayment'
                    value={DownPayment}
                    onChange={(e) => DownPayment(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Loan Amount</label>
                  <input
                    type='text'
                    className='form-control'
                    id='loanAmount'
                    value={LoanAmount}
                    onChange={(e) => LoanAmount(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Monthly Mortgage Payment</label>
                  <input
                    type='text'
                    className='form-control'
                    id='monthlymortgagepayment'
                    value={MonthlyMortgagePayment}
                    onChange={(e) => setMonthlyMortgagePayment(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Credit Score</label>
                  <input
                    type='text'
                    className='form-control'
                    id='creditscore'
                    value={CreditScore}
                    onChange={(e) => setCreditScore(e.target.value)}
                  />
                </div>

                <button
                  type='submit'
                  data-bs-dismiss='modal'
                  className='btn btn-secondary'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}