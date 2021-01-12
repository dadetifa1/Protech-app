import React from 'react'
import './SaleEntry.css'
import ValidationError from '../ValidationError'
const { API_SERVER_TOKEN, API_SERVER_URL  } = require('../config')

class SaleEntry extends React.Component{
    state = {
        salesPeople: []
        ,salespersonId: 0
        ,salesNumberInput : {
            value: ''
        },
        invoicenumberInput: { 
            value : ''
        },
        dollarAmountInput: {
            value: '',
            touched: false
        },
        commissionPercentageInput: { 
            value : '',
            touched: false
        },
        commissionAmountInput: {
            value: '',
            touched: false
        },
        poNumberInput: { 
            value : ''
        },
        customerInput: {
            value: ''
        },
        territoryInput: { 
            value : ''
        },
        vendorInput: {
            value: ''
        },
        datePaidInput: { 
            value : ''
        },
        noteFolderID: {
            value: ''
        },
        noteContentInput: { 
            value : ''
        },
        errorMessage: ''
    }

    componentDidMount() {
        fetch(`${API_SERVER_URL}/api/salepeople`, {
            headers: {
              'content-type': 'application/json',
              'Authorization': `Bearer ${API_SERVER_TOKEN}`
            },
          })
          .then(res => {
              if (!res.ok) {
                  throw new Error(res.status)
              }
              return res.json()
          })
          .then(data => {
            this.setState({
                salesPeople: data
            })
          })
          .catch(error => {
              this.setState({errorMessage: error.message});
          })
    }

    updateSalesPersonId(salesPerson_id) {
        this.setState({salespersonId: salesPerson_id});
    }

    updateSaleNumber(salesNumber) {
        this.setState({salesNumberInput: {value: salesNumber , touched: true}})
    }

    updateInvoiceNumber(invoiceNumber) {
        this.setState({ invoicenumberInput: { value: invoiceNumber }})
    }

    updateDollarAmout(dollarAmount) {
        this.setState({dollarAmountInput: { value: dollarAmount, touched: true}});
    }

    updateCommissionPercent(commissionPercent) {
        this.setState({commissionPercentageInput: { value: commissionPercent, touched: true }});
    }

    updateCommissionAmount(commissionAmount) {
        this.setState({commissionAmountInput: { value: commissionAmount, touched: true }});
    }

    updatePoNumber(poNumber) {
        this.setState({poNumberInput: { value: poNumber }});
    }

    updateCustomer(customer) {
        this.setState({customerInput: { value: customer }});
    }

    updateTerritory(territory) {
        this.setState({territoryInput: { value: territory }});
    }

    updateVendor(vendor) {
        this.setState({vendorInput: { value: vendor }});
    }

    updateDatePaid(datePaid) {
        this.setState({datePaidInput: { value: datePaid }});
    }


