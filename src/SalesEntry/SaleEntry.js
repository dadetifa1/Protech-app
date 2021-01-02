import React from 'react'
import './SaleEntry.css'

class SaleEntry extends React.Component{
    render(){
        return(
            <section className="app-section">
                <div class="testbox">
                    <form action="/">
                        <div class="banner">
                        <h1>Enter New Sale</h1>
                        </div>
                        <div class="item">
                        <label for="name">Sales person<span>*</span></label>
                        <div class="name-item">
                            <input id="fname" type="text" name="fname" placeholder="First" required/>
                            <input id="lname" type="text" name="lname" placeholder="Last" required/>
                        </div>
                        </div>
                        <div class="item">
                        <label for="bdate">Date of Birth<span>*</span></label>
                        <input id="bdate" type="date" name="bdate" required/>
                        <i class="fas fa-calendar-alt"></i>
                        </div>
                        <div class="item">
                        <div class="name-item">
                            <div>
                            <label for="address">Sales Number<span>*</span></label>
                            <input id="address" type="text" name="saleNumber" required/>
                            </div>
                            <div>
                            <label for="number">Invoice Number</label>
                            <input id="number" type="tel" name="number" />
                            </div>
                        </div>
                        </div>
                        <div class="item">
                        <div class="name-item">
                            <div>
                            <label for="language">Dollar Amount</label>
                            <input id="language" type="text" name="dollaramount" />
                            </div>
                            <div>
                            <label for="nationality">Commission percentage</label>
                            <input id="nationality" type="text" name="commissionpercentage" />
                            </div>
                        </div>
                        </div>
                        <div class="item">
                        <div class="name-item">
                            <div>
                            <label for="country">Commission Amount</label>
                            <input id="country" type="text" name="comissionamount" />
                            </div>
                            <div>
                            <label for="job">PO number</label>
                            <input id="job" type="text" name="ponumber" />
                            </div>
                        </div>
                        </div>
                        <div class="item">
                        <div class="name-item">
                            <div>
                            <label for="country">Customer</label>
                            <input id="country" type="text" name="customer" />
                            </div>
                            <div>
                            <label for="job">Territory</label>
                            <input id="job" type="text" name="ponumber" />
                            </div>
                        </div>
                        </div>
                        <div class="item">
                        <div class="name-item">
                            <div>
                            <label for="country">Vendor</label>
                            <input id="country" type="text" name="cendor" />
                            </div>
                            <div>
                            <label for="bdate">Date paid<span>*</span></label>
                            <input id="bdate" type="date" name="bdate" required/>
                            <i class="fas fa-calendar-alt"></i>
                            </div>
                        </div>
                        </div>
                        <div class="btn-block">
                        <button type="submit" href="/">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default SaleEntry;