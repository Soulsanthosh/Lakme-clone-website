import React,{useState} from 'react'
import './Face.css'
import Primer from './Primer'
import Blush from './Blush'
import Highlighter from './Highlighter'
import FoundationforFace from './FoundationforFace'
import { Link } from 'react-router-dom'
import SubFooter from '../Footer/SubFooter'

export default function Face() {

    function clickexpand(){
        const one=document.getElementById('plus').innerHTML
        const two=document.getElementById('dropdown-content')
        if (one === "-"){
            two.style.display='none'
            document.getElementById('plus').innerText='+'
        }
        else{
            two.style.display='block'
            document.getElementById('plus').innerText='-'
        }
    }

    const [minValue, setMinValue] = useState(100);
    const [maxValue, setMaxValue] = useState(1000);
  
    const handleRangeChange = (e, isMin) => {
      const value = parseInt(e.target.value, 10);
  
      if (isMin) {
        setMinValue(Math.min(value, maxValue - 1));
      } else {
        setMaxValue(Math.max(value, minValue + 1));
      }
    };

    const filterProducts = () => {
        const products = document.querySelectorAll(".product-price");
        products.forEach((product) => {
          const price = parseInt(product.textContent.trim(), 10);
          if (price >= minValue && price <= maxValue) {
            // product.style.display = "block";
            product.parentElement.style.display='block'
          } else {
            // product.style.display = "none";
            product.parentElement.style.display='none'
            
          }
        });
      };

      const changecategrory3 = (event) => {
        const LipLin = document.getElementById('all-categrories-in-one-div301');
        const LiqLip = document.getElementById('all-categrories-in-one-div302');
        const LipBal = document.getElementById('all-categrories-in-one-div303');
        const Gloss = document.getElementById('all-categrories-in-one-div304');
        const showheading = document.getElementById('show-categrory-heading03');

        console.log(event.target.value)
        
        switch (event.target.value) {
          case 'option1':
            LipLin.style.display = 'block';
            LiqLip.style.display = 'none';
            LipBal.style.display = 'none';
            Gloss.style.display = 'none';
            showheading.innerText='FOUNDATION'
            break;
      
          case 'option2':
            LipLin.style.display = 'none';
            LiqLip.style.display = 'block';
            LipBal.style.display = 'none';
            Gloss.style.display = 'none';
            showheading.innerText='PRIMER'          
            break;
      
          case 'option3':
            LipLin.style.display = 'none';
            LiqLip.style.display = 'none';
            LipBal.style.display = 'block';
            Gloss.style.display = 'none';
            showheading.innerText='BLUSH'
            break;
          
          case 'option4':
            LipLin.style.display = 'none';
            LiqLip.style.display = 'none';
            LipBal.style.display = 'none';
            Gloss.style.display = 'block';
            showheading.innerText='HIGHLIGHTER'
            break;
      
          default:
            LipLin.style.display = 'none';
            LiqLip.style.display = 'none';
            LipBal.style.display = 'none';
            Gloss.style.display = 'none';
            break;
        }
      }; 
  return (
    <div>
                                    {/* Home button in left side down navbar */}

        <div className='home-button'><Link to='/Home' style={{color:'black',textDecoration:'none'}}><span>&larr;</span> Home</Link> </div>

                                    {/* Lips banner photo */}

        <div className='lips-gallery'><img src="./Face/Foundation/primer_page_banner_1.webp" alt="Eyes-page-Banner-photo" /></div>


                                    {/* heading which categrory is choosen */}

        <div id='categrory-heading' className='categrory-heading'>
            <h1 id='show-categrory-heading03' className='show-categrory-heading'>FOUNDATION</h1>
        </div>

                                    {/* Filter section using categrory and price range */}
    <div style={{display:'flex',margin:'20px 0px 0px 0px'}}>
        <div className='filter-content'>
            <p className='filter'>FILTER</p>
            <div id='cat' className='categrory'>
                <p className='categrory-heading'>CATEGRORY <span id='plus' onClick={clickexpand}>-</span></p>
                <div id='dropdown-content'className='dropdown-content'>
                    <div class="radio-buttons">
                        <label class="radio-button">
                            <input type="radio" name="option" value="option1" defaultChecked onClick={(e) => changecategrory3(e, true)}/>
                            <div class="radio-circle"></div>
                            <span class="radio-label">Foundation</span>
                        </label>
                        <label class="radio-button">
                            <input type="radio" name="option" value="option2"  onClick={(e) => changecategrory3(e, true)}/>
                            <div class="radio-circle"></div>
                            <span class="radio-label">Primer</span>
                        </label>
                        <label class="radio-button">
                            <input type="radio" name="option" value="option3" onClick={(e) => changecategrory3(e, true)}/>
                            <div class="radio-circle"></div>
                            <span class="radio-label">Blush</span>
                        </label>
                        <label class="radio-button">
                            <input type="radio" name="option" value="option4" onClick={(e) => changecategrory3(e, true)}/>
                            <div class="radio-circle"></div>
                            <span class="radio-label">Highlighter</span>
                        </label>
                    </div>
                </div>
            </div>
            <hr/>


            <div className="slider-forme">
            <p className='filter'>PRICE RANGE</p>
                <div style={{ display: "flex", float: "left" }}>
                    <div className="inverse-left" style={{ width: "70%" }}></div>
                    <div className="inverse-right" style={{ width: "70%" }}></div>
                    <div className="range" style={{ left: "30%", right: "40%" }}></div>
                    <span className="thumb" style={{ left: "30%" }}></span>
                    <span className="thumb" style={{ left: "60%" }}></span>
                    <div className="sign" style={{left: "30%"}}>
                        <span id="value">&#8377;<span>-</span>{minValue}</span>
                    </div>
                    <div className="sign" style={{ margin: "0 0 0 230px"}}>
                        <span id="value">&#8377;<span>-</span>{maxValue}</span>
                    </div>
                </div>

                <input
                    className="slider"
                    id="input1"
                    type="range"
                    tabIndex="0"
                    value={minValue}
                    max="1000"
                    min="100"
                    step="50"
                    onChange={(e) => handleRangeChange(e, true)}
                    onMouseUp={filterProducts}
                    />
                <input
                    className="slider"
                    id="input2"
                    type="range"
                    tabIndex="0"
                    value={maxValue}
                    max="1000"
                    min="100"
                    step="50"
                    onChange={(e) => handleRangeChange(e, false)}
                    onMouseUp={filterProducts}
                    /> 
            </div>
        </div>
        
        <div style={{width:'940px',margin:'0px 0px 0px 390px'}} className='all-categrories-in-one-div3' id='all-categrories-in-one-div3'>

            <div id='all-categrories-in-one-div301' >
                <FoundationforFace/>
            </div>

            <div id='all-categrories-in-one-div302' style={{display:'none'}} >
                <Primer/>
            </div>

            <div id='all-categrories-in-one-div303' style={{display:'none'}}>
                <Blush/>
            </div>

            <div id='all-categrories-in-one-div304' style={{display:'none'}}>
                <Highlighter/>
            </div>

        </div>

        
    </div>
    <div style={{margin:'900px 0px 0px 0px'}}><SubFooter/></div>  
    </div>
  )
}