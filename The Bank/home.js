function Home(){
  return (
    <center><Card
      txtcolor="black"
      bgcolor="primary"
      title="Welcome to The Bank."
      text="We are happy to serve you."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    /></center>   
  );  
}