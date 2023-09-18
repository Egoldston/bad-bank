function Home(){
  return (
    <Card
      txtcolor="black"
      header="BadBank"
      title="Welcome to the bank"
      text="We'll keep your money safe..."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
