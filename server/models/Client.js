const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    ID: {
        type: Number
    },
    GrossMonthlyIncome: {
        type: Number,
    },
    CreditCardPayment: {
        type: Number,
    },
    CarPayment: {
        type: Number,
    },
    StudentLoanPayments: {
        type: Number,
    },
    AppraisedValue: {
        type: Number,
    },
    DownPayment: {
        type: Number,
    },
    LoanAmount: {
        type: Number,
    },
    MonthlyMortgagePayment: {
        type: Number,
    },
    CreditScore: {
        type: Number,
    },
});

module.exports = mongoose.model('Client', ClientSchema);


//  grossMonthlyIncome: {type: GraphQLInt},
// creditCardPayment: {type: GraphQLInt}, 
// carPayment: {type: GraphQLInt},
// studentLoanPayments: {type: GraphQLInt},
// appraisedValue: {type: GraphQLInt},
// downPayment: {type: GraphQLInt},
// loanPayment: {type: GraphQLInt},
// monthlyMortgagePayment: {type: GraphQLInt},
// creditScore: {type: GraphQLInt}