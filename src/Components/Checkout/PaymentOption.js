

const PaymentOption = ()=>{


    return(
        <>
            

            <div style={{padding:'20px 560px'}}>
                <div  style={{ display: 'flex', padding: '5px' }}>
                    <span style={{ flex: 1 }}>Payment Options :</span>
                    <span style={{ flex: 2}}>
                        <div>
                            <span><input type="radio" name="payment"/></span>
                            <span><lable>Cash on Delivery</lable></span>
                            
                            <span><input type="radio" name="payment" /></span>
                            <span><lable>Card Payment</lable></span>
                        </div>
                    </span>
                </div>
               
            </div> 
        </>
    )
}

export default PaymentOption;