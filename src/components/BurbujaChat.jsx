const BurbujaChat = ({user,message,time}) =>{


    return (
        <>
            <div className="border message-others rounded p-2 m-2 border-3">
                <p><b>{user}</b>: {message}</p>      
            </div>
        </>
    )
}
export default BurbujaChat