
function Profilecard({name,age, num,isMember,hobbies,handleShowHobby}) {

  return (
    <div>
        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
        <h3>Num: {num + 1}</h3>
        <h3>Member: {isMember ? "Member": "Guest"}</h3>
        <h3>Hobbies: </h3>
        <ul>
            {
                hobbies.map((hobby,index)=>{
                    return <li key={index} onClick={()=>{handleShowHobby(hobby)}}>{hobby}</li>
                })
            }
        </ul>
    </div>
  )
}

export default Profilecard