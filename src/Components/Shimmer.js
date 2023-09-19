const Shimmer = ()=>{
    return (
            <div className="shimmer-restaurant-card">
                {
                    Array(10).fill("").map((_, index) => (
                        <div key={index} className="shimmer-card"></div>
                    ))
                }
            </div>
        )
        
}
export default Shimmer