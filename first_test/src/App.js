import './App.css';
import 'react-bootstrap';
import {useForm} from 'react-hook-form';
import './sss.scss';


function App() {

  const { register} = useForm();




  const shot = (e) => {
    let num = e.target.innerHTML;
    let form;
    if (num === '1') {
      form = document.getElementById('form_1');
    } else if (num === '2') {
      form = document.getElementById('form_2');
    }

    form.scrollIntoView({ 
      block: 'nearest',
      behavior: 'smooth',
    });
  }

  return (
    <div style={{width: '100%', flexDirection: 'column', display: 'flex'}}>
      <div style={{width: '100%', display: 'flex', backgroundColor: 'rgb(35, 52, 50)', padding: '40px 0px'}}>
        <p style={{margin: '0px 20px', fontSize: '2em'}}>Hello World =)</p>
        <div className='Menu' style={{margin: '0px 70px 0px auto', display: 'flex', justifyContent: 'space-between', width: '400px', fontSize: '1.5em'}}>  
          <p className='cursor' onClick={shot} id='1'>1</p>
          <p className='cursor' onClick={shot} id='2'>2</p>
          {/* <p className='cursor'>3</p>
          <p className='cursor'>4</p>
          <p className='cursor'>5</p> */}
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-around'}}> 
        <div className='Circle Circle-spin'>
          <div className='Tochka'></div>
        </div>
        
        <div className='Circle Circle-spin'>
          <div className='Tochka'></div>
        </div>
      </div>



      {/* React-Hook-Form */}
      <div style={{width: '100%', display: 'flex', backgroundColor: 'rgb(35, 52, 50)', padding: '40px 0px'}}>
        <p style={{margin: '0px auto', fontSize: '2em'}}>React-Hook-Form</p>
      </div><br/>

      <form style={{margin: 'auto', padding: '10px 15px'}}>
        <input {...register("Name")} placeholder="Name" />
        <select {...register("select")}>
          <option value="React">React</option>
          <option value="Hook">Hook</option>
          <option value="Form">Form</option>
        </select>
        <input type="submit" />
      </form>

      

      {/* Sass/Scss */}
      <br/><div style={{width: '100%', display: 'flex', backgroundColor: 'rgb(35, 52, 50)', padding: '40px 0px'}}>
        <p style={{margin: '0px auto', fontSize: '2em'}}>Sass/Scss</p>
      </div><br/>

      <div className='glav'>
        <div className='molot'>
          <div className='Ocnova'></div>
          <div className='lefTop' id='form_1'></div>
          <div className='rigTop'></div>
        </div>

        <div className='blok'></div> 
      </div>



      {/* Tailwind */}
      {/* <br/><div style={{width: '100%', display: 'flex', backgroundColor: 'rgb(35, 52, 50)', padding: '40px 0px'}}>
        <p style={{margin: '0px auto', fontSize: '2em'}}>Tailwind</p>
      </div><br/>


      <div class="space-y-4">
        <div class="w-96 bg-white shadow rounded">
            w-96
        </div>
        <div class="w-80 bg-white shadow rounded">
            w-80
        </div>
        <div class="w-72 bg-white shadow rounded">
            w-72
        </div>
        <div class="w-64 bg-white shadow rounded">
            w-64
        </div>
        <div class="w-60 bg-white shadow rounded">
            w-60
        </div>
        <div class="w-56 bg-white shadow rounded">
            w-56
        </div>
        <div class="w-52 bg-white shadow rounded">
            w-52
        </div>
        <div class="w-48 bg-white shadow rounded">
            w-48
        </div>
      </div> */}


      {/* React i18n */}
      {/* <br/><div style={{width: '100%', display: 'flex', backgroundColor: 'rgb(35, 52, 50)', padding: '40px 0px'}}>
        <p style={{margin: '0px auto', fontSize: '2em'}}>React i18n</p>
      </div><br/> */}


      {/* Axios */}
      {/* <br/><div style={{width: '100%', display: 'flex', backgroundColor: 'rgb(35, 52, 50)', padding: '40px 0px'}}>
        <p style={{margin: '0px auto', fontSize: '2em'}}>Axios</p>
      </div><br/> */}


      <br/><footer id='form_2' style={{width: '100%', display: 'flex', backgroundColor: 'rgb(35, 52, 50)', justifyContent: 'space-around', padding: '15px 0px'}}>
        <p style={{margin: '0px auto', fontSize: '1.5em'}}>The</p>
        <p style={{margin: '0px auto', fontSize: '1.5em'}}>end</p>
      </footer>
    </div>
  );
}

export default App;
