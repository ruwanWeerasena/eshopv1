

const Address = ({address,setAddress})=>{



    return(
        <>

            <div style={{padding:'20px 600px'}}>
                <div  style={{ display: 'flex', padding: '5px' }}>
                    <span style={{ flex: 1 }}>Street Name</span>
                    <span style={{ flex: 2}}><input value={address.streetAddress} onChange={(e)=>{setAddress({...address,"streetAddress":e.target.value})}}/></span>
                </div>
                <div  style={{ display: 'flex', padding: '5px' }}>
                    <span style={{ flex: 1 }}>City</span>
                    <span style={{ flex: 2}}><input value={address.city} onChange={(e)=>{setAddress({...address,"city":e.target.value})}}/></span>
                </div>
                <div  style={{ display: 'flex', padding: '5px' }}>
                    <span style={{ flex: 1 }}>State</span>
                    <span style={{ flex: 2}}><input value={address.state} onChange={(e)=>{setAddress({...address,"state":e.target.value})}}/></span>
                </div>
            </div> 
           
        
        </>
    )
}

export default Address;