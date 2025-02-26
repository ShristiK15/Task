const{
    createPool
}=require('mysql');
const pool = createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"practice",
    connectionLimit:10
});
pool.query('INSERT INTO `form_detail` (`referalCode`, `refereeName`, `refererName`, `email`, `form_id`) VALUES ();',(err,result,fields)=>
{
    if(err)
    {
        return console.log(err);
    }
    return console.log(result);
}
)