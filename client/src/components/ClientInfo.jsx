import { FaEnvelope, FaPhone, FaIdBadge } from 'react-icons/fa';

export default function ClientInfo({ client }) {
  return (
    <>
      <h5 className='mt-5'>Client Information</h5>
      <ul className='list-group'>
        <li className='list-group-item'>
          <FaIdBadge className='icon' /> {client.ID}
        </li>
        <li className='list-group-item'>
          <FaEnvelope className='icon' /> {client.GrossMonthlyIncome}
        </li>
        <li className='list-group-item'>
          <FaPhone className='icon' /> {client.CarPayment}
        </li>
        <li className='list-group-item'>
          <FaPhone className='icon' /> {client.StudentLoanPayments}
        </li>
        <li className='list-group-item'>
          <FaPhone className='icon' /> {client.AppraisedValue}
        </li>
        <li className='list-group-item'>
          <FaPhone className='icon' /> {client.DownPayment}
        </li>
        <li className='list-group-item'>
          <FaPhone className='icon' /> {client.LoanAmount}
        </li>
        <li className='list-group-item'>
          <FaPhone className='icon' /> {client.MonthlyMortgagePayment}
        </li>
        <li className='list-group-item'>
          <FaPhone className='icon' /> {client.CreditScore}
        </li>
      </ul>
    </>
  );
}