    AddingNewPostToAPI (){
        fetch(`${API_SERVER_URL}/api/postings`, {
          method: 'POST',
          body: JSON.stringify({
                "sales_person_id" : this.state.salespersonId,
                "sales_number": this.state.salesNumberInput.value,
                "invoice": this.state.invoicenumberInput.value,
                "dollar_amount": this.state.dollarAmountInput.value,
                "commission_percentage_fraction": this.state.commissionPercentageInput.value,
                "commission_amount": this.state.commissionAmountInput.value,
                "po_number": this.state.poNumberInput.value,
                "customer": this.state.customerInput.value,
                "territory": this.state.territoryInput.value,
                "vendor": this.state.vendorInput.value,
                "date_paid": this.state.datePaidInput.value,
                "paid": false,
          }),
          headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${API_SERVER_TOKEN}`
          },
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status)
            }
            return res.json()
        })
        .then(data => {
          this.props.history.push('/collection')
        })
        .catch(error => {
            // console.log(error)
         this.setState({errorMessage: error.message});
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        
        this.AddingNewPostToAPI()
    }

    validateDollarAmount() {
        const dolloarAmount = this.state.dollarAmountInput.value;
        if (!Number(dolloarAmount)) {
          return 'Dollar amount is required and should be numeric';
        }
    }

    validateCommissionPercentage() {
        const commissionPercentage = this.state.commissionPercentageInput.value;
        if (!Number(commissionPercentage)) {
          return 'Commission Percentage is required and should be numeric';
        }
    }

    validateCommissionAmount() {
        const commissionAmount = this.state.commissionAmountInput.value;
        if (!Number(commissionAmount)) {
          return 'Commission amount is required and should be numeric';
        }
    }

    renderTerritoryOptions() {
        return (
          [
            <option key={1} value={'Canada-RH'}>{'Canada-RH'}</option>
            ,<option key={2} value={'Colorado'}>{'Colorado'}</option>
            ,<option key={3} value={'Iowa'}>{'Iowa'}</option>
            ,<option key={4} value={'Manitoba'}>{'Manitoba'}</option>
            ,<option key={5} value={'Minnesota'}>{'Minnesota'}</option>
            ,<option key={6} value={'Nebraska'}>{'Nebraska'}</option>
            ,<option key={7} value={'No. Dakota'}>{'No. Dakota'}</option>
            ,<option key={8} value={'Ontario'}>{'Ontario'}</option>
            ,<option key={9} value={'Quebec'}>{'Quebec'}</option>
            ,<option key={10} value={'So. Dakota'}>{'So. Dakota'}</option>
            ,<option key={11} value={'Wisconsin'}>{'Wisconsin'}</option>
            ,<option key={12} value={'Out-of-Territory Sales'}>{'Out-of-Territory Sales'}</option>
          ]
        );
    }

    render(){
        const salesPeopleOptions = this.state.salesPeople.map(salePerson => 
            <option key={salePerson.id} value={salePerson.id}>{salePerson.first_name} {' '} {salePerson.last_name}</option>
        );
        const commissionPercentError = this.validateCommissionPercentage();
        const commissionAmountError = this.validateCommissionAmount();
        const dollarAmountError = this.validateDollarAmount();
        return(
            <section className="app-section">
                <div className="testbox">
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <div className="banner">
                        <h1>Enter New Sale</h1>
                        </div>

                        <div className="item">
                            <label htmlFor="salesperson">Select a sales person <span>*</span></label>
                            <select name="salesperson" id="salesperson" onChange={e => this.updateSalesPersonId(e.target.value)} required>
                                <option value="">.....</option>
                                {salesPeopleOptions}
                            </select>
                        </div>

                        
                        <div className="item">
                            <div className="name-item">
                                <div>
                                    <label htmlFor="salesNumber">Sales Number<span>*</span></label>
                                    <input id="salesNumber" type="text" name="salesNumber" onChange={e => this.updateSaleNumber(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="invoicenumber">Invoice Number <span>*</span></label>
                                    <input id="invoicenumber" type="text" name="invoicenumber" onChange={e => this.updateInvoiceNumber(e.target.value)} />
                                </div>
                            </div>
                        </div>


                        <div className="item">
                            <div className="name-item">
                                <div>
                                    <label htmlFor="dollaramount">Dollar Amount<span>*</span></label>
                                    <input id="dollaramount" type="text" name="dollaramount" onChange={e => this.updateDollarAmout(e.target.value)}/>
                                    {this.state.dollarAmountInput.touched && (<ValidationError message={dollarAmountError} />)}
                                </div>
                                <div>
                                    <label htmlFor="commissionpercentage">Commission percentage<span>*</span></label>
                                    <input id="commissionpercentage" type="text" name="commissionpercentage" onChange={ e => this.updateCommissionPercent(e.target.value)} />
                                    {this.state.commissionPercentageInput.touched && (<ValidationError message={commissionPercentError} />)}
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="name-item">
                                <div>
                                    <label htmlFor="comissionamount">Commission Amount<span>*</span></label>
                                    <input id="comissionamount" type="text" name="comissionamount" onChange={ e => this.updateCommissionAmount(e.target.value)} />
                                    {this.state.commissionAmountInput.touched && (<ValidationError message={commissionAmountError} />)}
                                </div>
                                <div>
                                    <label htmlFor="ponumber">PO number</label>
                                    <input id="ponumber" type="text" name="ponumber" onChange={ e => this.updatePoNumber(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="name-item">
                                <div>
                                <label htmlFor="customer">Customer<span>*</span></label>
                                <input id="customer" type="text" name="customer" onChange={ e => this.updateCustomer(e.target.value)} />
                                </div>
                                <div>
                                <label htmlFor="job">Territory<span>*</span></label>
                                <select name="territory" id="territory" onChange={e => this.updateTerritory(e.target.value)}>
                                    <option>.....</option>
                                    {this.renderTerritoryOptions()}
                                </select>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="name-item">
                                <div>
                                <label htmlFor="vendor">Vendor<span>*</span></label>
                                <input id="vendor" type="text" name="vendor" onChange={e => this.updateVendor(e.target.value)} />
                                </div>
                                <div>
                                <label htmlFor="datepaid">Date paid</label>
                                <input id="datepaid" type="date" name="datepaid" onChange={ e => this.updateDatePaid(e.target.value)} />
                                <i className="fas fa-calendar-alt"></i>
                                </div>
                            </div>
                        </div>
                        <div className="btn-block">
                            <button type="submit" href="/">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default SaleEntry;